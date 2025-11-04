// Data kantor cabang (33 alamat)
const officesData = [
  // Pulau Jawa (12 kantor)
  {
    city: 'Jakarta Pusat',
    address: 'Jl. Thamrin No. 10, Jakarta Pusat 10340',
    phone: '(021) 1234-5678',
    type: 'Kantor Pusat',
    region: 'jawa',
  },
  {
    city: 'Jakarta Selatan',
    address: 'Jl. Sudirman Kav. 25, Jakarta Selatan 12920',
    phone: '(021) 2345-6789',
    type: 'Cabang',
    region: 'jawa',
  },
  {
    city: 'Bandung',
    address: 'Jl. Asia Afrika No. 140, Bandung 40261',
    phone: '(022) 3456-7890',
    type: 'Cabang',
    region: 'jawa',
  },
  {
    city: 'Surabaya',
    address: 'Jl. Tunjungan No. 65, Surabaya 60275',
    phone: '(031) 4567-8901',
    type: 'Cabang',
    region: 'jawa',
  },
  {
    city: 'Yogyakarta',
    address: 'Jl. Malioboro No. 52, Yogyakarta 55213',
    phone: '(0274) 5678-9012',
    type: 'Cabang',
    region: 'jawa',
  },
  {
    city: 'Semarang',
    address: 'Jl. Pemuda No. 118, Semarang 50132',
    phone: '(024) 6789-0123',
    type: 'Cabang',
    region: 'jawa',
  },
  {
    city: 'Malang',
    address: 'Jl. Basuki Rahmat No. 76, Malang 65112',
    phone: '(0341) 7890-1234',
    type: 'Cabang',
    region: 'jawa',
  },
  {
    city: 'Bogor',
    address: 'Jl. Raya Pajajaran No. 89, Bogor 16143',
    phone: '(0251) 8901-2345',
    type: 'Cabang',
    region: 'jawa',
  },
  {
    city: 'Depok',
    address: 'Jl. Margonda Raya No. 123, Depok 16424',
    phone: '(021) 9012-3456',
    type: 'Cabang',
    region: 'jawa',
  },
  {
    city: 'Tangerang',
    address: 'Jl. Jenderal Sudirman No. 45, Tangerang 15124',
    phone: '(021) 0123-4567',
    type: 'Cabang',
    region: 'jawa',
  },
  {
    city: 'Bekasi',
    address: 'Jl. Ahmad Yani No. 87, Bekasi 17141',
    phone: '(021) 1122-3344',
    type: 'Cabang',
    region: 'jawa',
  },
  {
    city: 'Cirebon',
    address: 'Jl. Siliwangi No. 56, Cirebon 45121',
    phone: '(0231) 2233-4455',
    type: 'Cabang',
    region: 'jawa',
  },

  // Sumatera (8 kantor)
  {
    city: 'Medan',
    address: 'Jl. Pemuda No. 23, Medan 20111',
    phone: '(061) 3344-5566',
    type: 'Cabang',
    region: 'sumatera',
  },
  {
    city: 'Palembang',
    address: 'Jl. Jenderal Sudirman No. 78, Palembang 30113',
    phone: '(0711) 4455-6677',
    type: 'Cabang',
    region: 'sumatera',
  },
  {
    city: 'Padang',
    address: 'Jl. Khatib Sulaiman No. 34, Padang 25132',
    phone: '(0751) 5566-7788',
    type: 'Cabang',
    region: 'sumatera',
  },
  {
    city: 'Pekanbaru',
    address: 'Jl. Sudirman No. 67, Pekanbaru 28112',
    phone: '(0761) 6677-8899',
    type: 'Cabang',
    region: 'sumatera',
  },
  {
    city: 'Bandar Lampung',
    address: 'Jl. Wolter Monginsidi No. 45, Bandar Lampung 35112',
    phone: '(0721) 7788-9900',
    type: 'Cabang',
    region: 'sumatera',
  },
  {
    city: 'Batam',
    address: 'Jl. Engku Putri No. 89, Batam 29432',
    phone: '(0778) 8899-0011',
    type: 'Cabang',
    region: 'sumatera',
  },
  {
    city: 'Jambi',
    address: 'Jl. Gatot Subroto No. 12, Jambi 36122',
    phone: '(0741) 9900-1122',
    type: 'Cabang',
    region: 'sumatera',
  },
  {
    city: 'Bengkulu',
    address: 'Jl. Fatmawati No. 56, Bengkulu 38221',
    phone: '(0736) 0011-2233',
    type: 'Cabang',
    region: 'sumatera',
  },

  // Kalimantan (5 kantor)
  {
    city: 'Banjarmasin',
    address: 'Jl. Lambung Mangkurat No. 34, Banjarmasin 70114',
    phone: '(0511) 1122-3344',
    type: 'Cabang',
    region: 'kalimantan',
  },
  {
    city: 'Balikpapan',
    address: 'Jl. Jenderal Sudirman No. 78, Balikpapan 76112',
    phone: '(0542) 2233-4455',
    type: 'Cabang',
    region: 'kalimantan',
  },
  {
    city: 'Samarinda',
    address: 'Jl. Pahlawan No. 45, Samarinda 75117',
    phone: '(0541) 3344-5566',
    type: 'Cabang',
    region: 'kalimantan',
  },
  {
    city: 'Pontianak',
    address: 'Jl. Gajah Mada No. 67, Pontianak 78117',
    phone: '(0561) 4455-6677',
    type: 'Cabang',
    region: 'kalimantan',
  },
  {
    city: 'Palangkaraya',
    address: 'Jl. Tjilik Riwut No. 23, Palangkaraya 73111',
    phone: '(0536) 5566-7788',
    type: 'Cabang',
    region: 'kalimantan',
  },

  // Sulawesi (4 kantor)
  {
    city: 'Makassar',
    address: 'Jl. Penghibur No. 89, Makassar 90111',
    phone: '(0411) 6677-8899',
    type: 'Cabang',
    region: 'sulawesi',
  },
  {
    city: 'Manado',
    address: 'Jl. Sam Ratulangi No. 56, Manado 95111',
    phone: '(0431) 7788-9900',
    type: 'Cabang',
    region: 'sulawesi',
  },
  {
    city: 'Palu',
    address: 'Jl. Dr. Sutomo No. 34, Palu 94111',
    phone: '(0451) 8899-0011',
    type: 'Cabang',
    region: 'sulawesi',
  },
  {
    city: 'Kendari',
    address: 'Jl. Mayjen Sutoyo No. 12, Kendari 93111',
    phone: '(0401) 9900-1122',
    type: 'Cabang',
    region: 'sulawesi',
  },

  // Indonesia Timur (4 kantor)
  {
    city: 'Denpasar',
    address: 'Jl. Hayam Wuruk No. 78, Denpasar 80235',
    phone: '(0361) 0011-2233',
    type: 'Cabang',
    region: 'indonesia-timur',
  },
  {
    city: 'Mataram',
    address: 'Jl. Pejanggik No. 45, Mataram 83126',
    phone: '(0370) 1122-3344',
    type: 'Cabang',
    region: 'indonesia-timur',
  },
  {
    city: 'Kupang',
    address: 'Jl. Soekarno No. 23, Kupang 85228',
    phone: '(0380) 2233-4455',
    type: 'Cabang',
    region: 'indonesia-timur',
  },
  {
    city: 'Ambon',
    address: 'Jl. Pattimura No. 67, Ambon 97124',
    phone: '(0911) 3344-5566',
    type: 'Cabang',
    region: 'indonesia-timur',
  },
];

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const mobileThemeToggle = document.getElementById('mobileThemeToggle');
const body = document.body;
const logo = document.querySelectorAll('.logo-img');

