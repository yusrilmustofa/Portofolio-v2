/* ★ KONTEN PORTOFOLIO — ganti semua isi di bawah dengan data kamu sendiri. */
const DATA = {
  profile: {
    name: "Yusril Mustofa",                    // ← nama lengkap
    brand: "Yusril",                    // ← teks logo di navbar (tanpa ".dev")
    initials: "YM",                       // ← inisial untuk avatar/logo
    role: "Backend Developer",
    roles: ["Backend Developer", "API & Microservices", "Database & Infrastruktur"], // rotasi di hero
    status: "Terbuka untuk peluang",
    tagline: "Backend developer yang fokus membangun API yang cepat, aman, dan mudah dirawat. Nyaman bergaul dengan database, queue, dan infrastruktur dari desain skema sampai deploy.",
    location: "Indonesia · Remote",
    email: "email@kamu.com",
    socials: [
      { label: "GitHub",   url: "https://github.com/username",   icon: "github" },
      { label: "LinkedIn", url: "https://linkedin.com/in/username", icon: "linkedin" },
      { label: "Email",    url: "yusrilmustofa123@gmail.com",         icon: "mail" },
    ],
  },

  about: [
    'Saya backend developer yang senang mengurai masalah kompleks menjadi <strong>service yang sederhana dan andal</strong>. Fokus saya: merancang API, mendesain database, dan mengotomasi deploy.',
    'Untuk saya, backend yang baik itu tidak terasa: cepat, stabil, terdokumentasi, dan gampang ditambah fitur oleh orang lain. Di luar kode, saya suka nulis dokumentasi teknis dan oprek server sendiri.',
  ],
  facts: [
    { icon: "pin",   label: "Lokasi",  value: "Indonesia · Remote" },
    { icon: "focus", label: "Fokus",   value: "API & Database" },
    { icon: "server",label: "Stack",   value: "Go / Python / Node" },
    { icon: "clock", label: "Respons", value: "&lt; 24 jam" },
  ],

  education: [
    { mark: "S", color: "#3c84f6", title: "S1 Teknik Informatika", sub: "Universitas Nama Kamu", date: "2021 – 2025" },
  ],
  experience: [
    { mark: "PT", color: "#10b981", title: "Backend Developer", sub: "PT Contoh Sejahtera Digital", date: "2024 – sekarang" },
    { mark: "IN", color: "#ec4899", title: "Backend Engineer Intern", sub: "Startup Contoh Teknologi", date: "2023 – 2024" },
  ],

  projects: [
    {
      id: "atlas",
      title: "ATLAS — REST API E-Commerce",
      categoryLabel: "API Service",
      abbr: "AT",
      gradient: "linear-gradient(135deg, #0f172a 0%, #0369a1 50%, #0284c7 100%)",
      description: "REST API untuk katalog, keranjang, order, dan pembayaran dengan autentikasi JWT.",
      longDesc: "ATLAS adalah API service e-commerce yang menangani katalog produk, manajemen keranjang, proses order, dan integrasi payment gateway. Dibangun dengan arsitektur berlapis (handler → service → repository) supaya mudah diuji dan dikembangkan, lengkap dengan rate limiting, caching, dan dokumentasi OpenAPI.",
      tags: ["Go", "Gin", "PostgreSQL", "Redis", "Docker", "JWT"],
      features: ["Autentikasi JWT + refresh token", "Rate limiting & caching via Redis", "Migration database otomatis", "Dokumentasi OpenAPI + koleksi Postman"],
      links: [{ label: "GitHub", url: "#" }, { label: "Demo", url: "#" }],
    },
    {
      id: "sentra",
      title: "SENTRA — Absensi Realtime",
      categoryLabel: "Realtime",
      abbr: "SE",
      gradient: "linear-gradient(135deg, #091e3a 0%, #1e3a8a 50%, #3b82f6 100%)",
      description: "Sistem absensi berbasis WebSocket dengan rekap otomatis dan notifikasi.",
      longDesc: "SENTRA menyediakan layanan absensi realtime: klien terhubung lewat WebSocket, kehadiran tervalidasi per sesi, dan rekap harian dihitung otomatis oleh worker terjadwal. Dilengkapi dashboard rekap dan notifikasi ke admin.",
      tags: ["Go", "WebSocket", "MySQL", "Docker", "Cron"],
      features: ["Koneksi WebSocket dengan heartbeat", "Validasi sesi & anti duplikasi", "Worker rekap harian terjadwal", "Ekspor rekap ke CSV"],
      links: [{ label: "GitHub", url: "#" }],
    },
    {
      id: "kirimin",
      title: "KIRIM.IN — Notification Service",
      categoryLabel: "Worker / Queue",
      abbr: "KI",
      gradient: "linear-gradient(135deg, #052e2b 0%, #047857 50%, #10b981 100%)",
      description: "Layanan notifikasi asynchronous (email & Telegram) dengan task queue.",
      longDesc: "KIRIM.IN memisahkan pengiriman notifikasi dari proses utama aplikasi: pesan masuk ke queue, worker mengirim via SMTP/API dengan retry eksponensial, dan semua aktivitas tercatat untuk audit. Throughput dan status tiap pesan bisa dipantau lewat endpoint monitoring.",
      tags: ["Python", "FastAPI", "Celery", "Redis", "PostgreSQL"],
      features: ["Task queue dengan retry & dead-letter", "Template notifikasi terpusat", "Endpoint monitoring status pesan", "Rate limit per penerima"],
      links: [{ label: "GitHub", url: "#" }],
    },
    {
      id: "panen",
      title: "PANEN DATA — Pipeline ETL",
      categoryLabel: "Data Pipeline",
      abbr: "PD",
      gradient: "linear-gradient(135deg, #1a1035 0%, #6d28d9 50%, #8b5cf6 100%)",
      description: "Pipeline ETL harian: tarik data dari beberapa sumber, bersihkan, muat ke gudang data.",
      longDesc: "PANEN DATA menjalankan pipeline terjadwal yang menarik data dari beberapa API internal, membersihkan dan menormalisasinya, lalu memuatnya ke gudang data untuk analitik. Setiap jalankan menghasilkan laporan ringkas; kegagalan langkah otomatis diulang dan diberitahukan.",
      tags: ["Python", "Celery", "PostgreSQL", "Docker", "Metabase"],
      features: ["Jadwal pipeline per sumber data", "Validasi & pembersihan otomatis", "Laporan ringkas per run", "Alert kegagalan ke Telegram"],
      links: [{ label: "GitHub", url: "#" }],
    },
  ],

  skills: [
    { category: "Bahasa Pemrograman", skills: [
      { name: "Go", abbr: "Go", color: "#00ADD8" },
      { name: "Python", abbr: "Py", color: "#4B8BBE" },
      { name: "JavaScript", abbr: "JS", color: "#F7DF1E" },
      { name: "TypeScript", abbr: "TS", color: "#3178C6" },
      { name: "PHP", abbr: "PHP", color: "#777BB4" },
    ]},
    { category: "Framework & API", skills: [
      { name: "Node.js", abbr: "No", color: "#339933" },
      { name: "Express", abbr: "Ex", color: "#9eaab6" },
      { name: "Laravel", abbr: "Lr", color: "#FF2D20" },
    ]},
    { category: "Database & Cache", skills: [
      { name: "PostgreSQL", abbr: "PG", color: "#336791" },
      { name: "MySQL", abbr: "My", color: "#4479A1" },
      { name: "Redis", abbr: "Re", color: "#DC382D" },
      { name: "MongoDB", abbr: "Mo", color: "#47A248" },
    ]},
    { category: "DevOps & Tools", skills: [
      { name: "Docker", abbr: "Dk", color: "#2496ED" },
      { name: "Git", abbr: "Git", color: "#F05032" },
      { name: "Postman", abbr: "Pm", color: "#FF6C37" },
    ]},
  ],

  certificates: [
    { title: "Belajar Membuat REST API", issuer: "Dicoding", year: "2025", abbr: "DC1" },
    { title: "Backend Developer Path", issuer: "Coursera / Other", year: "2024", abbr: "CS1" },
    { title: "Docker Foundations", issuer: "Udemy / Other", year: "2024", abbr: "UD1" },
  ],

  awards: [
    { title: "Juara III — Bidang Studi Terpadu", event: "Kompetisi Tingkat Kota", year: "2023", abbr: "AW" },
  ],
};
