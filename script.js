// Data kantor cabang (33 alamat)
const officesData = [
  // Pulau Jawa (12 kantor)
  {
    city: 'Jakarta Pusat',
    address: 'Jl. Thamrin No. 10, Jakarta Pusat 10340',
    phone: '(021) 1234-5678',
    type: 'Pusat',
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
const body = document.body;
const logo = document.querySelectorAll('.logo-img');
let themeTransitionTimeout;

// Check for saved theme preference or default to light
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  body.classList.add('dark-theme');
  logo.forEach((img) => {
    img.src = 'img/raharu-dark.png';
  });
} else {
  logo.forEach((img) => {
    img.src = 'img/raharu-light.png';
  });
}

function applyThemeChange() {
  body.classList.toggle('dark-theme');
  const isDark = body.classList.contains('dark-theme');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  logo.forEach((img) => {
    img.src = isDark ? 'img/raharu-dark.png' : 'img/raharu-light.png';
  });
}

function toggleTheme(event) {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  if (
    !prefersReducedMotion &&
    typeof document.startViewTransition === 'function'
  ) {
    const buttonRect = themeToggle.getBoundingClientRect();
    const originX =
      event.detail === 0
        ? buttonRect.left + buttonRect.width / 2
        : event.clientX;
    const originY =
      event.detail === 0
        ? buttonRect.top + buttonRect.height / 2
        : event.clientY;

    document.documentElement.style.setProperty(
      '--theme-reveal-x',
      `${originX}px`,
    );
    document.documentElement.style.setProperty(
      '--theme-reveal-y',
      `${originY}px`,
    );
    document.startViewTransition(applyThemeChange);
    return;
  }

  if (!prefersReducedMotion) {
    body.classList.add('theme-transition');
    window.clearTimeout(themeTransitionTimeout);
    themeTransitionTimeout = window.setTimeout(() => {
      body.classList.remove('theme-transition');
    }, 400);
  }

  applyThemeChange();
}

themeToggle.addEventListener('click', toggleTheme);

// Go to Top Button
const goToTopBtn = document.getElementById('goToTop');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const navLinksContainer = document.querySelector('.nav-links');
const navIndicator = document.querySelector('.nav-indicator');
let mobileNavTop = 0;
let navIndicatorAnimation;

function updateNavIndicator(animate = false) {
  const activeLink = document.querySelector('.nav-link.active');
  if (!activeLink) return;

  if (!animate) navIndicatorAnimation?.cancel();

  const linkRect = activeLink.getBoundingClientRect();
  const navRect = navLinksContainer.getBoundingClientRect();
  const targetX = linkRect.left - navRect.left + navLinksContainer.scrollLeft;
  const targetWidth = linkRect.width;

  if (
    animate &&
    navIndicator.classList.contains('is-ready') &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    const currentRect = navIndicator.getBoundingClientRect();
    const currentX =
      currentRect.left - navRect.left + navLinksContainer.scrollLeft;
    const currentWidth = currentRect.width;
    const expandedX = Math.min(currentX, targetX);
    const expandedWidth =
      Math.max(currentX + currentWidth, targetX + targetWidth) - expandedX;

    navIndicatorAnimation?.cancel();
    navIndicatorAnimation = navIndicator.animate(
      [
        {
          transform: `translateX(${currentX}px)`,
          width: `${currentWidth}px`,
          offset: 0,
          easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
        },
        {
          transform: `translateX(${expandedX}px)`,
          width: `${expandedWidth}px`,
          offset: 0.65,
          easing: 'cubic-bezier(0.4, 0, 0.8, 0.4)',
        },
        {
          transform: `translateX(${targetX}px)`,
          width: `${targetWidth}px`,
          offset: 1,
        },
      ],
      {
        duration: 700,
      },
    );
  }

  navLinksContainer.style.setProperty('--nav-indicator-x', `${targetX}px`);
  navLinksContainer.style.setProperty(
    '--nav-indicator-width',
    `${targetWidth}px`,
  );
}

updateNavIndicator();
requestAnimationFrame(() => navIndicator.classList.add('is-ready'));

function setActiveNavLink(activeLink, animate = false) {
  const activeLinkChanged = !activeLink.classList.contains('active');

  navLinks.forEach((link) => {
    link.classList.toggle('active', link === activeLink);
  });

  if (activeLinkChanged) {
    updateNavIndicator(animate);
  }
}

function updateMobileNavPosition() {
  const wasSticky = navLinksContainer.classList.contains('is-sticky');

  if (window.innerWidth > 768) {
    navLinksContainer.classList.remove('is-sticky');
    if (wasSticky) updateNavIndicator();
    return;
  }

  if (!wasSticky) {
    mobileNavTop =
      navLinksContainer.getBoundingClientRect().top + window.scrollY;
  }

  const isSticky = window.scrollY >= mobileNavTop;
  navLinksContainer.classList.toggle('is-sticky', isSticky);
  if (isSticky !== wasSticky) updateNavIndicator();
}

function updateActiveNavLink() {
  const activationLine = window.innerHeight * 0.35;
  const currentSection = Array.from(sections).reduce(
    (activeSection, section) =>
      section.getBoundingClientRect().top <= activationLine
        ? section
        : activeSection,
    sections[0],
  );
  const activeLink = Array.from(navLinks).find(
    (link) => link.getAttribute('href') === `#${currentSection.id}`,
  );

  if (activeLink) setActiveNavLink(activeLink, true);
}

function updateNavigationOnResize() {
  updateMobileNavPosition();
  updateActiveNavLink();
  updateNavIndicator();
}

window.addEventListener(
  'scroll',
  () => {
    updateMobileNavPosition();
    updateActiveNavLink();
  },
  { passive: true },
);
window.addEventListener('resize', updateNavigationOnResize);
updateNavigationOnResize();

window.addEventListener(
  'scroll',
  () => {
    if (window.pageYOffset > 300) {
      goToTopBtn.classList.add('active');
    } else {
      goToTopBtn.classList.remove('active');
    }
  },
  { passive: true },
);

goToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Saat diklik manual, langsung aktif juga (biar terasa responsif)
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    setActiveNavLink(link, true);
  });
});

