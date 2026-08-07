import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  MessageSquare, 
  Plus, 
  Trash2, 
  Send, 
  ExternalLink, 
  User, 
  Building, 
  FileText,
  Instagram,
  Facebook,
  Linkedin,
  Phone
} from 'lucide-react';
import { PortfolioData, ContactInfo } from '../types';

interface ContactSectionProps {
  data: PortfolioData;
  setData: React.Dispatch<React.SetStateAction<PortfolioData>>;
  lang: 'id' | 'en';
  isEditMode: boolean;
  onAddItem: (type: 'contact') => void;
  onEditItem: (type: 'contact', item: ContactInfo) => void;
}

export default function ContactSection({
  data,
  setData,
  lang,
  isEditMode,
  onAddItem,
  onEditItem
}: ContactSectionProps) {
  // Recruiter Quick Connect Form
  const [senderName, setSenderName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [message, setMessage] = useState('');

  const t = (bilingual: { id: string; en: string }) => {
    return lang === 'id' ? bilingual.id : bilingual.en;
  };

  const getContactByPlatform = (platform: string) => {
    return data.contacts.find(c => c.platform.toLowerCase() === platform.toLowerCase());
  };

  const handleDelete = (id: string) => {
    if (confirm(lang === 'id' ? 'Apakah Anda yakin ingin menghapus kontak ini?' : 'Are you sure you want to delete this contact info?')) {
      setData(prev => ({
        ...prev,
        contacts: prev.contacts.filter(c => c.id !== id)
      }));
    }
  };

  // Pre-formatted triggers
  const handleSendWhatsApp = () => {
    const waContact = getContactByPlatform('whatsapp');
    if (!waContact) {
      alert(lang === 'id' ? 'Nomor WhatsApp belum dikonfigurasi!' : 'WhatsApp contact is not configured!');
      return;
    }

    const nameStr = senderName ? `Nama saya *${senderName}*` : 'Saya';
    const companyStr = companyName ? ` dari *${companyName}*` : '';
    const roleStr = jobRole ? ` terkait posisi *${jobRole}*` : '';
    const msgStr = message ? `\n\n*Pesan:*\n"${message}"` : '';

    const text = `Halo Deka Aryanto, ${nameStr}${companyStr}. Saya tertarik dengan portofolio Anda${roleStr}.${msgStr}\n\nMari berdiskusi lebih lanjut!`;
    const cleanNumber = waContact.value.replace(/[^0-9+]/g, ''); // leave only digits and plus
    const formattedNumber = cleanNumber.startsWith('+') ? cleanNumber.slice(1) : cleanNumber;
    
    window.open(`https://wa.me/${formattedNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleSendEmail = () => {
    const emailContact = getContactByPlatform('email');
    if (!emailContact) {
      alert(lang === 'id' ? 'Alamat Email belum dikonfigurasi!' : 'Email contact is not configured!');
      return;
    }

    const subject = `Job Opportunity Offer for Deka Aryanto - ${companyName || 'Recruiter'}`;
    const nameStr = senderName ? `My name is ${senderName}` : 'I';
    const companyStr = companyName ? ` from ${companyName}` : '';
    const roleStr = jobRole ? ` regarding the ${jobRole} position` : '';
    const msgStr = message ? `\n\nMessage Details:\n"${message}"` : '';

    const body = `Hi Deka Aryanto,\n\n${nameStr}${companyStr}. I came across your cinema portfolio and am very impressed. I would love to connect with you${roleStr}.${msgStr}\n\nLooking forward to hearing from you.\n\nBest regards,\n${senderName || 'Recruiter'}`;

    window.open(`mailto:${emailContact.value}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram': return <Instagram className="w-5 h-5 text-neutral-400" />;
      case 'facebook': return <Facebook className="w-5 h-5 text-neutral-400" />;
      case 'linkedin': return <Linkedin className="w-5 h-5 text-neutral-400" />;
      case 'whatsapp': return <Phone className="w-5 h-5 text-neutral-400" />;
      case 'email': return <Mail className="w-5 h-5 text-neutral-400" />;
      case 'tiktok': return (
        <svg className="w-5 h-5 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      );
      default: return <ExternalLink className="w-5 h-5 text-neutral-400" />;
    }
  };

  const getContactDisplayValue = (contact: ContactInfo) => {
    if (contact.platform === 'instagram') {
      if (contact.value.includes('instagram.com/')) {
        try {
          const parts = contact.value.split('instagram.com/');
          if (parts[1]) {
            const username = parts[1].split('?')[0].replace(/\/$/, '');
            return `@${username}`;
          }
        } catch (e) {}
      }
    }
    if (contact.platform === 'tiktok') {
      if (contact.value.includes('tiktok.com/')) {
        try {
          const parts = contact.value.split('tiktok.com/');
          if (parts[1]) {
            const rawUser = parts[1].split('?')[0].replace(/\/$/, '');
            const username = rawUser.startsWith('@') ? rawUser : `@${rawUser}`;
            return username;
          }
        } catch (e) {}
      }
    }
    if (contact.platform === 'linkedin') {
      if (contact.value.includes('linkedin.com/in/')) {
        try {
          const parts = contact.value.split('linkedin.com/in/');
          if (parts[1]) {
            const username = parts[1].split('?')[0].replace(/\/$/, '');
            return `in/${username}`;
          }
        } catch (e) {}
      }
    }
    return contact.value;
  };

  const isFormValid = senderName.trim() !== '';

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-6 gap-4">
        <div>
          <span className="text-[10px] font-mono tracking-[0.25em] text-white/40 uppercase">
            {lang === 'id' ? 'HUBUNGI SAYA LANGSUNG' : 'GET IN TOUCH DIRECTLY'}
          </span>
          <h2 className="font-sans font-bold text-3xl text-white uppercase tracking-tight mt-1">
            {lang === 'id' ? 'Kontak Saya' : 'Contact Me'}
          </h2>
        </div>

        {isEditMode && (
          <button
            onClick={() => onAddItem('contact')}
            className="flex items-center gap-2 bg-white hover:bg-neutral-200 text-black px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition self-start md:self-center"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Tambah Kontak' : 'Add Contact'}</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* RECRUITER PORTAL FORM */}
        <div className="lg:col-span-7 bg-[#080808] border border-white/10 rounded p-6 md:p-8 space-y-6 shadow-2xl">
          <div className="space-y-1.5 border-b border-white/5 pb-4">
            <span className="text-white/40 font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
              {lang === 'id' ? 'KONTAK INSTAN PENYALUR KERJA' : 'RECRUITER QUICK CONNECT'}
            </span>
            <h3 className="font-sans font-bold text-lg text-white uppercase tracking-wider">
              {lang === 'id' ? 'Kirim Penawaran Kerja' : 'Inquire / Offer a Role'}
            </h3>
            <p className="text-white/40 text-xs font-sans">
              {lang === 'id' 
                ? 'Isi formulir cepat di bawah ini untuk mengirim pesan profesional yang diformat otomatis langsung ke WhatsApp atau Email saya.'
                : 'Fill in this fast form to compose an automated professional message directly to my WhatsApp or Email.'}
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[9px] font-medium text-white/40 uppercase tracking-[0.2em] mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-white/20" />
                  <span>{lang === 'id' ? 'Nama Anda' : 'Your Name'} *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={lang === 'id' ? 'Contoh: Bapak HRD' : 'e.g. HR Manager'}
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full bg-[#050505] border border-white/10 rounded px-3 py-2 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition font-sans text-xs"
                />
              </div>

              <div>
                <label className="block text-[9px] font-medium text-white/40 uppercase tracking-[0.2em] mb-1.5 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-white/20" />
                  <span>{lang === 'id' ? 'Perusahaan / Instansi' : 'Company Name'}</span>
                </label>
                <input
                  type="text"
                  placeholder={lang === 'id' ? 'Contoh: Netflix Indonesia' : 'e.g. Production Studio'}
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full bg-[#050505] border border-white/10 rounded px-3 py-2 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition font-sans text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-[9px] font-medium text-white/40 uppercase tracking-[0.2em] mb-1.5 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-white/20" />
                <span>{lang === 'id' ? 'Posisi / Jobdesk Ditawarkan' : 'Job Role / Freelance Position'}</span>
              </label>
              <input
                type="text"
                placeholder={lang === 'id' ? 'Contoh: Script Writer / Assistant Director' : 'e.g. Video Editor / Assistant Director'}
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
                className="w-full bg-[#050505] border border-white/10 rounded px-3 py-2 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition font-sans text-xs"
              />
            </div>

            <div>
              <label className="block text-[9px] font-medium text-white/40 uppercase tracking-[0.2em] mb-1.5 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-white/20" />
                <span>{lang === 'id' ? 'Detail Pesan Tambahan' : 'Additional Message / Details'}</span>
              </label>
              <textarea
                rows={4}
                placeholder={lang === 'id' ? 'Tulis rincian proyek film atau jadwal meeting...' : 'Describe film shoot schedules, budget estimates, or project requirements...'}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#050505] border border-white/10 rounded p-3 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition font-sans text-xs resize-none"
              />
            </div>

            {/* SEND BUTTONS GROUP */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-white/5">
              <button
                type="button"
                onClick={handleSendWhatsApp}
                disabled={!isFormValid}
                className={`flex items-center justify-center gap-2 px-5 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition duration-300 ${
                  isFormValid 
                    ? 'bg-white hover:bg-neutral-200 text-black cursor-pointer shadow-md' 
                    : 'bg-white/5 text-white/25 cursor-not-allowed border border-white/5'
                }`}
              >
                <Phone className="w-3.5 h-3.5 fill-current shrink-0" />
                <span>{lang === 'id' ? 'Kirim ke WhatsApp' : 'Send to WhatsApp'}</span>
              </button>

              <button
                type="button"
                onClick={handleSendEmail}
                disabled={!isFormValid}
                className={`flex items-center justify-center gap-2 px-5 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition duration-300 ${
                  isFormValid 
                    ? 'bg-white/5 hover:bg-white/10 border border-white/10 text-white cursor-pointer shadow-sm' 
                    : 'bg-[#050505] text-white/25 cursor-not-allowed border border-white/5'
                }`}
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span>{lang === 'id' ? 'Kirim ke Email' : 'Send to Email'}</span>
              </button>
            </div>
            {!isFormValid && (
              <span className="text-[9px] text-white/30 font-mono text-center block mt-1.5 tracking-wider">
                * {lang === 'id' ? 'Masukkan nama Anda untuk mengaktifkan tombol kirim' : 'Fill in your name to enable sending options'}
              </span>
            )}
          </div>
        </div>

        {/* SOCIAL LINKS AND CONTACT CARDS */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#080808] border border-white/10 rounded p-6 shadow-2xl">
            <h3 className="font-sans font-bold text-[10px] text-white/40 uppercase tracking-[0.25em] border-b border-white/5 pb-3 mb-4">
              {lang === 'id' ? 'Semua Jaringan Sosial' : 'Social Channels'}
            </h3>

            {data.contacts.length === 0 ? (
              <div className="text-white/40 font-mono text-xs text-center py-6">
                {lang === 'id' ? 'Belum ada kontak.' : 'No contact channels listed.'}
              </div>
            ) : (
              <div className="space-y-3">
                {data.contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="flex items-center justify-between p-3 rounded bg-[#050505] border border-white/10 hover:border-white/30 group transition duration-350"
                  >
                    <a
                      href={
                        contact.platform === 'email' 
                          ? `mailto:${contact.value}` 
                          : contact.platform === 'whatsapp' 
                            ? `https://wa.me/${contact.value.replace(/[^0-9]/g, '')}` 
                            : contact.platform === 'instagram' && contact.value.startsWith('@')
                              ? `https://instagram.com/${contact.value.slice(1)}`
                              : contact.platform === 'tiktok' && contact.value.startsWith('@')
                                ? `https://tiktok.com/${contact.value}`
                                : contact.value
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 flex-1 cursor-pointer min-w-0"
                    >
                      <div className="bg-white/5 p-2 rounded border border-white/10 text-white/60 group-hover:bg-white group-hover:text-black group-hover:border-white transition shrink-0">
                        {getPlatformIcon(contact.platform)}
                      </div>
                      <div className="min-w-0">
                        <span className="text-[9px] font-mono uppercase text-white/40 tracking-[0.15em] font-bold block">
                          {contact.label}
                        </span>
                        <span className="text-xs text-white/80 font-medium truncate block max-w-[180px]">
                          {getContactDisplayValue(contact)}
                        </span>
                      </div>
                    </a>

                    {/* Delete / Edit in place */}
                    {isEditMode && (
                      <div className="flex items-center gap-1 pl-2 shrink-0">
                        <button
                          onClick={() => onEditItem('contact', contact)}
                          className="p-1 hover:bg-white/5 text-white/40 hover:text-white rounded transition"
                          title="Edit"
                        >
                          <Plus className="w-3.5 h-3.5 rotate-45" /> {/* Just edit trigger */}
                        </button>
                        <button
                          onClick={() => handleDelete(contact.id)}
                          className="p-1 hover:bg-white/5 text-white/40 hover:text-red-400 rounded transition"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
