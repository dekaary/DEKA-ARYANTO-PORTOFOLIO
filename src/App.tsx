import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Sidebar from './components/Sidebar';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import FilmographySection from './components/FilmographySection';
import OrganizationSection from './components/OrganizationSection';
import ProfessionalSection from './components/ProfessionalSection';
import GoalsSection from './components/GoalsSection';
import ContactSection from './components/ContactSection';
import EditorModal from './components/EditorModal';
import GoogleSitesModal from './components/GoogleSitesModal';
import { initialPortfolioData } from './defaultData';
import { PortfolioData } from './types';
import { safeLocalStorage } from './lib/storage';

// Helper to read query/hash parameters safely
const getParam = (name: string): string | null => {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    let val = urlParams.get(name);
    if (!val && window.location.hash) {
      const hashStr = window.location.hash.substring(1);
      const hashParams = new URLSearchParams(hashStr);
      val = hashParams.get(name);
    }
    return val;
  } catch (e) {
    return null;
  }
};

// UTF-8 Base64 decoder supporting special characters
const decodePortfolioData = (base64: string): PortfolioData | null => {
  try {
    const decodedBase64 = decodeURIComponent(base64);
    const binary = atob(decodedBase64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    const jsonStr = new TextDecoder().decode(bytes);
    const parsed = JSON.parse(jsonStr);
    if (parsed && typeof parsed === 'object' && parsed.name && parsed.nickname) {
      return parsed as PortfolioData;
    }
  } catch (e) {
    // Retry fallback to standard atob without decodeURIComponent
    try {
      const binary = atob(base64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }
      const jsonStr = new TextDecoder().decode(bytes);
      const parsed = JSON.parse(jsonStr);
      if (parsed && typeof parsed === 'object' && parsed.name && parsed.nickname) {
        return parsed as PortfolioData;
      }
    } catch (err) {
      console.error("Failed to decode base64 portfolio data:", err);
    }
  }
  return null;
};

export default function App() {
  const [lang, setLang] = useState<'id' | 'en'>('id');
  const [activeTab, setActiveTab] = useState<string>('about');
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(initialPortfolioData);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'education' | 'film' | 'organization' | 'professional' | 'goal' | 'contact'>('education');
  const [activeItem, setActiveItem] = useState<any>(null);

  // Google Sites Integration States
  const [isGoogleSitesOpen, setIsGoogleSitesOpen] = useState(false);
  const [isEmbed, setIsEmbed] = useState(false);

  // Load from URL (priority) or safeLocalStorage (fallback)
  useEffect(() => {
    const configParam = getParam('config');
    const srcParam = getParam('src');
    const embedParam = getParam('embed');

    if (embedParam === 'true') {
      setIsEmbed(true);
    }

    if (configParam) {
      const decoded = decodePortfolioData(configParam);
      if (decoded) {
        setPortfolioData(decoded);
        return; // Skip loading local storage
      }
    }

    if (srcParam) {
      fetch(srcParam)
        .then(res => {
          if (!res.ok) throw new Error("HTTP error " + res.status);
          return res.json();
        })
        .then(parsed => {
          if (parsed && typeof parsed === 'object' && parsed.name && parsed.nickname) {
            setPortfolioData(parsed);
          }
        })
        .catch(err => {
          console.error("Failed to fetch external configuration from:", srcParam, err);
        });
      return; // Skip loading local storage
    }

    // Fallback: Safe Local Storage
    const saved = safeLocalStorage.getItem('deka_portfolio_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as PortfolioData;
        if (parsed) {
          // Always use the latest education, film, contacts, and professional experiences lists
          parsed.education = initialPortfolioData.education;
          parsed.films = initialPortfolioData.films;
          parsed.contacts = initialPortfolioData.contacts;
          parsed.professionalExperiences = initialPortfolioData.professionalExperiences;
          
          if (Array.isArray(parsed.skills)) {
            const nonTools = parsed.skills.filter(s => s.type !== 'tool');
            const defaultTools = initialPortfolioData.skills.filter(s => s.type === 'tool');
            parsed.skills = [...nonTools, ...defaultTools];
          }
          if (parsed.profileImageUrl === "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" || !parsed.profileImageUrl) {
            parsed.profileImageUrl = "/src/assets/images/regenerated_image_1784225126180.png";
          }
        }
        setPortfolioData(parsed);
      } catch (e) {
        console.error("Failed to parse saved portfolio data", e);
      }
    }
  }, []);

  // Autosave changes to localStorage (only if not in embed mode)
  useEffect(() => {
    if (!isEmbed && portfolioData !== initialPortfolioData) {
      safeLocalStorage.setItem('deka_portfolio_data', JSON.stringify(portfolioData));
    }
  }, [portfolioData, isEmbed]);

  // Show auto-dismiss notifications
  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  // Save PortfolioData and write to LocalStorage
  const handleSaveData = (updatedData: PortfolioData) => {
    setPortfolioData(updatedData);
    if (!isEmbed) {
      safeLocalStorage.setItem('deka_portfolio_data', JSON.stringify(updatedData));
    }
    showNotification(lang === 'id' ? 'Perubahan berhasil disimpan!' : 'Changes saved successfully!');
  };

  // Reset to original data
  const handleResetData = () => {
    if (confirm(lang === 'id' ? 'Apakah Anda yakin ingin mengembalikan semua data ke setelan pabrik? Ini akan menghapus semua kustomisasi Anda.' : 'Are you sure you want to reset all data? This will clear all your custom edits.')) {
      setPortfolioData(initialPortfolioData);
      safeLocalStorage.removeItem('deka_portfolio_data');
      showNotification(lang === 'id' ? 'Data berhasil direset!' : 'Portfolio data has been reset!');
    }
  };

  // Export Data to JSON file
  const handleExportData = () => {
    try {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(portfolioData, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `portfolio_deka_aryanto.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showNotification(lang === 'id' ? 'Data berhasil diekspor!' : 'Data exported successfully!');
    } catch (e) {
      showNotification(lang === 'id' ? 'Gagal mengekspor data.' : 'Failed to export data.', 'error');
    }
  };

  // Import Data from JSON file
  const handleImportData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.name && parsed.nickname && Array.isArray(parsed.skills)) {
          setPortfolioData(parsed);
          if (!isEmbed) {
            safeLocalStorage.setItem('deka_portfolio_data', JSON.stringify(parsed));
          }
          showNotification(lang === 'id' ? 'Data berhasil diimpor!' : 'Data imported successfully!');
        } else {
          showNotification(lang === 'id' ? 'Format JSON tidak valid!' : 'Invalid JSON format!', 'error');
        }
      } catch (err) {
        showNotification(lang === 'id' ? 'Gagal membaca berkas JSON.' : 'Failed to parse JSON file.', 'error');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // Add/Edit trigger handlers
  const handleAddItemTrigger = (type: 'education' | 'film' | 'organization' | 'professional' | 'goal' | 'contact') => {
    setModalType(type);
    setActiveItem(null); // adding means no pre-existing item
    setIsModalOpen(true);
  };

  const handleEditItemTrigger = (type: 'education' | 'film' | 'organization' | 'professional' | 'goal' | 'contact', item: any) => {
    setModalType(type);
    setActiveItem(item);
    setIsModalOpen(true);
  };

  // Save handler inside modal
  const handleModalSave = (savedItem: any) => {
    const fieldMapping: Record<string, keyof PortfolioData> = {
      education: 'education',
      film: 'films',
      organization: 'organizations',
      professional: 'professionalExperiences',
      goal: 'goals',
      contact: 'contacts'
    };

    const dataField = fieldMapping[modalType];
    if (!dataField) return;

    const list = portfolioData[dataField] as any[];
    const exists = list.some(item => item.id === savedItem.id);

    let updatedList;
    if (exists) {
      // Edit
      updatedList = list.map(item => item.id === savedItem.id ? savedItem : item);
    } else {
      // Add new
      updatedList = [...list, savedItem];
    }

    const updatedData = {
      ...portfolioData,
      [dataField]: updatedList
    };

    handleSaveData(updatedData);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-200 flex flex-col lg:flex-row relative grain-overlay select-none font-sans">
      {/* Sidebar Nav */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lang={lang}
        setLang={setLang}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        onExport={handleExportData}
        onImport={handleImportData}
        onReset={handleResetData}
        isEmbed={isEmbed}
        onOpenGoogleSitesModal={() => setIsGoogleSitesOpen(true)}
        portfolioData={portfolioData}
        setPortfolioData={setPortfolioData}
      />

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 p-6 md:p-10 lg:p-16 relative flex flex-col justify-between max-w-5xl mx-auto w-full">
        {/* Active Content Section */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10, filter: 'blur(3px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(3px)' }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="py-2"
            >
              {activeTab === 'about' && (
                <AboutSection
                  data={portfolioData}
                  setData={setPortfolioData}
                  lang={lang}
                  isEditMode={isEditMode}
                />
              )}

              {activeTab === 'education' && (
                <EducationSection
                  data={portfolioData}
                  setData={setPortfolioData}
                  lang={lang}
                  isEditMode={isEditMode}
                  onEditItem={handleEditItemTrigger}
                  onAddItem={handleAddItemTrigger}
                />
              )}

              {activeTab === 'filmografi' && (
                <FilmographySection
                  data={portfolioData}
                  setData={setPortfolioData}
                  lang={lang}
                  isEditMode={isEditMode}
                  onEditItem={handleEditItemTrigger}
                  onAddItem={handleAddItemTrigger}
                />
              )}

              {activeTab === 'organization' && (
                <OrganizationSection
                  data={portfolioData}
                  setData={setPortfolioData}
                  lang={lang}
                  isEditMode={isEditMode}
                  onEditItem={handleEditItemTrigger}
                  onAddItem={handleAddItemTrigger}
                />
              )}

              {activeTab === 'professional' && (
                <ProfessionalSection
                  data={portfolioData}
                  setData={setPortfolioData}
                  lang={lang}
                  isEditMode={isEditMode}
                  onEditItem={handleEditItemTrigger}
                  onAddItem={handleAddItemTrigger}
                />
              )}

              {activeTab === 'goals' && (
                <GoalsSection
                  data={portfolioData}
                  setData={setPortfolioData}
                  lang={lang}
                  isEditMode={isEditMode}
                  onEditItem={handleEditItemTrigger}
                  onAddItem={handleAddItemTrigger}
                />
              )}

              {activeTab === 'contact' && (
                <ContactSection
                  data={portfolioData}
                  setData={setPortfolioData}
                  lang={lang}
                  isEditMode={isEditMode}
                  onAddItem={handleAddItemTrigger}
                  onEditItem={handleEditItemTrigger}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dynamic Footer */}
        <footer className="mt-16 pt-6 border-t border-neutral-900 flex justify-center text-2xs font-mono text-neutral-600 uppercase tracking-widest">
          <span>PORTOFOLIO. DEKA ARYANTO</span>
        </footer>
      </main>

      {/* Editor Modal Overlay */}
      <EditorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={modalType}
        item={activeItem}
        onSave={handleModalSave}
        lang={lang}
      />

      {/* Google Sites Modal */}
      <GoogleSitesModal
        isOpen={isGoogleSitesOpen}
        onClose={() => setIsGoogleSitesOpen(false)}
        portfolioData={portfolioData}
        onRestore={(restoredData) => {
          setPortfolioData(restoredData);
          if (!isEmbed) {
            safeLocalStorage.setItem('deka_portfolio_data', JSON.stringify(restoredData));
          }
        }}
        lang={lang}
      />

      {/* Toast Notification HUD */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-neutral-950 border border-neutral-800 rounded px-5 py-3 shadow-2xl flex items-center gap-3"
          >
            <div className={`w-2 h-2 rounded-full ${notification.type === 'success' ? 'bg-white' : 'bg-red-500'}`} />
            <span className="text-xs font-mono uppercase text-white tracking-wider">
              {notification.message}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