// Tracking functionality
const form = document.getElementById('trackingForm');
const trackButton = document.getElementById('trackButton');
const trackingNumber = document.getElementById('trackingNumber');
const trackingNumberError = document.getElementById('trackingNumberError');
const trackingApiBaseUrl = 'http://localhost:8000/api/public/tracking';

trackingNumber.addEventListener('input', () => {
  trackingNumber.classList.remove('error');
  trackingNumber.removeAttribute('aria-invalid');
  trackingNumberError.textContent = '';
  trackingNumberError.classList.remove('is-visible');
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const trackingCode = trackingNumber.value.trim();

  if (!/^[a-zA-Z0-9]{7}\d{8}$/.test(trackingCode)) {
    trackingNumber.classList.add('error');
    trackingNumber.setAttribute('aria-invalid', 'true');
    trackingNumberError.textContent = trackingCode
      ? 'Format tidak valid. Masukkan 7 karakter nomor resi diikuti tanggal DDMMYYYY.'
      : 'Nomor resi wajib diisi.';
    trackingNumberError.classList.add('is-visible');
    return;
  }

  trackingNumber.removeAttribute('aria-invalid');
  trackingNumberError.textContent = '';
  trackingNumberError.classList.remove('is-visible');
  trackButton.disabled = true;
  trackButton.textContent = 'Mencari...';

  try {
    const response = await fetch(
      `${trackingApiBaseUrl}/${encodeURIComponent(trackingCode)}`,
      {
        headers: { Accept: 'application/json' },
        credentials: 'omit',
      },
    );
    const result = await response.json().catch(() => null);

    if (!response.ok) {
      const message =
        response.status === 404
          ? 'Resi tidak ditemukan. Periksa nomor resi dan tanggalnya.'
          : response.status === 422
            ? 'Format tracking tidak valid. Gunakan 7 karakter resi + tanggal DDMMYYYY.'
            : response.status === 429
              ? 'Terlalu banyak permintaan. Coba lagi sebentar.'
              : 'Tracking sedang tidak dapat dilakukan. Coba lagi nanti.';

      showTrackingModal(trackingCode, null, message);
      return;
    }

    showTrackingModal(trackingCode, result?.data, '');
  } catch (error) {
    console.error('Gagal menghubungi API tracking:', error);
    showTrackingModal(
      trackingCode,
      null,
      'Tidak dapat terhubung ke server tracking. Pastikan aplikasi SIMPUL berjalan, lalu coba lagi.',
    );
  } finally {
    trackButton.disabled = false;
    trackButton.textContent = 'Cek';
  }
});