// Check for saved theme preference or default to light
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  body.classList.add('dark-theme');
  themeToggle.textContent = '☀️';
  mobileThemeToggle.innerHTML = '<span>☀️</span>';
  logo.forEach((img) => {
    img.src = 'img/raharu-dark.png';
  });
} else {
  logo.forEach((img) => {
    img.src = 'img/raharu-light.png';
  });
}

function toggleTheme() {
  body.classList.toggle('dark-theme');
  const isDark = body.classList.contains('dark-theme');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  mobileThemeToggle.innerHTML = isDark ? '<span>☀️</span>' : '<span>🌙</span>';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  logo.forEach((img) => {
    img.src = isDark ? 'img/raharu-dark.png' : 'img/raharu-light.png';
  });
}

themeToggle.addEventListener('click', toggleTheme);
mobileThemeToggle.addEventListener('click', toggleTheme);

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobileMenu');
const mobileNav = document.getElementById('mobileNav');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

function toggleMobileMenu() {
  const isMenuOpen = mobileNav.classList.contains('active');

  if (isMenuOpen) {
    // Tutup menu
    mobileNav.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    body.classList.remove('menu-open');
    mobileMenu.textContent = '☰';
  } else {
    // Buka menu
    mobileNav.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    body.classList.add('menu-open');
    mobileMenu.textContent = '✕';
  }
}

