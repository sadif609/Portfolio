const certificates = [
  {
    id: 1,
    name: "Web Designing & WordPress Expert",
    provider: "Creative IT Institute",
    img: "images/Creative-it-web.jpg",
    description: "Completed Web Development course covering HTML, CSS, JavaScript."
  },
  {
    id: 2,
    name: "Competitive Programming",
    provider: "Phitron by Programming Hero ",
    img: "images/prgramming-hero.jpg",
    description: "C, C++, Python, OOP,DBMS, Data Structure, Algorithms, React.js, HTML5, CSS3, JavaScript, Bootstrap, SQL, Debugging, Cloud Computing, django"
  },
 
];

const grid = document.getElementById('certificates-grid');

function renderCertificates(list) {
  grid.innerHTML = '';
  list.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${cert.img}" alt="${cert.name}">
      <h2>${cert.name}</h2>
      <p>${cert.provider}</p>
    `;
    card.addEventListener('click', () => openModal(cert));
    grid.appendChild(card);
  });
}

// Initial render
renderCertificates(certificates);

// Search filter
function filterCertificates() {
  const query = document.getElementById('search').value.toLowerCase();
  const filtered = certificates.filter(cert => cert.name.toLowerCase().includes(query));
  renderCertificates(filtered);
}

// Modal
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalProvider = document.getElementById('modal-provider');
const modalText = document.getElementById('modal-text');

function openModal(cert) {
  modal.style.display = 'flex';
  modalImg.src = cert.img;
  modalTitle.textContent = cert.name;
  modalProvider.textContent = cert.provider;
  modalText.textContent = cert.description;
}

function closeModal(e) {
  if (e.target === modal || e.target.classList.contains('close-btn')) {
    modal.style.display = 'none';
  }
}
