import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Plus, Edit2, Trash2, Calendar, FileText, Award, Users, MapPin, Folder, Activity, ChevronLeft, ChevronRight, Image as ImageIcon, Play, ExternalLink
} from 'lucide-react';
import { PortfolioData, Organization } from '../types';

interface OrganizationSectionProps {
  data: PortfolioData;
  setData: React.Dispatch<React.SetStateAction<PortfolioData>>;
  lang: 'id' | 'en';
  isEditMode: boolean;
  onEditItem: (type: 'organization', item: Organization) => void;
  onAddItem: (type: 'organization') => void;
}

// Interactive slideshow for proof photos
function PhotoSlideshow({ photos, lang }: { photos: string[]; lang: 'id' | 'en' }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!photos || photos.length === 0) return null;

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="relative aspect-video w-full bg-black rounded border border-white/10 overflow-hidden group">
      {/* Slideshow image */}
      <img
        src={photos[currentIndex]}
        alt={`Proof ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-all duration-500 ease-out"
        referrerPolicy="no-referrer"
      />

      {/* Navigation arrows */}
      {photos.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 bg-black/75 hover:bg-white hover:text-black text-white p-1.5 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10"
            title={lang === 'id' ? 'Sebelumnya' : 'Previous'}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-black/75 hover:bg-white hover:text-black text-white p-1.5 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10"
            title={lang === 'id' ? 'Berikutnya' : 'Next'}
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </>
      )}

      {/* Indicator dots */}
      {photos.length > 1 && (
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-xs border border-white/5">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(i);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === i ? 'bg-white w-3' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      )}

      {/* Full size button */}
      <a
        href={photos[currentIndex]}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-[10px] font-mono font-bold text-white transition tracking-widest uppercase"
      >
        {lang === 'id' ? 'Lihat Ukuran Penuh' : 'View Full Image'}
      </a>
    </div>
  );
}

interface OrganizationCardProps {
  key?: string;
  org: Organization;
  idx: number;
  lang: 'id' | 'en';
  isEditMode: boolean;
  onEditItem: (type: 'organization', item: Organization) => void;
  onDelete: (id: string) => void;
  t: (bilingual: { id: string; en: string }) => string;
}

function OrganizationCard({
  org,
  idx,
  lang,
  isEditMode,
  onEditItem,
  onDelete,
  t
}: OrganizationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const photosToDisplay = [
    ...(org.proofUrls || []),
    ...(org.proofUrl ? [org.proofUrl] : [])
  ].filter(Boolean);

  return (
    <motion.div
      key={org.id}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.05 }}
      className="flex flex-col"
    >
      {/* Physical Folder Tab styling on top */}
      <div className="flex items-end select-none">
        <div className="bg-[#0b0b0b] border-t border-x border-white/10 rounded-t px-4 py-2 text-[9px] font-mono uppercase tracking-[0.2em] text-white/50 flex items-center gap-1.5">
          <Folder className="w-3.5 h-3.5 text-neutral-500" />
          <span>{t(org.period)}</span>
        </div>
        <div className="flex-1 border-b border-white/10"></div>
      </div>

      {/* Folder Body */}
      <div className="bg-[#040404] border-x border-b border-white/10 rounded-tr rounded-b p-6 space-y-5 relative group hover:border-white/20 transition duration-300 flex-1 flex flex-col justify-between shadow-xl">
        
        {/* Card Controls in Edit Mode */}
        {isEditMode && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#0a0a0a] p-1 rounded border border-white/10 z-10 opacity-80 hover:opacity-100 transition">
            <button
              onClick={() => onEditItem('organization', org)}
              className="p-1 hover:bg-white/5 text-white/40 hover:text-white rounded transition cursor-pointer"
              title={lang === 'id' ? 'Ubah' : 'Edit'}
            >
              <Edit2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onDelete(org.id)}
              className="p-1 hover:bg-white/5 text-white/40 hover:text-red-400 rounded transition cursor-pointer"
              title={lang === 'id' ? 'Hapus' : 'Delete'}
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <div className="space-y-4">
          {/* Role / Jabatan Heading */}
          <div className="space-y-0.5">
            <span className="text-[8px] font-mono text-white/30 uppercase tracking-[0.25em]">
              {lang === 'id' ? 'JABATAN' : 'ROLE / POSITION'}
            </span>
            <h3 className="font-sans font-bold text-lg text-[#F5F5F5] uppercase tracking-wide leading-snug">
              {org.role ? t(org.role) : (lang === 'id' ? 'Anggota' : 'Member')}
            </h3>
          </div>

          {/* Organization & Place */}
          <div className="space-y-0.5">
            <span className="text-[8px] font-mono text-white/30 uppercase tracking-[0.25em]">
              {lang === 'id' ? 'ORGANISASI' : 'ORGANIZATION'}
            </span>
            <p className="font-sans text-xs font-semibold text-white/80 leading-snug uppercase tracking-wider">
              {t(org.name)}
            </p>
            {org.place && (
              <div className="flex items-center gap-1 text-[9px] font-mono text-white/40 pt-1">
                <MapPin className="w-3 h-3 text-neutral-600" />
                <span>{t(org.place)}</span>
              </div>
            )}
          </div>

          {/* Level Badge and Duration */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-[9px] font-mono uppercase text-white/70 bg-white/5 px-2.5 py-0.5 rounded border border-white/10 flex items-center gap-1">
              <Award className="w-3 h-3 text-white/30" />
              <span>{t(org.level)}</span>
            </span>
          </div>

          {/* Collapsible Details */}
          <motion.div
            initial={false}
            animate={{ 
              height: isExpanded ? 'auto' : 0,
              opacity: isExpanded ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-white/5 space-y-4">
              {/* Program Kerja / Kegiatan */}
              <div className="space-y-1.5">
                <span className="text-[9px] font-mono uppercase text-white/40 tracking-[0.2em] font-bold flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{lang === 'id' ? 'Deskripsi & Program Kerja' : 'Description & Work Programs'}</span>
                </span>
                <div className="text-white/50 font-sans text-xs leading-relaxed text-justify whitespace-pre-line pl-2.5 border-l border-white/5">
                  {t(org.activities)}
                </div>
              </div>

              {/* Tanggung Jawab Container */}
              {org.responsibilities && (
                <div className="space-y-1.5 bg-[#090909] border border-white/5 p-4 rounded">
                  <span className="text-[9px] font-mono uppercase text-white/40 tracking-[0.2em] font-bold flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{lang === 'id' ? 'Tanggung Jawab Utama' : 'Key Responsibilities'}</span>
                  </span>
                  <p className="text-white/40 font-sans text-xs leading-relaxed text-justify whitespace-pre-line">
                    {t(org.responsibilities)}
                  </p>
                </div>
              )}

              {/* Supporting Resources Section */}
              {(org.showreelUrl || org.documentationUrl || (org.links && org.links.length > 0)) && (
                <div className="space-y-2.5 pt-3.5 border-t border-white/5">
                  <span className="text-[9px] font-mono uppercase text-emerald-400/60 tracking-[0.2em] font-bold flex items-center gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-500/50" />
                    <span>{lang === 'id' ? 'Link Pendukung & Dokumentasi' : 'Supporting Links & Documentation'}</span>
                  </span>
                  
                  <div className="flex flex-col gap-2 pt-1">
                    {org.showreelUrl && (
                      <a
                        href={org.showreelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-3 bg-neutral-900/60 hover:bg-emerald-950/20 active:bg-emerald-950/40 border border-white/10 hover:border-emerald-500/40 px-3.5 py-2.5 rounded-lg text-xs text-white/80 hover:text-white transition duration-200 cursor-pointer group/btn"
                      >
                        <div className="flex items-center gap-2">
                          <Play className="w-4 h-4 text-emerald-400 group-hover/btn:scale-110 transition duration-200 fill-emerald-400" />
                          <span className="font-semibold tracking-wide">{lang === 'id' ? 'LIHAT SHOWREEL' : 'VIEW SHOWREEL'}</span>
                        </div>
                        <span className="text-[10px] font-mono text-white/30 group-hover/btn:text-emerald-400 transition duration-200">Google Drive ↗</span>
                      </a>
                    )}

                    {org.documentationUrl && (
                      <a
                        href={org.documentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-3 bg-neutral-900/60 hover:bg-emerald-950/20 active:bg-emerald-950/40 border border-white/10 hover:border-emerald-500/40 px-3.5 py-2.5 rounded-lg text-xs text-white/80 hover:text-white transition duration-200 cursor-pointer group/btn"
                      >
                        <div className="flex items-center gap-2">
                          <Folder className="w-4 h-4 text-emerald-400 group-hover/btn:scale-110 transition duration-200" />
                          <span className="font-semibold tracking-wide">{lang === 'id' ? 'LIHAT DOKUMENTASI' : 'VIEW DOCUMENTATION'}</span>
                        </div>
                        <span className="text-[10px] font-mono text-white/30 group-hover/btn:text-emerald-400 transition duration-200">Google Drive ↗</span>
                      </a>
                    )}

                    {org.links && org.links.map((link, lIdx) => {
                      const isFilm = t(link.label).toLowerCase().includes('film');
                      const isCert = t(link.label).toLowerCase().includes('sertifikat') || t(link.label).toLowerCase().includes('piagam');
                      return (
                        <a
                          key={lIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-3 bg-neutral-900/60 hover:bg-emerald-950/20 active:bg-emerald-950/40 border border-white/10 hover:border-emerald-500/40 px-3.5 py-2.5 rounded-lg text-xs text-white/80 hover:text-white transition duration-200 cursor-pointer group/btn"
                        >
                          <div className="flex items-center gap-2">
                            {isFilm ? (
                              <Play className="w-4 h-4 text-emerald-400 group-hover/btn:scale-110 transition duration-200 fill-emerald-400" />
                            ) : isCert ? (
                              <Award className="w-4 h-4 text-emerald-400 group-hover/btn:scale-110 transition duration-200" />
                            ) : (
                              <ExternalLink className="w-4 h-4 text-emerald-400 group-hover/btn:scale-110 transition duration-200" />
                            )}
                            <span className="font-semibold tracking-wide">{t(link.label)}</span>
                          </div>
                          <span className="text-[10px] font-mono text-white/30 group-hover/btn:text-emerald-400 transition duration-200">Google Drive ↗</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Single "Lihat Selengkapnya" Trigger Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="w-full py-2 px-4 bg-white/5 hover:bg-white/10 active:bg-white/15 rounded border border-white/10 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>
              {isExpanded 
                ? (lang === 'id' ? 'Sembunyikan' : 'Lihat Selengkapnya') 
                : (lang === 'id' ? 'Lihat Selengkapnya' : 'See More')}
            </span>
            <span className={`transform transition-transform duration-300 text-[10px] ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
              ▼
            </span>
          </button>
        </div>

      </div>
    </motion.div>
  );
}

