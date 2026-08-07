import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Upload, Film, Award, Briefcase, GraduationCap, Users, Trash2, Plus, Image as ImageIcon, Link as LinkIcon } from 'lucide-react';
import { Education, Film as FilmType, Organization, ProfessionalExperience, Goal, ContactInfo } from '../types';

interface EditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'education' | 'film' | 'organization' | 'professional' | 'goal' | 'contact';
  item: any; // The item being edited, or null if adding new
  onSave: (savedItem: any) => void;
  lang: 'id' | 'en';
}

// Helper to convert a Google Drive image link into a direct renderable image url
const getGoogleDriveDirectImageUrl = (url: string) => {
  if (!url) return '';
  try {
    if (url.includes('drive.google.com')) {
      const fileMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
      if (fileMatch && fileMatch[1]) {
        return `https://lh3.googleusercontent.com/d/${fileMatch[1]}`;
      }
      const openMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
      if (openMatch && openMatch[1]) {
        return `https://lh3.googleusercontent.com/d/${openMatch[1]}`;
      }
    }
  } catch (e) {
    console.error(e);
  }
  return url;
};

export default function EditorModal({ isOpen, onClose, type, item, onSave, lang }: EditorModalProps) {
  const [formData, setFormData] = useState<any>({});
  const [activeLangTab, setActiveLangTab] = useState<'id' | 'en'>(lang);
  const [dragActive, setDragActive] = useState(false);

  useEffect(() => {
    if (item) {
      setFormData({ ...item });
    } else {
      // Initialize empty default templates based on type
      const defaultTemplates: Record<string, any> = {
        education: {
          school: { id: '', en: '' },
          major: { id: '', en: '' },
          gpa: '',
          period: { id: '', en: '' },
          description: { id: '', en: '' },
          links: []
        },
        film: {
          title: { id: '', en: '' },
          role: { id: '', en: '' },
          year: '',
          description: { id: '', en: '' },
          imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800',
          youtubeUrl: '',
          driveUrl: '',
          trailerUrl: '',
          btsUrl: '',
          behindTheScenes: [] as string[],
          isFeatured: false
        },
        organization: {
          name: { id: '', en: '' },
          role: { id: '', en: '' },
          place: { id: '', en: '' },
          level: { id: '', en: '' },
          period: { id: '', en: '' },
          activities: { id: '', en: '' },
          responsibilities: { id: '', en: '' },
          proofUrl: '',
          proofUrls: [] as string[],
          proofType: 'image'
        },
        professional: {
          company: { id: '', en: '' },
          role: { id: '', en: '' },
          field: { id: '', en: '' },
          location: { id: '', en: '' },
          period: { id: '', en: '' },
          description: { id: '', en: '' },
          responsibilities: { id: '', en: '' },
          proofUrl: '',
          proofUrls: [] as string[],
          proofPdfUrl: '',
          proofType: 'image'
        },
        goal: {
          title: { id: '', en: '' },
          role: { id: '', en: '' },
          institution: { id: '', en: '' },
          level: { id: '', en: '' },
          period: { id: '', en: '' },
          location: { id: '', en: '' },
          description: { id: '', en: '' },
          fileUrl: '',
          proofUrls: [] as string[],
          proofPdfUrl: '',
          proofType: 'image'
        },
        contact: {
          platform: 'instagram',
          value: '',
          label: ''
        }
      };
      setFormData(defaultTemplates[type] || {});
    }
  }, [item, type, isOpen]);

  if (!isOpen) return null;

  const handleBilingualChange = (field: string, subField: 'id' | 'en', value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: {
        ...(prev[field] || { id: '', en: '' }),
        [subField]: value
      }
    }));
  };

  const handleSimpleChange = (field: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddEduLink = () => {
    setFormData((prev: any) => ({
      ...prev,
      links: [
        ...(prev.links || []),
        {
          label: { id: '', en: '' },
          url: ''
        }
      ]
    }));
  };

  const handleRemoveEduLink = (index: number) => {
    setFormData((prev: any) => ({
      ...prev,
      links: (prev.links || []).filter((_: any, i: number) => i !== index)
    }));
  };

  const handleEduLinkChange = (index: number, field: 'label' | 'url', subField: 'id' | 'en' | null, value: string) => {
    setFormData((prev: any) => {
      const updatedLinks = [...(prev.links || [])];
      if (field === 'label' && subField) {
        updatedLinks[index] = {
          ...updatedLinks[index],
          label: {
            ...(updatedLinks[index].label || { id: '', en: '' }),
            [subField]: value
          }
        };
      } else if (field === 'url') {
        updatedLinks[index] = {
          ...updatedLinks[index],
          url: value
        };
      }
      return {
        ...prev,
        links: updatedLinks
      };
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string = 'proofUrl') => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev: any) => ({
        ...prev,
        [fieldName]: reader.result as string,
        proofType: file.type.includes('pdf') ? 'pdf' : 'image'
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleBTSUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const uploadPromises = Array.from(files).map((file: File) => {
      return new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(uploadPromises).then((results) => {
      setFormData((prev: any) => ({
        ...prev,
        behindTheScenes: [...(prev.behindTheScenes || []), ...results]
      }));
    });
  };

  const removeBTSImage = (index: number) => {
    setFormData((prev: any) => ({
      ...prev,
      behindTheScenes: prev.behindTheScenes.filter((_: any, i: number) => i !== index)
    }));
  };

  const handleProofUrlsUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const uploadPromises = Array.from(files).map((file: File) => {
      return new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(uploadPromises).then((results) => {
      setFormData((prev: any) => ({
        ...prev,
        proofUrls: [...(prev.proofUrls || []), ...results]
      }));
    });
  };

  const removeProofUrlsImage = (index: number) => {
    setFormData((prev: any) => ({
      ...prev,
      proofUrls: (prev.proofUrls || []).filter((_: any, i: number) => i !== index)
    }));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent, fieldName: string = 'proofUrl') => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev: any) => ({
          ...prev,
          [fieldName]: reader.result as string,
          proofType: file.type.includes('pdf') ? 'pdf' : 'image'
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Inject auto-generated ID if adding new
    const finalizedData = {
      ...formData,
      id: formData.id || `${type}_${Date.now()}`
    };
    onSave(finalizedData);
  };

  const renderLanguageTabs = () => {
    return (
      <div className="flex border-b border-neutral-800 mb-6">
        <button
          type="button"
          onClick={() => setActiveLangTab('id')}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeLangTab === 'id'
              ? 'border-white text-white'
              : 'border-transparent text-neutral-500 hover:text-neutral-300'
          }`}
        >
          Bahasa Indonesia
        </button>
        <button
          type="button"
          onClick={() => setActiveLangTab('en')}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeLangTab === 'en'
              ? 'border-white text-white'
              : 'border-transparent text-neutral-500 hover:text-neutral-300'
          }`}
        >
          English
        </button>
      </div>
    );
  };

  const inputClass = "w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition font-sans text-sm";
  const labelClass = "block text-xs font-medium text-neutral-400 mb-1.5 uppercase tracking-wider";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative bg-neutral-950 border border-neutral-800 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl z-10"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-950">
            <div className="flex items-center gap-3">
              {type === 'education' && <GraduationCap className="w-5 h-5 text-neutral-400" />}
              {type === 'film' && <Film className="w-5 h-5 text-neutral-400" />}
              {type === 'organization' && <Users className="w-5 h-5 text-neutral-400" />}
              {type === 'professional' && <Briefcase className="w-5 h-5 text-neutral-400" />}
              {type === 'goal' && <Award className="w-5 h-5 text-neutral-400" />}
              <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                {item ? (lang === 'id' ? 'Ubah Data' : 'Edit Entry') : (lang === 'id' ? 'Tambah Baru' : 'Add New Entry')}
                <span className="text-xs text-neutral-500 font-normal ml-2 lowercase">
                  ({type === 'goal' ? (lang === 'id' ? 'aktivitas' : 'activity') : type})
                </span>
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-white transition p-1 rounded-full hover:bg-neutral-900"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Bilingual tabs wrapper if not contact */}
            {type !== 'contact' && renderLanguageTabs()}

            {/* Render fields depending on type */}
            {type === 'education' && formData.school && (
              <div className="space-y-4">
                {/* School (Bilingual) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Nama Institusi/Sekolah' : 'Institution/School Name'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.school[activeLangTab] || ''}
                    onChange={(e) => handleBilingualChange('school', activeLangTab, e.target.value)}
                    placeholder={activeLangTab === 'id' ? 'Contoh: Universitas Widyatama' : 'e.g. Universitas Widyatama'}
                    className={inputClass}
                  />
                </div>

                {/* Major (Bilingual) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Jurusan/Program Studi' : 'Major/Program of Study'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.major[activeLangTab] || ''}
                    onChange={(e) => handleBilingualChange('major', activeLangTab, e.target.value)}
                    placeholder={activeLangTab === 'id' ? 'Contoh: S1 Produksi Film dan Televisi' : 'e.g. Bachelor of Film Production'}
                    className={inputClass}
                  />
                </div>

                {/* Simple fields side-by-side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>
                      {activeLangTab === 'id' ? 'Nilai Rata-rata / IPK' : 'GPA / Average Grade'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.gpa || ''}
                      onChange={(e) => handleSimpleChange('gpa', e.target.value)}
                      placeholder="e.g. 3.85 or 85/100"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      {activeLangTab === 'id' ? 'Masa Studi (Bulan & Tahun)' : 'Period (Month & Year)'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.period[activeLangTab] || ''}
                      onChange={(e) => handleBilingualChange('period', activeLangTab, e.target.value)}
                      placeholder={activeLangTab === 'id' ? 'Contoh: Agustus 2023 - Sekarang' : 'e.g. August 2023 - Present'}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Description (Bilingual) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Deskripsi Kegiatan / Pencapaian' : 'Description of Activities / Achievements'}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.description[activeLangTab] || ''}
                    onChange={(e) => handleBilingualChange('description', activeLangTab, e.target.value)}
                    placeholder={activeLangTab === 'id' ? 'Tuliskan organisasi, kepemimpinan, atau proyek film di kampus...' : 'Describe campus activities, film projects led, BEM involvements...'}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Supporting Documents (Links) */}
                <div className="space-y-3 pt-4 border-t border-neutral-800">
                  <div className="flex items-center justify-between">
                    <label className={`${labelClass} mb-0`}>
                      {activeLangTab === 'id' ? 'Dokumen Pendukung (Tautan Google Drive, dll)' : 'Supporting Documents (Google Drive Links, etc)'}
                    </label>
                    <button
                      type="button"
                      onClick={handleAddEduLink}
                      className="flex items-center gap-1 text-[10px] bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded transition uppercase tracking-wider font-bold animate-pulse hover:animate-none"
                    >
                      <Plus className="w-3 h-3" />
                      <span>{activeLangTab === 'id' ? 'Tambah Tautan' : 'Add Link'}</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {(!formData.links || formData.links.length === 0) ? (
                      <div className="text-[11px] text-neutral-500 italic">
                        {activeLangTab === 'id' ? 'Belum ada dokumen pendukung yang ditambahkan.' : 'No supporting documents added yet.'}
                      </div>
                    ) : (
                      formData.links.map((link: any, idx: number) => (
                        <div key={idx} className="bg-neutral-900/40 p-3 rounded border border-neutral-800/60 space-y-2 relative group">
                          <button
                            type="button"
                            onClick={() => handleRemoveEduLink(idx)}
                            className="absolute top-2 right-2 p-1 text-neutral-500 hover:text-red-400 hover:bg-neutral-800 rounded transition"
                            title={activeLangTab === 'id' ? 'Hapus' : 'Remove'}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pr-8">
                            <div>
                              <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                                {activeLangTab === 'id' ? 'Nama Dokumen (ID)' : 'Document Name (ID)'}
                              </label>
                              <input
                                type="text"
                                required
                                value={link.label?.id || ''}
                                onChange={(e) => handleEduLinkChange(idx, 'label', 'id', e.target.value)}
                                placeholder="Contoh: Transkrip Nilai"
                                className={inputClass}
                              />
                            </div>
                            <div>
                              <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                                {activeLangTab === 'id' ? 'Nama Dokumen (EN)' : 'Document Name (EN)'}
                              </label>
                              <input
                                type="text"
                                required
                                value={link.label?.en || ''}
                                onChange={(e) => handleEduLinkChange(idx, 'label', 'en', e.target.value)}
                                placeholder="e.g. Academic Transcript"
                                className={inputClass}
                              />
                            </div>
                          </div>

                          <div className="pr-8">
                            <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                              {activeLangTab === 'id' ? 'Tautan URL (Google Drive)' : 'URL Link (Google Drive)'}
                            </label>
                            <input
                              type="url"
                              required
                              value={link.url || ''}
                              onChange={(e) => handleEduLinkChange(idx, 'url', null, e.target.value)}
                              placeholder="https://drive.google.com/..."
                              className={inputClass}
                            />
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}

            {type === 'film' && formData.title && (
              <div className="space-y-4">
                {/* Title (Bilingual) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Judul Film' : 'Film Title'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title[activeLangTab] || ''}
                    onChange={(e) => handleBilingualChange('title', activeLangTab, e.target.value)}
                    placeholder={activeLangTab === 'id' ? 'Contoh: Gema Sunyi' : 'e.g. Silent Echoes'}
                    className={inputClass}
                  />
                </div>

                {/* Jobdesk/Role (Bilingual) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Jobdesk / Peran Utama' : 'Jobdesk / Main Role'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.role[activeLangTab] || ''}
                    onChange={(e) => handleBilingualChange('role', activeLangTab, e.target.value)}
                    placeholder={activeLangTab === 'id' ? 'Contoh: Sutradara, Produser, Script Writer' : 'e.g. Producer, Scriptwriter'}
                    className={inputClass}
                  />
                </div>

                {/* Production Year (Simple) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Tahun Produksi' : 'Production Year'}
                  </label>
                  <input
                    type="text"
                    value={formData.year || ''}
                    onChange={(e) => handleSimpleChange('year', e.target.value)}
                    placeholder={activeLangTab === 'id' ? 'Contoh: 2026' : 'e.g. 2026'}
                    className={inputClass}
                  />
                </div>

                {/* Description (Bilingual) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Deskripsi Film' : 'Film Description'}
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.description[activeLangTab] || ''}
                    onChange={(e) => handleBilingualChange('description', activeLangTab, e.target.value)}
                    placeholder={activeLangTab === 'id' ? 'Tulis sinopsis singkat atau detail produksi...' : 'Write brief synopsis or production details...'}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Featured selection */}
                <div className="flex items-center gap-3 bg-neutral-900/50 border border-neutral-800 p-3 rounded">
                  <input
                    type="checkbox"
                    id="isFeatured"
                    checked={formData.isFeatured || false}
                    onChange={(e) => handleSimpleChange('isFeatured', e.target.checked)}
                    className="w-4 h-4 rounded text-black bg-neutral-900 border-neutral-800 focus:ring-0 focus:ring-offset-0 cursor-pointer"
                  />
                  <label htmlFor="isFeatured" className="text-xs font-semibold text-neutral-300 uppercase tracking-wider cursor-pointer select-none">
                    {activeLangTab === 'id' ? 'Tampilkan Sebagai 3 Karya Terbaik (Featured)' : 'Showcase as Top 3 Best Works (Featured)'}
                  </label>
                </div>

                {/* Image and URLs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>
                      {activeLangTab === 'id' ? 'Foto Cover Film (URL atau Upload)' : 'Film Cover Photo (URL or Upload)'}
                    </label>
                    <input
                      type="text"
                      value={formData.imageUrl || ''}
                      onChange={(e) => handleSimpleChange('imageUrl', e.target.value)}
                      placeholder="https://images.unsplash.com/... or upload"
                      className={`${inputClass} mb-2`}
                    />
                    <div className="flex items-center gap-2">
                      <label className="cursor-pointer bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 px-3 py-1.5 rounded text-xs font-medium text-white flex items-center gap-1.5 transition">
                        <Upload className="w-3.5 h-3.5" />
                        <span>Upload File</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileUpload(e, 'imageUrl')}
                          className="hidden"
                        />
                      </label>
                      <span className="text-neutral-500 text-2xs truncate max-w-[150px]">
                        {formData.imageUrl?.startsWith('data:') ? 'Custom uploaded file' : 'Default/Custom URL'}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className={labelClass}>YouTube Video URL</label>
                      <input
                        type="url"
                        value={formData.youtubeUrl || ''}
                        onChange={(e) => handleSimpleChange('youtubeUrl', e.target.value)}
                        placeholder="https://youtube.com/watch?v=..."
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Google Drive / Portfolio Link</label>
                      <input
                        type="url"
                        value={formData.driveUrl || ''}
                        onChange={(e) => handleSimpleChange('driveUrl', e.target.value)}
                        placeholder="https://drive.google.com/..."
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Film Trailer URL (e.g. Google Drive)</label>
                      <input
                        type="url"
                        value={formData.trailerUrl || ''}
                        onChange={(e) => handleSimpleChange('trailerUrl', e.target.value)}
                        placeholder="https://drive.google.com/..."
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Behind the Scenes Folder URL (e.g. Google Drive)</label>
                      <input
                        type="url"
                        value={formData.btsUrl || ''}
                        onChange={(e) => handleSimpleChange('btsUrl', e.target.value)}
                        placeholder="https://drive.google.com/..."
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* Behind the Scenes uploads */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Foto Behind The Scenes (BTS)' : 'Behind The Scenes (BTS) Photos'}
                  </label>
                  <div className="flex items-center gap-2 mb-3">
                    <label className="cursor-pointer bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 px-4 py-2 rounded text-xs font-medium text-white flex items-center gap-1.5 transition">
                      <Plus className="w-4 h-4" />
                      <span>{activeLangTab === 'id' ? 'Tambah Foto BTS' : 'Add BTS Photos'}</span>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleBTSUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {formData.behindTheScenes && formData.behindTheScenes.length > 0 && (
                    <div className="grid grid-cols-4 gap-2 border border-neutral-800 p-2 rounded bg-neutral-900/30">
                      {formData.behindTheScenes.map((img: string, i: number) => (
                        <div key={i} className="relative aspect-video bg-neutral-900 rounded overflow-hidden group">
                          <img src={getGoogleDriveDirectImageUrl(img)} alt={`BTS ${i}`} className="w-full h-full object-cover" />
                          <button
                            type="button"
                            onClick={() => removeBTSImage(i)}
                            className="absolute top-1 right-1 bg-black/80 hover:bg-red-950 text-neutral-400 hover:text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition duration-150"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {type === 'organization' && formData.name && (
              <div className="space-y-4">
                {/* Organization Name (Bilingual) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Nama Organisasi' : 'Organization Name'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name[activeLangTab] || ''}
                    onChange={(e) => handleBilingualChange('name', activeLangTab, e.target.value)}
                    placeholder={activeLangTab === 'id' ? 'Contoh: Badan Eksekutif Mahasiswa FISIP' : 'e.g. Student Executive Board'}
                    className={inputClass}
                  />
                </div>

                {/* Role / Jabatan (Bilingual) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Jabatan / Posisi' : 'Job Title / Position'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.role ? (formData.role[activeLangTab] || '') : ''}
                    onChange={(e) => handleBilingualChange('role', activeLangTab, e.target.value)}
                    placeholder={activeLangTab === 'id' ? 'Contoh: Ketua Umum' : 'e.g. President / Chairman'}
                    className={inputClass}
                  />
                </div>

                {/* Place / Tempat (Bilingual) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Tempat / Institusi' : 'Place / Institution'}
                  </label>
                  <input
                    type="text"
                    value={formData.place ? (formData.place[activeLangTab] || '') : ''}
                    onChange={(e) => handleBilingualChange('place', activeLangTab, e.target.value)}
                    placeholder={activeLangTab === 'id' ? 'Contoh: Universitas Widyatama' : 'e.g. Widyatama University'}
                    className={inputClass}
                  />
                </div>

                {/* Level (Bilingual) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Tingkat Organisasi' : 'Organization Level'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.level[activeLangTab] || ''}
                    onChange={(e) => handleBilingualChange('level', activeLangTab, e.target.value)}
                    placeholder={activeLangTab === 'id' ? 'Contoh: Fakultas, Regional, Internal SMA' : 'e.g. Faculty, Regional, High School'}
                    className={inputClass}
                  />
                </div>

                {/* Masa Bakti (Bilingual) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Masa Bakti (Tahun / Periode)' : 'Service Period (Years / Period)'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.period[activeLangTab] || ''}
                    onChange={(e) => handleBilingualChange('period', activeLangTab, e.target.value)}
                    placeholder={activeLangTab === 'id' ? 'Contoh: 2025 - 2026' : 'e.g. 2025 - 2026'}
                    className={inputClass}
                  />
                </div>

                {/* Activities (Bilingual) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Deskripsi Program Kerja & Kegiatan' : 'Work Programs & Activities'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.activities[activeLangTab] || ''}
                    onChange={(e) => handleBilingualChange('activities', activeLangTab, e.target.value)}
                    placeholder={activeLangTab === 'id' ? 'Tuliskan daftar program kerja...' : 'Describe work programs...'}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Responsibilities (Bilingual) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Tanggung Jawab' : 'Responsibilities'}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.responsibilities ? (formData.responsibilities[activeLangTab] || '') : ''}
                    onChange={(e) => handleBilingualChange('responsibilities', activeLangTab, e.target.value)}
                    placeholder={activeLangTab === 'id' ? 'Tuliskan tanggung jawab komando dan eksekusi...' : 'Describe leadership and operational responsibilities...'}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Slide Photo Uploads (Multiple Photos) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Slide Foto Kegiatan (Unggah Banyak Foto)' : 'Activity Photos Slideshow (Upload Multiple)'}
                  </label>
                  <div className="flex items-center gap-2 mb-3">
                    <label className="cursor-pointer bg-[#151515] hover:bg-neutral-800 border border-neutral-800 px-4 py-2 rounded text-xs font-medium text-white flex items-center gap-1.5 transition">
                      <Plus className="w-4 h-4" />
                      <span>{activeLangTab === 'id' ? 'Tambah Foto Slide' : 'Add Slideshow Photo'}</span>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleProofUrlsUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {formData.proofUrls && formData.proofUrls.length > 0 && (
                    <div className="grid grid-cols-4 gap-2 border border-neutral-800 p-2 rounded bg-neutral-900/30">
                      {formData.proofUrls.map((img: string, i: number) => (
                        <div key={i} className="relative aspect-video bg-neutral-900 rounded overflow-hidden group">
                          <img src={img} alt={`Slide ${i}`} className="w-full h-full object-cover" />
                          <button
                            type="button"
                            onClick={() => removeProofUrlsImage(i)}
                            className="absolute top-1 right-1 bg-black/80 hover:bg-red-950 text-neutral-400 hover:text-white p-1 rounded-full opacity-100 transition duration-150"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Single proof file for backwards compatibility */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Sertifikat Utama / Bukti Tunggal (PDF/Gambar)' : 'Main Certificate / Single Proof (PDF/Image)'}
                  </label>
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`border border-dashed rounded p-6 flex flex-col items-center justify-center cursor-pointer transition ${
                      dragActive ? 'border-white bg-neutral-900/50' : 'border-neutral-800 bg-neutral-900/20 hover:border-neutral-700'
                    }`}
                  >
                    <input
                      type="file"
                      accept="image/*,application/pdf"
                      onChange={(e) => handleFileUpload(e)}
                      className="hidden"
                      id="orgProofFile"
                    />
                    <label htmlFor="orgProofFile" className="cursor-pointer text-center flex flex-col items-center">
                      {formData.proofUrl ? (
                        <div className="flex flex-col items-center gap-2">
                          {formData.proofType === 'pdf' ? (
                            <div className="w-10 h-10 rounded bg-red-900/30 flex items-center justify-center border border-red-800 text-red-300 font-bold text-xs uppercase">PDF</div>
                          ) : (
                            <img src={formData.proofUrl} alt="Uploaded Proof" className="max-h-24 object-contain rounded border border-neutral-800 mb-2" />
                          )}
                          <span className="text-xs text-neutral-400 font-medium">
                            {activeLangTab === 'id' ? 'Klik atau Seret untuk mengganti file' : 'Click or Drag to replace file'}
                          </span>
                        </div>
                      ) : (
                        <>
                          <Upload className="w-8 h-8 text-neutral-500 mb-2" />
                          <span className="text-xs text-neutral-400 font-medium mb-1">
                            {activeLangTab === 'id' ? 'Seret berkas ke sini atau Klik untuk memilih berkas' : 'Drag file here or Click to select file'}
                          </span>
                          <span className="text-neutral-600 text-2xs">PDF, JPG, PNG (Max 5MB)</span>
                        </>
                      )}
                    </label>
                  </div>
                </div>
              </div>
            )}

            {type === 'professional' && formData.company && (
              <div className="space-y-4">
                {/* Company Name (Bilingual) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Nama Perusahaan' : 'Company Name'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company[activeLangTab] || ''}
                    onChange={(e) => handleBilingualChange('company', activeLangTab, e.target.value)}
                    placeholder={activeLangTab === 'id' ? 'Contoh: Notaris/PPAT Nani Kostini S.H., M.Kn.' : 'e.g. Notary Public Nani Kostini'}
                    className={inputClass}
                  />
                </div>

                {/* Role / Jabatan (Bilingual) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Jabatan / Posisi' : 'Job Title / Position'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.role ? (formData.role[activeLangTab] || '') : ''}
                    onChange={(e) => handleBilingualChange('role', activeLangTab, e.target.value)}
                    placeholder={activeLangTab === 'id' ? 'Contoh: Staff Administrasi dan Lapangan' : 'e.g. Administrative & Field Staff'}
                    className={inputClass}
                  />
                </div>

                {/* Field of work (Bilingual) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Bidang Pekerjaan' : 'Field of Work'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.field[activeLangTab] || ''}
                    onChange={(e) => handleBilingualChange('field', activeLangTab, e.target.value)}
                    placeholder={activeLangTab === 'id' ? 'Contoh: Kenotariatan / PPAT' : 'e.g. Notary & Land Deed'}
                    className={inputClass}
                  />
                </div>

                {/* Location / Lokasi (Bilingual) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Lokasi' : 'Location'}
                  </label>
                  <input
                    type="text"
                    value={formData.location ? (formData.location[activeLangTab] || '') : ''}
                    onChange={(e) => handleBilingualChange('location', activeLangTab, e.target.value)}
                    placeholder={activeLangTab === 'id' ? 'Contoh: Kabupaten Purwakarta' : 'e.g. Purwakarta Regency'}
                    className={inputClass}
                  />
                </div>

                {/* Period (Bilingual) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Masa Kerja / Magang (Bulan & Tahun)' : 'Work / Internship Period (Month & Year)'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.period[activeLangTab] || ''}
                    onChange={(e) => handleBilingualChange('period', activeLangTab, e.target.value)}
                    placeholder={activeLangTab === 'id' ? 'Contoh: Desember 2022 – Agustus 2024' : 'e.g. December 2022 – August 2024'}
                    className={inputClass}
                  />
                </div>

                {/* Job Description (Bilingual) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Deskripsi Pekerjaan' : 'Job Description'}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.description ? (formData.description[activeLangTab] || '') : ''}
                    onChange={(e) => handleBilingualChange('description', activeLangTab, e.target.value)}
                    placeholder={activeLangTab === 'id' ? 'Tuliskan deskripsi pekerjaan secara umum...' : 'Describe overall job roles...'}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Responsibilities (Bilingual) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Tanggung Jawab Utama' : 'Key Responsibilities'}
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.responsibilities ? (formData.responsibilities[activeLangTab] || '') : ''}
                    onChange={(e) => handleBilingualChange('responsibilities', activeLangTab, e.target.value)}
                    placeholder={activeLangTab === 'id' ? 'Tuliskan daftar tanggung jawab utama...' : 'Describe daily workflows and key responsibilities...'}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Slide Photo Uploads (Multiple Photos) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Slide Foto Dokumentasi Kerja (Unggah Banyak Foto)' : 'Work Photos Slideshow (Upload Multiple)'}
                  </label>
                  <div className="flex items-center gap-2 mb-3">
                    <label className="cursor-pointer bg-[#151515] hover:bg-neutral-800 border border-neutral-800 px-4 py-2 rounded text-xs font-medium text-white flex items-center gap-1.5 transition">
                      <Plus className="w-4 h-4" />
                      <span>{activeLangTab === 'id' ? 'Tambah Foto Slide' : 'Add Slideshow Photo'}</span>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleProofUrlsUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {formData.proofUrls && formData.proofUrls.length > 0 && (
                    <div className="grid grid-cols-4 gap-2 border border-neutral-800 p-2 rounded bg-neutral-900/30">
                      {formData.proofUrls.map((img: string, i: number) => (
                        <div key={i} className="relative aspect-video bg-neutral-900 rounded overflow-hidden group">
                          <img src={img} alt={`Slide ${i}`} className="w-full h-full object-cover" />
                          <button
                            type="button"
                            onClick={() => removeProofUrlsImage(i)}
                            className="absolute top-1 right-1 bg-black/80 hover:bg-red-950 text-neutral-400 hover:text-white p-1 rounded-full opacity-100 transition duration-150"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Internship PDF file upload */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Bukti File PDF Magang (Opsional)' : 'Internship PDF Certificate / Proof (Optional)'}
                  </label>
                  <div className="flex items-center gap-2 mb-3">
                    <label className="cursor-pointer bg-[#151515] hover:bg-neutral-800 border border-neutral-800 px-4 py-2 rounded text-xs font-medium text-white flex items-center gap-1.5 transition">
                      <Plus className="w-4 h-4" />
                      <span>{activeLangTab === 'id' ? 'Unggah PDF' : 'Upload PDF'}</span>
                      <input
                        type="file"
                        accept="application/pdf"
                        onChange={(e) => handleFileUpload(e, 'proofPdfUrl')}
                        className="hidden"
                      />
                    </label>
                    {formData.proofPdfUrl && (
                      <button
                        type="button"
                        onClick={() => setFormData((prev: any) => ({ ...prev, proofPdfUrl: '' }))}
                        className="text-red-500 hover:text-red-400 text-xs font-medium flex items-center gap-1 transition"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>{activeLangTab === 'id' ? 'Hapus PDF' : 'Remove PDF'}</span>
                      </button>
                    )}
                  </div>
                  {formData.proofPdfUrl && (
                    <div className="p-3 rounded bg-neutral-900/40 border border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-300">
                      <span className="truncate max-w-[240px]">
                        {formData.proofPdfUrl.startsWith('data:application/pdf') ? 'custom_internship_proof.pdf' : formData.proofPdfUrl}
                      </span>
                      <span className="text-red-500 font-bold uppercase text-2xs">PDF</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {type === 'goal' && formData.title && (
              <div className="space-y-4">
                {/* Title (Bilingual) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Nama Aktivitas / Kegiatan / Sertifikasi' : 'Name of Activity / Event / Certification'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title[activeLangTab] || ''}
                    onChange={(e) => handleBilingualChange('title', activeLangTab, e.target.value)}
                    placeholder={activeLangTab === 'id' ? 'Contoh: Sertifikasi Kompetensi Script Writing' : 'e.g. Best Film Project'}
                    className={inputClass}
                  />
                </div>

                {/* Role/As what (Bilingual) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Peran / Status Aktivitas' : 'Role / Activity Status'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.role[activeLangTab] || ''}
                    onChange={(e) => handleBilingualChange('role', activeLangTab, e.target.value)}
                    placeholder={activeLangTab === 'id' ? 'Contoh: Perancang Skenario Kompeten' : 'e.g. Best Producer / Winner'}
                    className={inputClass}
                  />
                </div>

                {/* Institution (Bilingual) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Nama Instansi Penyelenggara' : 'Hosting Institution / Issuer'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.institution[activeLangTab] || ''}
                    onChange={(e) => handleBilingualChange('institution', activeLangTab, e.target.value)}
                    placeholder={activeLangTab === 'id' ? 'Contoh: BNSP / Festival Film' : 'e.g. West Java Film Committee'}
                    className={inputClass}
                  />
                </div>

                {/* Level and Period */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>
                      {activeLangTab === 'id' ? 'Tingkatan (Nasional/Internasional/Lokal)' : 'Level (National/International/Local)'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.level[activeLangTab] || ''}
                      onChange={(e) => handleBilingualChange('level', activeLangTab, e.target.value)}
                      placeholder={activeLangTab === 'id' ? 'Contoh: Nasional' : 'e.g. National'}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      {activeLangTab === 'id' ? 'Waktu (Bulan & Tahun)' : 'Date/Time (Month & Year)'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.period[activeLangTab] || ''}
                      onChange={(e) => handleBilingualChange('period', activeLangTab, e.target.value)}
                      placeholder={activeLangTab === 'id' ? 'Contoh: Oktober 2025' : 'e.g. October 2025'}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Location (Bilingual) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Lokasi Kegiatan' : 'Event Location'}
                  </label>
                  <input
                    type="text"
                    value={formData.location ? (formData.location[activeLangTab] || '') : ''}
                    onChange={(e) => handleBilingualChange('location', activeLangTab, e.target.value)}
                    placeholder={activeLangTab === 'id' ? 'Contoh: Bandung Creative Hub' : 'e.g. Bandung Creative Hub'}
                    className={inputClass}
                  />
                </div>

                {/* Description / Deskripsi (Bilingual) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Deskripsi Kegiatan / Aktivitas' : 'Activity Description'}
                  </label>
                  <textarea
                    rows={5}
                    value={formData.description ? (formData.description[activeLangTab] || '') : ''}
                    onChange={(e) => handleBilingualChange('description', activeLangTab, e.target.value)}
                    placeholder={activeLangTab === 'id' ? 'Tuliskan deskripsi lengkap kegiatan Anda...' : 'Describe overall activity, results...'}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Slide Photo Uploads (Multiple Photos) */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Slide Foto Dokumentasi Kegiatan (Unggah Banyak Foto)' : 'Activity Photos Slideshow (Upload Multiple)'}
                  </label>
                  <div className="flex items-center gap-2 mb-3">
                    <label className="cursor-pointer bg-[#151515] hover:bg-neutral-800 border border-neutral-800 px-4 py-2 rounded text-xs font-medium text-white flex items-center gap-1.5 transition">
                      <Plus className="w-4 h-4" />
                      <span>{activeLangTab === 'id' ? 'Tambah Foto Slide' : 'Add Slideshow Photo'}</span>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleProofUrlsUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {formData.proofUrls && formData.proofUrls.length > 0 && (
                    <div className="grid grid-cols-4 gap-2 border border-neutral-800 p-2 rounded bg-neutral-900/30">
                      {formData.proofUrls.map((img: string, i: number) => (
                        <div key={i} className="relative aspect-video bg-neutral-900 rounded overflow-hidden group">
                          <img src={img} alt={`Slide ${i}`} className="w-full h-full object-cover" />
                          <button
                            type="button"
                            onClick={() => removeProofUrlsImage(i)}
                            className="absolute top-1 right-1 bg-black/80 hover:bg-red-950 text-neutral-400 hover:text-white p-1 rounded-full opacity-100 transition duration-150"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* PDF file upload */}
                <div>
                  <label className={labelClass}>
                    {activeLangTab === 'id' ? 'Bukti File PDF Sertifikat / Dokumen (Opsional)' : 'PDF Certificate / Proof Document (Optional)'}
                  </label>
                  <div className="flex items-center gap-2 mb-3">
                    <label className="cursor-pointer bg-[#151515] hover:bg-neutral-800 border border-neutral-800 px-4 py-2 rounded text-xs font-medium text-white flex items-center gap-1.5 transition">
                      <Plus className="w-4 h-4" />
                      <span>{activeLangTab === 'id' ? 'Unggah PDF' : 'Upload PDF'}</span>
                      <input
                        type="file"
                        accept="application/pdf"
                        onChange={(e) => handleFileUpload(e, 'proofPdfUrl')}
                        className="hidden"
                      />
                    </label>
                    {formData.proofPdfUrl && (
                      <button
                        type="button"
                        onClick={() => setFormData((prev: any) => ({ ...prev, proofPdfUrl: '' }))}
                        className="text-red-500 hover:text-red-400 text-xs font-medium flex items-center gap-1 transition"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>{activeLangTab === 'id' ? 'Hapus PDF' : 'Remove PDF'}</span>
                      </button>
                    )}
                  </div>
                  {formData.proofPdfUrl && (
                    <div className="p-3 rounded bg-neutral-900/40 border border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-300">
                      <span className="truncate max-w-[240px]">
                        {formData.proofPdfUrl.startsWith('data:application/pdf') ? 'custom_certificate_proof.pdf' : formData.proofPdfUrl}
                      </span>
                      <span className="text-red-500 font-bold uppercase text-2xs">PDF</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {type === 'contact' && (
              <div className="space-y-4">
                <div>
                  <label className={labelClass}>Platform</label>
                  <select
                    value={formData.platform || 'instagram'}
                    onChange={(e) => {
                      const platform = e.target.value;
                      let label = platform.charAt(0).toUpperCase() + platform.slice(1);
                      if (platform === 'whatsapp') label = 'WhatsApp';
                      if (platform === 'linkedin') label = 'LinkedIn';
                      setFormData((prev: any) => ({ ...prev, platform, label }));
                    }}
                    className={`${inputClass} bg-neutral-900`}
                  >
                    <option value="instagram">Instagram</option>
                    <option value="tiktok">TikTok</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="email">Email</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="facebook">Facebook</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>
                    {lang === 'id' ? 'Nilai Kontak / Tautan' : 'Contact Value / Link'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.value || ''}
                    onChange={(e) => handleSimpleChange('value', e.target.value)}
                    placeholder={
                      formData.platform === 'email'
                        ? 'dekaaryanto@gmail.com'
                        : formData.platform === 'whatsapp'
                        ? '+6281234567890'
                        : 'https://instagram.com/dekaaryanto'
                    }
                    className={inputClass}
                  />
                  <p className="text-neutral-500 text-2xs mt-1.5 font-sans">
                    {formData.platform === 'whatsapp' && (lang === 'id' ? 'Masukkan nomor telepon lengkap beserta kode negara (cth: +6281...)' : 'Enter full number with country code (e.g. +6281...)')}
                    {formData.platform === 'email' && (lang === 'id' ? 'Masukkan alamat email yang valid' : 'Enter a valid email address')}
                    {['instagram', 'tiktok', 'linkedin', 'facebook'].includes(formData.platform) && (lang === 'id' ? 'Masukkan tautan URL profil lengkap' : 'Enter full profile URL link')}
                  </p>
                </div>

                <div>
                  <label className={labelClass}>
                    {lang === 'id' ? 'Label Tampilan' : 'Display Label'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.label || ''}
                    onChange={(e) => handleSimpleChange('label', e.target.value)}
                    placeholder="e.g. @dekaaryanto or dekaaryanto@gmail.com"
                    className={inputClass}
                  />
                </div>
              </div>
            )}
          </form>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-neutral-800 bg-neutral-950 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white font-medium text-xs uppercase tracking-wider px-4 py-2.5 rounded transition"
            >
              {lang === 'id' ? 'Batal' : 'Cancel'}
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-white hover:bg-neutral-200 text-black font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded transition"
            >
              {lang === 'id' ? 'Simpan Perubahan' : 'Save Changes'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
