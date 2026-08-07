import React from 'react';
import { motion } from 'motion/react';
import { Plus, Edit2, Trash2, GraduationCap, Calendar, Award, ExternalLink, FileText } from 'lucide-react';
import { PortfolioData, Education } from '../types';

interface EducationSectionProps {
  data: PortfolioData;
  setData: React.Dispatch<React.SetStateAction<PortfolioData>>;
  lang: 'id' | 'en';
  isEditMode: boolean;
  onEditItem: (type: 'education', item: Education) => void;
  onAddItem: (type: 'education') => void;
}

export default function EducationSection({
  data,
  setData,
  lang,
  isEditMode,
  onEditItem,
  onAddItem
}: EducationSectionProps) {

  const t = (bilingual: { id: string; en: string }) => {
    return lang === 'id' ? bilingual.id : bilingual.en;
  };

  const handleDelete = (id: string) => {
    if (confirm(lang === 'id' ? 'Apakah Anda yakin ingin menghapus pendidikan ini?' : 'Are you sure you want to delete this education entry?')) {
      setData(prev => ({
        ...prev,
        education: prev.education.filter(edu => edu.id !== id)
      }));
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-6 gap-4">
        <div>
          <span className="text-[10px] font-mono tracking-[0.25em] text-white/40 uppercase">
            {lang === 'id' ? 'RIWAYAT AKADEMIK' : 'ACADEMIC PATHWAY'}
          </span>
          <h2 className="custom-spacemono font-bold text-3xl text-white uppercase tracking-tight mt-1">
            {lang === 'id' ? 'Pendidikan' : 'Education'}
          </h2>
        </div>

        {isEditMode && (
          <button
            onClick={() => onAddItem('education')}
            className="flex items-center gap-2 bg-white hover:bg-neutral-200 text-black px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition self-start md:self-center"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Tambah Pendidikan' : 'Add Education'}</span>
          </button>
        )}
      </div>

      {/* Timeline Wrapper */}
      <div className="relative border-l border-white/10 ml-3 md:ml-6 pl-6 md:pl-10 space-y-12 py-4">
        {data.education.length === 0 ? (
          <div className="text-white/40 font-mono text-xs text-center py-10 border border-dashed border-white/10 rounded">
            {lang === 'id' ? 'Belum ada data pendidikan. Aktifkan Mode Edit untuk menambah.' : 'No education entries. Enable Edit Mode to add.'}
          </div>
        ) : (
          data.education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Bullet */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 bg-black border border-white/30 w-2.5 h-2.5 rounded-full group-hover:border-white transition duration-300 flex items-center justify-center">
                <div className="w-1 h-1 bg-white/40 rounded-full group-hover:bg-white transition" />
              </div>

              {/* Card Body */}
              <div className="bg-[#080808] border border-white/10 p-6 rounded hover:border-white/30 transition duration-300 relative">
                {/* Edit Controls */}
                {isEditMode && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#050505] p-1 rounded border border-white/10">
                    <button
                      onClick={() => onEditItem('education', edu)}
                      className="p-1.5 hover:bg-white/5 text-white/40 hover:text-white rounded transition"
                      title={lang === 'id' ? 'Ubah' : 'Edit'}
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(edu.id)}
                      className="p-1.5 hover:bg-white/5 text-white/40 hover:text-red-400 rounded transition"
                      title={lang === 'id' ? 'Hapus' : 'Delete'}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-white/40 uppercase tracking-widest mb-3">
                  <span className="flex items-center gap-1 custom-georgia-12">
                    <Calendar className="w-3 h-3" />
                    {t(edu.period)}
                  </span>
                  <span className="hidden md:inline text-white/10">•</span>
                  <span className="flex items-center gap-1 text-white/80 font-bold bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10 custom-georgia-12">
                    <Award className="w-3 h-3 text-white/50" />
                    {lang === 'id' ? `IPK/Nilai: ${edu.gpa}` : `GPA/Grade: ${edu.gpa}`}
                  </span>
                </div>

                <h3 className="custom-kodemono-20 font-bold text-white uppercase tracking-wider">
                  {t(edu.school)}
                </h3>
                <p className="text-white/50 custom-arial-14 mt-1 font-medium tracking-wide uppercase">
                  {t(edu.major)}
                </p>
                <p className="text-white/40 custom-arial-14 leading-relaxed mt-4 text-justify whitespace-pre-line">
                  {t(edu.description)}
                </p>
                {edu.links && edu.links.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
                    <span className="text-[9px] font-mono uppercase text-emerald-400/60 tracking-[0.2em] font-bold flex items-center gap-1.5">
                      <ExternalLink className="w-3 h-3 text-emerald-500/50" />
                      <span>{lang === 'id' ? 'Dokumen Pendukung' : 'Supporting Documents'}</span>
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1.5">
                      {edu.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-3 bg-neutral-900/60 hover:bg-emerald-950/20 active:bg-emerald-950/40 border border-white/10 hover:border-emerald-500/40 px-3.5 py-2.5 rounded text-xs text-white/80 hover:text-white transition duration-200 cursor-pointer group/btn"
                        >
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-emerald-400 group-hover/btn:scale-110 transition duration-200" />
                            <span className="font-semibold tracking-wide uppercase">{t(link.label)}</span>
                          </div>
                          <span className="text-[10px] font-mono text-white/30 group-hover/btn:text-emerald-400 transition duration-200">Drive ↗</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