function showTrackingModal(trackingCode, data, errorMessage) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay tracking-modal-overlay';

  const wrapper = document.createElement('div');
  wrapper.className = 'modal-wrapper tracking-modal-wrapper';

  const modal = document.createElement('div');
  modal.className = 'modal-content tracking-modal';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'tracking-modal-close';
  closeBtn.type = 'button';
  closeBtn.setAttribute('aria-label', 'Tutup hasil tracking');
  closeBtn.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"></path></svg>';

  const header = document.createElement('div');
  header.className = 'tracking-modal-header';
  const heading = document.createElement('div');
  const eyebrow = document.createElement('p');
  eyebrow.className = 'tracking-modal-eyebrow';
  eyebrow.textContent = 'Informasi Pengiriman';
  const title = document.createElement('h3');
  title.textContent = 'Tracking Resi';
  const resiNumber = document.createElement('p');
  resiNumber.className = 'tracking-modal-number';
  resiNumber.textContent = trackingCode;
  heading.append(eyebrow, title, resiNumber);
  header.append(heading, closeBtn);
  modal.appendChild(header);

  if (errorMessage) {
    const error = document.createElement('div');
    error.className = 'tracking-error';
    const errorTitle = document.createElement('strong');
    errorTitle.textContent = 'Tracking tidak dapat ditemukan';
    const errorDescription = document.createElement('p');
    errorDescription.textContent = errorMessage;
    error.append(errorTitle, errorDescription);
    modal.appendChild(error);
  } else if (data) {
    const route = document.createElement('div');
    route.className = 'tracking-route';
    const origin = document.createElement('span');
    origin.textContent = data.route?.origin ?? '-';
    const arrow = document.createElement('span');
    arrow.className = 'tracking-route-arrow';
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '→';
    const destination = document.createElement('span');
    destination.textContent = data.route?.destination ?? '-';
    route.append(origin, arrow, destination);
    modal.appendChild(route);

    const summary = document.createElement('div');
    summary.className = 'tracking-summary';

    const status = document.createElement('div');
    status.className = 'tracking-summary-item';
    const statusLabel = document.createElement('p');
    statusLabel.className = 'tracking-summary-label';
    statusLabel.textContent = 'Status';
    const statusValue = document.createElement('p');
    statusValue.className = 'tracking-summary-value tracking-status-value';
    statusValue.textContent = data.status?.label ?? 'Status tidak tersedia';
    status.append(statusLabel, statusValue);

    const location = document.createElement('div');
    location.className = 'tracking-summary-item';
    const locationLabel = document.createElement('p');
    locationLabel.className = 'tracking-summary-label';
    locationLabel.textContent = 'Lokasi Terkini';
    const locationValue = document.createElement('p');
    locationValue.className = 'tracking-summary-value';
    locationValue.textContent = data.route?.current_location ?? '-';
    location.append(locationLabel, locationValue);
    summary.append(status, location);
    modal.appendChild(summary);

    const sectionHeader = document.createElement('div');
    sectionHeader.className = 'tracking-timeline-header';
    const sectionTitle = document.createElement('h4');
    sectionTitle.textContent = 'Riwayat Paket';
    const eventCount = document.createElement('span');
    eventCount.className = 'tracking-event-count';
    const timelineEvents = Array.isArray(data.timeline) ? data.timeline : [];
    eventCount.textContent = `${timelineEvents.length} catatan`;
    sectionHeader.append(sectionTitle, eventCount);
    modal.appendChild(sectionHeader);

    if (timelineEvents.length > 0) {
      const timeline = document.createElement('div');
      timeline.className = 'tracking-timeline';

      timelineEvents.forEach((event) => {
        const item = document.createElement('div');
        item.className = 'tracking-timeline-item';

        const date = document.createElement('p');
        date.className = 'tracking-event-date';
        date.textContent = formatTrackingDate(event.occurred_at);

        const label = document.createElement('p');
        label.className = 'tracking-event-label';
        label.textContent = event.label ?? 'Pembaruan perjalanan paket';

        item.append(date, label);

        if (event.from_branch || event.to_branch) {
          const branchDetails = document.createElement('p');
          branchDetails.className = 'tracking-event-branches';
          branchDetails.textContent = [event.from_branch, event.to_branch]
            .filter(Boolean)
            .join(' → ');
          item.appendChild(branchDetails);
        }

        timeline.appendChild(item);
      });

      modal.appendChild(timeline);
    } else {
      const empty = document.createElement('p');
      empty.className = 'tracking-empty';
      empty.textContent = 'Belum ada riwayat pergerakan untuk resi ini.';
      modal.appendChild(empty);
    }
  }

  const footer = document.createElement('div');
  footer.className = 'tracking-modal-footer';
  const closeAction = document.createElement('button');
  closeAction.className = 'tracking-modal-dismiss';
  closeAction.type = 'button';
  closeAction.textContent = 'Tutup';
  footer.appendChild(closeAction);
  modal.appendChild(footer);

  wrapper.appendChild(modal);
  overlay.appendChild(wrapper);
  document.body.appendChild(overlay);

  document.body.style.overflow = 'hidden';

  const closeModal = () => {
    overlay.remove();
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleEscape);
  };

  const handleEscape = (event) => {
    if (event.key === 'Escape') closeModal();
  };

  closeBtn.addEventListener('click', closeModal);
  closeAction.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', handleEscape);
}