mobileMenu.addEventListener('click', toggleMobileMenu);
mobileMenuOverlay.addEventListener('click', toggleMobileMenu);

// Go to Top Button
const goToTopBtn = document.getElementById('goToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    goToTopBtn.classList.add('active');
  } else {
    goToTopBtn.classList.remove('active');
  }
});

goToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    body.classList.remove('menu-open');
    mobileMenu.textContent = '☰';
  });
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120; // jarak agar lebih presisi
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Saat diklik manual, langsung aktif juga (biar terasa responsif)
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((l) => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Tracking functionality
const form = document.getElementById('trackingForm');
const modal = document.getElementById('resultModal');
const closeModal = document.getElementById('closeModal');

const trackButton = document.getElementById('trackButton');
const trackingNumber = document.getElementById('trackingNumber');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const trackingNumber = document.getElementById('trackingNumber').value.trim();

  if (!trackingNumber) {
    const input = document.getElementById('trackingNumber');
    input.classList.add('error');
    input.placeholder = 'Nomor resi wajib diisi !';
    return;
  }

  // Contoh data timeline statis
  const timelineData = [
    {
      date: '2025-11-01 08:20',
      status: 'Paket diterima di gudang pusat Jakarta',
    },
    { date: '2025-11-01 12:10', status: 'Paket dikirim ke Semarang' },
    { date: '2025-11-01 12:10', status: 'Paket dikirim ke Semarang' },
    { date: '2025-11-01 12:10', status: 'Paket dikirim ke Semarang' },
    { date: '2025-11-01 12:10', status: 'Paket dikirim ke Semarang' },
    { date: '2025-11-02 07:35', status: 'Paket tiba di gudang Semarang' },
    { date: '2025-11-02 11:15', status: 'Kurir sedang menuju alamat penerima' },
    { date: '2025-11-02 14:05', status: 'Paket telah diterima oleh penerima' },
  ];

  showModal(
    `Status pengiriman untuk resi <b>${trackingNumber}</b>`,
    timelineData
  );
});

