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

export const company = {
  name: 'PT Cahaya Bulan Warisan Kontena',
  group: 'Grup Cahaya Bulan',
  tagline: 'Dari Indonesia Menuju ASEAN — Menghubungkan Transportasi, Logistik dan Solusi Berkelanjutan.',
  emails: [
    { label: 'Operasional', address: 'operation@cahaya-bulan.com' },
    { label: 'Keuangan', address: 'finance@cahaya-bulan.com' },
  ],
}

export const stats = [
  { value: '40+', label: 'Tahun pengalaman transportasi domestik' },
  { value: '1.000+', label: 'Unit armada kendaraan' },
  { value: '3 ton+', label: 'Hingga kendaraan angkutan berat' },
  { value: 'ASEAN', label: 'Visi pengembangan regional' },
]

export const values = ['Aman', 'Andal', 'Efisien', 'Profesional', 'Berkelanjutan']

export const services = [
  {
    id: 'kontainer',
    image: images.truckGreen,
    title: 'Transportasi Kontainer',
    summary:
      'Layanan pengangkutan kontainer yang aman, efisien, andal dan profesional, didukung armada dan jaringan operasional Grup Cahaya Bulan.',
    body: [
      'PT Cahaya Bulan Warisan Kontena berfokus pada penyediaan layanan transportasi kontainer yang aman, efisien, andal dan profesional.',
      'Dengan memanfaatkan pengalaman, sumber daya manusia, jaringan operasional serta kemampuan armada Grup Cahaya Bulan, perusahaan mampu mendukung berbagai kebutuhan pengangkutan kontainer di Indonesia.',
    ],
    points: [
      'Pelabuhan',
      'Terminal kontainer',
      'Depo isotank',
      'Gudang dan pusat distribusi',
      'Kawasan industri',
      'Pabrik dan fasilitas produksi',
      'Lokasi pelanggan di berbagai wilayah Indonesia',
    ],
    pointsTitle: 'Pengangkutan dari dan menuju',
  },
  {
    id: 'domestik',
    image: images.truckRed,
    title: 'Transportasi & Logistik Domestik',
    summary:
      'Lebih dari 40 tahun melayani transportasi darat dan distribusi di berbagai wilayah utama Indonesia.',
    body: [
      'Selama lebih dari 40 tahun, Grup Cahaya Bulan telah berperan dalam mendukung kegiatan transportasi domestik di Indonesia.',
      'Dengan jaringan operasional yang mencakup berbagai wilayah utama Indonesia, Grup memiliki kemampuan untuk menangani kebutuhan transportasi dari kawasan industri, pelabuhan, terminal, depo, gudang hingga pelanggan di berbagai daerah.',
    ],
    points: [
      'Armada lebih dari 1.000 unit',
      'Kendaraan kapasitas ±3 ton hingga angkutan berat',
      'Jaringan operasional di wilayah utama Indonesia',
      'Distribusi dari industri hingga pelanggan akhir',
    ],
    pointsTitle: 'Kekuatan kami',
  },
  {
    id: 'limbah',
    image: images.waste,
    title: 'Transportasi Pengangkutan Limbah',
    summary:
      'Investasi baru Grup di jasa pengangkutan limbah yang aman, profesional, efisien dan sesuai ketentuan yang berlaku.',
    body: [
      'Sebagai bagian dari strategi diversifikasi dan pengembangan usaha, Grup Cahaya Bulan baru-baru ini melakukan investasi di bidang jasa transportasi pengangkutan limbah di Indonesia.',
      'Pengembangan usaha ini mencakup penyediaan armada dan fasilitas transportasi yang sesuai dengan karakteristik limbah, pengelolaan operasional, serta penerapan standar keselamatan dan kepatuhan terhadap peraturan lingkungan hidup yang berlaku di Indonesia.',
      'Ke depan, perusahaan akan terus mengembangkan kemampuan di sektor ini melalui investasi armada, pengembangan sumber daya manusia, penerapan teknologi serta kerja sama strategis dengan berbagai pihak.',
    ],
    points: [
      'Armada sesuai karakteristik limbah',
      'Pengelolaan operasional profesional',
      'Standar keselamatan kerja',
      'Kepatuhan terhadap peraturan lingkungan hidup',
    ],
    pointsTitle: 'Fokus pengembangan',
  },
]

export const vision =
  'Menjadi salah satu perusahaan transportasi dan logistik yang terpercaya di Indonesia serta berkembang sebagai penyedia solusi transportasi dan logistik yang memiliki jaringan regional di ASEAN.'

export const missions = [
  'Menyediakan layanan transportasi yang aman, andal dan efisien.',
  'Mengembangkan jaringan transportasi dan logistik di berbagai wilayah Indonesia.',
  'Meningkatkan kemampuan dalam transportasi kontainer dan pengangkutan limbah.',
  'Melakukan investasi berkelanjutan dalam armada, teknologi dan sumber daya manusia.',
  'Membangun kerja sama jangka panjang dengan pelanggan dan mitra strategis.',
  'Mengembangkan bisnis secara bertahap ke pasar ASEAN.',
  'Menjaga standar keselamatan, kepatuhan dan tanggung jawab terhadap lingkungan.',
]
