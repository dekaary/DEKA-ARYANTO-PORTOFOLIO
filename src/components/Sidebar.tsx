import React from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  GraduationCap, 
  Film, 
  Users, 
  Briefcase, 
  Award, 
  Mail, 
  Settings, 
  Globe, 
  Download, 
  Upload, 
  RotateCcw,
  Languages
} from 'lucide-react';
import { PortfolioData } from '../types';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  lang: 'id' | 'en';
  setLang: (lang: 'id' | 'en') => void;
  isEditMode: boolean;
  setIsEditMode: (val: boolean) => void;
  onExport: () => void;
  onImport: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  isEmbed?: boolean;
  onOpenGoogleSitesModal?: () => void;
  portfolioData: PortfolioData;
  setPortfolioData: React.Dispatch<React.SetStateAction<PortfolioData>>;
}

export default function Sidebar({
  activeTab,
  setActiveTab,
  lang,
  setLang,
  isEditMode,
  setIsEditMode,
  onExport,
  onImport,
  onReset,
  isEmbed = false,
  onOpenGoogleSitesModal,
  portfolioData,
  setPortfolioData
}: SidebarProps) {

  const menuItems = [
    { id: 'about', labelId: 'Tentang Saya', labelEn: 'About Me', icon: User },
    { id: 'education', labelId: 'Pendidikan', labelEn: 'Education', icon: GraduationCap },
    { id: 'filmografi', labelId: 'Filmografi', labelEn: 'Filmography', icon: Film },
    { id: 'organization', labelId: 'Organisasi', labelEn: 'Organization', icon: Users },
    { id: 'professional', labelId: 'Pengalaman Kerja dan Project', labelEn: 'Work Experience & Projects', icon: Briefcase },
    { id: 'goals', labelId: 'Aktivitas', labelEn: 'Activities', icon: Award },
    { id: 'contact', labelId: 'Hubungi Saya', labelEn: 'Contact Me', icon: Mail },
  ];

  return (
    <aside className="w-full lg:w-64 bg-[#050505] border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col shrink-0 lg:h-screen lg:sticky lg:top-0 z-40">
      {/* Brand Header */}
      <div className="p-6 border-b border-white/5 flex items-start justify-between">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
            <span className="text-[9px] tracking-[0.25em] font-bold text-white/40 uppercase">PORTOFOLIO</span>
          </div>
          <h1 className="font-bold text-[#F0F0F0] uppercase tracking-widest leading-none custom-sidebar-headline">
            {isEditMode ? (
              <input
                type="text"
                value={portfolioData.name}
                onChange={(e) => {
                  const val = e.target.value;
                  setPortfolioData(prev => ({ ...prev, name: val }));
                }}
                className="w-full bg-neutral-900 border border-white/10 text-white text-xs font-sans px-1.5 py-0.5 rounded focus:outline-none focus:border-blue-500 uppercase font-bold"
                placeholder={lang === 'id' ? 'Nama Lengkap' : 'Full Name'}
              />
            ) : (
              portfolioData.name
            )}
          </h1>
          {isEditMode ? (
            <div className="space-y-1.5 mt-1.5">
              <input
                type="text"
                value={lang === 'id' ? portfolioData.program.id : portfolioData.program.en}
                onChange={(e) => {
                  const val = e.target.value;
                  setPortfolioData(prev => ({
                    ...prev,
                    program: {
                      ...prev.program,
                      [lang]: val
                    }
                  }));
                }}
                className="w-full bg-neutral-900 border border-white/10 text-white text-[9px] font-mono px-1.5 py-0.5 rounded focus:outline-none focus:border-blue-500 uppercase"
                placeholder={lang === 'id' ? 'Program Studi' : 'Program Study'}
              />
              <input
                type="text"
                value={lang === 'id' ? portfolioData.university.id : portfolioData.university.en}
                onChange={(e) => {
                  const val = e.target.value;
                  setPortfolioData(prev => ({
                    ...prev,
                    university: {
                      ...prev.university,
                      [lang]: val
                    }
                  }));
                }}
                className="w-full bg-neutral-900 border border-white/10 text-white text-[9px] font-mono px-1.5 py-0.5 rounded focus:outline-none focus:border-blue-500 uppercase"
                placeholder={lang === 'id' ? 'Universitas' : 'University'}
              />
            </div>
          ) : (
            <p className="text-white/40 mt-1 tracking-wider uppercase leading-relaxed custom-sidebar-p">
              {lang === 'id' ? `Mahasiswa ${portfolioData.program.id}` : `${portfolioData.program.en} Student`}
              <br />
              {lang === 'id' ? portfolioData.university.id : portfolioData.university.en}
            </p>
          )}
        </div>
        
        {/* Language Toggle */}
        <button
          onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
          className="flex items-center gap-1 bg-white/5 hover:bg-white/10 border border-white/10 px-2.5 py-1 rounded-full text-[9px] font-mono font-medium text-white/80 transition mt-0.5"
          title="Switch Language"
        >
          <Languages className="w-3 h-3 text-white/50" />
          <span>{lang.toUpperCase()}</span>
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto py-4 px-3 flex lg:flex-col gap-1 items-center lg:items-stretch no-scrollbar border-b lg:border-b-0 border-white/5">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          const label = lang === 'id' ? item.labelId : item.labelEn;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative flex items-center gap-3 px-4 py-3 rounded text-xs font-medium transition duration-200 uppercase tracking-widest text-left shrink-0 w-auto lg:w-full select-none ${
                isActive 
                  ? 'text-white font-bold' 
                  : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-white/5 border-l border-white rounded z-0 custom-indicator"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <Icon className="w-3.5 h-3.5 relative z-10 shrink-0" />
              <span className="relative z-10 hidden lg:inline font-medium text-xs custom-nav-span">
                {label}
              </span>
              <span className="relative z-10 lg:hidden text-2xs px-1">
                {label}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
