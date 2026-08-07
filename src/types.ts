export interface BilingualText {
  id: string; // Indonesian text
  en: string; // English text
}

export interface Skill {
  id: string;
  name: BilingualText;
  type: 'hard' | 'soft' | 'tool';
}

export interface Education {
  id: string;
  school: BilingualText;
  major: BilingualText;
  gpa: string;
  period: BilingualText; // e.g. "Agustus 2020 - Sekarang" / "August 2020 - Present"
  description: BilingualText;
  links?: OrganizationLink[];
}

export interface Film {
  id: string;
  title: BilingualText;
  role: BilingualText; // Jobdesk
  year?: string; // Production Year
  description: BilingualText;
  imageUrl: string; // base64 or URL
  youtubeUrl?: string;
  driveUrl?: string;
  trailerUrl?: string;
  btsUrl?: string;
  behindTheScenes?: string[]; // array of base64 or URLs
  isFeatured: boolean; // Top 3 featured
}

export interface OrganizationLink {
  label: BilingualText;
  url: string;
}

export interface Organization {
  id: string;
  name: BilingualText;
  role?: BilingualText; // Jabatan
  place?: BilingualText; // Tempat
  level: BilingualText; // e.g., "Fakultas" / "Faculty" or "Universitas"
  period: BilingualText;
  activities: BilingualText; // Program Kerja / Deskripsi
  responsibilities?: BilingualText; // Tanggung Jawab
  proofUrl?: string; // photo of certificate or activity (for backward compatibility)
  proofUrls?: string[]; // array of images for slideshow
  proofType?: 'image' | 'pdf';
  showreelUrl?: string;
  documentationUrl?: string;
  links?: OrganizationLink[];
}

export interface ProfessionalExperience {
  id: string;
  company: BilingualText;
  role?: BilingualText; // Jabatan
  field: BilingualText; // Bidang
  location?: BilingualText; // Lokasi
  period: BilingualText; // Masa kerja / magang
  description?: BilingualText; // Deskripsi Pekerjaan
  responsibilities: BilingualText; // Tanggung Jawab
  proofUrl?: string; // photo/pdf cert (backward compatibility)
  proofUrls?: string[]; // array of images for slideshow
  proofPdfUrl?: string; // pdf proof
  proofType?: 'image' | 'pdf';
  links?: OrganizationLink[];
}

export interface Goal {
  id: string;
  title: BilingualText; // name of certificate/award/activity
  role: BilingualText; // as what / sebagai apa
  institution: BilingualText; // Penyelenggara / Institusi
  level: BilingualText; // e.g. "Nasional", "Internasional", "Tingkat Fakultas" etc.
  period: BilingualText; // Waktu Diserahkan / Dilaksanakan
  location?: BilingualText; // Lokasi
  description?: BilingualText; // Deskripsi kegiatan/aktivitas
  fileUrl?: string; // backward compatibility
  proofUrls?: string[]; // slide photos
  proofPdfUrl?: string; // pdf cert
  proofType?: 'image' | 'pdf';
  links?: OrganizationLink[];
}

export interface ContactInfo {
  id: string;
  platform: string; // tiktok, instagram, facebook, linkedin, whatsapp, email
  value: string; // e.g. handle, link, or phone number
  label: string; // display label
}

export interface PortfolioData {
  name: string;
  nickname: string;
  profileImageUrl?: string;
  program: BilingualText;
  faculty: BilingualText;
  university: BilingualText;
  aboutSummary: BilingualText;
  skills: Skill[];
  education: Education[];
  films: Film[];
  organizations: Organization[];
  professionalExperiences: ProfessionalExperience[];
  goals: Goal[];
  contacts: ContactInfo[];
}