function showModal(title, timelineData) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';

  const wrapper = document.createElement('div');
  wrapper.className = 'modal-wrapper';

  const modal = document.createElement('div');
  modal.className = 'modal-content';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'modal-close';
  closeBtn.innerHTML = '&times;';

  // isi timeline
  const timelineHTML = timelineData?.length
    ? `<div class="timeline">
        ${timelineData
          .map(
            (item) => `
          <div class="timeline-item">
            <p class="timeline-date">${item.date}</p>
            <p class="timeline-status">${item.status}</p>
          </div>`
          )
          .join('')}
      </div>`
    : `<p>Tidak ada data pengiriman ditemukan.</p>`;

  modal.innerHTML = `
    <div class="modal-header">
      <h3>${title}</h3>
    </div>
    ${timelineHTML}
  `;

  // susun struktur DOM
  wrapper.appendChild(modal);
  wrapper.appendChild(closeBtn);
  overlay.appendChild(wrapper);
  document.body.appendChild(overlay);

  document.body.style.overflow = 'hidden';

  const closeModal = () => {
    overlay.remove();
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
}

// Offices functionality
const officesGrid = document.getElementById('officesGrid');
const officeSearch = document.getElementById('officeSearch');
const regionFilters = document.querySelectorAll('.region-filter');
const pagination = document.getElementById('pagination');

let currentPage = 1;
const officesPerPage = 6;
let filteredOffices = [...officesData];
let currentRegion = 'all';

// Render offices
function renderOffices() {
  officesGrid.innerHTML = '';

  const startIndex = (currentPage - 1) * officesPerPage;
  const endIndex = startIndex + officesPerPage;
  const officesToShow = filteredOffices.slice(startIndex, endIndex);

  if (officesToShow.length === 0) {
    officesGrid.innerHTML =
      '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">Tidak ada kantor yang ditemukan</p>';
    return;
  }

  officesToShow.forEach((office) => {
    const officeCard = document.createElement('div');
    officeCard.className = 'office-card';
    officeCard.innerHTML = `
                    <div class="office-header">
                        <div>
                            <div class="office-city">${office.city}</div>
                            <div class="office-type">${office.type}</div>
                        </div>
                    </div>
                    <div class="office-address">${office.address}</div>
                    <div class="office-contact">
                        <div class="contact-item">
                            <span class="contact-icon">📞</span>
                            <span>${office.phone}</span>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">🕒</span>
                            <span>Senin - Jumat: 08:00 - 17:00</span>
                        </div>
                    </div>
                `;
    officesGrid.appendChild(officeCard);
  });

  renderPagination();
}

// Render pagination
function renderPagination() {
  const totalPages = Math.ceil(filteredOffices.length / officesPerPage);
  pagination.innerHTML = '';

  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement('button');
    pageBtn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
    pageBtn.textContent = i;
    pageBtn.addEventListener('click', () => {
      currentPage = i;
      renderOffices();
      window.scrollTo({
        top: officesGrid.offsetTop - 100,
        behavior: 'smooth',
      });
    });
    pagination.appendChild(pageBtn);
  }
}

// Filter offices by region
function filterOfficesByRegion(region) {
  currentRegion = region;
  currentPage = 1;

  if (region === 'all') {
    filteredOffices = [...officesData];
  } else {
    filteredOffices = officesData.filter((office) => office.region === region);
  }

  renderOffices();
}

// Search offices
function searchOffices(query) {
  currentPage = 1;
  const lowerQuery = query.toLowerCase();

  if (currentRegion === 'all') {
    filteredOffices = officesData.filter(
      (office) =>
        office.city.toLowerCase().includes(lowerQuery) ||
        office.address.toLowerCase().includes(lowerQuery)
    );
  } else {
    filteredOffices = officesData.filter(
      (office) =>
        office.region === currentRegion &&
        (office.city.toLowerCase().includes(lowerQuery) ||
          office.address.toLowerCase().includes(lowerQuery))
    );
  }

  renderOffices();
}

// Event listeners for region filters
regionFilters.forEach((filter) => {
  filter.addEventListener('click', () => {
    regionFilters.forEach((f) => f.classList.remove('active'));
    filter.classList.add('active');
    filterOfficesByRegion(filter.dataset.region);
  });
});

// Event listener for search
officeSearch.addEventListener('input', (e) => {
  searchOffices(e.target.value);
});

// Initial render
renderOffices();
