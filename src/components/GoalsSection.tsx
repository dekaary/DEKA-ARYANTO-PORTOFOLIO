import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Plus,
  Edit2,
  Trash2,
  Calendar,
  Award,
  Compass,
  Sparkles,
  ShieldCheck,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Eye,
  FileText,
  ExternalLink,
  Play,
  Folder,
  Download,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { PortfolioData, Goal } from '../types';

interface GoalsSectionProps {
  data: PortfolioData;
  setData: React.Dispatch<React.SetStateAction<PortfolioData>>;
  lang: 'id' | 'en';
  isEditMode: boolean;
  onEditItem: (type: 'goal', item: Goal) => void;
  onAddItem: (type: 'goal') => void;
}

// Separate Card Component to encapsulate its own slideshow & state
function ActivityFolderCard({
  goal,
  idx,
  lang,
  isEditMode,
  onEditItem,
  onDelete,
  t
}: {
  goal: Goal;
  idx: number;
  lang: 'id' | 'en';
  isEditMode: boolean;
  onEditItem: (type: 'goal', item: Goal) => void;
  onDelete: (id: string) => void;
  t: (bilingual: { id: string; en: string }) => string;
  key?: React.Key;
}) {
  const slideshowImages = goal.proofUrls && goal.proofUrls.length > 0
    ? goal.proofUrls
    : (goal.fileUrl ? [goal.fileUrl] : []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };

  const renderDescription = (text?: string) => {
    if (!text) return null;
    return text.split('\n').map((paragraph, i) => (
      <p key={i} className={`text-justify ${i > 0 ? "mt-3" : ""}`}>
        {paragraph}
      </p>
    ));
  };

  const fullDescriptionText = goal.description ? t(goal.description) : '';
  const shouldTruncate = fullDescriptionText.length > 140;
  
  let displayDescription = fullDescriptionText;
  if (!isExpanded && shouldTruncate) {
    const truncateLength = 140;
    const lastSpace = fullDescriptionText.lastIndexOf(' ', truncateLength);
    const cutoff = lastSpace > 100 ? lastSpace : truncateLength;
    displayDescription = fullDescriptionText.slice(0, cutoff) + '...';
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.05, duration: 0.4 }}
      className="relative group flex flex-col w-full"
    >
      {/* File Folder Tab */}
      <div className="flex items-end">
        <div className="bg-[#0e0e0e] border-t border-x border-white/10 px-4 py-1.5 rounded-t-lg text-[9px] font-mono uppercase tracking-widest text-white/60 flex items-center gap-2 relative z-10 -mb-[1px]">
          <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-emerald-500 transition duration-300" />
          <span>{t(goal.period)}</span>
        </div>
        <div className="flex-1 border-b border-white/10" />
      </div>

      {/* File Folder Content Area */}
      <div className="bg-[#080808]/90 border-x border-b border-t border-white/10 rounded-b-xl rounded-tr-xl p-6 space-y-5 transition duration-300 hover:border-white/20 hover:bg-[#090909] relative flex-1 flex flex-col justify-between shadow-2xl">
        
        {/* Controls inside folder */}
        {isEditMode && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#050505] p-1 rounded border border-white/10 z-20">
            <button
              onClick={() => onEditItem('goal', goal)}
              className="p-1 hover:bg-white/5 text-white/40 hover:text-white rounded transition"
              title={lang === 'id' ? 'Ubah' : 'Edit'}
            >
              <Edit2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onDelete(goal.id)}
              className="p-1 hover:bg-white/5 text-white/40 hover:text-red-400 rounded transition"
              title={lang === 'id' ? 'Hapus' : 'Delete'}
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Inner Content */}
        <div className="space-y-4 flex-1">
          {/* Header of Dossier */}
          <div className="flex items-start gap-3">
            <div className="bg-white/5 p-2.5 rounded border border-white/10 text-white shrink-0 mt-1">
              <Sparkles className="w-5 h-5 text-white/60" />
            </div>
            <div className="space-y-1">
              <h3 className="font-sans font-bold text-lg text-white uppercase tracking-wider leading-snug">
                {t(goal.title)}
              </h3>
              <p className="text-white/40 font-mono text-[9px] uppercase tracking-widest">
                {t(goal.institution)}
              </p>
            </div>
          </div>

          {/* Dossier Meta Details Rack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-white/5 bg-white/[0.02] p-4 rounded-lg font-mono text-xs text-white/70">
            <div className="space-y-1">
              <span className="text-[9px] text-white/40 uppercase tracking-widest block">
                {lang === 'id' ? 'Sebagai / Peran' : 'Role / Position'}
              </span>
              <p className="text-white/90 font-medium">{t(goal.role)}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] text-white/40 uppercase tracking-widest block">
                {lang === 'id' ? 'Waktu Dilaksanakan' : 'Time Period'}
              </span>
              <p className="text-white/90 font-medium">{t(goal.period)}</p>
            </div>
            {goal.location && (
              <div className="space-y-1">
                <span className="text-[9px] text-white/40 uppercase tracking-widest block">
                  {lang === 'id' ? 'Lokasi' : 'Location'}
                </span>
                <p className="text-white/90 font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-white/30 shrink-0" />
                  <span className="break-words text-wrap">{t(goal.location)}</span>
                </p>
              </div>
            )}
          </div>

          {/* Activity Description */}
          {goal.description && (
            <div className="space-y-2 border-t border-white/5 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono uppercase text-white/40 tracking-widest block">
                  {lang === 'id' ? 'Deskripsi Kegiatan' : 'Activity Description'}
                </span>
              </div>
              <div className="text-sm text-white/80 leading-relaxed font-sans font-light transition-all duration-300 text-justify">
                {renderDescription(displayDescription)}
              </div>
            </div>
          )}
        </div>

        {/* Collapsible Content */}
        <motion.div
            initial={false}
            animate={{ 
              height: isExpanded ? 'auto' : 0,
              opacity: isExpanded ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-4 space-y-5 border-t border-white/5">

              {/* Supporting Links Section */}
              {goal.links && goal.links.length > 0 && (
                <div className="space-y-2.5">
                  <span className="text-[9px] font-mono uppercase text-emerald-400/60 tracking-[0.2em] font-bold flex items-center gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-500/50" />
                    <span>{lang === 'id' ? 'Link Pendukung & Dokumentasi' : 'Supporting Links & Documentation'}</span>
                  </span>
                  
                  <div className="flex flex-col gap-2">
                    {goal.links.map((link, lIdx) => {
                      const labelText = t(link.label);
                      const lowerLabel = labelText.toLowerCase();
                      const urlLower = link.url.toLowerCase();
                      
                      const isYoutube = urlLower.includes('youtube.com') || urlLower.includes('youtu.be') || lowerLabel.includes('youtube') || lowerLabel.includes('live') || lowerLabel.includes('video') || lowerLabel.includes('film');
                      const isInstagram = urlLower.includes('instagram.com') || lowerLabel.includes('instagram') || lowerLabel.includes('ig');
                      const isFacebook = urlLower.includes('facebook.com') || lowerLabel.includes('facebook') || lowerLabel.includes('fb');
                      const isTikTok = urlLower.includes('tiktok.com') || lowerLabel.includes('tiktok');
                      const isX = urlLower.includes('x.com') || urlLower.includes('twitter.com') || lowerLabel.includes('twitter') || lowerLabel.includes('x.com') || lowerLabel.includes('akun x');
                      const isCert = lowerLabel.includes('sertifikat') || lowerLabel.includes('piagam') || lowerLabel.includes('bukti');
                      const isDrive = urlLower.includes('drive.google.com') || lowerLabel.includes('drive') || lowerLabel.includes('pribadi') || lowerLabel.includes('dokumen') || lowerLabel.includes('folder');

                      let platformName = 'Link ↗';
                      if (isYoutube) platformName = 'YouTube ↗';
                      else if (isInstagram) platformName = 'Instagram ↗';
                      else if (isFacebook) platformName = 'Facebook ↗';
                      else if (isTikTok) platformName = 'TikTok ↗';
                      else if (isX) platformName = 'X ↗';
                      else if (isDrive) platformName = 'Google Drive ↗';
                      else if (isCert) {
                        platformName = lang === 'id' ? 'Sertifikat ↗' : 'Certificate ↗';
                      }

                      return (
                        <a
                          key={lIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-3 bg-[#070707] hover:bg-emerald-950/20 active:bg-emerald-950/40 border border-white/5 hover:border-emerald-500/40 px-3.5 py-2.5 rounded text-xs text-white/80 hover:text-white transition duration-200 cursor-pointer group/btn"
                        >
                          <div className="flex items-center gap-2">
                            {isTikTok || isInstagram || isYoutube || isX || isFacebook ? (
                              <Play className="w-4 h-4 text-emerald-400 group-hover/btn:scale-110 transition duration-200 fill-emerald-400/20" />
                            ) : isCert || isDrive ? (
                              <Folder className="w-4 h-4 text-emerald-400 group-hover/btn:scale-110 transition duration-200" />
                            ) : (
                              <ExternalLink className="w-4 h-4 text-emerald-400 group-hover/btn:scale-110 transition duration-200" />
                            )}
                            <span className="font-semibold tracking-wide">{labelText}</span>
                          </div>
                          <span className="text-[10px] font-mono text-white/30 group-hover/btn:text-emerald-400 transition duration-200">
                            {platformName}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Slide Photo Slideshow */}
              {slideshowImages.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[9px] font-mono uppercase text-white/40 tracking-widest block mb-2">
                    {lang === 'id' ? 'Dokumentasi Foto / Slide' : 'Photo Slideshow / Documentation'}
                  </span>
                  <div className="relative aspect-video w-full bg-black rounded-lg border border-white/5 overflow-hidden group/slide">
                    <img
                      src={slideshowImages[currentSlide]}
                      alt={`Slide ${currentSlide + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {slideshowImages.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-1.5 rounded-full opacity-0 group-hover/slide:opacity-100 transition"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-1.5 rounded-full opacity-0 group-hover/slide:opacity-100 transition"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 bg-black/40 px-2 py-1 rounded-full z-10">
                          {slideshowImages.map((_, i) => (
                            <div
                              key={i}
                              className={`w-1.5 h-1.5 rounded-full transition ${i === currentSlide ? 'bg-white' : 'bg-white/40'}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Certificate PDF Link */}
              {goal.proofPdfUrl && (
                <div className="bg-[#050505] border border-white/5 p-3 rounded-lg flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="p-2 bg-red-500/10 border border-red-500/20 rounded-md text-red-400 shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-mono font-semibold text-white/80">
                        {lang === 'id' ? 'Sertifikat Bukti (PDF)' : 'Proof Certificate (PDF)'}
                      </p>
                      <p className="text-[9px] font-mono text-white/40 truncate">
                        {goal.proofPdfUrl.startsWith('data:') ? 'uploaded_certificate.pdf' : 'activity_document.pdf'}
                      </p>
                    </div>
                  </div>
                  <a
                    href={goal.proofPdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-neutral-200 text-black px-3.5 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-wider transition flex items-center gap-1 shrink-0 shadow"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{lang === 'id' ? 'Lihat PDF' : 'View PDF'}</span>
                  </a>
                </div>
              )}

            </div>
          </motion.div>

          {/* Toggle Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="w-full mt-4 py-2 px-4 bg-white/5 hover:bg-white/10 active:bg-white/15 rounded border border-white/10 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>
              {isExpanded 
                ? (lang === 'id' ? 'Sembunyikan' : 'Show Less') 
                : (lang === 'id' ? 'Lihat Selengkapnya' : 'See More')}
            </span>
            <span className={`transform transition-transform duration-300 text-[10px] ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
              ▼
            </span>
          </button>
      </div>
    </motion.div>
  );
}

export default function GoalsSection({
  data,
  setData,
  lang,
  isEditMode,
  onEditItem,
  onAddItem
}: GoalsSectionProps) {

  const t = (bilingual: { id: string; en: string }) => {
    return lang === 'id' ? bilingual.id : bilingual.en;
  };

  const handleDelete = (id: string) => {
    if (confirm(lang === 'id' ? 'Apakah Anda yakin ingin menghapus aktivitas ini?' : 'Are you sure you want to delete this activity?')) {
      setData(prev => ({
        ...prev,
        goals: prev.goals.filter(goal => goal.id !== id)
      }));
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-6 gap-4">
        <div>
          <span className="text-[10px] font-mono tracking-[0.25em] text-white/40 uppercase">
            {lang === 'id' ? 'AKTIVITAS & SERTIFIKASI' : 'ACTIVITIES & CERTIFICATIONS'}
          </span>
          <h2 className="font-sans font-bold text-3xl text-white uppercase tracking-tight mt-1">
            {lang === 'id' ? 'Aktivitas' : 'Activities'}
          </h2>
        </div>

        {isEditMode && (
          <button
            onClick={() => onAddItem('goal')}
            className="flex items-center gap-2 bg-white hover:bg-neutral-200 text-black px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition self-start md:self-center"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Tambah Aktivitas' : 'Add Activity'}</span>
          </button>
        )}
      </div>

      {/* Dossier Stack of Folders */}
      {data.goals.length === 0 ? (
        <div className="text-white/40 font-mono text-xs text-center py-10 border border-dashed border-white/10 rounded">
          {lang === 'id' ? 'Belum ada data aktivitas. Aktifkan Mode Edit untuk menambah.' : 'No activities listed. Enable Edit Mode to add.'}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.goals.map((goal, idx) => (
            <ActivityFolderCard
              key={goal.id}
              goal={goal}
              idx={idx}
              lang={lang}
              isEditMode={isEditMode}
              onEditItem={onEditItem}
              onDelete={handleDelete}
              t={t}
            />
          ))}
        </div>
      )}
    </div>
  );
}
