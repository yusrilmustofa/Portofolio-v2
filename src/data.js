/* ★ KONTEN PORTOFOLIO — ganti semua isi di bawah dengan data kamu sendiri. */
export const DATA = {
  profile: {
    name: "Yusril Mustofa", // ← nama lengkap
    brand: "Yusss", // ← teks logo di navbar (tanpa ".dev")
    initials: "Y", // ← inisial untuk avatar/logo
    role: "Backend Developer",
    roles: [
      "Backend Developer",
      "API & Microservices",
      "Database & Infrastruktur",
    ], // rotasi di hero
    status: "Terbuka untuk peluang",
    tagline:
      "Backend developer yang fokus membangun API yang cepat, aman, dan mudah dirawat. Nyaman bergaul dengan database, queue, dan infrastruktur.",
    location: "Indonesia · Remote",
    email: "yusrilmustofa123@gmail.com",
    photo: "images/Lanyard.JPG", // ← foto di kartu lanyard & About, mis. "images/foto.jpg" (file di public/images/)
    cardPhotoX: 77, // ← 0 = sisi kiri foto, 100 = sisi kanan
    cardPhotoY: 90, // ← 0 = sisi atas foto, 100 = sisi bawah
    cardPhotoZoom: 1, // ← 1 = foto utuh, makin besar makin dekat
    cardImage: "", // ← opsional: desain kartu sendiri (1024×1440), menggantikan seluruh kartu
    spotifyUrl:
      "https://open.spotify.com/playlist/6ou16Jk6oF1GkQXZ2ur3HI?si=89da6dc7591d460d", // ← ganti playlist kamu; kosong = section musik hilang
    socials: [
      {
        label: "GitHub",
        url: "https://github.com/yusrilmustofa",
        icon: "github",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/yusril-mustofa/",
        icon: "linkedin",
      },
      { label: "Email", url: "mailto:yusrilmustofa123@gmail.com", icon: "mail" },
    ],
  },

  about: [
    "Saya backend developer yang senang mengurai masalah kompleks menjadi <strong>service yang sederhana dan andal</strong>. Fokus saya: merancang API, mendesain database, dan optimasi query.",
    "Untuk saya, backend yang baik itu tidak terasa: cepat, stabil, terdokumentasi, dan gampang ditambah fitur oleh orang lain. Di luar kode, saya suka nulis dokumentasi teknis dan oprek server sendiri.",
  ],
  facts: [
    { icon: "pin", label: "Lokasi", value: "Indonesia · Remote" },
    { icon: "focus", label: "Fokus", value: "API & Query" },
    { icon: "server", label: "Stack", value: "Node.js / Nest.js" },
    { icon: "clock", label: "Respons", value: "< 24 jam" },
  ],

  education: [
    {
      mark: "S",
      color: "#3c84f6",
      title: "Undergraduate S1 System Information",
      sub: "BINUS UNIVERSITY",
      date: "2023 – NOW",
    },
    {
      mark: "T",
      color: "#b83b3bff",
      title: "Vocational High School Software Engineer",
      sub: "SMK TELKOM MALANG",
      date: "2019 – 2022",
    },
  ],
  experience: [
    {
      mark: "PT",
      color: "#10b981",
      title: "Backend Developer",
      sub: "PT Gamatecha Solusi Nusantara",
      date: "2025 – sekarang",
    },
    {
      mark: "IN",
      color: "#377703ff",
      title: "Backend Developer",
      sub: "PT Telkom Indonesia",
      date: "2022 – 2025",
    },
    {
      mark: "IN",
      color: "#ec4899",
      title: "Backend Developer Intern",
      sub: "PT Telkom Indonesia",
      date: "2021 – 2022",
    },
  ],

  projects: [
    {
      id: "oauth-login",
      title: "Login With Google",
      categoryLabel: "Personal Project",
      abbr: "LG",
      gradient:
        "linear-gradient(135deg, #0f172a 0%, #0369a1 50%, #0284c7 100%)",
      image: "/images/OAUTH.png", // ← screenshot proyek, mis. "images/oauth-login.png"
      description:
        "Feature that allows users to log in using their Google account securely and quickly",
      longDesc: "", // ← opsional: penjelasan panjang di popup detail
      tags: [], // ← opsional: teknologi, mis. ["Node.js", "MySQL"]
      features: [], // ← opsional: daftar fitur
      links: [{ label: "GitHub", url: "https://github.com/yusrilmustofa/Oauth-Login" }],
    },
    {
      id: "url-shorter",
      title: "Url Shorter",
      categoryLabel: "Personal Project",
      abbr: "US",
      gradient:
        "linear-gradient(135deg, #091e3a 0%, #1e3a8a 50%, #3b82f6 100%)",
      image: "/images/shrink.png",  // ← screenshot proyek, mis. "images/url-shorter.png"
      description:
        "Feature to shorten URLs easily and quickly.",
      longDesc: "", // ← opsional: penjelasan panjang di popup detail
      tags: [], // ← opsional: teknologi, mis. ["Node.js", "MySQL"]
      features: [], // ← opsional: daftar fitur
      links: [{ label: "GitHub", url: "https://github.com/yusrilmustofa/url-shorter" }],
    },
    {
      id: "full-stack Tuition Fee Payment",
      title: "Full-stack for Tuition Fee Payment",
      categoryLabel: "Personal Project",
      abbr: "SP",
      gradient:
        "linear-gradient(135deg, #052e2b 0%, #047857 50%, #10b981 100%)",
      image: "/images/SPP.png", // ← screenshot proyek, mis. "images/spp-backend.png"
      description:
        "Full-stack payment system to manage tuition fee payments",
      longDesc: "", // ← opsional: penjelasan panjang di popup detail
      tags: [], // ← opsional: teknologi, mis. ["Node.js", "MySQL"]
      features: [], // ← opsional: daftar fitur
      links: [{ label: "Backend", url: "https://github.com/yusrilmustofa/SPP-Backend" }, { label: "Frontend", url: "https://github.com/yusrilmustofa/SPP-Frontend" }],
    },
    {
      id: "Barbershop",
      title: "Barbershop Management System",
      categoryLabel: "Personal Project",
      abbr: "BS",
      gradient:
        "linear-gradient(135deg, #dc1a1aff 0%, #6d28d9 50%, #e3e1e7ff 100%)",
      image: "/images/androk.png", // ← screenshot proyek, mis. "images/nest-auth-crud.png"
      description:
        "A web-based application to manage barbershop transactions, including appointment management, customer management, and employee management.",
      longDesc: "", // ← opsional: penjelasan panjang di popup detail
      tags: [], // ← opsional: teknologi, mis. ["Node.js", "MySQL"]
      features: [], // ← opsional: daftar fitur
      links: [{ label: "GitHub", url: "https://github.com/yusrilmustofa/androk-barber" }],
    },
    {
      id: "encryption",
      title: "Encryption and Decryption Data",
      categoryLabel: "Personal Project",
      abbr: "ED",
      gradient:
        "linear-gradient(135deg, #0f172a 0%, #0369a1 50%, #0284c7 100%)",
      image: "/images/P2P.png", // ← screenshot proyek, mis. "images/encryption.png"
      description:
        "Feature to convert plaintext into a random string",
      longDesc: "", // ← opsional: penjelasan panjang di popup detail
      tags: [], // ← opsional: teknologi, mis. ["Node.js", "MySQL"]
      features: [], // ← opsional: daftar fitur
      links: [{ label: "GitHub", url: "https://github.com/yusrilmustofa/TP1-Security-no-3" }],
    },
    {
      id: "RAG Service LLM (LLMA)",
      title: "RAG Service Project",
      categoryLabel: "Personal Project",
      abbr: "RAG",
      gradient:
        "linear-gradient(135deg, #091e3a 0%, #1e3a8a 50%, #3b82f6 100%)",
      image: "", // ← screenshot proyek, mis. "images/cafetaria.png"
      description:
        "Backend API for a personal student research assistant. Upload PDFs (journals, thesis references), ask questions, and get answers from your own documents with page citations.",
      longDesc: "", // ← opsional: penjelasan panjang di popup detail
      tags: [], // ← opsional: teknologi, mis. ["Node.js", "MySQL"]
      features: [], // ← opsional: daftar fitur
      links: [{ label: "GitHub", url: "https://github.com/yusrilmustofa/RAG-Service" }],
    },
  ],

  skills: [
    {
      category: "Bahasa Pemrograman",
      skills: [
        { name: "Go", abbr: "Go", color: "#00ADD8" },
        { name: "JavaScript", abbr: "JS", color: "#F7DF1E" },
        { name: "TypeScript", abbr: "TS", color: "#3178C6" },
        { name: "PHP", abbr: "PHP", color: "#777BB4" },
      ],
    },
    {
      category: "Framework & API",
      skills: [
        { name: "Node.js", abbr: "No", color: "#339933" },
        { name: "Express", abbr: "Ex", color: "#9eaab6" },
        { name: "Laravel", abbr: "Lr", color: "#FF2D20" },
        { name: "Nest.js", abbr: "Ne", color: "#059688" },
      ],
    },
    {
      category: "Database & Cache",
      skills: [
        { name: "PostgreSQL", abbr: "PG", color: "#336791" },
        { name: "MySQL", abbr: "My", color: "#4479A1" },
        { name: "Redis", abbr: "Re", color: "#DC382D" },
        { name: "MongoDB", abbr: "Mo", color: "#47A248" },
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Docker", abbr: "Dk", color: "#2496ED" },
        { name: "Git", abbr: "Git", color: "#F05032" },
        { name: "Nginx", abbr: "Nx", color: "#009639" },
        { name: "Jenkins", abbr: "Jk", color: "#FF6C37" },
        { name: "Jest", abbr: "Js", color: "#b637ffff" },
        { name: "Vault Warden", abbr: "Vw", color: "#37ffacff" },
      ],
    },
  ],

  // image: gambar sertifikat/penghargaan, mis. "images/sertifikat-docker.jpg" (file di public/images/)

  certificates: [
    {
      title: "Full Stack Developer",
      issuer: "BNSP",
      year: "2025",
      abbr: "DC1",
      image: "/images/BNSP.jpg",
    },
    {
      title: "Data PII",
      issuer: "PT Telkom Indonesia",
      year: "2024",
      abbr: "CS1",
      image: "/images/PDP.jpg",
    },
    {
      title: "Web Developer Fundamental",
      issuer: "IBM SkillsBuild",
      year: "2024",
      abbr: "UD1",
      image: "/images/IBM.jpg",
    },
    {
      title: "Google Cybersecurity Certificate",
      issuer: "Google",
      year: "2025",
      abbr: "GCC1",
      image: "/images/GOOGLE.jpg",
    },
    // {
    //   title: "Microsoft Technology Associate HTML",
    //   issuer: "Microsoft",
    //   year: "2021",
    //   abbr: "MTA1",
    //   image: "",
    // },
    // {
    //   title: "Microsoft Technology Associate JavaScript",
    //   issuer: "Microsoft",
    //   year: "2021",
    //   abbr: "MTA2",
    //   image: "",
    // },
  ],

  // awards: [
  //   {
  //     title: "Juara III — Bidang Studi Terpadu",
  //     event: "Kompetisi Tingkat Kota",
  //     year: "2023",
  //     abbr: "AW",
  //     image: "",
  //   },
  // ],
};
