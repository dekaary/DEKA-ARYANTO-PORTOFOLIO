import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Edit2, Trash2, Play, ExternalLink, Image as ImageIcon, Film as FilmIcon, X, ChevronRight, ChevronLeft, Folder } from 'lucide-react';
import { PortfolioData, Film } from '../types';

interface FilmographySectionProps {
  data: PortfolioData;
  setData: React.Dispatch<React.SetStateAction<PortfolioData>>;
  lang: 'id' | 'en';
  isEditMode: boolean;
  onEditItem: (type: 'film', item: Film) => void;
  onAddItem: (type: 'film') => void;
}

export default function FilmographySection({
  data,
  setData,
  lang,
  isEditMode,
  onEditItem,
  onAddItem
}: FilmographySectionProps) {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
  const [btsIndex, setBtsIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    if (selectedFilm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedFilm]);

  const t = (bilingual: { id: string; en: string }) => {
    return lang === 'id' ? bilingual.id : bilingual.en;
  };

  const checkIsBahkan = (film: Film) => {
    return film && (
      film.id === 'film3' || 
      t(film.title).toLowerCase().includes('bahkan di ujung waktu') || 
      t(film.title).toLowerCase().includes('bahkan diujung waktu')
    );
  };

  const isBahkanFilm = selectedFilm && checkIsBahkan(selectedFilm);

  const checkIsLawan = (film: Film) => {
    return film && (
      film.id === 'other_film7' || 
      t(film.title).toLowerCase().includes('lawan')
    );
  };

  const isLawanFilm = selectedFilm && checkIsLawan(selectedFilm);

  const isSpecialScrollFilm = !isMobile && selectedFilm && (
    selectedFilm.id === 'other_film1' || // Unexposed
    selectedFilm.id === 'other_film5' || // Jurig Malam Aaaaaaaakhh!!
    selectedFilm.id === 'other_film7' || // LAWAN!
    t(selectedFilm.title).toLowerCase().includes('unexposed') ||
    t(selectedFilm.title).toLowerCase().includes('jurig malam') ||
    t(selectedFilm.title).toLowerCase().includes('lawan')
  );

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid opening lightbox
    if (confirm(lang === 'id' ? 'Apakah Anda yakin ingin menghapus film ini?' : 'Are you sure you want to delete this film?')) {
      setData(prev => ({
        ...prev,
        films: prev.films.filter(film => film.id !== id)
      }));
    }
  };

  // Helper to extract clean Youtube video ID for iframe
  const getYoutubeEmbedUrl = (url: string) => {
    if (!url) return '';
    try {
      // support youtube shorts: youtube.com/shorts/VIDEO_ID
      if (url.includes('/shorts/')) {
        const parts = url.split('/shorts/');
        if (parts[1]) {
          const id = parts[1].split(/[?#&]/)[0];
          if (id && id.length === 11) {
            return `https://www.youtube.com/embed/${id}`;
          }
        }
      }
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);
      if (match && match[2].length === 11) {
        return `https://www.youtube.com/embed/${match[2]}`;
      }
    } catch (e) {
      console.error(e);
    }
    return '';
  };

  // Helper to convert a Google Drive link into an embeddable preview url
  const getGoogleDriveEmbedUrl = (url: string) => {
    if (!url) return '';
    try {
      if (url.includes('drive.google.com')) {
        const fileMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
        if (fileMatch && fileMatch[1]) {
          return `https://drive.google.com/file/d/${fileMatch[1]}/preview`;
        }
        const openMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
        if (openMatch && openMatch[1]) {
          return `https://drive.google.com/file/d/${openMatch[1]}/preview`;
        }
      }
    } catch (e) {
      console.error(e);
    }
    return '';
  };

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

  // Determine the primary embed url
  const getEmbedInfo = (film: Film) => {
    if (film.youtubeUrl) {
      const yt = getYoutubeEmbedUrl(film.youtubeUrl);
      if (yt) return { url: yt, type: 'youtube' };
    }
    if (film.driveUrl) {
      const yt = getYoutubeEmbedUrl(film.driveUrl);
      if (yt) return { url: yt, type: 'youtube' };
      const gd = getGoogleDriveEmbedUrl(film.driveUrl);
      if (gd) return { url: gd, type: 'gdrive' };
    }
    if (film.trailerUrl) {
      const yt = getYoutubeEmbedUrl(film.trailerUrl);
      if (yt) return { url: yt, type: 'youtube' };
      const gd = getGoogleDriveEmbedUrl(film.trailerUrl);
      if (gd) return { url: gd, type: 'gdrive' };
    }
    return null;
  };

  // Helper to get 3 BTS photos for slide presentation
  const getBtsPhotosForFilm = (film: Film) => {
    if (film.behindTheScenes && film.behindTheScenes.length > 0) {
      let photos = [...film.behindTheScenes];
      const hash = film.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const pool = [
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1542204172-e7052809a850?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=600"
      ];
      while (photos.length < 3) {
        const idx = (hash + photos.length) % pool.length;
        photos.push(pool[idx]);
      }
      return photos.slice(0, 3).map(getGoogleDriveDirectImageUrl);
    }

    const hash = film.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const pool = [
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1542204172-e7052809a850?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=600"
    ];
    return [
      pool[hash % pool.length],
      pool[(hash + 1) % pool.length],
      pool[(hash + 2) % pool.length]
    ].map(getGoogleDriveDirectImageUrl);
  };

  const featuredFilms = data.films.filter(f => f.isFeatured);
  const otherFilms = data.films.filter(f => !f.isFeatured);

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-6 gap-4">
        <div>
          <span className="text-[10px] font-mono tracking-[0.25em] text-white/40 uppercase">
            {lang === 'id' ? 'KARYA UTAMA & SINEMATIK' : 'PORTFOLIO & SHOWCASE'}
          </span>
          <h2 className="font-sans font-bold text-3xl text-white uppercase tracking-tight mt-1">
            {lang === 'id' ? 'Filmografi' : 'Filmography'}
          </h2>
        </div>

        {isEditMode && (
          <button
            onClick={() => onAddItem('film')}
            className="flex items-center gap-2 bg-white hover:bg-neutral-200 text-black px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition self-start md:self-center"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Tambah Film' : 'Add Film'}</span>
          </button>
        )}
      </div>

      {/* FEATURED FILMS SECTION (Top 3) */}
      <div className="space-y-6">
        <h3 className="font-sans font-bold text-[10px] text-white/40 uppercase tracking-[0.3em] border-b border-white/5 pb-2">
          {lang === 'id' ? '3 Karya Terbaik' : 'Top 3 Best Works'}
        </h3>

        {featuredFilms.length === 0 ? (
          <div className="text-white/40 font-mono text-xs text-center py-8 border border-dashed border-white/10 rounded bg-[#080808]">
            {lang === 'id' ? 'Belum ada karya terbaik yang ditandai. Edit film untuk mengaktifkan "Featured".' : 'No featured films marked. Edit film to enable "Featured".'}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredFilms.map((film, idx) => (
              <motion.div
                key={film.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => { setSelectedFilm(film); setBtsIndex(0); }}
                className="group relative bg-[#080808] border border-white/10 rounded overflow-hidden cursor-pointer hover:border-white/30 transition duration-300 flex flex-col h-full shadow-2xl"
              >
                {/* Film Cover Box */}
                <div className="aspect-[2/3] bg-[#030d08] overflow-hidden relative">
                  <img
                    src={getGoogleDriveDirectImageUrl(film.imageUrl)}
                    alt={t(film.title)}
                    className={`w-full h-full group-hover:scale-105 transition duration-500 ${
                      film.id === 'film1' || film.imageUrl.includes('regenerated_image_1784225176016') || film.imageUrl.includes('regenerated_image_1784225126180')
                        ? 'object-contain p-0.5'
                        : 'object-cover'
                    }`}
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <div className="bg-white text-black p-3 rounded-full transition shadow-lg transform translate-y-2 group-hover:translate-y-0 duration-300">
                      <Play className="w-4 h-4 fill-black ml-0.5" />
                    </div>
                  </div>

                  {/* Top-right Actions in Edit Mode */}
                  {isEditMode && (
                    <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/80 p-1 rounded border border-white/10 z-10">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onEditItem('film', film);
                        }}
                        className="p-1 hover:bg-white/10 text-white/40 hover:text-white rounded transition"
                        title="Edit Film"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={(e) => handleDelete(film.id, e)}
                        className="p-1 hover:bg-white/10 text-white/40 hover:text-red-400 rounded transition"
                        title="Delete Film"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {/* Role Badge */}
                  <div className="absolute bottom-3 left-3 bg-black/90 backdrop-blur-md border border-white/10 text-[9px] font-mono font-bold text-white uppercase px-2.5 py-0.5 rounded-full tracking-wider">
                    {t(film.role)}
                  </div>
                </div>

                {/* Film Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <h4 className="font-sans font-bold text-base text-[#F0F0F0] uppercase tracking-wider group-hover:text-white transition">
                      {t(film.title)}
                    </h4>
                    {film.year && (
                      <div className="text-[10px] font-mono font-medium text-[#A0A0A0]/80 tracking-widest uppercase mb-1">
                        {lang === 'id' ? `Tahun: ${film.year}` : `Year: ${film.year}`}
                      </div>
                    )}
                    <p className="text-white/40 text-xs font-sans leading-relaxed text-justify line-clamp-3">
                      {t(film.description)}
                    </p>
                  </div>

                  <div className="text-[9px] font-mono uppercase text-white/40 tracking-widest flex items-center gap-1.5 pt-2.5 border-t border-white/5">
                    <FilmIcon className="w-3.5 h-3.5 text-white/20" />
                    <span>{lang === 'id' ? 'Selengkapnya...' : 'More Details...'}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* OTHER FILMS SECTION (Secondary lists) */}
      <div className="space-y-6 pt-6 border-t border-white/5">
        <h3 className="font-sans font-bold text-[10px] text-white/40 uppercase tracking-[0.3em] border-b border-white/5 pb-2">
          {lang === 'id' ? 'Karya Lainnya' : 'Other Film Projects'}
        </h3>

        {otherFilms.length === 0 ? (
          <div className="text-white/40 font-mono text-[9px] text-center py-6 border border-dashed border-white/10 rounded bg-[#080808]">
            {lang === 'id' ? 'Belum ada karya film sekunder.' : 'No secondary film projects listed.'}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {[...otherFilms]
              .sort((a, b) => {
                const yearA = parseInt(a.year || '0', 10);
                const yearB = parseInt(b.year || '0', 10);
                return yearB - yearA;
              })
              .map((film, idx) => (
                <motion.div
                  key={film.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => { setSelectedFilm(film); setBtsIndex(0); }}
                  className="group relative bg-[#0a0a0a] border border-white/10 rounded-b rounded-tr p-5 hover:border-white/30 transition duration-300 flex flex-col justify-between min-h-[200px] cursor-pointer mt-3"
                >
                  {/* Folder Tab at Top Left */}
                  <div className="absolute -top-[17px] left-0 h-[18px] px-3 bg-[#0a0a0a] border-t border-x border-white/10 rounded-t-[4px] text-[8px] font-mono font-bold text-white/40 flex items-center gap-1 group-hover:text-white/80 group-hover:border-white/30 transition-colors">
                    <Folder className="w-2.5 h-2.5 text-white/30 group-hover:text-white/60 transition-colors" />
                    <span>{film.year || 'N/A'}</span>
                  </div>

                  {/* Edit Controls if in Edit Mode */}
                  {isEditMode && (
                    <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/85 p-1 rounded border border-white/10 z-10">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onEditItem('film', film);
                        }}
                        className="p-1 hover:bg-white/10 text-white/40 hover:text-white rounded"
                        title="Edit Film"
                      >
                        <Edit2 className="w-3 h-3" />
                      </button>
                      <button
                        onClick={(e) => handleDelete(film.id, e)}
                        className="p-1 hover:bg-white/10 text-white/40 hover:text-red-400 rounded"
                        title="Delete Film"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  )}

                  <div className="space-y-3">
                    <div className="space-y-1">
                      <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-[#A0A0A0]/70 bg-white/5 border border-white/5 px-2 py-0.5 rounded-full inline-block">
                        {t(film.role)}
                      </span>
                      <h4 className="font-sans font-extrabold text-sm text-[#F0F0F0] uppercase tracking-wider group-hover:text-white transition pt-1">
                        {t(film.title)}
                      </h4>
                    </div>
                    <p className="text-white/40 text-[10px] leading-relaxed text-justify line-clamp-4">
                      {t(film.description)}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[8px] font-mono uppercase text-white/30 tracking-wider group-hover:text-white/60 transition-colors">
                    <span>{lang === 'id' ? 'KLIK UNTUK DETAIL' : 'CLICK FOR DETAILS'}</span>
                    <ChevronRight className="w-3 h-3 text-white/20 group-hover:text-white/50 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.div>
              ))}
          </div>
        )}
      </div>

      {/* DETAILED CINEMATIC LIGHTBOX / DIALOG */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedFilm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedFilm(null)}
                className="absolute inset-0 bg-black/95 backdrop-blur-md"
              />

              {/* Lightbox Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative bg-[#050505] border border-white/10 rounded w-full max-w-4xl max-h-[92vh] overflow-y-auto flex flex-col shadow-2xl z-10"
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedFilm(null)}
                  className="absolute top-4 right-4 bg-black/80 border border-white/10 text-white/60 hover:text-white p-1.5 rounded-full z-20 hover:scale-105 transition duration-150"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Main Embed Player */}
                {getEmbedInfo(selectedFilm) ? (
                  isSpecialScrollFilm ? (
                    <div className="w-full bg-[#030303] relative order-2 md:order-1 border-b border-white/5">
                      <div className="text-center py-2 bg-white/5 border-b border-white/5 text-[9px] font-mono text-white/50 tracking-widest uppercase flex items-center justify-center gap-1.5 select-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                        <span>{lang === 'id' ? 'GULIR KE BAWAH UNTUK KONTROL PLAYBACK SEMPURNA' : 'SCROLL DOWN SLIGHTLY FOR PERFECT PLAYBACK CONTROLS'}</span>
                      </div>
                      <div className="w-full aspect-video overflow-y-auto overflow-x-hidden relative">
                        <div className="w-full h-[115%] relative">
                          <iframe
                            src={getEmbedInfo(selectedFilm)!.url}
                            title={`${t(selectedFilm.title)} Embed`}
                            className="w-full h-full absolute inset-0 border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-video w-full bg-black relative order-2 md:order-1">
                      <iframe
                        src={getEmbedInfo(selectedFilm)!.url}
                        title={`${t(selectedFilm.title)} Embed`}
                        className="w-full h-full absolute inset-0 border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  )
                ) : (
                  (!selectedFilm.isFeatured && !selectedFilm.youtubeUrl && !selectedFilm.driveUrl && !selectedFilm.trailerUrl) ? (
                    // Slideshow for other works with no media (3 BTS + 1 blurred slide to click "LAINNYA")
                    <div className="aspect-video w-full bg-[#050505] relative border-b border-white/5 overflow-hidden order-2 md:order-1 select-none">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={btsIndex}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.25 }}
                          className="w-full h-full absolute inset-0"
                        >
                          {btsIndex < 3 ? (
                            <div className="w-full h-full relative">
                              <img
                                src={getBtsPhotosForFilm(selectedFilm)[btsIndex]}
                                alt={`Behind the scenes ${btsIndex + 1}`}
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                              <div className="absolute top-4 left-4 bg-black/70 border border-white/10 px-3 py-1 rounded text-[9px] font-mono font-bold tracking-widest uppercase text-white/80">
                                {lang === 'id' ? `DOKUMENTASI BTS #${btsIndex + 1}` : `BTS SHOT #${btsIndex + 1}`}
                              </div>
                            </div>
                          ) : (
                            <div className="w-full h-full relative">
                              <img
                                src={getBtsPhotosForFilm(selectedFilm)[0]}
                                alt="More BTS"
                                className="w-full h-full object-cover filter blur-md scale-105 opacity-60"
                                referrerPolicy="no-referrer"
                              />
                              <div 
                                onClick={() => {
                                  if (selectedFilm.btsUrl) {
                                    window.open(selectedFilm.btsUrl, '_blank', 'noopener,noreferrer');
                                  }
                                }}
                                className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/65 cursor-pointer hover:bg-black/55 transition group"
                              >
                                <Folder className="w-12 h-12 text-white/40 mb-3 group-hover:scale-110 transition-transform duration-300" />
                                <span className="text-sm font-sans font-extrabold uppercase tracking-widest text-white mb-2">
                                  {lang === 'id' ? 'DOKUMENTASI LAINNYA' : 'OTHER DOCUMENTATION'}
                                </span>
                                <p className="text-white/50 text-[10px] font-mono max-w-xs mb-4">
                                  {lang === 'id' ? 'KLIK UNTUK MEMBUKA FOLDER GOOGLE DRIVE BTS' : 'CLICK TO OPEN GOOGLE DRIVE BTS FOLDER'}
                                </p>
                                <span className="bg-white hover:bg-neutral-200 text-black text-[10px] font-sans font-bold uppercase tracking-widest px-5 py-2 rounded-full transition-transform group-hover:scale-105 duration-150">
                                  {lang === 'id' ? 'LAINNYA' : 'LAINNYA'}
                                </span>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>

                      {/* Prev/Next Navigation */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setBtsIndex(prev => (prev === 0 ? 3 : prev - 1));
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 border border-white/10 text-white/70 hover:text-white p-1.5 rounded-full z-20 hover:scale-105 transition"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setBtsIndex(prev => (prev === 3 ? 0 : prev + 1));
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 border border-white/10 text-white/70 hover:text-white p-1.5 rounded-full z-20 hover:scale-105 transition"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {/* Dot Indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 bg-black/45 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-sm">
                        {[0, 1, 2, 3].map((idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setBtsIndex(idx);
                            }}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              btsIndex === idx ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/60'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Default fallback container
                    <div className="aspect-video w-full bg-black relative border-b border-white/5 overflow-hidden order-2 md:order-1">
                      <img
                        src={getGoogleDriveDirectImageUrl(selectedFilm.imageUrl)}
                        alt={t(selectedFilm.title)}
                        className="w-full h-full object-cover opacity-60 filter blur-[2px]"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent">
                        <FilmIcon className="w-12 h-12 text-white/20 mb-2" />
                        <span className="text-[10px] font-mono uppercase text-white/40 tracking-wider">
                          {lang === 'id' ? 'TIDAK ADA LINK PLAYBACK' : 'NO PLAYBACK PROVIDED'}
                        </span>
                        {(selectedFilm.driveUrl || (isLawanFilm && selectedFilm.trailerUrl)) && (
                          <a
                            href={selectedFilm.driveUrl || selectedFilm.trailerUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 flex items-center gap-1.5 bg-white text-black px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-neutral-200 transition"
                          >
                            {isBahkanFilm || isLawanFilm ? (
                              <Play className="w-3.5 h-3.5 fill-black text-black" />
                            ) : (
                              <ExternalLink className="w-3.5 h-3.5" />
                            )}
                            <span>
                              {isBahkanFilm || isLawanFilm
                                ? (lang === 'id' ? 'TONTON FILM' : 'WATCH FILM')
                                : (selectedFilm.driveUrl?.includes('youtube.com') || selectedFilm.driveUrl?.includes('youtu.be')
                                  ? (lang === 'id' ? 'Buka Link ShowReel' : 'Open ShowReel Link')
                                  : (lang === 'id' ? 'Buka Link Google Drive' : 'Open Google Drive Link'))}
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                  )
                )}

                {/* Content Panel */}
                <div className="p-6 md:p-8 space-y-6 order-1 md:order-2">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 border-b border-white/5 pb-6">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="bg-white/5 border border-white/10 text-[9px] font-mono font-bold text-white/80 uppercase px-3 py-1 rounded-full tracking-widest">
                          {t(selectedFilm.role)}
                        </span>
                        {selectedFilm.year && (
                          <span className="bg-white/5 border border-white/10 text-[9px] font-mono font-bold text-white/40 uppercase px-3 py-1 rounded-full tracking-widest">
                            {selectedFilm.year}
                          </span>
                        )}
                      </div>
                      <h3 className="font-sans font-bold text-2xl md:text-3xl text-white uppercase tracking-tight pt-1">
                        {t(selectedFilm.title)}
                      </h3>
                    </div>

                     <div className="flex flex-wrap gap-2">
                      {selectedFilm.youtubeUrl && (
                        <a
                          href={selectedFilm.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-3 py-1.5 rounded-full text-[9px] font-mono font-medium transition tracking-widest"
                        >
                          <Play className="w-3 h-3 fill-white text-white" />
                          <span>
                            SHOWREEL
                          </span>
                        </a>
                      )}
                      {selectedFilm.driveUrl && (
                        <a
                          href={selectedFilm.driveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            isBahkanFilm
                              ? "flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-full text-[9px] font-mono font-bold transition tracking-widest shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                              : "flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-3 py-1.5 rounded-full text-[9px] font-mono font-medium transition tracking-widest"
                          }
                        >
                          {isBahkanFilm ? (
                            <Play className="w-3.5 h-3.5 fill-white text-white" />
                          ) : (
                            <ExternalLink className="w-3 h-3 text-white" />
                          )}
                          <span>
                            {isBahkanFilm
                              ? (lang === 'id' ? 'TONTON FILM' : 'WATCH FILM')
                              : (selectedFilm.driveUrl.includes('youtube.com') || selectedFilm.driveUrl.includes('youtu.be')
                                ? 'SHOWREEL'
                                : 'DRIVE / PDF')}
                          </span>
                        </a>
                      )}
                      {selectedFilm.trailerUrl && (
                        <a
                          href={selectedFilm.trailerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            isLawanFilm
                              ? "flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-full text-[9px] font-mono font-bold transition tracking-widest shadow-[0_0_15px_rgba(220,38,38,0.3)] cursor-pointer"
                              : "flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-full text-[9px] font-mono font-bold transition tracking-widest shadow-[0_0_15px_rgba(16,185,129,0.3)] cursor-pointer"
                          }
                        >
                          <Play className="w-3 h-3 fill-white text-white" />
                          <span>
                            {isLawanFilm
                              ? (lang === 'id' ? 'TONTON FILM' : 'WATCH FILM')
                              : isBahkanFilm
                                ? (lang === 'id' ? 'TEASER FILM' : 'TEASER FILM')
                                : 'TRAILER FILM'}
                          </span>
                        </a>
                      )}
                      {selectedFilm.btsUrl && (
                        <a
                          href={selectedFilm.btsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 bg-amber-600 hover:bg-amber-700 text-white px-4 py-1.5 rounded-full text-[9px] font-mono font-bold transition tracking-widest shadow-[0_0_15px_rgba(245,158,11,0.3)] cursor-pointer"
                        >
                          <ImageIcon className="w-3 h-3 text-white" />
                          <span>
                            BTS
                          </span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <h4 className="text-[9px] font-mono uppercase text-white/40 tracking-[0.25em]">
                      {lang === 'id' ? 'Ringkasan Produksi' : 'Production Synopsis'}
                    </h4>
                    <p className="text-white/70 text-xs leading-relaxed text-justify font-sans whitespace-pre-line">
                      {t(selectedFilm.description)}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
