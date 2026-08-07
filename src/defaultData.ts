import { PortfolioData } from './types';

export const initialPortfolioData: PortfolioData = {
  name: "Deka Aryanto",
  nickname: "Deka",
  profileImageUrl: "https://lh3.googleusercontent.com/d/19c1RzGMxfBGqTa6_Y7XPOYZSc6laVMiU",
  program: {
    id: "Produksi Film dan Televisi",
    en: "Film and Television Production"
  },
  faculty: {
    id: "Fakultas Ilmu Sosial dan Ilmu Politik",
    en: "Faculty of Social and Political Sciences"
  },
  university: {
    id: "Universitas Widyatama",
    en: "Universitas Widyatama"
  },
  aboutSummary: {
    id: "Halo, saya Deka Aryanto, mahasiswa semester 7 Produksi Film dan Televisi di Universitas Widyatama. Sepanjang studi saya, saya telah mengeksplorasi dunia kreatif dari berbagai perspektif utama, mulai dari manajemen produksi sebagai produser, eksekusi kreatif sebagai asisten sutradara, hingga visualisasi estetika sebagai penata artistik. Keterampilan komunikasi dan kepemimpinan saya telah terasah tajam melalui dinamika organisasi di dalam Badan Eksekutif Mahasiswa (BEM) FISIP Universitas Widyatama, serta jaringan kolaborasi lintas kampus. Untuk menjaga keseimbangan antara produktivitas dan kreativitas, saya menyalurkan kegemaran saya terhadap alam ke dalam proyek pembuatan konten perjalanan (travel), yang saat ini sedang saya kembangkan di berbagai platform media sosial seperti TikTok dan Instagram.",
    en: "Hello, I am Deka Aryanto, a 7th-semester Film and Television Production student at Universitas Widyatama. Throughout my studies, I have explored the creative world from various key perspectives, spanning production management as a producer, creative execution as an assistant director, and aesthetic visualization as a production designer. My communication and leadership skills have been sharply honed through organizational dynamics within the FISIP Student Executive Board (BEM) at Universitas Widyatama, as well as cross-campus collaborative networks. To maintain a balance between productivity and creativity, I channel my passion for nature into travel content creation projects, which I am currently developing across social media platforms like TikTok and Instagram."
  },
  skills: [
    // Hard Skills
    { id: "h1", name: { id: "Digital Workspace Tools", en: "Digital Workspace Tools" }, type: "hard" },
    { id: "h2", name: { id: "Basic Graphic Design & Video Editing", en: "Basic Graphic Design & Video Editing" }, type: "hard" },
    { id: "h3", name: { id: "Pengembangan Film & Konten", en: "Film/Content Development" }, type: "hard" },
    { id: "h4", name: { id: "Penulisan Skenario", en: "Script Writing" }, type: "hard" },
    { id: "h5", name: { id: "Manajemen Produksi", en: "Production Management" }, type: "hard" },
    { id: "h6", name: { id: "Analisis Media Sosial", en: "Social Media Analysis" }, type: "hard" },
    
    // Tools
    { id: "t1", name: { id: "CANVA", en: "CANVA" }, type: "tool" },
    { id: "t2", name: { id: "CAPCUT", en: "CAPCUT" }, type: "tool" },
    { id: "t3", name: { id: "MICROSOFT WORD", en: "MICROSOFT WORD" }, type: "tool" },
    { id: "t4", name: { id: "MICROSOFT EXCEL", en: "MICROSOFT EXCEL" }, type: "tool" },
    { id: "t5", name: { id: "GOOGLE DOCS", en: "GOOGLE DOCS" }, type: "tool" },
    { id: "t6", name: { id: "GOOGLE SHEET", en: "GOOGLE SHEET" }, type: "tool" },
    { id: "t7", name: { id: "GOOGLE AI STUDIO", en: "GOOGLE AI STUDIO" }, type: "tool" },
    { id: "t8", name: { id: "INSTAGRAM", en: "INSTAGRAM" }, type: "tool" },
    { id: "t9", name: { id: "TIKTOK", en: "TIKTOK" }, type: "tool" },
    { id: "t10", name: { id: "FINAL DRAFT", en: "FINAL DRAFT" }, type: "tool" },

    // Soft Skills
    { id: "s1", name: { id: "Public Speaking & Presentasi", en: "Public Speaking & Presentation" }, type: "soft" },
    { id: "s2", name: { id: "Visioner", en: "Visionary" }, type: "soft" },
    { id: "s3", name: { id: "Manajemen Konflik", en: "Conflict Management" }, type: "soft" },
    { id: "s4", name: { id: "Kolaborasi Tim", en: "Team Collaboration" }, type: "soft" }
  ],
  education: [
    {
      id: "edu1",
      school: { id: "Universitas Widyatama", en: "Widyatama University" },
      major: { id: "(D4) Produksi Film dan Televisi", en: "(D4) Film and Television Production" },
      gpa: "3.65 / 4.00",
      period: { id: "Agustus 2023 - Sekarang", en: "August 2023 - Present" },
      description: {
        id: "Seorang mahasiswa program studi D4 Produksi Film dan Televisi di Universitas Widyatama dengan IPK saat ini 3,65. Saya memiliki ketertarikan mendalam dalam pengembangan konten dan film. Selama studi, saya telah mengasah keterampilan praktis dengan berpartisipasi dalam 12 produksi film, mengambil peran strategis mulai dari Produser, Asisten Sutradara, Penata Artistik, hingga Aktor. Di luar kegiatan kreatif, saya memiliki rekam jejak kepemimpinan yang kuat, aktif dalam organisasi kemahasiswaan sejak tahun pertama, dan saat ini dipercaya menjabat sebagai Ketua Badan Eksekutif Mahasiswa (BEM) Fakultas Ilmu Sosial dan Ilmu Politik.",
        en: "A 7th-semester Film and Television Production student at Widyatama University with a current GPA of 3.65. I have a profound interest in content and film development. Throughout my studies, I have honed my practical skills by participating in 12 film productions, taking on strategic roles ranging from Producer, Assistant Director, and Production Designer to Actor. Beyond my creative pursuits, I possess a strong leadership track record, active in student organizations since my freshman year, and am currently trusted to serve as the Chairman of the Student Executive Board (BEM) for the Faculty of Social and Political Sciences."
      },
      links: [
        {
          label: { id: "Transkrip Nilai Terakhir", en: "Latest Academic Transcript" },
          url: "https://drive.google.com/file/d/1S0iT24xBAo9HHc2wFE0uaPKpNabiw2P3/view?usp=drive_link"
        }
      ]
    },
    {
      id: "edu2",
      school: { id: "SMAN 2 Purwakarta", en: "SMAN 2 Purwakarta" },
      major: { id: "ILMU PENDIDIKAN SOSIAL", en: "Social Education" },
      gpa: "82,78 / 100",
      period: { id: "Juli 2020 – Mei 2022", en: "July 2020 – May 2022" },
      description: {
        id: "Pindah ke SMAN 2 Purwakarta dari SMA Al-Ma'soem Bandung karena penyesuaian selama pandemi COVID-19. Di sekolah baru, saya langsung dipercaya menjabat sebagai Ketua Ekstrakurikuler Multimedia. Berfokus pada pengembangan kreatif, saya sukses memimpin produksi tiga proyek film sekolah, berkontribusi aktif baik di belakang maupun di depan kamera sebagai Sutradara dan Pemeran.",
        en: "Transferred to SMAN 2 Purwakarta from SMA Al-Ma'soem Bandung due to adjustments during the COVID-19 pandemic. At the new school, I was immediately trusted to serve as the Head of the Multimedia Extracurricular. Focusing on creative development, I successfully led the production of three school film projects, actively contributing both behind and in front of the camera as both Director and Cast."
      },
      links: [
        {
          label: { id: "Ijazah", en: "Diploma" },
          url: "https://drive.google.com/file/d/1TEmMjSYcVDxIUKJs0mjQWCeTFPKNRBt1/view?usp=drive_link"
        },
        {
          label: { id: "Transkrip Nilai", en: "Academic Transcript" },
          url: "https://drive.google.com/file/d/1waHSnBoLGCIJpvDRpZ_5bzThN02Jmgrt/view?usp=drive_link"
        }
      ]
    },
    {
      id: "edu3",
      school: { id: "SMA Al-Ma’soem Bandung", en: "SMA Al-Ma’soem Bandung" },
      major: { id: "ILMU PENDIDIKAN SOSIAL", en: "Social Education" },
      gpa: "78,79 / 100",
      period: { id: "Juni 2019 - Juli 2020", en: "June 2019 - July 2020" },
      description: {
        id: "Menempuh pendidikan di SMA Al-Ma'soem Bandung sembari menjalani pengembangan karakter di Pesantren Al-Ma'soem. Selama studi, saya aktif terlibat dalam Organisasi Siswa Intra Sekolah (OSIS) dan berperan langsung dalam menyukseskan berbagai kegiatan sekolah. Didorong oleh minat di bidang seni kreatif, saya ditunjuk sebagai Ketua Ekstrakurikuler Sinematografi, di mana saya berhasil memimpin produksi tiga film pendek, bertindak sebagai Sutradara sekaligus Aktor. Di kemudian hari, karena tantangan pembelajaran jarak jauh pada masa pandemi, saya pindah ke SMAN 2 Purwakarta.",
        en: "Educated at Al-Ma'soem High School Bandung while concurrently undergoing character development at the Al-Ma'soem Boarding School. During my studies, I was actively involved in the student government (OSIS) and played a direct role in the success of various school events. Driven by my passion for the creative arts, I was appointed as the Head of the Cinematography Extracurricular, where I successfully led the production of three short films, serving as both Director and Actor. Later, due to the challenges and perceived inefficiency of remote learning during the period, I transferred to SMAN 2 Purwakarta."
      },
      links: [
        {
          label: { id: "Transkrip Nilai", en: "Academic Transcript" },
          url: "https://drive.google.com/file/d/1yPZYiVVdQyQ498GiXeBr1IIig5hOE8tl/view?usp=drive_link"
        },
        {
          label: { id: "Surat Keterangan Pindah", en: "Transfer Certificate" },
          url: "https://drive.google.com/file/d/1EXTT0DA06qDgDHC1PXpKBSsr1U0Nrp9P/view?usp=drive_link"
        }
      ]
    },
    {
      id: "edu4",
      school: { id: "MTsN 1 Purwakarta", en: "MTsN 1 Purwakarta" },
      major: { id: "Islamic Junior High School", en: "Islamic Junior High School" },
      gpa: "86,9 / 100",
      period: { id: "Juli 2016 – Mei 2019", en: "July 2016 – May 2019" },
      description: {
        id: "Menyelesaikan pendidikan di MTsN 1 Purwakarta, yang menjadi landasan awal perjalanan aktif saya dalam berorganisasi dan kepemimpinan. Secara internal, saya dipercaya menjabat sebagai Sekretaris OSIS dan Ketua Ekstrakurikuler Bela Diri Silat, di mana saya berhasil menyabet medali Emas dan Perak pada Kejuaraan Paku Bumi Open Cup IV dan V (tingkat Nasional, Asia, dan Eropa). Di luar sekolah, kepemimpinan saya meluas ke skala regional dengan terpilih sebagai Ketua Umum Forum OSIS SMP Kabupaten Purwakarta (FOSTA) yang bertanggung jawab memimpin pengurus OSIS di seluruh kabupaten.",
        en: "Completed my education at MTsN 1 Purwakarta, which served as the foundation for my active journey in organization and leadership. Internally, I was trusted to serve as the Secretary OSIS and Chairperson of the Silat Martial Arts Extracurricular, where I successfully secured a Gold and a Silver medal at the IV and V Paku Bumi Open Cups (National, Asian, and European levels). Externally, my leadership was extended to a regional scale as I was elected General Chairman of the Purwakarta Regency Junior High School OSIS Forum (FOSTA) , where I was responsible for leading student councils across the entire regency."
      },
      links: [
        {
          label: { id: "Ijazah", en: "Diploma" },
          url: "https://drive.google.com/file/d/18QXM8r900bFxngNmV4uHb61TLaVxUFrl/view?usp=drive_link"
        },
        {
          label: { id: "Transkrip Nilai UN", en: "National Exam Transcript" },
          url: "https://drive.google.com/file/d/19-PPBaEWqXGSiIwco3KeHBQ0I02BkyK2/view?usp=drive_link"
        }
      ]
    }
  ],
  films: [
    // Top 3 featured
    {
      id: "film1",
      title: { id: "IOT : THE MOST PROBLEMATIC WOMAN BEHIND THE BAR", en: "IOT : THE MOST PROBLEMATIC WOMAN BEHIND THE BAR" },
      role: { id: "Produser Film Dokumenter", en: "Documentary Film Producer" },
      year: "2026",
      description: {
        id: "Film ini diproduksi oleh SWARA NUSA PICTURES, yang mengangkat seorang narapidana perempuan di lapas perempuan kelas IIA Bandung yang memiliki jiwa kreatif yang tinggi dengan menyalurkan id-e kreatif nya ke berbagai bidang, mulai dari membuat musik, melukis, bahkan hingga membatik.\nDalam produksi ini saya memimpin seluruh proses produksi dari tahap riset, pra-produksi hingga akhir distribusi. Mulai dari perizinan, pembentukan tim, manajemen anggaran, hingga merencanakan distribusi penayangan.",
        en: "Produced by SWARA NUSA PICTURES, this documentary features a female inmate at Class IIA Women's Prison Bandung, who possesses a high level of creativity, channeling her artistic ideas into various fields, from music production and painting to batik weaving.\nIn this production, I managed the entire pipeline from research, pre-production, to final distribution—including permits, crew formation, budget planning, and exhibition strategies."
      },
      imageUrl: "https://lh3.googleusercontent.com/d/1QOr6IYeVKZwRFMbJ5S3qm6dUiy3kklVX",
      youtubeUrl: "https://youtu.be/bx_ZNGgpLJs?si=mvtFHbsaRgcgmwuM",
      driveUrl: "",
      trailerUrl: "https://drive.google.com/file/d/148m4P3wK9gIyFCmnWCNJH-V6MJ2GPxWG/view?usp=drive_link",
      btsUrl: "https://drive.google.com/drive/folders/1fbzyOqWnNo83JVPomyHHTQDLk9baNo-k?usp=drive_link",
      isFeatured: true
    },
    {
      id: "film2",
      title: { id: "SANGKAL", en: "SANGKAL" },
      role: { id: "Assisten Sutradara Film Pendek Fiksi", en: "Assistant Director of Short Fiction Film" },
      year: "2026",
      description: {
        id: "Film yang diproduksi oleh Sunset Production, mengangkat isu kekerasan seksual yang dialami mahasiswi semester akhir oleh seorang dosen yang memanfaatkan kekuasaan serta kekuatan nya sebagai tenaga pendidik. Yang hasil dari film nya memiliki pesan #PEREMPUANYANGMELAWAN\nDalam produksi ini saya bertanggung jawab dalam mengatur jadwal (scouting, recce, ataupun shooting), mengatur logistik, memastikan jadwal produksi berjalan secara efisien serta membantu sutradara dalam pengembangan kreatif nya. Dan dalam tahap produksi, saya bertanggung jawab untuk memimpin di lokasi shooting serta menjadi penghubung utama komunikasi antara sutradara, pemain, dan seluruh kru produksi.",
        en: "Produced by Sunset Production, this narrative short film addresses the critical issue of sexual harassment experienced by a final-semester female student, perpetrated by a lecturer leveraging power and academic authority. The film delivers a powerful message: #PEREMPUANYANGMELAWAN.\nMy role encompassed scheduling (location scouting, recce, shooting days), logistics management, production efficiency, and aiding creative development. On-set, I took charge of managing the schedule and served as the primary communications bridge between the director, cast, and crew."
      },
      imageUrl: "https://lh3.googleusercontent.com/d/12Jjlt2qa_0zsTIMYKE8kq3DcMSAy8apQ",
      youtubeUrl: "https://youtube.com/shorts/lhWtcca2BrY?si=gSGLuVyieUYYFezS",
      driveUrl: "",
      trailerUrl: "https://drive.google.com/file/d/1D9b3KK4G5DxWM1dvBpHc8k2C5-yCbyiD/view?usp=drive_link",
      btsUrl: "https://drive.google.com/drive/folders/1xDv2J6Gn8gmKCnw8HzYwIQc3NtBwvuf2?usp=drive_link",
      isFeatured: true
    },
    {
      id: "film3",
      title: { id: "“BAHKAN DI UJUNG WAKTU PUN, SEGELINTIR CAHAYA AKAN MENYENTUHMU”", en: "“BAHKAN DI UJUNG WAKTU PUN, SEGELINTIR CAHAYA AKAN MENYENTUHMU”" },
      role: { id: "Cast Film Fiksi “IDRUS”", en: "Supporting Actor as Idrus" },
      year: "2024",
      description: {
        id: "Film yang diproduksi oleh Artonema Pictures, yang menceritakan seorang pemuda pecandu narkoba, yang merasa khawatir di hari terakhir masa rehabilitasinya karena hasrat untuk mengonsumsi obat-obatan terlarang masih muncul di dalam dirinya.\nDalam produksi ini saya menjadi berperan sebagai Idrus, pemeran pembantu yang memiliki tanggung jawab dalam menghidupkan karakter utama pada naskah,menyampaikan emosi, serta menerjemahkan visi sutradara ke dalam film.",
        en: "Produced by Artonema Pictures, this narrative film tells the story of a young drug addict filled with anxiety on the last day of rehabilitation as cravings for illicit substances still linger within him.\nI portrayed the character of Idrus, a supporting actor tasked with bringing emotional weight and depth to the main narrative, delivering an authentic performance, and translating the director's vision into reality."
      },
      imageUrl: "https://lh3.googleusercontent.com/d/1xRKTfyurfkfY99SCoqRvBea-5c5BvdXU",
      youtubeUrl: "https://youtu.be/M6yxgKQvGbw?si=7YAS3bWauGhtjWNy",
      driveUrl: "https://youtu.be/PCvXyJtFDNA?si=-CqWTngH1cKJFdeS",
      trailerUrl: "https://drive.google.com/file/d/1EpljeXoT9xD60DjPrt5_G2bIX6AcoMeM/view?usp=drive_link",
      btsUrl: "https://drive.google.com/drive/folders/1QcwYlnMQBbyTuVQ7vvtCqwJkm6HD23ZN?usp=drive_link",
      isFeatured: true
    },
    {
      id: "other_film1",
      title: { id: "Unexposed", en: "Unexposed" },
      role: { id: "Asisten Sutradara III Film Pendek Fiksi", en: "Assistant Director III of Short Fiction Film" },
      year: "2026",
      description: {
        id: "Sebuah karya dari Sunset Production, film ini mengisahkan tentang Pak Gunawan, figur publik bercitra baik yang tewas mengenaskan akibat kejaran pembunuh misterius. Plot twist mengungkapkan bahwa pembunuhan tersebut adalah aksi balas dendam. Topeng kepalsuan Pak Gunawan terbongkar sebagai pelaku kekerasan seksual yang mendorong adik sang pembunuh mengakhiri hidupnya. Mengingat posisi sosialnya yang tinggi membuat ia kebal hukum, sang pembunuh misterius memilih jalurnya sendiri untuk menegakkan keadilan dan memberikan hukuman sosial.\nSebagai Asisten Sutradara III, fokus utama saya adalah mengelola manajemen waktu di lokasi syuting dan memastikan seluruh agenda produksi berjalan tepat waktu sesuai call sheet. Saya juga bertindak sebagai jembatan komunikasi utama antara produser dan kru produksi di tengah dinamisnya proses syuting.",
        en: "A work by Sunset Production, this film tells the story of Pak Gunawan, a well-regarded public figure who dies tragically while being pursued by a mysterious killer. The plot twist reveals that the murder was an act of revenge, uncovering Pak Gunawan's mask of hypocrisy as a perpetrator of sexual assault who drove the killer's sister to end her life. Given his high social standing made him immune to the law, the mysterious killer took matters into their own hands to deliver social justice and punishment.\nAs Assistant Director III, my main focus was managing on-set time schedules and ensuring the production agenda ran smoothly according to the call sheet. I also served as the primary communication bridge between the producer and the crew amidst the dynamic shooting process."
      },
      imageUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=400",
      trailerUrl: "https://drive.google.com/file/d/1hb9L7N1OE64ZPaH9JJf7jNXEZhacfRgO/view?usp=drive_link",
      btsUrl: "https://drive.google.com/drive/folders/1GQIe1Hjw_24_kKNLsDPUdpmlgq1OiHHE?usp=drive_link",
      isFeatured: false
    },
    {
      id: "other_film2",
      title: { id: "Silih Asah, Silih Asih, Silih Rusuh", en: "Silih Asah, Silih Asih, Silih Rusuh" },
      role: { id: "Set Dresser Film Pendek Fiksi", en: "Set Dresser of Short Fiction Film" },
      year: "2026",
      description: {
        id: "Film yang diproduksi oleh Egly Production, dengan logline Seorang anak bungsu yang mencoba untuk membayar hutang piutang keluarganya melalui akses rekening bapaknya yang gemar judi online. Pertengkaran hebat pun terjadi, hingga kondisi fisik anak bungsu terkorbankan\nSebagai Set Dresser yang bertanggung jawab dalam menyusun, menata, dan memilih properti film secara detail guna membangun atmosfer adegan yang realistis dan selaras dengan visi sutradara. Selain itu, saya dipercaya mengonsep serta mengeksekusi special effect hujan buatan untuk mendukung kebutuhan naratif scene.",
        en: "Produced by Egly Production, the story follows a youngest child who tries to pay off their family's debts by accessing their father's account, who is addicted to online gambling. A violent argument ensues, leading to physical sacrifice from the youngest child.\nAs a Set Dresser, I was responsible for arranging, styling, and selecting detailed props to build a realistic atmospheric setting aligned with the director's vision. Additionally, I was trusted to concept and execute a custom artificial rain special effect to support the narrative scene needs."
      },
      imageUrl: "https://drive.google.com/file/d/11q19N_GsSqAVv300ao204XQ19cVptVVY/view?usp=drive_link",
      btsUrl: "https://drive.google.com/drive/folders/1Gca38Cd7XaNsgCVviUdj6BBSRxpHYqWS?usp=drive_link",
      behindTheScenes: [
        "https://drive.google.com/file/d/11q19N_GsSqAVv300ao204XQ19cVptVVY/view?usp=drive_link",
        "https://drive.google.com/file/d/19YjjbAKalpEY65CeL7ti2drDOY6MLgu1/view?usp=drive_link",
        "https://drive.google.com/file/d/1pKDaAbkaDk6aSwYkRxO805cbrZJupc0D/view?usp=drive_link"
      ],
      isFeatured: false
    },
    {
      id: "other_film3",
      title: { id: "Dibawah Pohon Rindang", en: "Under the Shady Tree" },
      role: { id: "Best Boy Film Pendek Fiksi", en: "Best Boy of Short Fiction Film" },
      year: "2025",
      description: {
        id: "Film horor garapan Sunset Production ini diproduksi untuk memenuhi tugas mata kuliah Tata Cahaya, mengisahkan tentang sepasang kekasih yang melanggar mitos/pantangan di bawah pohon yang rindang. Di proyek ini, saya bertindak sebagai Best Boy. Tanggung jawab utama saya adalah mengeksekusi lighting floorplan dari Gaffer, dan memastikan hasil akhir pencahayaan di set sesuai dengan visi yang diinginkan sutradara.",
        en: "This horror film by Sunset Production was produced to fulfill lighting course assignments, telling the story of a couple who violates myths/taboos under a shady tree. On this project, I acted as Best Boy, responsible for executing the lighting floorplan from the Gaffer, and ensuring the final on-set lighting aligned with the director's vision."
      },
      imageUrl: "https://drive.google.com/file/d/1S01e-MEFQlnbfGCBe59qR881uFKeUnPa/view?usp=drive_link",
      btsUrl: "https://drive.google.com/drive/folders/1usJvoHNxUyRXGy41jqxbHuwzXIOxHfrZ?usp=drive_link",
      behindTheScenes: [
        "https://drive.google.com/file/d/1S01e-MEFQlnbfGCBe59qR881uFKeUnPa/view?usp=drive_link",
        "https://drive.google.com/file/d/1aLa2XYQnmKbUFCaKqJzwhMaRJCVOhUvY/view?usp=drive_link",
        "https://drive.google.com/file/d/1CCtgDFVkJIYtHNmrdabfcJtamX-8LyK2/view?usp=drive_link"
      ],
      isFeatured: false
    },
    {
      id: "other_film4",
      title: { id: "Gak usah Takut Saling-Saling Aja", en: "Don't Be Afraid, Just Help Each Other" },
      role: { id: "Set Dresser Film Pendek Fiksi", en: "Set Dresser of Short Fiction Film" },
      year: "2025",
      description: {
        id: "Film yang di produksi oleh Sorra Films yang menceritakan seorang mahasiswa yang tertidur fi kelas dan terbangun tengah malam, mendapati sekelompok hantu yang sedang bermain kartu remi di kamaar mandi. Kekacauan terjadi hingga salah satu hantu botak berniat menolong nya pulang.\nsebagai Set Dresser saya bertanggung jawab untuk menciptakan atmosfer mencekam melalui teknik aging pada tembok kamar mandi guna menghadirkan kesan horor dan terbengkalai. Selain itu, saya juga bertugas menata, menyusun, dan memastikan seluruh penempatan properti selaras dengan visi kreatif sutradara.",
        en: "Produced by Sorra Films, this short film tells the story of a student who falls asleep in class and wakes up at midnight, only to find a group of ghosts playing playing cards in the bathroom. Chaos ensues until one of the bald ghosts offers to help him find his way home.\nAs a Set Dresser, I was responsible for creating a creepy atmosphere using aging techniques on the bathroom walls to establish a horror, abandoned vibe. In addition, I styled, arranged, and secured props to align perfectly with the director's creative vision."
      },
      imageUrl: "https://drive.google.com/file/d/1B_Y6a06NUmtseSomDL_Tt8Pd-66Qk18U/view?usp=drive_link",
      btsUrl: "https://drive.google.com/drive/folders/1ekO5iTDP_x6ZaDzeOwfYgo2iu37Zf9TD?usp=drive_link",
      behindTheScenes: [
        "https://drive.google.com/file/d/1B_Y6a06NUmtseSomDL_Tt8Pd-66Qk18U/view?usp=drive_link",
        "https://drive.google.com/file/d/1yM1jdRPK0sbLkpr0shfSCTv0jTq_m8vL/view?usp=drive_link",
        "https://drive.google.com/file/d/1lIG1f36j26d5N2G-gLtMk2OY2ICxuZ6d/view?usp=drive_link"
      ],
      isFeatured: false
    },
    {
      id: "other_film5",
      title: { id: "Jurig Malam Aaaaaaaakhh!!", en: "Night Ghosts Aaaaaaaakhh!!" },
      role: { id: "Set Dresser Film Pendek Fiksi", en: "Set Dresser of Short Fiction Film" },
      year: "2025",
      description: {
        id: "Film produksi Penyu House ini menyoroti aksi tiga mahasiswa yang nekat memainkan permainan pemanggil hantu di area kelas. Cerita membawa dinamika kontras antara karakter mahasiswa yang skeptis dan bertindak sembrono, dengan mahasiswi yang sangat meyakini keberadaan makhluk halus. Di balik layar, peran saya sebagai set dresser berfokus pada pengaturan dan penempatan seluruh properti artistik untuk memastikan visual ruangan selaras dengan visi penyutradaraan.",
        en: "Produced by Penyu House, this film highlights three students who dare to play a ghost-summoning game in a classroom. The story drives a sharp contrast between skeptical, reckless male students and a female student who deeply believes in the supernatural. Behind the scenes, my role as a set dresser focused on arranging and placing all artistic props to ensure the room's visual aligned with the direction's vision."
      },
      imageUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=400",
      trailerUrl: "https://drive.google.com/file/d/1obyd0-Wa3DT143y5BUuZZYi7e7Cpprqu/view?usp=drive_link",
      btsUrl: "https://drive.google.com/drive/folders/1lrA5YfPZObcwNmFBRdT4ZsYp8-GTXbi_?usp=drive_link",
      isFeatured: false
    },
    {
      id: "other_film6",
      title: { id: "Maling Petaka", en: "Disaster Thief" },
      role: { id: "Set Dresser", en: "Set Dresser" },
      year: "2025",
      description: {
        id: "Film produksi Aksara Imaji ini mengisahkan tentang Deni, seorang pencuri yang membawa kabur hasil jarahan dari rekannya, Ucup. Didorong rasa sakit hati, Ucup memutuskan untuk mengirim santet kepada Deni. Namun, tindakan tersebut tidak hanya memengaruhi Deni, tetapi juga berbalik membawa dampak buruk bagi kehidupan Ucup sendiri.\nDalam proyek ini, saya bertindak sebagai Set Dresser yang bertanggung jawab penuh atas penataan dan penempatan seluruh properti artistik guna memastikan visual set selaras dengan visi sutradara",
        en: "Produced by Aksara Imaji, this film tells the story of Deni, a thief who runs off with loot belonging to his partner, Ucup. Driven by resentment, Ucup decides to send black magic (santet) to Deni. However, this act not only affects Deni, but also rebounds, bringing bad consequences for Ucup's own life.\nIn this project, I acted as a Set Dresser fully responsible for styling and placing all artistic props to ensure the set visual harmonized with the director's vision."
      },
      imageUrl: "https://drive.google.com/file/d/1ZkVOlvPi4droDFamfFID-jLQAt_w6TDg/view?usp=drive_link",
      btsUrl: "https://drive.google.com/drive/folders/1GqeqOvr5lx8dzcXYhlXRlRPMzOHW3yoO?usp=drive_link",
      behindTheScenes: [
        "https://drive.google.com/file/d/1ZkVOlvPi4droDFamfFID-jLQAt_w6TDg/view?usp=drive_link",
        "https://drive.google.com/file/d/1rwUtIWyo22_THYxPkGoQ9ny4iBNlpAJ7/view?usp=drive_link",
        "https://drive.google.com/file/d/1iESZRZwJ5Jh-mzwNtqmgeUOi0CZ11kD4/view?usp=drive_link"
      ],
      isFeatured: false
    },
    {
      id: "other_film7",
      title: { id: "LAWAN!", en: "FIGHT!" },
      role: { id: "Cast Film Pendek", en: "Short Film Cast" },
      year: "2025",
      description: {
        id: "Diproduksi oleh production house spesialis lighting 'Sekte Penyembah Lampu', proyek film pendek ini dibuat demi memenuhi penilaian mata kuliah tata cahaya. Mengambil latar di kamar mandi, film ini menampilkan visualisasi dramatis dari adegan saya saat sedang menghajar seseorang.",
        en: "Produced by 'Sekte Penyembah Lampu', a production house specializing in lighting, this short film project was created for a lighting course assessment. Set in a bathroom, the film showcases a dramatic visualization of my scene beating someone up."
      },
      imageUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=400",
      trailerUrl: "https://drive.google.com/file/d/1UcygvoyktCZePoYz_HkHAVuKlU-Kx-B-/view?usp=drive_link",
      isFeatured: false
    },
    {
      id: "other_film8",
      title: { id: "Pukul 25", en: "25 O'Clock" },
      role: { id: "Runner Film Pendek Fiksi", en: "Runner of Short Fiction Film" },
      year: "2025",
      description: {
        id: "Film ini merupakan produksi dari Garis Kisah yang mengisahkan tentang Ucup, seorang mahasiswa yang kehilangan semangat kuliahnya karena masih dirundung duka mendalam atas kepergian orang tuanya. Keadaan semakin rumit saat ia mulai mengalami serangkaian peristiwa aneh, termasuk mimpi buruk di mana Pak Jeki dosen yang ditakutinya berubah menjadi sosok yang sangat menyeramkan. Dalam proyek ini, saya bertugas sebagai Runner yang bertanggung jawab penuh dalam mendukung dan memastikan seluruh kebutuhan operasional kru terpenuhi dengan baik.",
        en: "Produced by Garis Kisah, this film tells the story of Ucup, a college student who loses his motivation to study as he still grieves deeply over his parents' passing. Things get more complicated when he starts experiencing strange occurrences, including nightmares where Pak Jeki—the lecturer he fears—turns into a terrifying entity. On this project, I served as a Runner responsible for supporting and ensuring all operational needs of the crew were fully met."
      },
      imageUrl: "https://drive.google.com/file/d/1dorec1sFd4b3-01R2k8KmjRnIghcA5jh/view?usp=drive_link",
      btsUrl: "https://drive.google.com/drive/folders/1F-YFe0cA4nFm3-uao9dWOW2tBRzJdKCT?usp=drive_link",
      behindTheScenes: [
        "https://drive.google.com/file/d/1dorec1sFd4b3-01R2k8KmjRnIghcA5jh/view?usp=drive_link",
        "https://drive.google.com/file/d/1JnAKGi-79ShvjICQlmxUVmZb4QmMgUVK/view?usp=drive_link",
        "https://drive.google.com/file/d/1X8g1XJpiB2Py9Yrlim1SXErokZgZd8x7/view?usp=drive_link"
      ],
      isFeatured: false
    },
    {
      id: "other_film9",
      title: { id: "Destiny From Nasgor", en: "Destiny From Nasgor" },
      role: { id: "Cast Film fiksi “Alviero”", en: "Cast in Fiction Film “Alviero”" },
      year: "2024",
      description: {
        id: "Film yang diproduksi oleh Egly Production, yang menceritakan Alvin, seorang siswa SMA yang kerap dijahati oleh Yugi, murid populer di sekolahnya. Setelah memberikan tumpangan pulang kepada Maudy, pacar Yugi, Alvin menghadapi masalah besar. Yugi dan gengnya merusak motor Alvin, memaksa dia berjalan pulang. Dalam perjalanan pulang, dia menemukan sebuah kedai nasi goreng yang menjadi poin krusial dalam kehidupannya. Di sana, ia bertemu dengan seorang wanita misterius yang memberikan bantuan tak terduga.\nDalam film ini, saya berperan sebagai Alviero, bagian dari kelompok Yugi. Karakter Alviero digambarkan sebagai sosok yang jenaka, namun dapat bertindak membabi buta saat emosinya memuncak. Peran Alviero ini sekaligus berfungsi untuk memperkokoh karakterisasi dari Yugi.",
        en: "Produced by Egly Production, the film tells the story of Alvin, a high school student who is frequently bullied by Yugi, a popular student. After giving Maudy—Yugi's girlfriend—a ride home, Alvin faces a huge trouble. Yugi and his gang vandalize Alvin's motorcycle, forcing him to walk home. On his way back, he finds a fried rice (nasi goreng) stall that becomes a crucial turning point in his life, meeting a mysterious woman who provides unexpected help.\nIn this film, I portrayed Alviero, a member of Yugi's gang. Alviero is depicted as a humorous figure, but capable of blind fury when his emotions peak. Alviero's role serves to strengthen Yugi's characterization."
      },
      imageUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=400",
      youtubeUrl: "https://youtu.be/yl3Db5br_iQ?si=ZkvL04hbtSi5gJc8",
      trailerUrl: "https://youtu.be/nmX0UmzZ6IA?si=3Lgj2KKk8_imx7lr",
      isFeatured: false
    }
  ],
  organizations: [
    {
      id: "org1",
      name: {
        id: "Badan Eksekutif Mahasiswa Fakultas Ilmu Sosial dan Ilmu Politik",
        en: "Student Executive Board of Faculty of Social and Political Sciences"
      },
      role: {
        id: "Ketua Umum",
        en: "President / Chairman"
      },
      place: {
        id: "Universitas Widyatama",
        en: "Widyatama University"
      },
      level: {
        id: "Fakultas",
        en: "Faculty Level"
      },
      period: {
        id: "2025 - 2026",
        en: "2025 - 2026"
      },
      activities: {
        id: "Program Kerja:\na. FISIP ADYATAMA dan PRATAMA FISIP (Kaderisasi Mahasiswa)\nb. ASA (ASPIRASI MAHASISWA) FISIP\nc. LEGACY 3.0 (Upgrading Mahasiswa)\nd. LAYAR PEMULIHAN (Screening Film di Lembaga Pemasyarakatan Perempuan Kelas IIA Bandung)\ne. MANTAI (MAIN SANTAI) / OLAHRAGA ATAU BERMAIN SAMBIL DISKUSI",
        en: "Work Programs:\na. FISIP ADYATAMA and PRATAMA FISIP (Student Regeneration)\nb. ASA (FISIP STUDENT ASPIRATIONS)\nc. LEGACY 3.0 (Student Upgrading)\nd. LAYAR PEMULIHAN (Film Screening at Class IIA Women's Correctional Institution Bandung)\ne. MANTAI (RELAXED PLAY) / SPORTS OR PLAYING COMBINED WITH DISCUSSION"
      },
      responsibilities: {
        id: "Sebagai Ketua Umum saya bertanggung jawab memegang komando tertinggi dalam memimpin, menyelaraskan, dan mengevaluasi seluruh pergerakan kabinet agar berjalan solid demi mewujudkan visi besar organisasi. Saya bertindak sebagai advokat utama yang menjembatani komunikasi dua arah antara mahasiswa dan lembaga pendidik, memastikan setiap aspirasi, keluhan akademik, serta hak-hak mahasiswa dikawal dengan taktis hingga melahirkan kebijakan kampus yang solutif. Selain itu, saya memiliki tanggung jawab moral sebagai inisiator gerakan eksternal yang responsif dan kritis, memimpin kajian strategis serta menyuarakan isu-isu sosial kemasyarakatan kepada pemerintah baik melalui aksi diplomasi, rilis sikap, maupun gerakan moral di lapangan guna memastikan mahasiswa tetap menjadi katalisator perubahan yang berdampak nyata bagi masyarakat.",
        en: "As General Chairman, I held the highest command in leading, aligning, and evaluating all cabinet movements to ensure a solid team realizing the organization's vision. I acted as the primary advocate bridging two-way communication between students and educational institutions, ensuring that every aspiration, academic grievance, and student right was tactfully represented to generate solution-oriented campus policies. Additionally, I bore the moral responsibility as the initiator of responsive and critical external movements, leading strategic studies and voicing social issues to the government through diplomacy, official statements, or moral action in the field to ensure students remained catalysts for real societal impact."
      },
      proofUrls: [
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
      ],
      proofType: "image",
      showreelUrl: "https://drive.google.com/file/d/1s8SGdmLsxPj8rNM3vReaSX44NpA8OTul/view?usp=drive_link",
      documentationUrl: "https://drive.google.com/drive/folders/1m_ijozHgTKOVTQSUQ_7yYDdI-lNHxTN7?usp=drive_link"
    },
    {
      id: "org2",
      name: {
        id: "Senat Mahasiswa Fakultas Ilmu Sosial dan Ilmu Politik",
        en: "Student Senate of Faculty of Social and Political Sciences"
      },
      role: {
        id: "Kepala Departemen Kesejahteraan Mahasiswa dan Pengabdian Masyarakat",
        en: "Head of Student Welfare and Community Service Department"
      },
      place: {
        id: "Universitas Widyatama",
        en: "Widyatama University"
      },
      level: {
        id: "Fakultas",
        en: "Faculty Level"
      },
      period: {
        id: "2024 - 2025",
        en: "2024 - 2025"
      },
      activities: {
        id: "Program Kerja:\na. FISIP PRODUCTIVE\nb. ASPIRASI MAHASISWA FISIP",
        en: "Work Programs:\na. FISIP PRODUCTIVE\nb. FISIP STUDENT ASPIRATIONS"
      },
      responsibilities: {
        id: "Sebagai Kepala Departemen Kesejahteraan Mahasiswa dan Pengabdian Masyarakat Senat Mahasiswa FISIP, saya mengemban tanggung jawab strategis sebagai motor penggerak kepedulian internal sekaligus eksternal organisasi yang selaras dengan visi sebagai jembatan aspirasi. Pada ranah internal kampus, saya bertindak sebagai advokat utama bagi mahasiswa FISIP dengan merancang sistem penjaringan aspirasi yang responsif terkait isu akademik, fasilitas, maupun finansial, untuk kemudian dikawal dan dinegosiasikan secara langsung kepada pihak lembaga pendidik demi terwujudnya kesejahteraan mahasiswa yang inklusif.\n\nSementara itu pada ranah eksternal, saya bertanggung jawab memimpin gerakan berbasis keilmuan sosial politik untuk menyuarakan isu-isu sosial kemasyarakatan yang mendesak, baik melalui kajian kritis, maupun aksi langsung guna mendesak kebijakan pemerintah yang berpihak pada rakyat. Guna mengeksekusi visi besar tersebut, saya juga memegang kendali penuh dalam memimpin, menjaga solidaritas, dan mengevaluasi kinerja anggota departemen, memastikan setiap program pengabdian masyarakat dan aksi solidaritas berjalan berdampak, terukur, dan senantiasa menjadi penyambung lidah yang tangguh antara mahasiswa, kampus, pemerintah, dan masyarakat.",
        en: "As Head of Student Welfare and Community Service Department of the FISIP Student Senate, I carried the strategic responsibility as the engine driving both internal and external organizational care aligned with our vision as an aspirational bridge. Internally, I acted as the primary advocate for FISIP students by designing a responsive feedback gathering system for academic, facility, and financial issues, which was then advocated and negotiated directly with the university authorities to realize inclusive student welfare.\n\nMeanwhile, externally, I was responsible for leading social-political science-based movements to voice urgent social issues through critical research or direct actions to advocate for public-friendly government policies. To execute this vision, I also held full control in leading, maintaining solidarity, and evaluating department members, ensuring every community service program and solidarity action was impactful, measurable, and stood as a tough voice bridging students, campus, government, and society."
      },
      proofUrls: [
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=800"
      ],
      proofType: "image",
      showreelUrl: "https://drive.google.com/file/d/12AavBNzilMcMvqPOOVHTkCsPz64xIrBD/view?usp=drive_link",
      documentationUrl: "https://drive.google.com/drive/folders/10iUhWKakDZSH2am6RWY34ucZiISrFaDt?usp=drive_link"
    },
    {
      id: "org3",
      name: {
        id: "Senat Mahasiswa Fakultas Ilmu Sosial dan Ilmu Politik",
        en: "Student Senate of Faculty of Social and Political Sciences"
      },
      role: {
        id: "Staff Muda (Departemen Kesejahteraan Mahasiswa dan Pengabdian Masyarakat)",
        en: "Junior Staff (Student Welfare and Community Service Department)"
      },
      place: {
        id: "Universitas Widyatama",
        en: "Widyatama University"
      },
      level: {
        id: "Fakultas",
        en: "Faculty Level"
      },
      period: {
        id: "2023 - 2024",
        en: "2023 - 2024"
      },
      activities: {
        id: "Program Kerja:\na. Legacy\nb. Inagurasi",
        en: "Work Programs:\na. Legacy\nb. Inauguration"
      },
      responsibilities: {
        id: "Sebagai Mahasiswa Baru, saya bergabung sebagai Staff Muda Departemen Kesejahteraan Mahasiswa dan Pengabdian Masyarakat di Senat Mahasiswa Fakultas Ilmu Sosial dan Ilmu Politik Universitas Widyatama. Dalam peran ini, saya bergerak aktif sebagai jembatan strategis untuk menghimpun dan menyalurkan aspirasi mahasiswa kepada lembaga pendidik, sekaligus menjadi penyambung lidah dalam menyuarakan isu-isu sosial kemasyarakatan kepada pemerintah. Dedikasi dan kapabilitas kepemimpinan saya diuji secara nyata ketika diberikan tanggung jawab besar sebagai Ketua Pelaksana 'LEGACY', sebuah program kerja upgrading mahasiswa di tingkat fakultas. Melalui kegiatan ini, saya berhasil memimpin manajemen tim untuk merumuskan pelatihan komprehensif guna memperdalam ilmu organisasi dan kepekaan sosial mahasiswa, yang secara konkret memenuhi visi besar organisasi dalam menciptakan dampak nyata bagi mahasiswa dan masyarakat luas.",
        en: "As a freshman, I joined as a Junior Staff of the Student Welfare and Community Service Department at the FISIP Student Senate of Widyatama University. In this role, I actively participated as a strategic bridge to gather and channel student aspirations to the institution, while being a voice in conveying social issues to the government. My dedication and leadership were tested when entrusted as the Project Manager of 'LEGACY', a faculty-level student upgrading program. Through this activity, I successfully led the team to formulate a comprehensive training structure to deepen organizational knowledge and social awareness of students, which directly fulfilled the grand vision of creating a real impact."
      },
      proofUrls: [
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800"
      ],
      proofType: "image",
      showreelUrl: "https://drive.google.com/file/d/1oVzoBcS6njjW9rfHiB_8up_hvqHS89Sp/view?usp=drive_link",
      documentationUrl: "https://drive.google.com/drive/folders/1vSRfMreCO8NmZdt27xdnhxRIGGvI4LTj?usp=drive_link"
    },
    {
      id: "org4",
      name: {
        id: "Multimedia SMANDA",
        en: "SMANDA Multimedia"
      },
      role: {
        id: "Ketua Ekstrakurikuler",
        en: "President of Extracurricular"
      },
      place: {
        id: "SMAN 2 Purwakarta",
        en: "SMAN 2 Purwakarta"
      },
      level: {
        id: "Internal SMA",
        en: "High School Level"
      },
      period: {
        id: "2021 - 2022",
        en: "2021 - 2022"
      },
      activities: {
        id: "Aktivitas:\na. Latihan Rutin / 1 Minggu Sekali\nPencapaian:\na. Penulis Naskah dan Cast - Karya Film Pendek 'SEBAB SEMBAP'\nb. Director dan Cast – Karya Film Pendek 'BERUBAH'",
        en: "Activities:\na. Regular Practice / Once a Week\nAchievements:\na. Scriptwriter & Cast - Short Film 'SEBAB SEMBAP'\nb. Director & Cast – Short Film 'BERUBAH'"
      },
      responsibilities: {
        id: "Bertanggung jawab memimpin Esktrakurikuler Multimedia SMANDA di lingkup SMAN 2 Purwakarta periode 2021-2022. Bertanggung jawab penuh dalam menyusun arah strategis, mengoordinasikan tim, serta memastikan konsistensi pelaksanaan program kerja seperti pelatihan rutin mingguan untuk pengembangan skill anggota. Memiliki kemampuan project management yang kuat di industri kreatif, yang dibuktikan dengan keberhasilan mengeksekusi dua proyek film pendek. Dalam prosesnya, berhasil mengombinasikan kemampuan kepemimpinan dengan kontribusi teknis langsung, yaitu sebagai Penulis Naskah dan Cast untuk film 'SEBAB SEMBAP', serta dipercaya menjadi Sutradara sekaligus Cast dalam film 'BERUBAH'. Pengalaman ini membentuk kompetensi yang kuat dalam hal komunikasi, manajemen waktu, dan eksekusi produksi kreatif.",
        en: "Responsible for leading the SMANDA Multimedia Extracurricular at SMAN 2 Purwakarta for the 2021-2022 period. Fully responsible for setting strategic direction, coordinating teams, and ensuring consistent execution of work programs like weekly routine training to develop member skills. Had strong project management abilities in the creative industry, proven by successfully executing two short film projects. In the process, successfully combined leadership with direct technical contributions as Scriptwriter and Cast for 'SEBAB SEMBAP', and was trusted as Director and Cast for 'BERUBAH'. This experience built strong competencies in communication, time management, and creative production execution."
      },
      proofUrls: [
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800"
      ],
      proofType: "image",
      links: [
        {
          label: {
            id: "Film Pendek \"Sebab Sembap\"",
            en: "Short Film \"Sebab Sembap\""
          },
          url: "https://drive.google.com/file/d/1aY3H-Wb7SxvL3R12gN_tpJDXx4z5iz67/view?usp=drive_link"
        },
        {
          label: {
            id: "Film Pendek \"Berubah\"",
            en: "Short Film \"Berubah\""
          },
          url: "https://drive.google.com/file/d/1viyiIxwUrSyMaEG_Xhc9Xfawt5wSRgWx/view?usp=drive_link"
        }
      ]
    },
    {
      id: "org5",
      name: {
        id: "Al-Ma’soem Fighter",
        en: "Al-Ma’soem Fighter"
      },
      role: {
        id: "Anggota",
        en: "Member"
      },
      place: {
        id: "SMA Al-Ma’soem Bandung",
        en: "Al-Ma’soem High School Bandung"
      },
      level: {
        id: "Internal SMA",
        en: "High School Level"
      },
      period: {
        id: "2019 - 2020",
        en: "2019 - 2020"
      },
      activities: {
        id: "Aktivitas dan Pencapaian:\nAktif menjalani sesi latihan fisik, teknik, dan taktik bela diri secara intensif setiap satu minggu sekali demi menjaga kebugaran serta kesiapan bertanding. Melalui disiplin dan komitmen yang konsisten selama masa latihan, saya berhasil meraih prestasi sebagai Juara 1 (1st Place) kategori Male Senior High School Match for Class B dalam ajang kompetisi berskala internasional, Pakubumi Open Championship 8 Internasional.",
        en: "Activities and Achievements:\nActively underwent intensive physical, technical, and martial arts tactical training once a week to maintain fitness and readiness for competition. Through discipline and consistent commitment during training, I successfully achieved 1st Place in the Male Senior High School Match for Class B category in the international competition, Pakubumi Open Championship 8 International."
      },
      responsibilities: {
        id: "Berkomitmen penuh sebagai atlet perwakilan sekolah dalam menjaga kedisiplinan latihan, menguasai taktik bertanding, serta mengharumkan nama sekolah di kancah nasional maupun internasional dalam cabang pencak silat.",
        en: "Fully committed as a student athlete representative in maintaining training discipline, mastering match tactics, and bringing honors to the school in national and international arenas in the Pencak Silat discipline."
      },
      proofUrls: [
        "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=800"
      ],
      proofType: "image",
      links: [
        {
          label: {
            id: "Sertifikat: Pakubumi Open Championship 8 Internasional",
            en: "Certificate: Pakubumi Open Championship 8 International"
          },
          url: "https://drive.google.com/file/d/1erXpw6SawTqUc6__sOqqtxR9Dx1gxdql/view?usp=drive_link"
        }
      ]
    },
    {
      id: "org6",
      name: {
        id: "Sinematografi AL-Ma’soem",
        en: "Al-Ma'soem Cinematography"
      },
      role: {
        id: "Ketua Ekstrakurikuler",
        en: "President of Extracurricular"
      },
      place: {
        id: "Al-Ma’soem Bandung",
        en: "Al-Ma’soem Bandung"
      },
      level: {
        id: "Internal",
        en: "Internal School Level"
      },
      period: {
        id: "2019 - 2020",
        en: "2019 - 2020"
      },
      activities: {
        id: "Aktivitas:\na. Latihan Rutin / 1 Minggu Sekali\nPencapaian:\n- Produser dan Cast - Karya Film Pendek 'Time Authority'\n- Director dan Cast – Karya Film Pendek 'Jalan Pintas'",
        en: "Activities:\na. Regular Practice / Once a Week\nAchievements:\n- Producer & Cast - Short Film 'Time Authority'\n- Director & Cast – Short Film 'Jalan Pintas'"
      },
      responsibilities: {
        id: "Selama periode 2019–2020, saya dipercaya memimpin Ekstrakurikuler Sinematografi tingkat internal SMP-SMA. Dalam peran ini, saya bertanggung jawab menyusun arah strategis, mengoordinasikan tim, dan konsisten menjalankan pelatihan mingguan. Kemampuan manajemen proyek saya di industri kreatif dibuktikan melalui keberhasilan eksekusi dua film pendek. Saya memadukan fungsi kepemimpinan dengan kontribusi teknis langsung, yaitu sebagai Produser dan Pemeran dalam 'TIME AUTHORITY', serta Sutradara dan Pemeran dalam 'JALAN PINTAS'. Melalui seluruh proses ini, saya berhasil membangun kompetensi kuat dalam hal komunikasi, manajemen waktu, dan produksi kreatif.",
        en: "During the 2019–2020 period, I was trusted to lead the Cinematography Extracurricular at the internal Middle-High School level. In this role, I was responsible for planning strategic directions, coordinating the team, and consistently carrying out weekly training. My project management capability in the creative industry was proven through the successful execution of two short films. I integrated leadership roles with direct technical contributions as Producer and Cast in 'TIME AUTHORITY', as well as Director and Cast in 'JALAN PINTAS'. Through this entire process, I built strong competencies in communication, time management, and creative production."
      },
      proofUrls: [
        "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800"
      ],
      proofType: "image",
      links: [
        {
          label: {
            id: "Film Pendek \"Jalan Pintas\"",
            en: "Short Film \"Jalan Pintas\""
          },
          url: "https://drive.google.com/file/d/1n236GvClnSAMnH79iWQV5LqcEp7BOCVU/view?usp=drive_link"
        },
        {
          label: {
            id: "Film Pendek \"Time Authority\"",
            en: "Short Film \"Time Authority\""
          },
          url: "https://drive.google.com/file/d/11g3J6n2gkv0TcK6SFPMSzXnmwICS0ydd/view?usp=drive_link"
        }
      ]
    },
    {
      id: "org7",
      name: {
        id: "OSIS/MPK SMA Al-Ma’soem Bandung",
        en: "OSIS/MPK Al-Ma’soem High School Bandung"
      },
      role: {
        id: "STAF",
        en: "Staff Member"
      },
      place: {
        id: "SMA Al-Ma’soem Bandung",
        en: "Al-Ma’soem High School Bandung"
      },
      level: {
        id: "Internal SMA",
        en: "High School Level"
      },
      period: {
        id: "2019 - 2020",
        en: "2019 - 2020"
      },
      activities: {
        id: "Aktivitas dan Tanggung Jawab:\nSebagai Staf OSIS/MPK di Al-Ma'soem Bandung, saya bertanggung jawab dalam merencanakan, serta mengeksekusi berbagai program kerja guna menciptakan lingkungan sekolah yang dinamis. Saya berperan aktif dalam kepanitiaan, mulai dari menyusun konsep, hingga teknis pelaksanaan di lapangan. Kontribusi nyata saya berfokus pada kesukseskan agenda tahunan sekolah, termasuk Perlombaan Antar Kelas sebagai wadah penyaluran bakat siswa, serta perayaan Hari Kemerdekaan 17 Agustus yang menuntut koordinasi tim yang solid, komunikasi yang efektif antar divisi, dan penyelesaian masalah secara cepat demi kelancaran acara.",
        en: "Activities and Responsibilities:\nAs an OSIS/MPK staff member at Al-Ma'soem Bandung, I was responsible for planning and executing various work programs to create a dynamic school environment. I actively participated in organizing committees, from conceptualizing to ground-level technical executions. My contributions focused on the success of annual school agendas, including Class Competitions to channel student talents, and the August 17 Independence Day celebrations which demanded solid team coordination, effective cross-division communication, and fast problem solving to ensure smooth events."
      },
      proofUrls: [
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800"
      ],
      proofType: "image"
    },
    {
      id: "org8",
      name: {
        id: "Forum OSIS SMP Purwakarta",
        en: "Middle School OSIS Forum of Purwakarta"
      },
      role: {
        id: "Ketua Umum",
        en: "General President"
      },
      place: {
        id: "Kabupaten Purwakarta",
        en: "Purwakarta Regency"
      },
      level: {
        id: "Regional",
        en: "Regional Level"
      },
      period: {
        id: "2018 - 2019",
        en: "2018 - 2019"
      },
      activities: {
        id: "Program Kerja:\n- September OSIS Super Festival (SOSFEST) / Perlombaan Olahraga, Seni, dan Pendidikan antar seluruh SMP\n- Karnows (Kartini Now A Days) / Perlombaan Memperingati Hari Kartini\n- Latihan Dasar Kepemimpinan Organisasi (LDKO)\n- Musyawarah Besar",
        en: "Work Programs:\n- September OSIS Super Festival (SOSFEST) / Sports, Art, and Education competition among all middle schools\n- Karnows (Kartini Now A Days) / Competition to commemorate Kartini Day\n- Basic Organizational Leadership Training (LDKO)\n- Grand Deliberation"
      },
      responsibilities: {
        id: "Sebagai Ketua Umum Forum OSIS SMP Purwakarta periode 2018–2019, saya bertanggung jawab penuh atas arah strategis, koordinasi internal, dan representasi OSIS di wilayah Kabupaten Purwakarta. Selama masa jabatan, berhasil memimpin eksekusi berbagai program kerja berskala besar, termasuk September OSIS Super Festival (SOSFEST) yang mewadahi kompetisi olahraga, seni, dan pendidikan antar-SMP se-kabupaten. Selain itu, sukses menginisiasi program Karnows (Kartini Now A Days) sebagai ruang apresiasi budaya, serta menyelenggarakan Latihan Dasar Kepemimpinan Organisasi (LDKO) dan Musyawarah Besar untuk meregenerasi kepemimpinan serta merumuskan AD/ART organisasi secara berkelanjutan.",
        en: "As General President of the Purwakarta Regency Middle School OSIS Forum for the 2018–2019 period, I was fully responsible for the strategic direction, internal coordination, and representation of student bodies in the Purwakarta Regency. During my tenure, I successfully led the execution of various large-scale work programs, including the September OSIS Super Festival (SOSFEST) which hosted sports, arts, and educational competitions for middle schools countywide. Furthermore, I successfully initiated the Karnows program as a space for cultural appreciation, and organized the Basic Organizational Leadership Training (LDKO) and Grand Assembly to regenerate leadership and formulate the organization's charter sustainably."
      },
      proofUrls: [
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
      ],
      proofType: "image",
      showreelUrl: "https://drive.google.com/file/d/1KGExC4I_F6UoQAzEz6aA6qPhxp9Y60YK/view?usp=drive_link",
      documentationUrl: "https://drive.google.com/drive/folders/14eOa0mLgNVfLreBR0X_NsXbFo_stKDPS?usp=drive_link",
      links: [
        {
          label: {
            id: "Piagam Penghargaan",
            en: "Award Certificate"
          },
          url: "https://drive.google.com/file/d/1koBIYcckIqZfa3fHYrWbzSvZ6U3Q5wVh/view?usp=drive_link"
        }
      ]
    },
    {
      id: "org9",
      name: {
        id: "OSIS /MPK MTsN 1 Purwakarta",
        en: "OSIS /MPK MTsN 1 Purwakarta"
      },
      role: {
        id: "Sekretaris",
        en: "Secretary"
      },
      place: {
        id: "MTsN 1 Purwakarta",
        en: "MTsN 1 Purwakarta"
      },
      level: {
        id: "Internal SMP/MTs",
        en: "Middle School Level"
      },
      period: {
        id: "2018 - 2019",
        en: "2018 - 2019"
      },
      activities: {
        id: "Aktivitas dan Tanggung Jawab:\nSebagai Sekretaris OSIS/MPK MTsN 1 Purwakarta periode 2018–2019, saya bertanggung jawab penuh atas manajemen administrasi, tata kelola dokumen, dan koordinasi komunikasi internal maupun eksternal organisasi. Selama masa bakti ini, saya berperan aktif dalam perencanaan, penyusunan proposal, hingga pelaporan seluruh program kerja strategis, termasuk sukses merealisasikan berbagai agenda besar seperti Peringatan Hari Guru, Latihan Dasar Kepemimpinan Sekolah (LDKS), Perlombaan Antar Kelas (PORAK), serta menjadi bagian dari kepanitiaan Ajang Kompetisi Seni dan Olahraga Madrasah (AKSIOMA). Salah satu pencapaian krusial pada periode ini adalah keberhasilan pengurus dalam menjembatani komunikasi dan membangun kembali kepercayaan pihak sekolah serta dewan guru terhadap aktivitas kelompok suporter sekolah, sehingga kegiatan dukungan kreatif siswa dapat terwadahi secara positif, tertib, dan legal di bawah naungan organisasi.",
        en: "Activities and Responsibilities:\nAs the Secretary of OSIS/MPK MTsN 1 Purwakarta for the 2018–2019 period, I was fully responsible for administration management, document governance, and internal/external communications. During this service, I played an active role in planning, drafting proposals, and reporting all strategic work programs, successfully realizing major events such as Teacher's Day, Basic School Leadership Training (LDKS), Inter-class Competitions (PORAK), and participating in the Madrasah Art and Sports Competition (AKSIOMA) committee. A crucial achievement during this period was successfully bridging communication and restoring school/teacher trust toward the school supporter club activities, directing student creative support into positive, orderly, and legal channels under the organization's umbrella."
      },
      proofUrls: [
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800"
      ],
      proofType: "image",
      showreelUrl: "https://drive.google.com/file/d/1ayrEzNDyf5IOCUd8j1tJ_KUU2-J6GzRH/view?usp=drive_link",
      documentationUrl: "https://drive.google.com/drive/folders/1i105sUn3TnG8hYAmfqxpBX4FZByp8Jbl?usp=drive_link"
    },
    {
      id: "org10",
      name: {
        id: "SMI TSANPOER",
        en: "SMI TSANPOER Martial Arts"
      },
      role: {
        id: "Ketua Ekstrakurikuler",
        en: "President of Extracurricular"
      },
      place: {
        id: "MTsN 1 Purwakarta",
        en: "MTsN 1 Purwakarta"
      },
      level: {
        id: "Internal SMP/MTs",
        en: "Middle School Level"
      },
      period: {
        id: "2017 - 2019",
        en: "2017 - 2019"
      },
      activities: {
        id: "Aktivitas:\na. Latihan Rutin / 1 Minggu Sekali\nPencapaian:\na. Juara 1 Tanding SMP Putra – Antar Pelajar, Mahasiswa dan Dewasa - Tingkat Nasional Asia dan Eropa – Kejuaraan Pencak Silat Terbuka PPS Pakubumi Open Cup IV – 2018\nb. Juara 2 Tanding SMP Putra – Antar Pelajar, Mahasiswa dan Dewasa - Tingkat Nasional Asia dan Eropa – Kejuaraan Pencak Silat Terbuka PPS Pakubumi Open Cup V – 2018",
        en: "Activities:\na. Regular Practice / Once a Week\nAchievements:\na. 1st Place Men's Junior Match - Student, University & Adult Level - National, Asian & European scale - PPS Pakubumi Open Cup IV Pencak Silat Championship – 2018\nb. 2nd Place Men's Junior Match - Student, University & Adult Level - National, Asian & European scale - PPS Pakubumi Open Cup V Pencak Silat Championship – 2018"
      },
      responsibilities: {
        id: "Sebagai Ketua Ekstrakurikuler Seni Beladiri Pencak Silat (SMI TSANPOER) MTsN 1 Purwakarta periode 2017–2019, saya memegang kendali penuh atas kepemimpinan, koordinasi, dan pengawasan organisasi serta seluruh program kerjanya. Fokus utama saya adalah menyusun program, mengelola administrasi, dan memastikan latihan rutin mingguan berjalan konsisten demi menjaga kualitas teknik dan fisik anggota. Saya juga bertindak sebagai penghubung komunikasi utama antara organisasi, pelatih, pihak sekolah, dan koordinator wilayah.",
        en: "As President of the Pencak Silat Martial Arts Extracurricular (SMI TSANPOER) at MTsN 1 Purwakarta for the 2017–2019 period, I held full control of leadership, coordination, and supervision of the organization and all its programs. My primary focus was structuring programs, managing administration, and ensuring regular weekly training ran consistently to maintain the technical and physical quality of members. I also served as the main communication bridge between the organization, coaches, school authorities, and regional coordinators."
      },
      proofUrls: [
        "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=800"
      ],
      proofType: "image",
      links: [
        {
          label: {
            id: "Pakubumi Open Cup IV Tingkat Nasional Asia dan Eropa",
            en: "Pakubumi Open Cup IV National Asian & European Level"
          },
          url: "https://drive.google.com/file/d/1wcwR56BHVArNsySd3E-2nLn0o8Z76vW3/view?usp=drive_link"
        },
        {
          label: {
            id: "Pakubumi Open Cup V Tingkat Nasional Asia dan Eropa",
            en: "Pakubumi Open Cup V National Asian & European Level"
          },
          url: "https://drive.google.com/file/d/1CIZ0Zwqwc0pJddCaNm6f5uTDxUVSaBeJ/view?usp=drive_link"
        }
      ]
    }
  ],
  professionalExperiences: [
    {
      id: "prof_triviling",
      company: {
        id: "TRIVILING",
        en: "TRIVILING"
      },
      role: {
        id: "Founder",
        en: "Founder"
      },
      field: {
        id: "Konten dan Media Sosial",
        en: "Content and Social Media"
      },
      location: {
        id: "Kota Bandung",
        en: "Bandung City"
      },
      period: {
        id: "2026 - Sekarang",
        en: "2026 - Present"
      },
      description: {
        id: "Proyek TRIVILING ini saya rintis bersama beberapa rekan sebagai bentuk penerapan nyata dari bidang ilmu yang sedang saya pelajari di bangku kuliah. Kami mengelola akun media sosial bertema alam dengan strategi distribusi konten yang spesifik di setiap platformnya. Di TikTok, kami fokus pada konten viral untuk mendongkrak branding. Audiens tersebut nantinya akan kami arahkan ke YouTube untuk menikmati video berdurasi panjang. Sementara itu, Instagram akan difokuskan pada konten visual dan edukasi alam, dan platform X kami gunakan untuk membangun kedekatan komunitas melalui diskusi santai serta pengumpulan kritik dan saran.\n\nMembangun TRIVILING dari nol bersama tim memberikan tantangan besar, terutama dalam mengoptimalkan fungsi spesifik dari 4 media sosial yang berbeda. Tantangan utama kami adalah bagaimana menjaga konsistensi produksi konten visual di Instagram dan pengelolaan komunitas di X sembari mengejar algoritma TikTok yang dinamis.\nMelalui eksekusi strategi yang matang, kami berhasil meningkatkan konten pertama dan menghasilkan pertumbuhan pengikut dalam waktu 1 bulan pertama karena 1 video tiktok tersebut.",
        en: "This TRIVILING project was pioneered with several colleagues as a practical application of my studies. We manage nature-themed social media accounts with platform-specific distribution strategies: TikTok focuses on viral branding content to redirect audiences to YouTube for long-form videos; Instagram highlights visual nature education; and X is leveraged for community interaction and feedback.\n\nBuilding TRIVILING from scratch with the team presented major challenges, especially in optimizing the specific functions of 4 different social media platforms. Our primary challenge was maintaining consistent content production on Instagram and community management on X while adapting to TikTok's dynamic algorithm. Through strategic execution, we successfully boosted our first content and achieved rapid follower growth within the first month due to that single viral TikTok video."
      },
      responsibilities: {
        id: "1. Merumuskan strategi branding dan distribusi konten multi-platform (TikTok, YouTube, Instagram, X) untuk mengoptimalkan jangkauan.\n2. Memimpin kolaborasi tim dalam produksi konten kreatif dan pengelolaan komunitas media sosial.\n3. Menganalisis metrik performa media sosial untuk mengidentifikasi tren viral dan pertumbuhan audiens.",
        en: "1. Formulating branding and content distribution strategies across multi-platforms (TikTok, YouTube, Instagram, X) to optimize reach.\n2. Leading team collaboration in creative content production and social media community management.\n3. Analyzing social media performance metrics to identify viral trends and audience growth."
      },
      proofUrls: [
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800"
      ],
      proofType: "image",
      links: [
        {
          label: {
            id: "Akun TikTok TRIVILING",
            en: "TRIVILING TikTok Account"
          },
          url: "https://www.tiktok.com/@triviling_?_r=1&_t=ZS-987c5daxDjo"
        },
        {
          label: {
            id: "Akun Instagram TRIVILING",
            en: "TRIVILING Instagram Account"
          },
          url: "https://www.instagram.com/tri.viling?igsh=MXBkeTNyOXZzM21mNw%3D%3D&utm_source=qr"
        },
        {
          label: {
            id: "Akun X TRIVILING",
            en: "TRIVILING X Account"
          },
          url: "https://x.com/triviling_?s=11"
        },
        {
          label: {
            id: "Akun YouTube TRIVILING",
            en: "TRIVILING YouTube Account"
          },
          url: "https://youtube.com/@tri.viling?si=UCXGSC2SZJcaHdY4"
        }
      ]
    },
    {
      id: "prof1",
      company: {
        id: "Notaris/PPAT Nani Kostini S.H., M.Kn.",
        en: "Notary Public / Land Deed Officer Nani Kostini S.H., M.Kn."
      },
      role: {
        id: "Staff Administrasi dan Lapangan",
        en: "Administrative & Field Staff"
      },
      field: {
        id: "Kenotariatan / PPAT",
        en: "Notary / Land Deed Administration"
      },
      location: {
        id: "Kabupaten Purwakarta",
        en: "Purwakarta Regency"
      },
      period: {
        id: "Desember 2022 - Agustus 2023",
        en: "December 2022 - August 2023"
      },
      description: {
        id: "Bertanggung jawab dalam mendukung kelancaran administrasi hukum dan operasional kantor Notaris/PPAT, dengan fokus pada akurasi data, kepatuhan hukum, dan manajemen dokumen.",
        en: "Responsible for supporting the smooth legal and operational administration of the Notary/PPAT office, focusing on data accuracy, legal compliance, and document management."
      },
      responsibilities: {
        id: "1. Manajemen & Pembukuan Akta : Menyusun, mempersiapkan, dan mengelola pembukuan akta secara sistematis guna memastikan seluruh dokumen hukum tercatat dengan akurat.\n2. Legalisasi & Registrasi Dokumen : Mengelola dan membuat daftar surat di bawah tangan yang disahkan, dibukukan, serta dokumen hukum lainnya sesuai dengan ketentuan undang-undang yang berlaku.\n3. Administrasi & Pra-Produksi Akta : Melakukan persiapan teknis dan administratif sebelum proses pembukuan akta untuk meminimalkan risiko kesalahan input data.\n4. Pengarsipan & Manajemen Dokumen : Mengatur sistem penyimpanan dan pengarsipan dokumen fisik maupun digital secara aman, rapi, dan mudah diakses untuk menjaga kerahasiaan klien.",
        en: "1. Deed Management & Bookkeeping: Organizing, preparing, and managing deed bookkeeping systematically to ensure all legal documents are accurately recorded.\n2. Legalization & Document Registration: Managing and listing certified, recorded private agreements, and other legal documents in compliance with applicable laws.\n3. Deed Administration & Pre-Production: Performing technical and administrative preparations prior to deed recording to minimize data entry risks.\n4. Archiving & Document Management: Organizing physical and digital document storage systems securely and systematically to maintain client confidentiality."
      },
      proofUrls: [
        "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
      ],
      proofType: "image",
      links: [
        {
          label: {
            id: "Bukti Dokumentasi Kerja",
            en: "Proof of Work Documentation"
          },
          url: "https://drive.google.com/drive/folders/1P6UVhlNVV9JxCPm4qKUPS_3Hkm96XTyi?usp=drive_link"
        }
      ]
    },
    {
      id: "prof2",
      company: {
        id: "Notaris/PPAT H.R Erwinsyah Sulistiarto., S.H., M.Kn.",
        en: "Notary Public / Land Deed Officer H.R Erwinsyah Sulistiarto., S.H., M.Kn."
      },
      role: {
        id: "Staff Magang Administrasi dan Lapangan",
        en: "Administrative & Field Intern"
      },
      field: {
        id: "Kenotariatan / PPAT (Magang)",
        en: "Notary / Land Deed Administration (Internship)"
      },
      location: {
        id: "Kabupaten Purwakarta",
        en: "Purwakarta Regency"
      },
      period: {
        id: "Juni 2020 – Juni 2021",
        en: "June 2020 – June 2021"
      },
      description: {
        id: "Mendukung efisiensi operasional kantor notaris dengan memastikan seluruh kelengkapan berkas administrasi siap sebelum proses penandatanganan akta.",
        en: "Supporting the operational efficiency of the notary office by ensuring all complete administrative documents are ready prior to the signing of deeds."
      },
      responsibilities: {
        id: "1. Bertanggung jawab dalam menyusun, mengorganisasi, dan mempersiapkan proses pembukuan akta secara teliti guna memastikan validitas data hukum.\n2. Mengelola dan menyusun daftar surat di bawah tangan yang disahkan, dibukukan, serta dokumen hukum lainnya sesuai dengan ketentuan yang berlaku.\n3. Melakukan pengarsipan dan manajemen dokumen baik secara fisik maupun digital untuk menjamin keamanan, kerahasiaan, dan kemudahan akses data kantor.\n4. Mendukung efisiensi operasional kantor notaris dengan memastikan seluruh kelengkapan berkas administrasi siap sebelum proses penandatanganan akta.",
        en: "1. Responsible for drafting, organizing, and preparing deed bookkeeping processes carefully to ensure the validity of legal data.\n2. Managing and drafting lists of certified, recorded private agreements, and other legal documents in compliance with regulations.\n3. Conducting physical and digital archiving and document management to guarantee security, confidentiality, and easy accessibility of office data.\n4. Supporting notary office efficiency by ensuring all administrative attachments are ready before deed signing."
      },
      proofUrls: [
        "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800"
      ],
      proofType: "image",
      links: [
        {
          label: {
            id: "Sertifikat Magang",
            en: "Internship Certificate"
          },
          url: "https://drive.google.com/file/d/1Bv5A8f640m4kPXbZriplnfNBUpce7EOC/view?usp=drive_link"
        }
      ]
    }
  ],
  goals: [
    {
      id: "act_streaming_prod",
      title: {
        id: "Streaming Production",
        en: "Streaming Production"
      },
      role: {
        id: "Produser",
        en: "Producer"
      },
      institution: {
        id: "Universitas Widyatama",
        en: "Widyatama University"
      },
      level: {
        id: "Universitas",
        en: "University"
      },
      period: {
        id: "Juni 2026",
        en: "June 2026"
      },
      location: {
        id: "Gedung Kreasi Seni, Universitas Widyatama",
        en: "Art Creation Building, Widyatama University"
      },
      description: {
        id: "Segmen : Mapay Bandung, Kongkow Sareng Sineas (KONGRES), dan Cek Lokasi (CEKLOK)\n\nDalam kegiatan Streaming Production yang dilaksanakan pada Juni 2026 di Gedung Kreasi Seni, Universitas Widyatama, saya bertindak sebagai Produser Streaming yang bertanggung jawab penuh atas manajemen dan kelancaran distribusi penyiaran program TV multi-segmen. Program ini mengemas tiga segmen utama secara dinamis: Segmen 1 (Mapay Bandung) yang menyoroti perjalanan ikonik menggunakan Bandros, kunjungan ke Pasar Cika-Cika, serta rangkaian Dies Natalis Universitas Widyatama berupa Stadium Generale bertema \"Kampus Berdampak sebagai Laboratorium Masa Depan Pendidikan Indonesia\" bersama Wakil Menteri Pendidikan Dasar dan Menengah, Prof. Atip Latipulhayat, S.H., LL.M., Ph.D., serta keseruan kompetisi WIN Action. Segmen 2 (KONGRES - Kongkow Sareng Sineas) menyajikan podcast interaktif bersama mahasiswa Produksi Film dan Televisi yang mengupas tuntas dinamika sinema mahasiswa. Sementara Segmen 3 (CEKLOK - Cek Lokasi) menampilkan aksi sidak langsung terhadap crew TV mahasiswa untuk membedah jobdesk mereka, yang dipadukan dengan tayangan hasil taping proses produksi film Ujian Akhir Semester (UAS). Sebagai produser, saya mengoordinasikan seluruh aspek teknis penyiaran dan alur konten dari hulu ke hilir guna memastikan kualitas tayangan streaming berjalan secara profesional.",
        en: "Segments: Mapay Bandung, Kongkow Sareng Sineas (KONGRES), and Cek Lokasi (CEKLOK)\n\nIn the Streaming Production activity held in June 2026 at the Art Creation Building, Widyatama University, I acted as Streaming Producer fully responsible for the management and distribution of broadcasting a dynamic multi-segment TV program. Segment 1 (Mapay Bandung) highlighted iconic journeys, market visits, and Widyatama University's Anniversary Stadium Generale with Prof. Atip Latipulhayat. Segment 2 (KONGRES) featured interactive podcasts on student cinema dynamics. Segment 3 (CEKLOK) inspected student TV crews, dissecting their roles paired with UAS film productions. As producer, I coordinated technical broadcasting aspects and end-to-end content flow to guarantee professional-grade streaming."
      },
      proofUrls: [],
      proofPdfUrl: "",
      links: [
        {
          label: {
            id: "Hasil Streaming",
            en: "Streaming Broadcast"
          },
          url: "https://youtube.com/live/-qy2e8ObZxY?feature=share"
        },
        {
          label: {
            id: "Behind The Scenes (BTS)",
            en: "Behind The Scenes (BTS)"
          },
          url: "https://drive.google.com/drive/folders/1gLxy2DCZ_qMrwWgr4_nb7evHx_FSvEJC?usp=drive_link"
        }
      ]
    },
    {
      id: "act_studium_generale",
      title: {
        id: "Studium Generale Dalam rangka Dies Natalis ke-25",
        en: "Studium Generale for the 25th Anniversary"
      },
      role: {
        id: "Mahasiswa Produksi Film dan Televisi",
        en: "Film & Television Production Student"
      },
      institution: {
        id: "Universitas Widyatama",
        en: "Widyatama University"
      },
      level: {
        id: "Universitas",
        en: "University"
      },
      period: {
        id: "Juni 2026",
        en: "June 2026"
      },
      location: {
        id: "Ruang Galunggung, Gedung A, Universitas Widyatama",
        en: "Galunggung Room, Building A, Widyatama University"
      },
      description: {
        id: "Tema Acara : Kampus Berdampak sebagai Laboratorium Masa Depan Pendidikan Indonesia\nPemateri : Prof. Atip Latipulhayat, S.H., LL.M., Ph.D. (Wakil Menteri Pendidikan Dasar dan Menengah)\n\nSebagai mahasiswa program studi Produksi Film dan Televisi, saya berpartisipasi dalam acara Studium Generale yang merupakan bagian dari rangkaian perayaan Dies Natalis ke-25 Universitas Widyatama. Acara yang diselenggarakan oleh Universitas Widyatama pada Selasa, 2 Juni 2026 di Ruang Galunggung, Gedung A Lantai 4 ini mengangkat tema \"Kampus Berdampak sebagai Laboratorium Masa Depan Pendidikan Indonesia\". Forum strategis ini menghadirkan Prof. Atip Latipulhayat, S.H., LL.M., Ph.D. (Wakil Menteri Pendidikan Dasar dan Menengah RI) sebagai narasumber utama untuk membedah transformasi sistem pendidikan nasional. Kegiatan ini bertujuan memposisikan perguruan tinggi sebagai pusat uji coba inovasi pengajaran serta menyelaraskan luaran akademis agar memiliki dampak nyata bagi masyarakat dan industri. Acara ini berlangsung secara interaktif dengan dihadiri oleh seluruh sivitas akademika, mulai dari perwakilan mahasiswa, jajaran dosen, hingga pimpinan universitas.",
        en: "Event Theme: Impactful Campus as a Laboratory for the Future of Indonesian Education\nSpeaker: Prof. Atip Latipulhayat, S.H., LL.M., Ph.D. (Deputy Minister of Primary and Secondary Education)\n\nAs a student of Film and Television Production, I participated in the Studium Generale commemorating the 25th Anniversary of Widyatama University. Held in the Galunggung Room, Building A, this strategic forum focused on aligning academic systems with current industrial and societal challenges. It served as a highly interactive dialogue between students, faculty members, and university leaders to discuss educational innovations."
      },
      proofUrls: [],
      proofPdfUrl: "",
      links: [
        {
          label: {
            id: "Dokumentasi Pribadi",
            en: "Personal Documentation"
          },
          url: "https://drive.google.com/drive/folders/1aE6QLLEnB8-yAkhaAivs8zNs3o2jRvMI?usp=drive_link"
        },
        {
          label: {
            id: "Dokumentasi Resmi",
            en: "Official Documentation"
          },
          url: "https://youtu.be/iezvmKxvAbM?si=yMYbtKqkOBhRATha"
        }
      ]
    },
    {
      id: "act_kuliah_umum",
      title: {
        id: "Kuliah Umum sekaligus Dies Natalis Universitas Widyatama dan Dies Natalis FISIP Universitas Widyatama",
        en: "Public Lecture and Widyatama University & FISIP Anniversary"
      },
      role: {
        id: "Mahasiswa Produksi Film dan Televisi",
        en: "Film & Television Production Student"
      },
      institution: {
        id: "Fakultas Ilmu Sosial dan Ilmu Politik Universitas Widyatama",
        en: "Faculty of Social & Political Sciences, Widyatama University"
      },
      level: {
        id: "Universitas",
        en: "University"
      },
      period: {
        id: "April 2026",
        en: "April 2026"
      },
      location: {
        id: "Ruang Talagabodas, Gedung B, Universitas Widyatama",
        en: "Talagabodas Room, Building B, Widyatama University"
      },
      description: {
        id: "Tema Acara : Ekonomi Kreatif Sebagai Soft Power Bangsa : Peran, Seni, Kebijakan dan Generasi Muda\nPemateri : Yovie Widianto – Staf Khusus Presiden Bidang Kreatif\n\nDalam rangka memperingati Dies Natalis ke-25 Universitas Widyatama sekaligus Dies Natalis FISIP, Fakultas Ilmu Sosial dan Ilmu Politik sukses menyelenggarakan Kuliah Umum pada April 2026 di Ruang Talagabodas, Gedung B. Acara ini menghadirkan Staf Khusus Presiden Bidang Kreatif, Yovie Widianto, yang mengusung tema \"Ekonomi Kreatif Sebagai Soft Power Bangsa: Peran, Seni, Kebijakan dan Generasi Muda\".\n\nSebagai mahasiswa Produksi Film dan Televisi, kuliah umum ini memberikan wawasan mendalam mengenai peran Artificial Intelligence (AI) dan strategi industri kreatif dalam memperkuat identitas bangsa. Melalui pemaparan tersebut, Yovie Widianto mendorong kami sebagai generasi muda untuk memanfaatkan teknologi dengan bijak tanpa kehilangan orisinalitas id, sekaligus memotivasi kami untuk terus melahirkan karya-karya kreatif yang autentik dan berdaya saing global.",
        en: "Event Theme: Creative Economy as National Soft Power: Role, Art, Policy, and Younger Generation\nSpeaker: Yovie Widianto - President's Special Envoy for Creative Industry\n\nTo celebrate the 25th Anniversary of Widyatama University and FISIP, this public lecture focused on creative industries. For a Film and TV production student, this event offered profound perspectives on utilizing AI and strategic creativity to build robust cultural footprints. Yovie Widianto encouraged the younger generation to embrace tech changes wisely without diluting original artistic voices."
      },
      proofUrls: [],
      proofPdfUrl: "",
      links: [
        {
          label: {
            id: "Dokumentasi Acara",
            en: "Event Documentation"
          },
          url: "https://drive.google.com/drive/folders/19XT7jMUL-HSO7ZLCkcp4saaLQ3PYyQd9?usp=drive_link"
        },
        {
          label: {
            id: "Dokumentasi Resmi",
            en: "Official Documentation"
          },
          url: "https://www.instagram.com/reel/DYO_cgoh0rU/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="
        }
      ]
    },
    {
      id: "act_sospol_symposium",
      title: {
        id: "Sosial Politik Symposium",
        en: "Social Politics Symposium"
      },
      role: {
        id: "Peserta Perwakilan BEM FISIP Universitas Widyatama",
        en: "Participant Representative of BEM FISIP Widyatama University"
      },
      institution: {
        id: "BEM FISIP UNPAS",
        en: "BEM FISIP Pasundan University"
      },
      level: {
        id: "Universitas",
        en: "University"
      },
      period: {
        id: "Februari 2026",
        en: "February 2026"
      },
      location: {
        id: "Universitas Pasundan",
        en: "Pasundan University"
      },
      description: {
        id: "Tema Acara : Tangga Belajar yang Tak Sama Tingginya\nPembicara : Aldila Septiadi., SE., MM. , Dr. H. Edwin Sanjaya, S.E., M.M. , dan Tino Rila Sebayang, S.IP., M.A.\n\nSOSPOL SYMPOSIUM 2026 adalah ruang diskusi kritis yang mengajak generasi muda untuk membedah realitas ketimpangan pendidikan di Indonesia. Dengan mengangkat tema “Mengawal Tangga Belajar yang Tak Sama Tingginya”, simposium ini melahirkan gagasan strategis dan solusi nyata demi mewujudkan pemerataan pendidikan global, guna mencetak SDM unggul menuju Indonesia Emas 2045.",
        en: "Event Theme: Unequal Learning Ladder\nSpeakers: Aldila Septiadi., SE., MM., Dr. H. Edwin Sanjaya, S.E., M.M., and Tino Rila Sebayang, S.IP., M.A.\n\nSOSPOL SYMPOSIUM 2026 is a critical discussion space inviting the younger generation to dissect the reality of education inequality in Indonesia. Adopting the theme \"Guarding the Unequal Learning Ladder\", this symposium produced strategic ideas and concrete solutions for global education equity, aiming to forge superior human resources for Indonesia Golden 2045."
      },
      proofUrls: [],
      proofPdfUrl: "",
      links: [
        {
          label: {
            id: "Poster Acara",
            en: "Event Poster"
          },
          url: "https://www.instagram.com/p/DUhhkpHErBh/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="
        },
        {
          label: {
            id: "Dokumentasi Pribadi",
            en: "Personal Documentation"
          },
          url: "https://drive.google.com/drive/folders/1U5Ao6benbu6_heaUSl4c0tycThoUZOQ3?usp=drive_link"
        }
      ]
    },
    {
      id: "act_cinema_wonderland",
      title: {
        id: "Cinema Wonderland",
        en: "Cinema Wonderland"
      },
      role: {
        id: "Produser Film “IOT : THE MOST PROBLEMATIC WOMAN BEHIND THE BAR”",
        en: "Producer of Film \"IOT: THE MOST PROBLEMATIC WOMAN BEHIND THE BAR\""
      },
      institution: {
        id: "Himpunan Mahasiswa Film dan Televisi, Universitas Widyatama",
        en: "Film & Television Student Association, Widyatama University"
      },
      level: {
        id: "Universitas",
        en: "University"
      },
      period: {
        id: "Januari 2026",
        en: "January 2026"
      },
      location: {
        id: "Ruang Auditorium, Bandung Creative Hub",
        en: "Auditorium Room, Bandung Creative Hub"
      },
      description: {
        id: "Tema Acara : Mata Warga, Lensa Semesta\n\nCinema Wonderland yaitu kegiatan screening film yang diinisiasi oleh Himpunan Mahasiswa Film dan Televisi Universitas Widyatama, hadir membawa tema \"Mata Warga, Lensa Semesta\". Acara ini menjadi ruang inklusif bagi sineas dan pencinta film untuk berdialog, berbagi cerita, dan memotret realitas sosial melalui film.\n\nSebagai produser film \"IOT: THE MOST PROBLEMATIC WOMAN BEHIND THE BAR\", disini kami membedah proses kreatif di balik layar sekaligus mendalami bagaimana sinema dapat berfungsi sebagai refleksi sosial yang mendalam.",
        en: "Event Theme: Citizen's Eye, Universe's Lens\n\nCinema Wonderland is a film screening event initiated by the Film and Television Student Association of Widyatama University, carrying the theme \"Citizen's Eye, Universe's Lens\". This event is an inclusive space for filmmakers and enthusiasts to discuss, share stories, and capture social realities via film.\n\nAs the producer of the film \"IOT: THE MOST PROBLEMATIC WOMAN BEHIND THE BAR\", we dissect the behind-the-scenes creative processes and delve into how cinema acts as deep social reflection."
      },
      proofUrls: [],
      proofPdfUrl: "",
      links: [
        {
          label: {
            id: "Dokumentasi Pribadi",
            en: "Personal Documentation"
          },
          url: "https://drive.google.com/drive/folders/1gwtnhwgBZLs9iVWv9K_X_vigJLJLLuce?usp=drive_link"
        }
      ]
    },
    {
      id: "act_seminar_4pilar",
      title: {
        id: "Seminar Nasional “4 Pilar Kebangsaan”",
        en: "National Seminar on \"The 4 Pillars of Nationhood\""
      },
      role: {
        id: "Peserta Perwakilan BEM FISIP Universitas Widyatama",
        en: "Participant Representative of BEM FISIP Widyatama University"
      },
      institution: {
        id: "MPR RI dan Universitas Widyatama",
        en: "MPR RI and Widyatama University"
      },
      level: {
        id: "Nasional",
        en: "National"
      },
      period: {
        id: "Desember 2025",
        en: "December 2025"
      },
      location: {
        id: "Universitas Widyatama",
        en: "Widyatama University"
      },
      description: {
        id: "Tema Acara : Pancasila, Undang-Undang Dasar 1945, NKRI, dan Bhineka Tunggal Ika\n\nPelaksanaan kegiatan sosialisasi ini bertujuan utama untuk meningkatkan wawasan kebangsaan serta memperdalam pemahaman mahasiswa mengenai nilai-nilai dasar yang melandasi kehidupan berbangsa dan bernegara. Melalui pemaparan materi yang komprehensif mengenai Empat Pilar MPR RI, forum ini berhasil memperkuat karakter kepemimpinan dan rasa nasionalisme para peserta. Kehadiran delegasi dalam seminar ini tidak hanya memenuhi peran representasi organisasi di tingkat nasional, tetapi juga memberikan output berupa penguatan kapasitas berpikir kritis dan penanaman nilai kebangsaan yang siap diimplementasikan dalam ruang lingkup gerakan mahasiswa di FISIP Universitas Widyatama.",
        en: "Event Theme: Pancasila, the 1945 Constitution, NKRI, and Unity in Diversity\n\nThis socialization event aims primarily to enhance national insight and deepen student understanding of the fundamental values underlying national and state life. Through comprehensive material presentation of the Four Pillars of MPR RI, this forum successfully strengthened leadership character and nationalistic values among participants. The presence of delegates not only fulfilled national-level representation but also generated critical thinking capacity-building output to be implemented in student movements."
      },
      proofUrls: [],
      proofPdfUrl: "",
      links: [
        {
          label: {
            id: "Dokumentasi Pribadi",
            en: "Personal Documentation"
          },
          url: "https://drive.google.com/drive/folders/1XqtTp77zKxyoHoNTapKj30TwnnZ12xcR?usp=drive_link"
        },
        {
          label: {
            id: "Dokumentasi Lain",
            en: "Other Documentation"
          },
          url: "https://www.facebook.com/watch/?v=1595251874842815"
        }
      ]
    },
    {
      id: "act_virtual_prod",
      title: {
        id: "Seminar dan Workshop Virtual Production : Transformasi Teknologi dalam film “Menuju Pelaminan”",
        en: "Seminar & Workshop Virtual Production: Technology Transformation in \"Menuju Pelaminan\""
      },
      role: {
        id: "Mahasiswa Produksi Film dan Televisi, Universitas Widyatama",
        en: "Film and Television Production Student, Widyatama University"
      },
      institution: {
        id: "Produksi Film Negara dan V2 Indonesia",
        en: "State Film Production (PFN) and V2 Indonesia"
      },
      level: {
        id: "Nasional",
        en: "National"
      },
      period: {
        id: "Juli 2025",
        en: "July 2025"
      },
      location: {
        id: "Studio Black Box Produksi Film Negara",
        en: "Black Box Studio, State Film Production (PFN) Jakarta"
      },
      description: {
        id: "Pembahasan Acara : Mengupas tuntas penerapan teknologi Virtual Production (VP) dan Extended Reality (XR) sebagai terobosan dalam produksi film modern di Indonesia.\n\nSeminar dan Workshop \"Virtual Production Unveiled: Transformasi Teknologi dalam Film Menuju Pelaminan\" sukses diselenggarakan atas kolaborasi antara Produksi Film Negara (PFN) dan V2 Indonesia. Acara yang berlangsung pada 17 Juli 2025 di Blackbox Studio PFN Heritage, Jakarta ini, secara khusus mengupas tuntas penerapan teknologi Virtual Production (VP) dan Extended Reality (XR) sebagai terobosan baru dalam industri perfilman modern di Indonesia. Melalui seminar ini, para peserta diajak untuk melihat langsung masa depan sinema digital yang lebih efisien dan dinamis.\n\nSebagai sorotan utama , acara ini membedah pendekatan inovatif yang diterapkan dalam film \"Menuju Pelaminan\" sebuah karya dari Rekam Films yang disutradarai oleh Yuda Kurniawan. Keunikan dari film ini terletak pada proses syutingnya, di mana sebagian besar adegannya direkam langsung di dalam studio menggunakan latar belakang digital berbasis real-time. Penerapan teknologi mutakhir ini terbukti memberikan efisiensi tinggi, terutama dalam menghemat waktu dan memangkas biaya produksi secara signifikan. Tidak hanya menguntungkan dari sisi operasional, teknologi VP dan XR ini juga memberikan kenyamanan lebih bagi para aktor saat beradegan, tanpa sedikit pun mengurangi kualitas visual dan nilai artistik yang ingin disampaikan kepada penonton.",
        en: "Scope: Fully exploring the implementation of Virtual Production (VP) and Extended Reality (XR) technology as a breakthrough in modern film production in Indonesia.\n\nThis collaborative seminar and workshop on July 17, 2025, in Blackbox Studio PFN Heritage, Jakarta unpacked application of Virtual Production (VP) and Extended Reality (XR) as a new breakthrough. It focused on the film \"Menuju Pelaminan\" (Rekam Films), directed by Yuda Kurniawan, where most scenes were shot using real-time digital background backdrops, generating great production efficiency and artistic quality."
      },
      proofUrls: [],
      proofPdfUrl: "",
      links: [
        {
          label: {
            id: "Showreel",
            en: "Showreel"
          },
          url: "https://drive.google.com/file/d/1oJ182vn5cjegnte8sLsRSADlf4mQ9WpM/view?usp=drive_link"
        },
        {
          label: {
            id: "Dokumentasi Pribadi",
            en: "Personal Documentation"
          },
          url: "https://drive.google.com/drive/folders/1lCVtVLX4yR_B7KPcqIjEpK1ynfNbn2ib?usp=drive_link"
        },
        {
          label: {
            id: "Dokumentasi Resmi",
            en: "Official Documentation"
          },
          url: "https://youtu.be/DYXhz5a-h00?si=vRWzPHQvJDrmuXpQ"
        }
      ]
    },
    {
      id: "act_kuliah_lapangan",
      title: {
        id: "Kuliah Lapangan",
        en: "Field Study"
      },
      role: {
        id: "Mahasiswa Produksi Film dan Televisi",
        en: "Film & Television Production Student"
      },
      institution: {
        id: "Program Studi “Produksi Film dan Televisi”",
        en: "Film & Television Production Study Program"
      },
      level: {
        id: "Universitas",
        en: "University"
      },
      period: {
        id: "Juli 2025",
        en: "July 2025"
      },
      location: {
        id: "Produksi Film Negara dan Lembaga Sensor Film Indonesia",
        en: "State Film Production (PFN) and Indonesian Film Censorship Board (LSF) Indonesia"
      },
      description: {
        id: "Pada bulan Juli 2025, Program Studi Produksi Film dan Televisi menyelenggarakan kegiatan Kuliah Lapangan yang diikuti oleh beberapa Mahasiswa Produksi Film dan Televisi sebagai agenda dalam mengisi berakhirnya semester genap. Kegiatan akademik ini berfokus pada kunjungan industri strategis ke dua instansi besar yang menjadi pilar perfilman nasional, yaitu Produksi Film Negara (PFN) dan Lembaga Sensor Film (LSF) Indonesia. Melalui kunjungan ini, mahasiswa mendapatkan kesempatan untuk berdialog langsung dan menyerap berbagai insight berharga dari orang-orang hebat serta para praktisi ahli di kedua lembaga tersebut.\n\nSelama kegiatan berlangsung, mahasiswa tidak hanya memperluas cakra wawasan teoritis, tetapi juga melihat secara nyata bagaimana ekosistem industri kreatif dan regulasi perfilman di Indonesia bergerak. Di PFN, mahasiswa berkesempatan membedah proses produksi, manajemen studio, hingga peluang distribusi konten di era digital. Sementara itu, kunjungan ke LSF membuka ruang diskusi yang mendalam mengenai kebijakan penyensoran, pemahaman regulasi konten, serta pentingnya literasi menonton bagi masyarakat. Kuliah lapangan ini berhasil menjadi jembatan yang solid antara dunia perkuliahan dan realitas industri, memberikan bekal motivasi serta perspektif baru bagi mahasiswa untuk siap berkarya secara profesional di masa depan.",
        en: "In July 2025, the Film and TV Production department organized a Field Study to PFN and LSF. This visit offered precious academic insights, spanning studio management and regulatory screening frameworks in Indonesian cinema, serving as a solid bridge from university life into real professional film production."
      },
      proofUrls: [],
      proofPdfUrl: "",
      links: [
        {
          label: {
            id: "Dokumentasi Pribadi",
            en: "Personal Documentation"
          },
          url: "https://drive.google.com/drive/folders/1TLEQ-KQq7m_zoXL9gb6w89yihaIMX3Iw?usp=drive_link"
        },
        {
          label: {
            id: "Dokumentasi Resmi",
            en: "Official Documentation"
          },
          url: "https://youtu.be/UT1QVb68vaA?si=sbUctBPCDXDRJrLD"
        }
      ]
    },
    {
      id: "act_lkmm_td",
      title: {
        id: "Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar",
        en: "Basic Student Management Skills Training"
      },
      role: {
        id: "Peserta Perwakilan Badan Eksekutif Mahasiswa FISIP",
        en: "Participant Representative of FISIP Student Executive Board"
      },
      institution: {
        id: "Universitas Widyatama",
        en: "Widyatama University"
      },
      level: {
        id: "Universitas",
        en: "University"
      },
      period: {
        id: "Juni 2025",
        en: "June 2025"
      },
      location: {
        id: "Universitas Widyatama",
        en: "Widyatama University"
      },
      description: {
        id: "Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar (LKMM-TD) yang diselenggarakan oleh Universitas Widyatama pada bulan Juni 2025 merupakan sebuah wadah pelatihan kepemimpinan yang sangat impresif. Sebagai peserta perwakilan dari Badan Eksekutif Mahasiswa (BEM) FISIP, kegiatan ini memberikan pengalaman manajerial yang komprehensif dan mendalam. Acara ini dikonsep secara dinamis, memadukan sesi materi teoritis di lingkungan kampus Universitas Widyatama dan di salah satu villa yang kondusif untuk membangun kebersamaan.\n\nSelama pelatihan, para peserta dibekali dengan pemahaman mendalam mengenai roda organisasi, mulai dari bedah alur birokrasi kampus yang krusial bagi administrasi kegiatan mahasiswa, hingga berbagai pelatihan kepemimpinan strategis lainnya. Salah satu sesi paling krusial adalah Focus Group Discussion (FGD) interaktif langsung bersama Wakil Rektor, yang membuka ruang dialog strategis mengenai penyelarasan visi mahasiswa dengan kebijakan universitas. Melalui kombinasi materi yang padat, kegiatan ini berhasil mencetak kader-kader organisasi yang tidak hanya cakap secara administratif, tetapi juga kritis, solutif, dan siap membawa ke arah yang lebih progresif.",
        en: "LKMM-TD in June 2025 provided a rich leadership and administrative toolkit for BEM FISIP representatives. Mixing campus academic seminars with interactive group building in off-site villas, it prepared next-generation student leaders in policy-making, bureaucratic procedures, and collaborative visioning."
      },
      proofUrls: [],
      proofPdfUrl: "",
      links: [
        {
          label: {
            id: "Showreel",
            en: "Showreel"
          },
          url: "https://drive.google.com/file/d/1h9uJyJ_bP7h3q1OGnXlqYr_JOrqinBEN/view?usp=drive_link"
        },
        {
          label: {
            id: "Dokumentasi Pribadi",
            en: "Personal Documentation"
          },
          url: "https://drive.google.com/drive/folders/1brJmzD-XZrk1mkfqrGR-Sh2RykfMi_BN?usp=drive_link"
        },
        {
          label: {
            id: "Dokumentasi Resmi",
            en: "Official Documentation"
          },
          url: "https://www.instagram.com/reel/DLtt3rgRvw4/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="
        }
      ]
    },
    {
      id: "act_video_profil",
      title: {
        id: "Pembuatan Video Profil Kampus Universitas Widyatama",
        en: "Widyatama University Profile Video Production"
      },
      role: {
        id: "Talent Coordinator",
        en: "Talent Coordinator"
      },
      institution: {
        id: "Universitas Widyatama",
        en: "Widyatama University"
      },
      level: {
        id: "Universitas",
        en: "University"
      },
      period: {
        id: "Desember 2024",
        en: "December 2024"
      },
      location: {
        id: "Universitas Widyatama",
        en: "Widyatama University"
      },
      description: {
        id: "Dalam proyek Pembuatan Video Profil Kampus Universitas Widyatama, saya berkontribusi sebagai Talent Coordinator. Kegiatan ini digarap oleh mahasiswa program studi Produksi Film dan Televisi Universitas Widyatama. Dalam peran ini, saya bertanggung jawab penuh sebagai narahubung yang menjembatani komunikasi antara tim produksi dengan para perwakilan fakultas serta dosen yang terlibat sebagai talent. Tugas saya meliputi koordinasi jadwal syuting, hingga memastikan kenyamanan dan kesiapan para dosen serta perwakilan fakultas selama proses produksi berlangsung.",
        en: "In the Widyatama University Campus Profile Video Production project, I contributed as a Talent Coordinator. This activity was carried out by students of the Widyatama University Film and Television Production study program. In this role, I was fully responsible as a liaison bridging communication between the production team and the faculty representatives and lecturers involved as talents. My duties included coordinating shooting schedules and ensuring the comfort and readiness of the lecturers and faculty representatives during the production process."
      },
      proofUrls: [],
      proofPdfUrl: "",
      links: [
        {
          label: {
            id: "Behind The Scenes (BTS)",
            en: "Behind The Scenes (BTS)"
          },
          url: "https://drive.google.com/drive/folders/1e_zHgFjFkyDs3EDjG11eVwWsujyhCKYo?usp=drive_link"
        }
      ]
    }
  ],
  contacts: [
    { id: "c1", platform: "email", value: "dekaaryanto.pwk@gmail.com", label: "Email" },
    { id: "c2", platform: "whatsapp", value: "+62 851-2117-6986", label: "WhatsApp" },
    { id: "c3", platform: "instagram", value: "https://www.instagram.com/dekaary_?igsh=bGc0dGF3Z3Z4YTNq&utm_source=qr", label: "Instagram" },
    { id: "c4", platform: "tiktok", value: "https://www.tiktok.com/@dekaary__?_r=1&_t=ZS-97jj3j1mOMn", label: "TikTok" },
    { id: "c5", platform: "linkedin", value: "https://www.linkedin.com/in/deka-aryanto-184448253/", label: "LinkedIn" }
  ]
};
