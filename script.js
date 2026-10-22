// ===== ANIMACIÓN AL BAJAR =====
// Cuando un elemento con la clase "revelar" aparece en pantalla,
// le agregamos la clase "visible" para que se anime.
const elementos = document.querySelectorAll('.revelar');

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

elementos.forEach((elemento) => observador.observe(elemento));

// ===== FORMULARIO → WHATSAPP =====
// Al enviar el formulario, armamos un mensaje y abrimos WhatsApp.
const formulario = document.getElementById('formulario');

// Número de ejemplo (código de país + número, sin espacios ni +)
const numeroWhatsApp = '573000000000';

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault(); // evita que la página se recargue

  const nombre = document.getElementById('nombre').value;
  const producto = document.getElementById('producto').value;
  const mensaje = document.getElementById('mensaje').value;

  const texto = `Hola, soy ${nombre}. Me interesa: ${producto}. ${mensaje}`;
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

  window.open(url, '_blank');
});