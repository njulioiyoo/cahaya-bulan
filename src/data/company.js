const unsplash = (id, w = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`

// Placeholder photos (Wikimedia Commons, CC licensed) until the client sends their own.
export const images = {
  stack: './images/isotank-stack.jpg',
  trailer: './images/isotank-trailer.jpg',
  truckGreen: './images/isotank-truck-green.jpg',
  truckRed: './images/isotank-truck-red.jpg',
  yard: './images/isotank-yard.jpg',
  inspection: './images/isotank-inspection.jpg',
  rail: './images/isotank-rail.jpg',
  waste: unsplash('photo-1558583055-d7ac00b1adca'),
}

export const emails = [
  { key: 'operation', address: 'operation@cahaya-bulan.com' },
  { key: 'finance', address: 'finance@cahaya-bulan.com' },
]

const serviceMeta = [
  { id: 'kontainer', image: images.truckGreen },
  { id: 'domestik', image: images.truckRed },
  { id: 'limbah', image: images.waste },
]

const NAME = 'PT Cahaya Bulan Warisan Kontena'

const id = {
  langName: 'Bahasa Indonesia',
  numberLocale: 'id-ID',
  nav: {
    home: 'Beranda',
    about: 'Tentang',
    aboutFull: 'Tentang Kami',
    services: 'Layanan',
    vision: 'Visi & Misi',
    contact: 'Kontak',
    menu: 'Menu',
    close: 'Tutup',
  },
  company: {
    name: NAME,
    group: 'Grup Cahaya Bulan',
    tagline: 'Dari Indonesia Menuju ASEAN — Menghubungkan Transportasi, Logistik dan Solusi Berkelanjutan.',
  },
  common: {
    contactUs: 'Hubungi Kami →',
    viewServices: 'Lihat Layanan →',
    companyProfile: 'Profil perusahaan →',
    service: 'Layanan',
    email: 'Email',
    emailLabels: { operation: 'Operasional', finance: 'Keuangan' },
  },
  stats: [
    { value: '40+', label: 'Tahun pengalaman transportasi domestik' },
    { value: '1.000+', label: 'Unit armada kendaraan' },
    { value: '3 ton+', label: 'Hingga kendaraan angkutan berat' },
    { value: 'ASEAN', label: 'Visi pengembangan regional' },
  ],
  values: ['Aman', 'Andal', 'Efisien', 'Profesional', 'Berkelanjutan'],
  services: [
    {
      title: 'Transportasi Kontainer',
      summary:
        'Layanan pengangkutan kontainer yang aman, efisien, andal dan profesional, didukung armada dan jaringan operasional Grup Cahaya Bulan.',
      body: [
        `${NAME} berfokus pada penyediaan layanan transportasi kontainer yang aman, efisien, andal dan profesional.`,
        'Dengan memanfaatkan pengalaman, sumber daya manusia, jaringan operasional serta kemampuan armada Grup Cahaya Bulan, perusahaan mampu mendukung berbagai kebutuhan pengangkutan kontainer di Indonesia.',
      ],
      pointsTitle: 'Pengangkutan dari dan menuju',
      points: [
        'Pelabuhan',
        'Terminal kontainer',
        'Depo isotank',
        'Gudang dan pusat distribusi',
        'Kawasan industri',
        'Pabrik dan fasilitas produksi',
        'Lokasi pelanggan di berbagai wilayah Indonesia',
      ],
    },
    {
      title: 'Transportasi & Logistik Domestik',
      summary:
        'Lebih dari 40 tahun melayani transportasi darat dan distribusi di berbagai wilayah utama Indonesia.',
      body: [
        'Selama lebih dari 40 tahun, Grup Cahaya Bulan telah berperan dalam mendukung kegiatan transportasi domestik di Indonesia.',
        'Dengan jaringan operasional yang mencakup berbagai wilayah utama Indonesia, Grup memiliki kemampuan untuk menangani kebutuhan transportasi dari kawasan industri, pelabuhan, terminal, depo, gudang hingga pelanggan di berbagai daerah.',
      ],
      pointsTitle: 'Kekuatan kami',
      points: [
        'Armada lebih dari 1.000 unit',
        'Kendaraan kapasitas ±3 ton hingga angkutan berat',
        'Jaringan operasional di wilayah utama Indonesia',
        'Distribusi dari industri hingga pelanggan akhir',
      ],
    },
    {
      title: 'Transportasi Pengangkutan Limbah',
      summary:
        'Investasi baru Grup di jasa pengangkutan limbah yang aman, profesional, efisien dan sesuai ketentuan yang berlaku.',
      body: [
        'Sebagai bagian dari strategi diversifikasi dan pengembangan usaha, Grup Cahaya Bulan baru-baru ini melakukan investasi di bidang jasa transportasi pengangkutan limbah di Indonesia.',
        'Pengembangan usaha ini mencakup penyediaan armada dan fasilitas transportasi yang sesuai dengan karakteristik limbah, pengelolaan operasional, serta penerapan standar keselamatan dan kepatuhan terhadap peraturan lingkungan hidup yang berlaku di Indonesia.',
        'Ke depan, perusahaan akan terus mengembangkan kemampuan di sektor ini melalui investasi armada, pengembangan sumber daya manusia, penerapan teknologi serta kerja sama strategis dengan berbagai pihak.',
      ],
      pointsTitle: 'Fokus pengembangan',
      points: [
        'Armada sesuai karakteristik limbah',
        'Pengelolaan operasional profesional',
        'Standar keselamatan kerja',
        'Kepatuhan terhadap peraturan lingkungan hidup',
      ],
    },
  ],
  vision:
    'Menjadi salah satu perusahaan transportasi dan logistik yang terpercaya di Indonesia serta berkembang sebagai penyedia solusi transportasi dan logistik yang memiliki jaringan regional di ASEAN.',
  missions: [
    'Menyediakan layanan transportasi yang aman, andal dan efisien.',
    'Mengembangkan jaringan transportasi dan logistik di berbagai wilayah Indonesia.',
    'Meningkatkan kemampuan dalam transportasi kontainer dan pengangkutan limbah.',
    'Melakukan investasi berkelanjutan dalam armada, teknologi dan sumber daya manusia.',
    'Membangun kerja sama jangka panjang dengan pelanggan dan mitra strategis.',
    'Mengembangkan bisnis secara bertahap ke pasar ASEAN.',
    'Menjaga standar keselamatan, kepatuhan dan tanggung jawab terhadap lingkungan.',
  ],
  home: {
    est: 'Est. 1980-an',
    heroLines: ['Menggerakkan', 'kontainer', 'Indonesia.'],
    heroText:
      'Transportasi kontainer dan logistik yang aman, andal dan efisien — didukung pengalaman lebih dari empat dekade dan armada lebih dari 1.000 unit.',
    aboutTitle: 'Empat dekade membangun jaringan transportasi Indonesia.',
    aboutLead: `${NAME} merupakan bagian dari Grup Cahaya Bulan, kelompok usaha transportasi dan logistik yang telah beroperasi di Indonesia sejak tahun 1980-an.`,
    aboutText:
      'Dengan jaringan operasional yang luas, Grup mampu menangani kebutuhan transportasi dari kawasan industri, pelabuhan, terminal, depo, gudang hingga pelanggan di berbagai daerah.',
    servicesTitle: 'Solusi transportasi untuk kebutuhan bisnis Anda.',
    coverageLabel: 'Jangkauan',
    coverageTitle: 'Dari pelabuhan hingga lokasi pelanggan.',
    coverage: [
      'Pelabuhan',
      'Terminal kontainer',
      'Depo isotank',
      'Gudang & pusat distribusi',
      'Kawasan industri',
      'Pabrik & fasilitas produksi',
      'Lokasi pelanggan di seluruh Indonesia',
    ],
    aseanLabel: 'Regional',
    aseanTitle: 'Dari Indonesia menuju ASEAN.',
    aseanText:
      'Dengan Indonesia sebagai basis utama, Grup Cahaya Bulan memiliki visi mengembangkan bisnis transportasi, logistik, transportasi kontainer dan pengangkutan limbah ke pasar ASEAN — secara bertahap, bersama mitra strategis di masing-masing negara.',
  },
  about: {
    title: 'Berpengalaman sejak 1980-an.',
    subtitle: `${NAME} melanjutkan pengalaman lebih dari empat dekade Grup Cahaya Bulan di bidang transportasi dan logistik Indonesia.`,
    profileLabel: 'Profil',
    profileTitle: 'Fondasi kuat untuk transportasi kontainer Indonesia.',
    profileLead: `${NAME} merupakan bagian dari Grup Cahaya Bulan, sebuah kelompok usaha transportasi dan logistik yang telah beroperasi di Indonesia sejak tahun 1980-an.`,
    profileText: [
      'Dengan pengalaman lebih dari empat dekade di bidang transportasi domestik, Grup Cahaya Bulan telah membangun jaringan operasional yang luas di berbagai wilayah Indonesia serta memiliki pengalaman dalam menangani berbagai kebutuhan transportasi darat dan logistik.',
      'Saat ini, Grup Cahaya Bulan didukung oleh lebih dari 1.000 unit kendaraan, mulai dari kendaraan dengan kapasitas sekitar 3 ton hingga kendaraan angkutan berat, yang digunakan untuk melayani berbagai kebutuhan transportasi dan distribusi di Indonesia.',
      `Pengalaman panjang tersebut menjadi fondasi utama bagi pengembangan ${NAME} sebagai perusahaan yang berfokus pada transportasi kontainer dan jasa logistik.`,
    ],
    journeyLabel: 'Perjalanan',
    journeyTitle: 'Tumbuh bersama kebutuhan transportasi Indonesia.',
    milestones: [
      {
        when: '1980-an',
        title: 'Awal perjalanan',
        text: 'Grup Cahaya Bulan mulai beroperasi di bidang transportasi dan logistik di Indonesia.',
      },
      {
        when: '40+ tahun',
        title: 'Jaringan domestik yang luas',
        text: 'Membangun jaringan operasional di berbagai wilayah utama Indonesia dengan armada lebih dari 1.000 unit.',
      },
      {
        when: 'Kini',
        title: 'Fokus transportasi kontainer',
        text: `${NAME} hadir untuk melayani pengangkutan kontainer secara aman, efisien dan profesional.`,
      },
      {
        when: 'Terbaru',
        title: 'Investasi pengangkutan limbah',
        text: 'Diversifikasi usaha ke jasa transportasi pengangkutan limbah yang sesuai ketentuan lingkungan hidup.',
      },
      {
        when: 'Ke depan',
        title: 'Ekspansi ASEAN',
        text: 'Pengembangan bertahap ke pasar ASEAN bersama mitra strategis di masing-masing negara.',
      },
    ],
    aseanLabel: 'Regional ASEAN',
    aseanTitle: 'Jaringan logistik regional yang terintegrasi.',
    aseanLead:
      'Dengan Indonesia sebagai basis utama, Grup Cahaya Bulan memiliki visi untuk mengembangkan bisnis transportasi, logistik, transportasi kontainer dan pengangkutan limbah ke pasar ASEAN.',
    aseanText: [
      'Pengembangan regional dilakukan secara bertahap dengan mempertimbangkan kondisi pasar, peraturan setempat, kebutuhan pelanggan serta peluang kerja sama dengan mitra strategis di masing-masing negara.',
      'Grup melihat peluang besar untuk membawa pengalaman dan kemampuan yang telah dibangun di Indonesia ke negara-negara ASEAN, sekaligus membangun jaringan transportasi dan logistik regional yang lebih terintegrasi.',
    ],
  },
  servicesPage: {
    title: 'Kontainer, logistik dan pengangkutan limbah.',
    subtitle:
      'Didukung pengalaman lebih dari 40 tahun, armada lebih dari 1.000 unit dan jaringan operasional di berbagai wilayah Indonesia.',
  },
  visionPage: {
    title: 'Arah dan komitmen kami.',
    visionLabel: 'Visi',
    missionLabel: 'Misi',
    missionTitle: 'Langkah kami mewujudkan visi.',
    commitmentLabel: 'Komitmen',
    commitmentIntro: `${NAME} bersama Grup Cahaya Bulan berkomitmen memberikan solusi transportasi yang:`,
  },
  contact: {
    title: 'Mari bicara.',
    subtitle:
      'Kirimkan pertanyaan atau permintaan penawaran melalui email, tim kami akan segera menghubungi Anda.',
    emailTitle: 'Hubungi tim kami langsung.',
    area: 'Wilayah operasional: seluruh Indonesia.',
  },
  cta: {
    title: 'Butuh transportasi kontainer atau logistik?',
    text: 'Ceritakan kebutuhan pengangkutan Anda, tim kami akan menghubungi Anda kembali.',
  },
  footer: {
    company: 'Perusahaan',
    partOf: 'Bagian dari Grup Cahaya Bulan',
  },
}

const en = {
  langName: 'English',
  numberLocale: 'en-US',
  nav: {
    home: 'Home',
    about: 'About',
    aboutFull: 'About Us',
    services: 'Services',
    vision: 'Vision & Mission',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close',
  },
  company: {
    name: NAME,
    group: 'Cahaya Bulan Group',
    tagline: 'From Indonesia to ASEAN — Connecting Transportation, Logistics and Sustainable Solutions.',
  },
  common: {
    contactUs: 'Contact Us →',
    viewServices: 'Our Services →',
    companyProfile: 'Company profile →',
    service: 'Service',
    email: 'Email',
    emailLabels: { operation: 'Operations', finance: 'Finance' },
  },
  stats: [
    { value: '40+', label: 'Years of domestic transport experience' },
    { value: '1,000+', label: 'Fleet units' },
    { value: '3 tons+', label: 'Up to heavy-duty vehicles' },
    { value: 'ASEAN', label: 'Regional growth vision' },
  ],
  values: ['Safe', 'Reliable', 'Efficient', 'Professional', 'Sustainable'],
  services: [
    {
      title: 'Container Transport',
      summary:
        'Safe, efficient, reliable and professional container haulage, backed by the fleet and operational network of Cahaya Bulan Group.',
      body: [
        `${NAME} focuses on providing container transport services that are safe, efficient, reliable and professional.`,
        "By leveraging the experience, people, operational network and fleet capabilities of Cahaya Bulan Group, the company supports a wide range of container haulage needs across Indonesia.",
      ],
      pointsTitle: 'Haulage to and from',
      points: [
        'Ports',
        'Container terminals',
        'Isotank depots',
        'Warehouses and distribution centres',
        'Industrial estates',
        'Factories and production facilities',
        'Customer sites across Indonesia',
      ],
    },
    {
      title: 'Domestic Transport & Logistics',
      summary:
        'More than 40 years of land transport and distribution across the main regions of Indonesia.',
      body: [
        'For more than 40 years, Cahaya Bulan Group has supported domestic transport activities in Indonesia.',
        "With an operational network covering Indonesia's main regions, the Group handles transport needs from industrial estates, ports, terminals, depots and warehouses to customers throughout the country.",
      ],
      pointsTitle: 'Our strengths',
      points: [
        'A fleet of more than 1,000 units',
        'Vehicles from ±3 tons to heavy-duty haulage',
        "Operational network across Indonesia's main regions",
        'Distribution from industry to end customers',
      ],
    },
    {
      title: 'Waste Transport',
      summary:
        "The Group's new investment in waste transport services that are safe, professional, efficient and compliant with regulations.",
      body: [
        'As part of its diversification and business development strategy, Cahaya Bulan Group has recently invested in waste transport services in Indonesia.',
        "This business includes providing fleets and transport facilities suited to each type of waste, operational management, and the application of safety standards and compliance with Indonesia's environmental regulations.",
        'Going forward, the company will continue to build its capabilities in this sector through fleet investment, people development, technology and strategic partnerships.',
      ],
      pointsTitle: 'Development focus',
      points: [
        'Fleet suited to each type of waste',
        'Professional operational management',
        'Workplace safety standards',
        'Compliance with environmental regulations',
      ],
    },
  ],
  vision:
    'To be one of the most trusted transport and logistics companies in Indonesia, and to grow as a transport and logistics solutions provider with a regional network across ASEAN.',
  missions: [
    'Provide safe, reliable and efficient transport services.',
    'Expand our transport and logistics network across Indonesia.',
    'Strengthen our capabilities in container transport and waste transport.',
    'Invest continuously in our fleet, technology and people.',
    'Build long-term partnerships with customers and strategic partners.',
    'Grow the business step by step into ASEAN markets.',
    'Uphold standards of safety, compliance and environmental responsibility.',
  ],
  home: {
    est: 'Est. 1980s',
    heroLines: ['Moving', "Indonesia's", 'containers.'],
    heroText:
      'Safe, reliable and efficient container transport and logistics — backed by more than four decades of experience and a fleet of over 1,000 units.',
    aboutTitle: "Four decades building Indonesia's transport network.",
    aboutLead: `${NAME} is part of Cahaya Bulan Group, a transport and logistics business that has operated in Indonesia since the 1980s.`,
    aboutText:
      'With a wide operational network, the Group handles transport needs from industrial estates, ports, terminals, depots and warehouses to customers throughout the country.',
    servicesTitle: 'Transport solutions for your business.',
    coverageLabel: 'Coverage',
    coverageTitle: 'From the port to your doorstep.',
    coverage: [
      'Ports',
      'Container terminals',
      'Isotank depots',
      'Warehouses & distribution centres',
      'Industrial estates',
      'Factories & production facilities',
      'Customer sites across Indonesia',
    ],
    aseanLabel: 'Regional',
    aseanTitle: 'From Indonesia to ASEAN.',
    aseanText:
      'With Indonesia as its home base, Cahaya Bulan Group aims to expand its transport, logistics, container and waste transport business into ASEAN markets — step by step, together with strategic partners in each country.',
  },
  about: {
    title: 'Experienced since the 1980s.',
    subtitle: `${NAME} carries forward more than four decades of Cahaya Bulan Group experience in Indonesian transport and logistics.`,
    profileLabel: 'Profile',
    profileTitle: 'A strong foundation for container transport in Indonesia.',
    profileLead: `${NAME} is part of Cahaya Bulan Group, a transport and logistics business that has operated in Indonesia since the 1980s.`,
    profileText: [
      'With more than four decades in domestic transport, Cahaya Bulan Group has built a wide operational network across Indonesia and extensive experience in land transport and logistics.',
      'Today the Group is supported by more than 1,000 vehicles, from around 3-ton trucks to heavy-duty haulage, serving a wide range of transport and distribution needs across Indonesia.',
      `This long experience is the foundation for ${NAME} as a company focused on container transport and logistics services.`,
    ],
    journeyLabel: 'Our Journey',
    journeyTitle: "Growing with Indonesia's transport needs.",
    milestones: [
      {
        when: '1980s',
        title: 'The beginning',
        text: 'Cahaya Bulan Group begins operating in transport and logistics in Indonesia.',
      },
      {
        when: '40+ years',
        title: 'A wide domestic network',
        text: "Building an operational network across Indonesia's main regions with a fleet of more than 1,000 units.",
      },
      {
        when: 'Today',
        title: 'Container transport focus',
        text: `${NAME} provides safe, efficient and professional container haulage.`,
      },
      {
        when: 'Latest',
        title: 'Investment in waste transport',
        text: 'Diversifying into waste transport services that comply with environmental regulations.',
      },
      {
        when: 'Next',
        title: 'ASEAN expansion',
        text: 'Gradual expansion into ASEAN markets together with strategic partners in each country.',
      },
    ],
    aseanLabel: 'ASEAN Regional',
    aseanTitle: 'An integrated regional logistics network.',
    aseanLead:
      'With Indonesia as its home base, Cahaya Bulan Group aims to expand its transport, logistics, container and waste transport business into ASEAN markets.',
    aseanText: [
      'Regional growth will be gradual, taking into account market conditions, local regulations, customer needs and partnership opportunities with strategic partners in each country.',
      'The Group sees a strong opportunity to bring the experience and capabilities built in Indonesia to other ASEAN countries, while building a more integrated regional transport and logistics network.',
    ],
  },
  servicesPage: {
    title: 'Containers, logistics and waste transport.',
    subtitle:
      'Backed by more than 40 years of experience, a fleet of over 1,000 units and an operational network across Indonesia.',
  },
  visionPage: {
    title: 'Our direction and commitment.',
    visionLabel: 'Vision',
    missionLabel: 'Mission',
    missionTitle: 'How we deliver on our vision.',
    commitmentLabel: 'Commitment',
    commitmentIntro: `${NAME} and Cahaya Bulan Group are committed to delivering transport solutions that are:`,
  },
  contact: {
    title: "Let's talk.",
    subtitle: 'Send us your questions or a quote request by email and our team will get back to you shortly.',
    emailTitle: 'Reach our team directly.',
    area: 'Operating area: all of Indonesia.',
  },
  cta: {
    title: 'Need container transport or logistics?',
    text: 'Tell us about your transport needs and our team will get back to you.',
  },
  footer: {
    company: 'Company',
    partOf: 'Part of Cahaya Bulan Group',
  },
}

const withServiceMeta = (lang) => ({
  ...lang,
  services: lang.services.map((s, i) => ({ ...serviceMeta[i], ...s })),
})

export const content = { id: withServiceMeta(id), en: withServiceMeta(en) }
