import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, ExternalLink, Globe, FileCode, FileJson, AlertCircle } from 'lucide-react';
import { PortfolioData } from '../types';

interface GoogleSitesModalProps {
  isOpen: boolean;
  onClose: () => void;
  portfolioData: PortfolioData;
  onRestore: (data: PortfolioData) => void;
  lang: 'id' | 'en';
}

export default function GoogleSitesModal({
  isOpen,
  onClose,
  portfolioData,
  onRestore,
  lang
}: GoogleSitesModalProps) {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [jsonInput, setJsonInput] = useState('');
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [externalUrl, setExternalUrl] = useState('');
  
  // Create safe Base64 encoding
  const getEmbedUrl = () => {
    try {
      const utf8Bytes = new TextEncoder().encode(JSON.stringify(portfolioData));
      let binary = "";
      for (let i = 0; i < utf8Bytes.length; i++) {
        binary += String.fromCharCode(utf8Bytes[i]);
      }
      const base64 = btoa(binary);
      // Construct URL with query param and embed flag
      const baseUrl = window.location.origin + window.location.pathname;
      return `${baseUrl}?config=${encodeURIComponent(base64)}&embed=true`;
    } catch (e) {
      console.error(e);
      return window.location.href;
    }
  };

  const getEmbedCode = (url: string) => {
    return `<iframe src="${url}" style="border:0px; width:100%; height:800px;" allowfullscreen="true" loading="lazy"></iframe>`;
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleApplyJson = () => {
    try {
      setJsonError(null);
      const parsed = JSON.parse(jsonInput);
      if (parsed && typeof parsed === 'object' && parsed.name && parsed.nickname) {
        onRestore(parsed);
        setJsonInput('');
        alert(lang === 'id' ? 'Konfigurasi berhasil diterapkan!' : 'Configuration applied successfully!');
      } else {
        setJsonError(lang === 'id' ? 'Format JSON tidak valid! Pastikan ada field "name" dan "nickname".' : 'Invalid JSON format! Ensure "name" and "nickname" fields exist.');
      }
    } catch (e: any) {
      setJsonError(lang === 'id' ? `Gagal membaca JSON: ${e.message}` : `Failed to parse JSON: ${e.message}`);
    }
  };

  const generatedUrl = getEmbedUrl();
  const generatedEmbedCode = getEmbedCode(generatedUrl);
  
  const externalGeneratedUrl = externalUrl.trim() 
    ? `${window.location.origin}${window.location.pathname}?src=${encodeURIComponent(externalUrl.trim())}&embed=true`
    : '';
  const externalGeneratedEmbedCode = externalGeneratedUrl ? getEmbedCode(externalGeneratedUrl) : '';

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative bg-neutral-950 border border-white/10 rounded-lg max-w-2xl w-full max-h-[85vh] overflow-y-auto z-10 flex flex-col p-6 text-neutral-200 no-scrollbar"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-blue-400" />
              <div>
                <h3 className="font-sans font-bold text-base uppercase tracking-widest text-white">
                  {lang === 'id' ? 'Integrasi Google Sites' : 'Google Sites Integration'}
                </h3>
                <p className="text-2xs font-mono text-neutral-400 uppercase tracking-wider mt-0.5">
                  {lang === 'id' ? 'Sematkan & Publikasikan Portofolio' : 'Embed & Publish Portfolio'}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-white p-1 rounded-full hover:bg-white/5 transition"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="space-y-6 text-xs leading-relaxed text-neutral-300">
            {/* Guide Steps */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-lg space-y-3">
              <h4 className="font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <FileCode className="w-4 h-4 text-blue-400" />
                {lang === 'id' ? 'Cara Memasang di Google Sites' : 'How to Embed on Google Sites'}
              </h4>
              <ol className="list-decimal pl-4 space-y-2 text-neutral-300">
                <li>
                  {lang === 'id' 
                    ? 'Lakukan kustomisasi portofolio Anda di aplikasi ini (aktifkan sakelar "Mode Edit" di sidebar).' 
                    : 'Customize your portfolio in this app (turn on "Edit Mode" in the sidebar).'}
                </li>
                <li>
                  {lang === 'id'
                    ? 'Pilih salah satu metode embed di bawah ini, lalu salin kodenya.'
                    : 'Choose one of the embed methods below, then copy the generated code.'}
                </li>
                <li>
                  {lang === 'id'
                    ? 'Buka editor Google Sites Anda, klik menu "Sematkan" (Embed) -> pilih tab "Sematkan Kode" (Embed Code).'
                    : 'Open your Google Sites editor, click "Embed" -> select the "Embed Code" tab.'}
                </li>
                <li>
                  {lang === 'id'
                    ? 'Tempelkan kode tersebut, klik "Berikutnya", lalu klik "Sematkan"!'
                    : 'Paste the code, click "Next", and then click "Insert"!'}
                </li>
              </ol>
            </div>

            {/* Method A: URL base64 */}
            <div className="border border-white/10 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white uppercase tracking-wider">
                  {lang === 'id' ? 'Metode 1: Embed Otomatis (Tanpa Hosting)' : 'Method 1: Automatic Embed (No Hosting)'}
                </h4>
                <span className="bg-blue-950/40 border border-blue-900/40 text-blue-400 px-2 py-0.5 rounded text-[9px] font-mono uppercase font-bold">
                  {lang === 'id' ? 'Sangat Mudah' : 'Easiest'}
                </span>
              </div>
              <p className="text-neutral-400 text-2xs leading-relaxed">
                {lang === 'id'
                  ? 'Metode ini mengodekan seluruh konten portofolio Anda langsung ke dalam tautan. Tidak perlu database atau hosting eksternal! Sempurna untuk data teks portofolio standar.'
                  : 'This method encodes your entire customized portfolio directly inside the URL. No databases or custom hosts required! Perfect for standard portfolios.'}
              </p>

              <div className="space-y-2 mt-2">
                <label className="text-2xs font-mono text-neutral-400 block uppercase">
                  {lang === 'id' ? 'Kode HTML Embed (Iframe)' : 'HTML Embed Code (Iframe)'}
                </label>
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    readOnly
                    value={generatedEmbedCode}
                    className="flex-1 bg-neutral-900 border border-white/10 rounded px-3 py-2 text-[10px] font-mono text-white/70 select-all"
                  />
                  <button
                    onClick={() => handleCopy(generatedEmbedCode, 'embed')}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded px-3 py-2 flex items-center gap-1 shrink-0 font-mono text-2xs transition"
                  >
                    {copiedType === 'embed' ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-2xs font-mono text-neutral-400 block uppercase">
                  {lang === 'id' ? 'Tautan Embed Langsung' : 'Direct Embed URL'}
                </label>
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    readOnly
                    value={generatedUrl}
                    className="flex-1 bg-neutral-900 border border-white/10 rounded px-3 py-2 text-[10px] font-mono text-white/50 select-all truncate"
                  />
                  <button
                    onClick={() => handleCopy(generatedUrl, 'url')}
                    className="bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded px-3 py-2 flex items-center gap-1 shrink-0 font-mono text-2xs transition"
                  >
                    {copiedType === 'url' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedType === 'url' ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Method B: JSON External URL */}
            <div className="border border-white/10 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white uppercase tracking-wider">
                  {lang === 'id' ? 'Metode 2: Embed via Tautan JSON Eksternal' : 'Method 2: Embed via External JSON URL'}
                </h4>
                <span className="bg-amber-950/40 border border-amber-900/40 text-amber-400 px-2 py-0.5 rounded text-[9px] font-mono uppercase font-bold">
                  {lang === 'id' ? 'Rekomendasi (Konten Sangat Banyak)' : 'Recommended for Large Content'}
                </span>
              </div>
              <p className="text-neutral-400 text-2xs leading-relaxed">
                {lang === 'id'
                  ? 'Gunakan metode ini jika portofolio Anda sangat panjang atau memiliki banyak foto berukuran besar. Ekspor data Anda sebagai file JSON, unggah ke GitHub Gist, Pastebin, atau hosting publik lainnya, dan tempelkan tautan raw-nya di bawah ini.'
                  : 'Use this method if your portfolio is extremely large or contains many large images. Export your data as JSON, upload it to GitHub Gist, Pastebin, or any public raw file host, and paste the raw link below.'}
              </p>

              <div className="space-y-2 mt-2">
                <label className="text-2xs font-mono text-neutral-400 block uppercase">
                  {lang === 'id' ? 'Tempel Tautan RAW JSON Eksternal' : 'Paste External RAW JSON URL'}
                </label>
                <input
                  type="url"
                  placeholder="e.g. https://gist.githubusercontent.com/.../raw/deka.json"
                  value={externalUrl}
                  onChange={(e) => setExternalUrl(e.target.value)}
                  className="w-full bg-neutral-900 border border-white/10 rounded px-3 py-2 text-[10px] text-white placeholder-white/20 focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>

              {externalUrl.trim() && (
                <div className="space-y-2 mt-2">
                  <label className="text-2xs font-mono text-green-400 block uppercase">
                    {lang === 'id' ? 'Kode HTML Embed yang Dihasilkan' : 'Generated HTML Embed Code'}
                  </label>
                  <div className="flex gap-2 items-center">
                    <input
                      type="text"
                      readOnly
                      value={externalGeneratedEmbedCode}
                      className="flex-1 bg-neutral-900 border border-green-900/30 rounded px-3 py-2 text-[10px] font-mono text-green-300/80 select-all"
                    />
                    <button
                      onClick={() => handleCopy(externalGeneratedEmbedCode, 'extEmbed')}
                      className="bg-green-600 hover:bg-green-700 text-white rounded px-3 py-2 flex items-center gap-1 shrink-0 font-mono text-2xs transition"
                    >
                      {copiedType === 'extEmbed' ? 'COPIED' : 'COPY'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Backup & Restore Backup */}
            <div className="border border-white/10 rounded-lg p-4 space-y-3">
              <h4 className="font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <FileJson className="w-4 h-4 text-purple-400" />
                {lang === 'id' ? 'Cadangkan & Terapkan Konfigurasi' : 'Backup & Apply Configuration'}
              </h4>
              <p className="text-neutral-400 text-2xs leading-relaxed">
                {lang === 'id'
                  ? 'Salin atau edit konfigurasi teks JSON lengkap di bawah ini untuk cadangan instan atau migrasi antar perangkat.'
                  : 'Copy or edit the complete JSON config below for quick manual backups or transferring data.'}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-neutral-400 block uppercase">
                    {lang === 'id' ? 'Konfigurasi Saat Ini (Ekspor)' : 'Current Configuration (Export)'}
                  </span>
                  <div className="relative">
                    <textarea
                      readOnly
                      value={JSON.stringify(portfolioData, null, 2)}
                      className="w-full h-32 bg-neutral-900 border border-white/10 rounded p-2 text-[9px] font-mono text-neutral-400 resize-none select-all"
                    />
                    <button
                      onClick={() => handleCopy(JSON.stringify(portfolioData, null, 2), 'backup')}
                      className="absolute top-2 right-2 bg-neutral-800 hover:bg-neutral-700 border border-white/10 p-1.5 rounded text-white transition"
                      title="Copy JSON"
                    >
                      {copiedType === 'backup' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-neutral-400 block uppercase">
                    {lang === 'id' ? 'Terapkan Konfigurasi Baru (Impor)' : 'Apply New Configuration (Import)'}
                  </span>
                  <div className="space-y-2">
                    <textarea
                      placeholder={lang === 'id' ? 'Tempel JSON portofolio Anda di sini...' : 'Paste your portfolio JSON config here...'}
                      value={jsonInput}
                      onChange={(e) => setJsonInput(e.target.value)}
                      className="w-full h-32 bg-neutral-900 border border-white/10 rounded p-2 text-[9px] font-mono text-white placeholder-neutral-700 resize-none focus:outline-none focus:border-purple-500"
                    />
                    {jsonError && (
                      <div className="flex items-center gap-1.5 text-red-400 text-[10px] font-mono">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{jsonError}</span>
                      </div>
                    )}
                    <button
                      onClick={handleApplyJson}
                      disabled={!jsonInput.trim()}
                      className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-900/30 disabled:text-neutral-500 text-white rounded py-2 transition font-mono text-2xs uppercase tracking-wider font-bold"
                    >
                      {lang === 'id' ? 'TERAPKAN KONFIGURASI' : 'APPLY CONFIGURATION'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer actions */}
          <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="bg-neutral-800 hover:bg-neutral-700 border border-white/10 px-4 py-2 rounded text-xs font-mono uppercase tracking-widest text-white transition"
            >
              {lang === 'id' ? 'Tutup' : 'Close'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
