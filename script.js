const darkModeBtn = document.getElementById('darkModeBtn');
const lightModeBtn = document.getElementById('lightModeBtn');
const body = document.body;

darkModeBtn.addEventListener('click', () => {
  body.classList.add('dark-mode');
  body.classList.remove('light-mode');
});

lightModeBtn.addEventListener('click', () => {
  body.classList.add('light-mode');
  body.classList.remove('dark-mode');
});
let isZoomed = false;

function toggleSize() {
  const img = document.getElementById('imagem');
  
  if (!isZoomed) {
    img.style.transform = 'scale(1.8)'; /* Aumenta a escala para 150% */
    isZoomed = true;
  } else {
    img.style.transform = 'scale(1)'; /* Volta ao tamanho original (100%) */
    isZoomed = false;
  }
}