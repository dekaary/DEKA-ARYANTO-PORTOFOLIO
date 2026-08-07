import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Trash2, Plus, Film, BookOpen, PenTool, BarChart3, GraduationCap, School, Camera, Upload, Link as LinkIcon } from 'lucide-react';
import { PortfolioData, Skill } from '../types';

interface AboutSectionProps {
  data: PortfolioData;
  setData: React.Dispatch<React.SetStateAction<PortfolioData>>;
  lang: 'id' | 'en';
  isEditMode: boolean;
}

export default function AboutSection({ data, setData, lang, isEditMode }: AboutSectionProps) {
  const [newSkillText, setNewSkillText] = useState({ hard: '', soft: '', tool: '' });
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [tempUrl, setTempUrl] = useState(data.profileImageUrl || '');

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setData(prev => ({
          ...prev,
          profileImageUrl: reader.result
        }));
        setTempUrl(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempUrl.trim()) {
      setData(prev => ({
        ...prev,
        profileImageUrl: tempUrl.trim()
      }));
      setShowUrlInput(false);
    }
  };

  const t = (bilingual: { id: string; en: string }) => {
    return lang === 'id' ? bilingual.id : bilingual.en;
  };

  const handleTextChange = (field: 'aboutSummary', subField: 'id' | 'en', val: string) => {
    setData(prev => ({
      ...prev,
      [field]: {
        ...prev[field],
        [subField]: val
      }
    }));
  };

  const addSkill = (e: React.FormEvent, type: 'hard' | 'soft' | 'tool') => {
    e.preventDefault();
    const text = newSkillText[type].trim();
    if (!text) return;

    const newSkill: Skill = {
      id: `${type}_${Date.now()}`,
      name: { id: text, en: text },
      type
    };

    setData(prev => ({
      ...prev,
      skills: [...prev.skills, newSkill]
    }));

    setNewSkillText(prev => ({ ...prev, [type]: '' }));
  };

  const removeSkill = (id: string) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s.id !== id)
    }));
  };

  const specialties = [
    { title: 'Filmmaking', icon: Film, descId: 'Penyutradaraan dan produksi visual berkualitas.', descEn: 'Directing and high-quality visual production.' },
    { title: 'Script Writer', icon: PenTool, descId: 'Penulisan skenario dramatis & penceritaan kuat.', descEn: 'Dramatic scriptwriting & powerful storytelling.' },
    { title: 'Creative Content', icon: BookOpen, descId: 'Pembuatan konten travel & visual kreatif.', descEn: 'Travel and creative visual content creation.' },
    { title: 'Social Media Analysis', icon: BarChart3, descId: 'Analisis jangkauan & strategi peningkatan tren.', descEn: 'Reach analytics & trend acceleration strategies.' },
  ];

  return (
    <div className="space-y-12">
      {/* Intro Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-white/5 pb-10">
        <div className="md:col-span-8 space-y-4">
          <h2 className="font-bold text-[#F0F0F0] uppercase tracking-tighter leading-none custom-headline">
            DEKA ARYANTO
          </h2>
          <div className="flex flex-col gap-1.5 text-xs font-mono text-white/40">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-white/20 shrink-0" />
              <span className="custom-georgia-text">{t(data.program)}</span>
            </div>
            <div className="flex items-center gap-2">
              <School className="w-4 h-4 text-white/20 shrink-0" />
              <span className="custom-georgia-text">{t(data.faculty)} — {t(data.university)}</span>
            </div>
          </div>
        </div>

        {/* Profile Photo Column */}
        <div className="md:col-span-4 flex flex-col items-center md:items-end gap-3">
          <div className="relative group w-44 h-44 md:w-56 md:h-56 rounded overflow-hidden border border-white/10 shadow-2xl bg-black">
            <img
              src={data.profileImageUrl || "/src/assets/images/regenerated_image_1784225126180.png"}
              alt="Deka Aryanto Portrait"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            {isEditMode && (
              <label className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center gap-1.5 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="w-5 h-5 text-white/80" />
                <span className="text-[9px] font-mono uppercase tracking-widest text-white/90">
                  {lang === 'id' ? 'Unggah Foto' : 'Upload Photo'}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </label>
            )}
          </div>

          {/* Edit Mode Custom URL Option */}
          {isEditMode && (
            <div className="w-full max-w-[200px] flex flex-col items-center md:items-end gap-1.5">
              <button
                onClick={() => setShowUrlInput(!showUrlInput)}
                className="text-[9px] font-mono text-white/40 hover:text-white uppercase tracking-wider flex items-center gap-1 transition"
              >
                <LinkIcon className="w-3 h-3" />
                <span>{lang === 'id' ? 'Masukkan URL Gambar' : 'Enter Image URL'}</span>
              </button>

              {showUrlInput && (
                <form onSubmit={handleUrlSubmit} className="flex gap-1.5 w-full mt-1">
                  <input
                    type="text"
                    value={tempUrl}
                    onChange={(e) => setTempUrl(e.target.value)}
                    placeholder="https://..."
                    className="bg-[#080808] border border-white/10 rounded px-2 py-1 text-[10px] text-white placeholder-white/20 focus:outline-none focus:border-white/30 flex-1 font-mono"
                  />
                  <button
                    type="submit"
                    className="bg-white hover:bg-neutral-200 text-black px-2 py-1 rounded text-[10px] font-bold uppercase transition"
                  >
                    OK
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Specialties Bento-ish Grid */}
      <div>
        <h3 className="font-bold uppercase tracking-[0.3em] text-white/40 mb-6 custom-courier-text">
          {lang === 'id' ? 'Keahlian Utama' : 'Core Specialties'}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {specialties.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#080808] border border-white/10 p-3.5 rounded hover:border-white/30 transition duration-300 flex flex-col justify-between h-24 group"
              >
                <div className="bg-white/5 border border-white/10 p-1.5 rounded-full w-fit text-white/80 group-hover:bg-white group-hover:text-black transition duration-300">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-[10px] text-white tracking-widest uppercase">
                    {spec.title}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Summary Paragraph */}
      <div className="space-y-4">
        <h3 className="font-bold uppercase tracking-[0.3em] text-white/40 custom-courier-text">
          {lang === 'id' ? 'Ringkasan Pribadi' : 'Personal Biography'}
        </h3>

        {isEditMode ? (
          <div className="space-y-4 bg-[#080808] border border-white/10 p-4 rounded">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">
                {lang === 'id' ? 'Edit Deskripsi (Bahasa Aktif)' : 'Edit Biography (Active Language)'}
              </span>
              <span className="text-[9px] bg-white/10 text-white px-2 py-0.5 rounded-full font-mono uppercase">
                {lang.toUpperCase()}
              </span>
            </div>
            <textarea
              className="w-full bg-[#050505] border border-white/10 rounded p-3 text-xs text-white/80 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition font-sans leading-relaxed resize-y"
              rows={6}
              value={data.aboutSummary[lang]}
              onChange={(e) => handleTextChange('aboutSummary', lang, e.target.value)}
            />
          </div>
        ) : (
          <p className="text-white/70 leading-relaxed text-sm max-w-3xl text-justify custom-biography-text">
            {t(data.aboutSummary)}
          </p>
        )}
      </div>

      {/* Hard Skills, Soft Skills & Tools */}
      <div className="border-t border-white/5 pt-10">
        <h3 className="font-bold uppercase tracking-[0.3em] text-white/40 mb-8 custom-courier-text">
          {lang === 'id' ? 'Keahlian & Piranti Kerja' : 'Skills & Toolkit'}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* HARD SKILLS */}
          <div className="space-y-4">
            <h4 className="font-bold text-white/60 uppercase tracking-[0.2em] border-b border-white/5 pb-2 custom-libertinus-text">
              {lang === 'id' ? (
                <>
                  Keahlian Teknis
                  <br />
                  (Hard Skill)
                </>
              ) : (
                'Hard Skills'
              )}
            </h4>
            
            <div className="flex flex-wrap gap-1.5">
              {data.skills.filter(s => s.type === 'hard').map(skill => (
                <span
                  key={skill.id}
                  className="bg-white/5 border border-white/10 text-white/80 text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-sans flex items-center gap-1.5 group hover:border-white/30 transition"
                >
                  <span className="custom-arial-text">{t(skill.name)}</span>
                  {isEditMode && (
                    <button
                      onClick={() => removeSkill(skill.id)}
                      className="text-white/30 hover:text-red-400 transition"
                      title="Remove Skill"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  )}
                </span>
              ))}
            </div>

            {isEditMode && (
              <form onSubmit={(e) => addSkill(e, 'hard')} className="flex gap-2 pt-2">
                <input
                  type="text"
                  placeholder={lang === 'id' ? 'Tambah Hard Skill...' : 'Add Hard Skill...'}
                  value={newSkillText.hard}
                  onChange={(e) => setNewSkillText(p => ({ ...p, hard: e.target.value }))}
                  className="bg-[#050505] border border-white/10 rounded px-2.5 py-1.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-white/30 flex-1"
                />
                <button
                  type="submit"
                  className="bg-white hover:bg-neutral-200 text-black px-2.5 py-1.5 rounded transition text-xs font-semibold"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* TOOLS */}
          <div className="space-y-4">
            <h4 className="font-bold text-white/60 uppercase tracking-[0.2em] border-b border-white/5 pb-2 custom-libertinus-text">
              {lang === 'id' ? (
                <>
                  Alat / Aplikasi
                  <br />
                  (Tools)
                </>
              ) : (
                'Tools'
              )}
            </h4>

            <div className="flex flex-wrap gap-1.5">
              {data.skills.filter(s => s.type === 'tool').map(skill => (
                <span
                  key={skill.id}
                  className="bg-white/5 border border-white/10 text-white/80 text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-sans flex items-center gap-1.5 group hover:border-white/30 transition"
                >
                  <span className="custom-arial-text">{t(skill.name)}</span>
                  {isEditMode && (
                    <button
                      onClick={() => removeSkill(skill.id)}
                      className="text-white/30 hover:text-red-400 transition"
                      title="Remove Tool"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  )}
                </span>
              ))}
            </div>

            {isEditMode && (
              <form onSubmit={(e) => addSkill(e, 'tool')} className="flex gap-2 pt-2">
                <input
                  type="text"
                  placeholder={lang === 'id' ? 'Tambah Aplikasi/Tool...' : 'Add Application/Tool...'}
                  value={newSkillText.tool}
                  onChange={(e) => setNewSkillText(p => ({ ...p, tool: e.target.value }))}
                  className="bg-[#050505] border border-white/10 rounded px-2.5 py-1.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-white/30 flex-1"
                />
                <button
                  type="submit"
                  className="bg-white hover:bg-neutral-200 text-black px-2.5 py-1.5 rounded transition text-xs font-semibold"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* SOFT SKILLS */}
          <div className="space-y-4">
            <h4 className="font-bold text-white/60 uppercase tracking-[0.2em] border-b border-white/5 pb-2 custom-libertinus-text">
              {lang === 'id' ? (
                <>
                  Keahlian Interpersonal
                  <br />
                  (Soft Skill)
                </>
              ) : (
                'Soft Skills'
              )}
            </h4>

            <div className="flex flex-wrap gap-1.5">
              {data.skills.filter(s => s.type === 'soft').map(skill => (
                <span
                  key={skill.id}
                  className="bg-white/5 border border-white/10 text-white/80 text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-sans flex items-center gap-1.5 group hover:border-white/30 transition"
                >
                  <span className="custom-arial-text">{t(skill.name)}</span>
                  {isEditMode && (
                    <button
                      onClick={() => removeSkill(skill.id)}
                      className="text-white/30 hover:text-red-400 transition"
                      title="Remove Soft Skill"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  )}
                </span>
              ))}
            </div>

            {isEditMode && (
              <form onSubmit={(e) => addSkill(e, 'soft')} className="flex gap-2 pt-2">
                <input
                  type="text"
                  placeholder={lang === 'id' ? 'Tambah Soft Skill...' : 'Add Soft Skill...'}
                  value={newSkillText.soft}
                  onChange={(e) => setNewSkillText(p => ({ ...p, soft: e.target.value }))}
                  className="bg-[#050505] border border-white/10 rounded px-2.5 py-1.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-white/30 flex-1"
                />
                <button
                  type="submit"
                  className="bg-white hover:bg-neutral-200 text-black px-2.5 py-1.5 rounded transition text-xs font-semibold"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