export default function OrganizationSection({
  data,
  setData,
  lang,
  isEditMode,
  onEditItem,
  onAddItem
}: OrganizationSectionProps) {

  const t = (bilingual: { id: string; en: string }) => {
    return lang === 'id' ? bilingual.id : bilingual.en;
  };

  const handleDelete = (id: string) => {
    if (confirm(lang === 'id' ? 'Apakah Anda yakin ingin menghapus pengalaman organisasi ini?' : 'Are you sure you want to delete this organization experience?')) {
      setData(prev => ({
        ...prev,
        organizations: prev.organizations.filter(org => org.id !== id)
      }));
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-6 gap-4">
        <div>
          <span className="text-[10px] font-mono tracking-[0.25em] text-white/40 uppercase">
            {lang === 'id' ? 'KEPEMIMPINAN & KOSISTENSI' : 'LEADERSHIP & CONSISTENCY'}
          </span>
          <h2 className="font-sans font-bold text-3xl text-[#F0F0F0] uppercase tracking-tight mt-1">
            {lang === 'id' ? 'Pengalaman Organisasi' : 'Organization Experience'}
          </h2>
        </div>

        {isEditMode && (
          <button
            onClick={() => onAddItem('organization')}
            className="flex items-center gap-2 bg-white hover:bg-neutral-200 text-black px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition self-start md:self-center"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Tambah Organisasi' : 'Add Organization'}</span>
          </button>
        )}
      </div>

      {/* Grid of Experiences */}
      {data.organizations.length === 0 ? (
        <div className="text-white/40 font-mono text-xs text-center py-10 border border-dashed border-white/10 rounded">
          {lang === 'id' ? 'Belum ada data organisasi. Aktifkan Mode Edit untuk menambah.' : 'No organization records. Enable Edit Mode to add.'}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.organizations.map((org, idx) => (
            <OrganizationCard
              key={org.id}
              org={org}
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