function formatTrackingDate(value) {
  if (!value) return 'Waktu tidak tersedia';

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Waktu tidak tersedia';

  return new Intl.DateTimeFormat('id-ID', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Jakarta',
  }).format(date);
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
        office.address.toLowerCase().includes(lowerQuery),
    );
  } else {
    filteredOffices = officesData.filter(
      (office) =>
        office.region === currentRegion &&
        (office.city.toLowerCase().includes(lowerQuery) ||
          office.address.toLowerCase().includes(lowerQuery)),
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

const btnShippingPrice = document.getElementById('btnShippingPrice');

btnShippingPrice.addEventListener('click', (event) => {
  event.preventDefault();

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay tracking-modal-overlay';

  const wrapper = document.createElement('div');
  wrapper.className = 'modal-wrapper tracking-modal-wrapper';

  const modal = document.createElement('div');
  modal.className = 'modal-content tracking-modal pricelist-modal';
  modal.innerHTML = `
    <div class="tracking-modal-header">
      <div>
        <p class="tracking-modal-eyebrow">Informasi Pengiriman</p>
        <h3>Cek Pricelist</h3>
        <p class="tracking-modal-number">Informasi tarif pengiriman</p>
      </div>
      <button type="button" class="tracking-modal-close" aria-label="Tutup pricelist">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"></path></svg>
      </button>
    </div>
    <p class="pricelist-message">
      Pengecekan ongkir otomatis belum tersedia. Hubungi tim kami untuk mendapatkan informasi tarif.
    </p>
    <div class="tracking-modal-footer">
      <button type="button" class="tracking-modal-dismiss" data-close-pricelist>Tutup</button>
      <a class="btn btn-primary" href="#contact">Hubungi Kami</a>
    </div>
  `;

  wrapper.appendChild(modal);
  overlay.appendChild(wrapper);
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  const closeModal = () => {
    overlay.remove();
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleEscape);
  };
  const handleEscape = (keyEvent) => {
    if (keyEvent.key === 'Escape') closeModal();
  };

  modal.querySelector('.tracking-modal-close').addEventListener('click', closeModal);
  modal.querySelector('[data-close-pricelist]').addEventListener('click', closeModal);
  modal.querySelector('a[href="#contact"]').addEventListener('click', closeModal);
  overlay.addEventListener('click', (clickEvent) => {
    if (clickEvent.target === overlay) closeModal();
  });
  document.addEventListener('keydown', handleEscape);
});

// Loader Functionality
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');

  // Ensure smooth transition
  setTimeout(() => {
    loader.classList.add('hidden');

    // Remove from DOM after transition
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, 800); // Minimal load time of 800ms
});
