const jobsData = [
    {
        id: "1",
        title: "Frontend Developer",
        company: "Tech Corp",
        type: "Full-Time",
        location: "Jakarta, Indonesia",
        salary: "$4000/month",
        posted: "2 days ago",
        category: "IT & Software",
        description: "Membangun dan mengelola UI aplikasi web menggunakan React.js.",
        responsibilities: [
            "Mengembangkan antarmuka pengguna yang responsif",
            "Bekerja sama dengan tim backend untuk integrasi API",
            "Meningkatkan performa aplikasi",
        ],
        requirements: [
            "Pengalaman dengan React.js minimal 2 tahun",
            "Familiar dengan Tailwind CSS",
            "Memahami Git dan version control",
        ],
    },
    {
        "id": "2",
        "title": "UI/UX Designer",
        "company": "Creative Studio",
        "location": "Bandung",
        "type": "Remote",
        "category": "Design & Creative",
        "salary": "Rp 12.000.000 - Rp 18.000.000",
        "posted": "1 minggu yang lalu",
        "description": "Dibutuhkan UI/UX Designer dengan portfolio yang kuat",
        "responsibilities": [
            "Merancang dan mengembangkan desain antarmuka yang menarik dan fungsional",
            "Berkolaborasi dengan tim pengembang untuk implementasi desain",
            "Melakukan riset pengguna dan uji coba desain",
            "Meningkatkan pengalaman pengguna berdasarkan umpan balik",
        ],
        "requirements": [
            "Pengalaman minimal 2 tahun dalam desain UI/UX",
            "Menguasai Figma, Adobe XD, atau Sketch",
            "Memahami prinsip desain responsif dan interaksi pengguna",
            "Memiliki portofolio desain yang kuat",
        ]
    },
    {
        "id": "3",
        "title": "Product Manager",
        "company": "Startup Indo",
        "location": "Surabaya",
        "type": "Full-time",
        "category": "Product & Manajemen",
        "salary": "Rp 20.000.000 - Rp 30.000.000",
        "posted": "3 hari yang lalu",
        "description": "Product Manager dengan pengalaman minimal 3 tahun",
        "responsibilities": [
            "Mengelola siklus hidup produk dari perencanaan hingga peluncuran",
            "Berkolaborasi dengan tim pengembang, desain, dan pemasaran",
            "Mengidentifikasi kebutuhan pasar dan menyusun strategi produk",
            "Memastikan pengembangan produk sesuai dengan visi perusahaan",
        ],
        "requirements": [
            "Pengalaman minimal 3 tahun sebagai Product Manager",
            "Memahami Agile dan Scrum dalam manajemen proyek",
            "Memiliki kemampuan analisis pasar yang baik",
            "Keterampilan komunikasi dan kepemimpinan yang kuat",
        ]
    },
    {
        "id": "4",
        "title": "Backend Developer",
        "company": "Code Labs",
        "location": "Jakarta",
        "type": "Full-time",
        "category": "Development & IT",
        "salary": "Rp 18.000.000 - Rp 28.000.000",
        "posted": "5 hari yang lalu",
        "description": "Dicari Backend Developer dengan keahlian di Laravel dan PostgreSQL",
        "responsibilities": [
            "Mengembangkan dan mengoptimalkan backend aplikasi",
            "Merancang dan mengelola database PostgreSQL",
            "Bekerja sama dengan tim frontend untuk integrasi API",
            "Menjaga keamanan dan performa aplikasi",
        ],
        "requirements": [
            "Pengalaman minimal 2 tahun dengan Laravel",
            "Menguasai PostgreSQL dan desain database",
            "Memahami RESTful API dan integrasi dengan frontend",
            "Memiliki pengalaman dengan Git dan CI/CD",
        ]
    },
    {
        "id": "5",
        "title": "Digital Marketing Specialist",
        "company": "MarketPro",
        "location": "Yogyakarta",
        "type": "Remote",
        "category": "Sales & Marketing",
        "salary": "Rp 10.000.000 - Rp 15.000.000",
        "posted": "6 hari yang lalu",
        "description": "Kami mencari Digital Marketing Specialist dengan pengalaman di SEO dan SEM",
        "responsibilities": [
            "Merancang, melaksanakan, dan mengelola strategi pemasaran digital secara keseluruhan",
            "Melakukan riset kata kunci dan optimasi SEO untuk meningkatkan peringkat di mesin pencari",
            "Mengelola kampanye SEM (Search Engine Marketing) seperti Google Ads",
            "Menganalisis data kinerja kampanye dan memberikan rekomendasi untuk perbaikan",
            "Mengelola media sosial dan konten pemasaran digital lainnya",
            "Melakukan A/B testing untuk mengoptimalkan konversi",
            "Memantau tren digital marketing terbaru dan menerapkannya dalam strategi",
            "Berkolaborasi dengan tim konten, desain, dan penjualan"
        ],
        "requirements": [
            "Pengalaman minimal 2 tahun sebagai Digital Marketing Specialist",
            "Pengalaman yang kuat dalam SEO (Search Engine Optimization) dan SEM (Search Engine Marketing)",
            "Pemahaman mendalam tentang Google Analytics dan alat analisis web lainnya",
            "Kemampuan untuk merancang dan mengelola kampanye iklan digital",
            "Keterampilan menulis dan komunikasi yang sangat baik",
            "Kreativitas dan kemampuan problem-solving yang baik",
            "Terbiasa dengan berbagai platform media sosial",
            "Kemampuan untuk bekerja secara mandiri dan dalam tim"
        ]
    },
    {
        "id": "6",
        "title": "Data Analyst",
        "company": "Data Insights",
        "location": "Jakarta",
        "type": "Full-time",
        "category": "Development & IT",
        "salary": "Rp 14.000.000 - Rp 22.000.000",
        "posted": "2 minggu yang lalu",
        "description": "Dibutuhkan Data Analyst dengan keahlian dalam Python dan SQL",
        "responsibilities": [
            "Mengumpulkan dan menganalisis data dari berbagai sumber",
            "Membuat laporan dan visualisasi data untuk mendukung pengambilan keputusan",
            "Mengidentifikasi tren dan insight dari data",
            "Bekerja sama dengan tim lain untuk memahami kebutuhan data"
        ],
        "requirements": [
            "Pengalaman minimal 1 tahun sebagai Data Analyst",
            "Mahir dalam SQL dan Python (terutama library seperti Pandas, NumPy)",
            "Kemampuan visualisasi data menggunakan tools seperti Tableau atau Power BI",
            "Kemampuan komunikasi dan presentasi yang baik"
        ]
    },
    {
        "id": "7",
        "title": "Front-end Developer",
        "company": "Web Solutions",
        "location": "Surabaya",
        "type": "Hybrid",
        "category": "Development & IT",
        "salary": "Rp 13.000.000 - Rp 20.000.000",
        "posted": "4 hari yang lalu",
        "description": "Kami mencari Front-end Developer dengan pengalaman di React dan Vue.js",
        "responsibilities": [
            "Mengembangkan dan memelihara antarmuka pengguna (UI) yang responsif dan menarik",
            "Menulis kode yang bersih, modular, dan mudah dipelihara",
            "Berkolaborasi dengan desainer dan backend developer untuk menghasilkan fitur baru",
            "Melakukan pengujian dan debugging untuk memastikan kualitas kode"
        ],
        "requirements": [
            "Pengalaman minimal 2 tahun sebagai Front-end Developer",
            "Menguasai HTML, CSS, dan JavaScript",
            "Pengalaman dengan salah satu framework JavaScript modern (React atau Vue.js)",
            "Familiar dengan tools seperti Git, Webpack, dan Babel"
        ]
    },
    {
        "id": "8",
        "title": "HR Manager",
        "company": "People First",
        "location": "Bandung",
        "type": "Full-time",
        "category": "Product & Manajemen",
        "salary": "Rp 17.000.000 - Rp 25.000.000",
        "posted": "3 minggu yang lalu",
        "description": "HR Manager dengan pengalaman dalam manajemen SDM dan rekrutmen",
        "responsibilities": [
            "Mengelola seluruh siklus hidup karyawan, dari rekrutmen hingga pemutusan hubungan kerja",
            "Mengembangkan dan melaksanakan strategi rekrutmen yang efektif",
            "Memastikan kepatuhan terhadap peraturan ketenagakerjaan yang berlaku",
            "Mengelola kinerja karyawan dan memberikan umpan balik yang konstruktif"
        ],
        "requirements": [
            "Pengalaman minimal 3 tahun sebagai HR Manager",
            "Memahami prinsip-prinsip manajemen SDM",
            "Memiliki pengetahuan yang baik tentang peraturan ketenagakerjaan Indonesia",
            "Keterampilan komunikasi dan interpersonal yang sangat baik"
        ]
    },
    {
        "id": "9",
        "title": "Cyber Security Analyst",
        "company": "SecureTech",
        "location": "Jakarta",
        "type": "Full-time",
        "category": "Development & IT",
        "salary": "Rp 18.000.000 - Rp 27.000.000",
        "posted": "5 hari yang lalu",
        "description": "Cyber Security Analyst dengan pengalaman di keamanan jaringan",
        "responsibilities": [
            "Memantau dan menganalisis lalu lintas jaringan untuk mendeteksi ancaman keamanan",
            "Melakukan pengujian penetrasi dan penilaian kerentanan",
            "Mengembangkan dan menerapkan kebijakan keamanan",
            "Menanggapi insiden keamanan dan melakukan investigasi"
        ],
        "requirements": [
            "Pengalaman minimal 2 tahun sebagai Cyber Security Analyst",
            "Memahami konsep keamanan jaringan dan sistem",
            "Memiliki sertifikasi keamanan seperti CompTIA Security+, CEH, atau CISSP (nilai tambah)",
            "Kemampuan analisis dan problem-solving yang baik"
        ]
    },
    {
        "id": "10",
        "title": "Project Manager",
        "company": "Build It",
        "location": "Semarang",
        "type": "Full-time",
        "category": "Development & IT",
        "salary": "Rp 19.000.000 - Rp 30.000.000",
        "posted": "1 bulan yang lalu",
        "description": "Dicari Project Manager dengan keahlian dalam Agile dan Scrum",
        "responsibilities": [
            "Merencanakan, melaksanakan, dan menyelesaikan proyek sesuai dengan anggaran dan jadwal",
            "Mengelola tim proyek dan memastikan komunikasi yang efektif",
            "Mengidentifikasi dan mengelola risiko proyek",
            "Memastikan kualitas proyek dan kepuasan pelanggan"
        ],
        "requirements": [
            "Pengalaman minimal 3 tahun sebagai Project Manager",
            "Memahami metodologi Agile dan Scrum",
            "Memiliki sertifikasi PMP atau sejenisnya (nilai tambah)",
            "Keterampilan kepemimpinan dan manajemen tim yang baik"
        ]
    },
    {
        "id": 11,
        "title": "DevOps Engineer",
        "company": "Cloud Systems",
        "location": "Jakarta",
        "type": "Remote",
        "category": "Development & IT",
        "salary": "Rp 25.000.000 - Rp 35.000.000",
        "posted": "1 hari yang lalu",
        "description": "Mencari DevOps Engineer dengan pengalaman di AWS, Docker, dan Kubernetes",
        "responsibilities": [
            "Merancang dan mengimplementasikan infrastruktur cloud menggunakan AWS",
            "Mengelola dan mengotomatiskan deployment aplikasi dengan Docker dan Kubernetes",
            "Membuat dan memelihara pipeline CI/CD",
            "Melakukan monitoring sistem dan troubleshooting",
            "Berkolaborasi dengan tim development dan operations",
            "Mengimplementasikan praktik terbaik DevOps"
        ],
        "requirements": [
            "Pengalaman minimal 3 tahun sebagai DevOps Engineer",
            "Pengalaman dengan AWS, Docker, dan Kubernetes",
            "Pemahaman mendalam tentang CI/CD",
            "Keterampilan scripting (Python, Bash)",
            "Pengalaman dengan tools monitoring (Prometheus, Grafana)",
            "Kemampuan bekerja dalam tim"
        ]
    },
    {
        "id": 12,
        "title": "Content Writer",
        "company": "Media Creative",
        "location": "Bali",
        "type": "Hybrid",
        "category": "Design & Creative",
        "salary": "Rp 8.000.000 - Rp 12.000.000",
        "posted": "3 hari yang lalu",
        "description": "Content Writer dengan kemampuan SEO dan storytelling yang kuat",
        "responsibilities": [
            "Menulis artikel, blog post, dan konten website",
            "Melakukan riset kata kunci dan optimasi SEO",
            "Membuat konten yang menarik dan relevan",
            "Berkolaborasi dengan tim marketing dan desain",
            "Memastikan konten sesuai dengan brand guideline"
        ],
        "requirements": [
            "Pengalaman minimal 1 tahun sebagai Content Writer",
            "Kemampuan menulis yang baik",
            "Pemahaman tentang SEO",
            "Keterampilan storytelling",
            "Kreativitas",
            "Kemampuan bekerja dengan deadline"
        ]
    },
    {
        "id": 13,
        "title": "Mobile App Developer",
        "company": "App Innovation",
        "location": "Medan",
        "type": "Full-time",
        "category": "Development & IT",
        "salary": "Rp 15.000.000 - Rp 23.000.000",
        "posted": "1 minggu yang lalu",
        "description": "Developer untuk pengembangan aplikasi Android dan iOS dengan Flutter",
        "responsibilities": [
            "Mengembangkan aplikasi mobile menggunakan Flutter",
            "Menulis kode yang bersih dan efisien",
            "Melakukan pengujian dan debugging",
            "Berkolaborasi dengan tim desain dan backend",
            "Memastikan aplikasi berjalan dengan baik di berbagai perangkat"
        ],
        "requirements": [
            "Pengalaman minimal 2 tahun dengan Flutter",
            "Pemahaman tentang arsitektur aplikasi mobile",
            "Pengalaman dengan REST API",
            "Keterampilan problem-solving",
            "Kemampuan bekerja dalam tim",
            "Portofolio aplikasi yang pernah dikembangkan"
        ]
    },
    {
        "id": 14,
        "title": "Business Intelligence Analyst",
        "company": "Data Metrics",
        "location": "Bandung",
        "type": "Full-time",
        "category": "Development & IT",
        "salary": "Rp 16.000.000 - Rp 24.000.000",
        "posted": "2 hari yang lalu",
        "description": "Analisis data bisnis menggunakan Power BI dan Tableau",
        "responsibilities": [
            "Mengumpulkan dan menganalisis data bisnis",
            "Membuat dashboard dan laporan menggunakan Power BI dan Tableau",
            "Mengidentifikasi tren dan insight dari data",
            "Berkolaborasi dengan tim bisnis untuk memahami kebutuhan",
            "Memberikan rekomendasi berdasarkan analisis data"
        ],
        "requirements": [
            "Pengalaman minimal 2 tahun sebagai Business Intelligence Analyst",
            "Keahlian dalam Power BI dan Tableau",
            "Pemahaman tentang data warehousing",
            "Keterampilan SQL",
            "Kemampuan komunikasi yang baik",
            "Kemampuan presentasi"
        ]
    },
    {
        "id": 15,
        "title": "Quality Assurance Engineer",
        "company": "Quality First",
        "location": "Surabaya",
        "type": "Hybrid",
        "category": "Development & IT",
        "salary": "Rp 12.000.000 - Rp 18.000.000",
        "posted": "4 hari yang lalu",
        "description": "QA Engineer dengan pengalaman dalam automated testing dan manual testing",
        "responsibilities": [
            "Merancang dan melaksanakan test plan",
            "Melakukan pengujian manual dan otomatis",
            "Membuat laporan bug dan melacak perbaikan",
            "Berkolaborasi dengan developer untuk memastikan kualitas",
            "Mengembangkan dan memelihara script pengujian otomatis"
        ],
        "requirements": [
            "Pengalaman minimal 1 tahun sebagai QA Engineer",
            "Pengalaman dalam automated testing dan manual testing",
            "Pemahaman tentang siklus hidup pengembangan software",
            "Pengalaman dengan tools pengujian (Selenium, JUnit)",
            "Perhatian terhadap detail",
            "Kemampuan problem-solving"
        ]
    },
    {
        "id": 16,
        "title": "Graphic Designer",
        "company": "Creative Hub",
        "location": "Yogyakarta",
        "type": "Remote",
        "category": "Design & Creative",
        "salary": "Rp 9.000.000 - Rp 15.000.000",
        "posted": "1 minggu yang lalu",
        "description": "Designer dengan keahlian Adobe Creative Suite dan UI Design",
        "responsibilities": [
            "Merancang materi visual untuk berbagai media",
            "Membuat logo, ilustrasi, dan desain grafis",
            "Mengembangkan konsep visual yang kreatif",
            "Berkolaborasi dengan tim marketing dan content",
            "Memastikan desain sesuai dengan brand guideline",
            "Membuat desain UI/UX"
        ],
        "requirements": [
            "Pengalaman minimal 2 tahun sebagai Graphic Designer",
            "Keahlian dalam Adobe Creative Suite",
            "Pemahaman tentang prinsip desain",
            "Pengalaman dalam UI Design",
            "Kreativitas",
            "Portofolio desain yang menarik"
        ]
    },
    {
        "id": 17,
        "title": "Data Engineer",
        "company": "Big Data Solutions",
        "location": "Jakarta",
        "type": "Full-time",
        "category": "Development & IT",
        "salary": "Rp 20.000.000 - Rp 30.000.000",
        "posted": "5 hari yang lalu",
        "description": "Data Engineer dengan pengalaman di Apache Spark dan Hadoop",
        "responsibilities": [
            "Membangun dan memelihara infrastruktur data",
            "Mengumpulkan dan memproses data dari berbagai sumber",
            "Mengembangkan solusi big data dengan Apache Spark dan Hadoop",
            "Mengoptimalkan performa data pipeline",
            "Berkolaborasi dengan tim data science dan BI",
            "Memastikan kualitas data"
        ],
        "requirements": [
            "Pengalaman minimal 3 tahun sebagai Data Engineer",
            "Pengalaman dengan Apache Spark dan Hadoop",
            "Pemahaman tentang data warehousing",
            "Keterampilan SQL dan Python",
            "Pengalaman dengan cloud platform (AWS, Azure, GCP)",
            "Kemampuan problem-solving"
        ]
    },
    {
        "id": 18,
        "title": "Financial Analyst",
        "company": "Finance Pro",
        "location": "Malang",
        "type": "Full-time",
        "category": "Product & Manajemen",
        "salary": "Rp 13.000.000 - Rp 19.000.000",
        "posted": "2 minggu yang lalu",
        "description": "Analisis keuangan dan pembuatan laporan finansial perusahaan",
        "responsibilities": [
            "Melakukan analisis keuangan dan membuat laporan",
            "Membuat proyeksi keuangan dan anggaran",
            "Menganalisis kinerja keuangan perusahaan",
            "Memberikan rekomendasi untuk perbaikan",
            "Melakukan riset pasar dan analisis kompetitor"
        ],
        "requirements": [
            "Pengalaman minimal 2 tahun sebagai Financial Analyst",
            "Pemahaman tentang akuntansi dan keuangan",
            "Keahlian dalam Microsoft Excel",
            "Kemampuan analisis yang baik",
            "Kemampuan komunikasi yang baik",
            "Gelar sarjana di bidang keuangan atau akuntansi"
        ]
    },
    {
        "id": 19,
        "title": "Systems Administrator",
        "company": "Tech Infrastructure",
        "location": "Palembang",
        "type": "Full-time",
        "category": "Development & IT",
        "salary": "Rp 14.000.000 - Rp 21.000.000",
        "posted": "6 hari yang lalu",
        "description": "Pengelolaan infrastruktur IT dan maintenance sistem",
        "responsibilities": [
            "Mengelola dan memelihara infrastruktur IT",
            "Melakukan instalasi dan konfigurasi sistem",
            "Memantau performa sistem dan melakukan troubleshooting",
            "Memastikan keamanan sistem dan data",
            "Melakukan backup dan recovery data"
        ],
        "requirements": [
            "Pengalaman minimal 2 tahun sebagai Systems Administrator",
            "Pemahaman tentang jaringan dan server",
            "Pengalaman dengan Linux dan Windows Server",
            "Keterampilan scripting (Bash, PowerShell)",
            "Kemampuan problem-solving",
            "Sertifikasi yang relevan (CompTIA, Microsoft)"
        ]
    },
    {
        "id": 20,
        "title": "Community Manager",
        "company": "Social Connect",
        "location": "Bali",
        "type": "Remote",
        "category": "Sales & Marketing",
        "salary": "Rp 10.000.000 - Rp 16.000.000",
        "posted": "3 hari yang lalu",
        "description": "Mengelola komunitas online dan social media engagement",
        "responsibilities": [
            "Membangun dan mengelola komunitas online",
            "Membuat konten yang menarik dan relevan",
            "Berinteraksi dengan anggota komunitas",
            "Mengorganisir event online dan offline",
            "Menganalisis engagement dan memberikan laporan"
        ],
        "requirements": [
            "Pengalaman minimal 1 tahun sebagai Community Manager",
            "Pemahaman tentang media sosial",
            "Kemampuan komunikasi yang baik",
            "Kreativitas",
            "Kemampuan analisis data",
            "Kemampuan membangun hubungan"
        ]
    },
    {
        "id": 21,
        "title": "Machine Learning Engineer",
        "company": "AI Solutions",
        "location": "Bandung",
        "type": "Full-time",
        "salary": "Rp 22.000.000 - Rp 32.000.000",
        "posted": "4 hari yang lalu",
        "description": "Pengembangan model ML dan implementasi AI solutions",
        "category": "Development & IT",
        "responsibilities": [
            "Mengembangkan dan mengimplementasikan model machine learning",
            "Melakukan eksperimen dan evaluasi model",
            "Mengoptimalkan model untuk performa dan skalabilitas",
            "Berkolaborasi dengan tim untuk mengintegrasikan model ke dalam produk",
            "Meneliti dan menerapkan teknik ML terbaru"
        ],
        "requirements": [
            "Pengalaman minimal 2 tahun dalam machine learning",
            "Keahlian dalam Python dan library ML (TensorFlow, PyTorch, scikit-learn)",
            "Pemahaman tentang algoritma ML dan teknik evaluasi model",
            "Pengalaman dengan data cleaning dan preprocessing",
            "Kemampuan bekerja dalam tim",
            "Gelar S2 atau S3 di bidang terkait (nilai tambah)"
        ]
    },
    {
        "id": 22,
        "title": "Sales Manager",
        "company": "Growth Partners",
        "location": "Jakarta",
        "type": "Full-time",
        "salary": "Rp 18.000.000 - Rp 28.000.000",
        "posted": "1 minggu yang lalu",
        "description": "Memimpin tim sales dan mengembangkan strategi penjualan",
        "category": "Sales & Marketing",
        "responsibilities": [
            "Memimpin dan memotivasi tim sales",
            "Mengembangkan dan melaksanakan strategi penjualan",
            "Mencapai target penjualan",
            "Membangun dan memelihara hubungan dengan pelanggan",
            "Melakukan analisis pasar dan kompetitor"
        ],
        "requirements": [
            "Pengalaman minimal 3 tahun sebagai Sales Manager",
            "Rekam jejak yang terbukti dalam mencapai target penjualan",
            "Kemampuan kepemimpinan dan manajemen tim",
            "Keterampilan komunikasi dan negosiasi yang sangat baik",
            "Pemahaman tentang siklus penjualan",
            "Jaringan yang luas di industri terkait"
        ]
    },
    {
        "id": 23,
        "title": "Video Editor",
        "company": "Visual Stories",
        "location": "Surabaya",
        "type": "Hybrid",
        "salary": "Rp 11.000.000 - Rp 17.000.000",
        "posted": "5 hari yang lalu",
        "description": "Editor video dengan keahlian Adobe Premiere dan After Effects",
        "category": "Design & Creative",
        "responsibilities": [
            "Mengedit video untuk berbagai keperluan (promosi, iklan, konten media sosial)",
            "Membuat motion graphics dan efek visual",
            "Memilih musik dan sound effects yang sesuai",
            "Memastikan kualitas video yang tinggi",
            "Berkolaborasi dengan tim kreatif"
        ],
        "requirements": [
            "Pengalaman minimal 1 tahun sebagai Video Editor",
            "Keahlian dalam Adobe Premiere dan After Effects",
            "Pemahaman tentang prinsip-prinsip editing video",
            "Kreativitas dan perhatian terhadap detail",
            "Kemampuan bekerja dengan deadline",
            "Portofolio video yang pernah diedit"
        ]
    },
    {
        "id": 24,
        "title": "Supply Chain Manager",
        "company": "Logistics Pro",
        "location": "Semarang",
        "type": "Full-time",
        "salary": "Rp 17.000.000 - Rp 26.000.000",
        "posted": "2 minggu yang lalu",
        "description": "Manajemen rantai pasok dan optimasi logistik perusahaan",
        "category": "Product & Manajemen",
        "responsibilities": [
            "Merencanakan dan mengelola rantai pasok",
            "Melakukan negosiasi dengan supplier",
            "Mengoptimalkan proses logistik",
            "Memastikan ketersediaan barang",
            "Mengelola inventaris",
            "Menganalisis biaya dan mencari peluang efisiensi"
        ],
        "requirements": [
            "Pengalaman minimal 3 tahun sebagai Supply Chain Manager",
            "Pemahaman tentang prinsip-prinsip manajemen rantai pasok",
            "Keterampilan negosiasi dan komunikasi yang baik",
            "Kemampuan analisis dan problem-solving",
            "Pengalaman dengan software ERP",
            "Gelar sarjana di bidang terkait (logistik, manajemen operasi)"
        ]
    },
    {
        "id": 25,
        "title": "Cloud Architect",
        "company": "Cloud Masters",
        "location": "Jakarta",
        "type": "Remote",
        "salary": "Rp 28.000.000 - Rp 40.000.000",
        "posted": "3 hari yang lalu",
        "description": "Merancang dan mengimplementasi arsitektur cloud enterprise",
        "category": "Development & IT",
        "responsibilities": [
            "Merancang arsitektur cloud yang skalabel dan aman",
            "Memilih teknologi dan layanan cloud yang tepat",
            "Mengimplementasikan dan mengelola infrastruktur cloud",
            "Melakukan migrasi aplikasi ke cloud",
            "Mengoptimalkan biaya cloud",
            "Memastikan kepatuhan terhadap standar keamanan"
        ],
        "requirements": [
            "Pengalaman minimal 5 tahun sebagai Cloud Architect",
            "Keahlian dalam AWS, Azure, atau GCP",
            "Pemahaman mendalam tentang prinsip-prinsip arsitektur cloud",
            "Pengalaman dengan DevOps dan CI/CD",
            "Sertifikasi cloud (AWS Certified Architect, Azure Solutions Architect)",
            "Kemampuan komunikasi dan presentasi yang sangat baik"
        ]
    },
    {
        "id": 26,
        "title": "Blockchain Developer",
        "company": "Crypto Solutions",
        "location": "Jakarta",
        "type": "Remote",
        "salary": "Rp 25.000.000 - Rp 38.000.000",
        "posted": "2 hari yang lalu",
        "description": "Pengembangan aplikasi blockchain dan smart contracts",
        "category": "Development & IT",
        "responsibilities": [
            "Mengembangkan aplikasi blockchain",
            "Menulis dan menguji smart contracts",
            "Mengintegrasikan blockchain dengan sistem lain",
            "Melakukan riset tentang teknologi blockchain terbaru",
            "Berkolaborasi dengan tim untuk merancang solusi blockchain"
        ],
        "requirements": [
            "Pengalaman minimal 2 tahun dalam blockchain development",
            "Keahlian dalam Solidity atau bahasa pemrograman blockchain lainnya",
            "Pemahaman tentang arsitektur blockchain",
            "Pengalaman dengan tools dan framework blockchain (Ethereum, Hyperledger)",
            "Kemampuan problem-solving yang baik",
            "Minat terhadap teknologi blockchain dan cryptocurrency"
        ]
    },
    {
        "id": 27,
        "title": "Environmental Engineer",
        "company": "Green Tech",
        "location": "Surabaya",
        "type": "Full-time",
        "salary": "Rp 15.000.000 - Rp 22.000.000",
        "posted": "1 minggu yang lalu",
        "description": "Mengembangkan solusi ramah lingkungan untuk industri",
        "category": "Product & Manajemen",
        "responsibilities": [
            "Merancang dan mengembangkan solusi ramah lingkungan",
            "Melakukan analisis dampak lingkungan",
            "Memastikan kepatuhan terhadap peraturan lingkungan",
            "Melakukan audit lingkungan",
            "Berkolaborasi dengan tim untuk mengimplementasikan solusi",
            "Memberikan pelatihan tentang praktik ramah lingkungan"
        ],
        "requirements": [
            "Pengalaman minimal 2 tahun sebagai Environmental Engineer",
            "Pemahaman tentang prinsip-prinsip lingkungan",
            "Keterampilan analisis dan problem-solving",
            "Pengetahuan tentang peraturan lingkungan",
            "Kemampuan komunikasi yang baik",
            "Gelar sarjana di bidang teknik lingkungan atau terkait"
        ]
    },
    {
        "id": 28,
        "title": "Technical Writer",
        "company": "Doc Masters",
        "location": "Bandung",
        "type": "Hybrid",
        "salary": "Rp 12.000.000 - Rp 18.000.000",
        "posted": "3 hari yang lalu",
        "description": "Menulis dokumentasi teknis dan user guide untuk software",
        "category": "Development & IT",
        "responsibilities": [
            "Menulis dokumentasi teknis yang jelas dan akurat",
            "Membuat user guide dan tutorial",
            "Berkolaborasi dengan tim engineering untuk memahami produk",
            "Memastikan dokumentasi mudah dipahami oleh pengguna",
            "Memelihara dan memperbarui dokumentasi"
        ],
        "requirements": [
            "Pengalaman minimal 1 tahun sebagai Technical Writer",
            "Kemampuan menulis yang sangat baik",
            "Pemahaman tentang konsep teknis",
            "Kemampuan berkomunikasi dengan engineer",
            "Perhatian terhadap detail",
            "Portofolio tulisan teknis"
        ]
    },
    {
        "id": 29,
        "title": "AR/VR Developer",
        "company": "Virtual World",
        "location": "Yogyakarta",
        "type": "Full-time",
        "salary": "Rp 18.000.000 - Rp 28.000.000",
        "posted": "5 hari yang lalu",
        "description": "Pengembangan aplikasi AR/VR menggunakan Unity dan Unreal Engine",
        "category": "Development & IT",
        "responsibilities": [
            "Mengembangkan aplikasi AR/VR menggunakan Unity atau Unreal Engine",
            "Membuat model 3D dan animasi",
            "Mengintegrasikan interaksi pengguna",
            "Melakukan optimasi performa",
            "Berkolaborasi dengan tim desain dan artistik"
        ],
        "requirements": [
            "Pengalaman minimal 2 tahun dalam pengembangan AR/VR",
            "Keahlian dalam Unity atau Unreal Engine",
            "Pemahaman tentang prinsip-prinsip desain AR/VR",
            "Pengalaman dengan C# atau C++",
            "Kemampuan problem-solving yang baik",
            "Portofolio aplikasi AR/VR yang pernah dikembangkan"
        ]
    },
    {
        "id": 30,
        "title": "Investment Analyst",
        "company": "Capital Growth",
        "location": "Jakarta",
        "type": "Full-time",
        "salary": "Rp 20.000.000 - Rp 30.000.000",
        "posted": "1 hari yang lalu",
        "description": "Analisis investasi dan manajemen portfolio",
        "category": "Product & Manajemen",
        "responsibilities": [
            "Melakukan analisis investasi (saham, obligasi, reksadana)",
            "Membuat rekomendasi investasi",
            "Mengelola portfolio investasi",
            "Melakukan riset pasar dan industri",
            "Memantau kinerja investasi",
            "Membuat laporan investasi"
        ],
        "requirements": [
            "Pengalaman minimal 2 tahun sebagai Investment Analyst",
            "Pemahaman tentang pasar modal dan instrumen investasi",
            "Keterampilan analisis keuangan yang kuat",
            "Kemampuan membuat model keuangan",
            "Kemampuan komunikasi dan presentasi yang baik",
            "Gelar sarjana di bidang keuangan, ekonomi, atau terkait"
        ]
    },
    // {
    //     id: 31,
    //     title: "Game Developer",
    //     company: "Game Studio",
    //     location: "Bali",
    //     type: "Remote",
    //     salary: "Rp 15.000.000 - Rp 25.000.000",
    //     posted: "4 hari yang lalu",
    //     description: "Pengembangan game mobile dan desktop menggunakan Unity",
    //     category: "Development & IT"
    // },
    // {
    //     id: 32,
    //     title: "Brand Strategist",
    //     company: "Brand Masters",
    //     location: "Jakarta",
    //     type: "Hybrid",
    //     salary: "Rp 16.000.000 - Rp 24.000.000",
    //     posted: "2 minggu yang lalu",
    //     description: "Pengembangan strategi branding dan marketing",
    //     category: "Sales & Marketing"
    // },
    // {
    //     id: 33,
    //     title: "Network Security Engineer",
    //     company: "Secure Networks",
    //     location: "Bandung",
    //     type: "Full-time",
    //     salary: "Rp 18.000.000 - Rp 28.000.000",
    //     posted: "6 hari yang lalu",
    //     description: "Keamanan jaringan dan implementasi firewall",
    //     category: "Development & IT"
    // },
    // {
    //     id: 34,
    //     title: "3D Artist",
    //     company: "Creative Works",
    //     location: "Surabaya",
    //     type: "Remote",
    //     salary: "Rp 12.000.000 - Rp 20.000.000",
    //     posted: "1 minggu yang lalu",
    //     description: "Pembuatan model 3D dan animasi untuk game dan film",
    //     category: "Design & Creative"
    // },
    // {
    //     id: 35,
    //     title: "Research Scientist",
    //     company: "Innovation Labs",
    //     location: "Bogor",
    //     type: "Full-time",
    //     salary: "Rp 20.000.000 - Rp 35.000.000",
    //     posted: "3 hari yang lalu",
    //     description: "Penelitian di bidang AI dan Machine Learning",
    //     category: "Development & IT"
    // },
    // {
    //     "id": 36,
    //     "title": "Social Media Manager",
    //     "company": "Digital Connect",
    //     "location": "Jakarta",
    //     "type": "Hybrid",
    //     "salary": "Rp 10.000.000 - Rp 15.000.000",
    //     "posted": "4 hari yang lalu",
    //     "description": "Pengelolaan konten dan strategi social media",
    //     "category": "Sales & Marketing"
    // },
    // {
    //     "id": 37,
    //     "title": "Database Administrator",
    //     "company": "Data Systems",
    //     "location": "Medan",
    //     "type": "Full-time",
    //     "salary": "Rp 15.000.000 - Rp 25.000.000",
    //     "posted": "1 minggu yang lalu",
    //     "description": "Administrasi dan optimasi database perusahaan",
    //     "category": "Development & IT"
    // },
    // {
    //     "id": 38,
    //     "title": "Risk Analyst",
    //     "company": "Risk Management Pro",
    //     "location": "Jakarta",
    //     "type": "Full-time",
    //     "salary": "Rp 17.000.000 - Rp 26.000.000",
    //     "posted": "5 hari yang lalu",
    //     "description": "Analisis risiko bisnis dan compliance",
    //     "category": "Product & Manajemen"
    // },
    // {
    //     "id": 39,
    //     "title": "UX Researcher",
    //     "company": "User First",
    //     "location": "Bandung",
    //     "type": "Remote",
    //     "salary": "Rp 14.000.000 - Rp 22.000.000",
    //     "posted": "2 hari yang lalu",
    //     "description": "Penelitian user experience dan usability testing",
    //     "category": "Design & Creative"
    // },
    // {
    //     "id": 40,
    //     "title": "IoT Developer",
    //     "company": "Connected Things",
    //     "location": "Surabaya",
    //     "type": "Full-time",
    //     "salary": "Rp 16.000.000 - Rp 24.000.000",
    //     "posted": "1 minggu yang lalu",
    //     "description": "Pengembangan solusi IoT dan embedded systems",
    //     "category": "Development & IT"
    // },
    // {
    //     "id": 41,
    //     "title": "Legal Counsel",
    //     "company": "Legal Pro",
    //     "location": "Jakarta",
    //     "type": "Full-time",
    //     "salary": "Rp 22.000.000 - Rp 35.000.000",
    //     "posted": "3 hari yang lalu",
    //     "description": "Penanganan urusan hukum dan compliance perusahaan",
    //     "category": "Product & Manajemen"
    // },
    // {
    //     "id": 42,
    //     "title": "Motion Designer",
    //     "company": "Animation Studio",
    //     "location": "Yogyakarta",
    //     "type": "Hybrid",
    //     "salary": "Rp 13.000.000 - Rp 20.000.000",
    //     "posted": "6 hari yang lalu",
    //     "description": "Pembuatan motion graphics dan animasi",
    //     "category": "Design & Creative"
    // },
    // {
    //     "id": 43,
    //     "title": "Operations Manager",
    //     "company": "Ops Excellence",
    //     "location": "Semarang",
    //     "type": "Full-time",
    //     "salary": "Rp 18.000.000 - Rp 28.000.000",
    //     "posted": "4 hari yang lalu",
    //     "description": "Manajemen operasional dan optimasi proses bisnis",
    //     "category": "Product & Manajemen"
    // },
    // {
    //     "id": 44,
    //     "title": "Robotics Engineer",
    //     "company": "Robot Tech",
    //     "location": "Surabaya",
    //     "type": "Full-time",
    //     "salary": "Rp 20.000.000 - Rp 32.000.000",
    //     "posted": "1 minggu yang lalu",
    //     "description": "Pengembangan sistem robotika dan otomasi",
    //     "category": "Development & IT"
    // },
    // {
    //     "id": 45,
    //     "title": "Customer Success Manager",
    //     "company": "Client Care",
    //     "location": "Jakarta",
    //     "type": "Remote",
    //     "salary": "Rp 15.000.000 - Rp 23.000.000",
    //     "posted": "2 hari yang lalu",
    //     "description": "Manajemen hubungan pelanggan dan kepuasan klien",
    //     "category": "Sales & Marketing"
    // },
    // {
    //     "id": 46,
    //     "title": "SEO Specialist",
    //     "company": "Search Pro",
    //     "location": "Bandung",
    //     "type": "Hybrid",
    //     "salary": "Rp 12.000.000 - Rp 18.000.000",
    //     "posted": "5 hari yang lalu",
    //     "description": "Optimasi SEO dan peningkatan traffic website",
    //     "category": "Sales & Marketing"
    // },
    // {
    //     "id": 47,
    //     "title": "Quantum Computing Researcher",
    //     "company": "Quantum Labs",
    //     "location": "Jakarta",
    //     "type": "Full-time",
    //     "salary": "Rp 30.000.000 - Rp 45.000.000",
    //     "posted": "1 minggu yang lalu",
    //     "description": "Penelitian dan pengembangan algoritma quantum computing",
    //     "category": "Development & IT"
    // },
    // {
    //     "id": 48,
    //     "title": "Sustainability Consultant",
    //     "company": "Green Solutions",
    //     "location": "Bali",
    //     "type": "Remote",
    //     "salary": "Rp 16.000.000 - Rp 25.000.000",
    //     "posted": "3 hari yang lalu",
    //     "description": "Konsultasi keberlanjutan dan program lingkungan",
    //     "category": "Product & Manajemen"
    // },
    // {
    //     "id": 49,
    //     "title": "Cloud Security Engineer",
    //     "company": "Secure Cloud",
    //     "location": "Jakarta",
    //     "type": "Full-time",
    //     "salary": "Rp 25.000.000 - Rp 35.000.000",
    //     "posted": "4 hari yang lalu",
    //     "description": "Keamanan infrastruktur cloud dan compliance",
    //     "category": "Development & IT"
    // },
    // {
    //     "id": 50,
    //     "title": "Business Development Manager",
    //     "company": "Growth Solutions",
    //     "location": "Surabaya",
    //     "type": "Full-time",
    //     "salary": "Rp 20.000.000 - Rp 30.000.000",
    //     "posted": "1 minggu yang lalu",
    //     "description": "Pengembangan bisnis dan partnership strategis",
    //     "category": "Sales & Marketing"
    // }
];


export default jobsData;
