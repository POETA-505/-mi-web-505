// Año automático en el pie de página (si existe en la página)
var elAnio = document.getElementById('anio');
if (elAnio) elAnio.textContent = new Date().getFullYear();

// Aviso de cookies: se agrega solo a cada página, sin tocar el HTML de cada una.
// Se recuerda la elección en este navegador (no se envía a ningún lado).
(function () {
  try {
    if (localStorage.getItem('cookies-aceptadas') === 'si') return;
  } catch (e) {
    return; // si el navegador bloquea localStorage, no mostramos el aviso para no romper nada
  }

  var banner = document.createElement('div');
  banner.className = 'banner-cookies';
  banner.setAttribute('role', 'region');
  banner.setAttribute('aria-label', 'Aviso de cookies');
  banner.innerHTML =
    '<p>Usamos cookies propias y de anuncios para mejorar tu visita. Más detalles en nuestra ' +
    '<a href="' + (location.pathname.includes('/articulos/') ? '../privacidad.html' : 'privacidad.html') + '">política de privacidad</a>.</p>' +
    '<button type="button">Entendido</button>';

  document.body.appendChild(banner);

  banner.querySelector('button').addEventListener('click', function () {
    try { localStorage.setItem('cookies-aceptadas', 'si'); } catch (e) {}
    banner.remove();
  });
})();

// Buscador + filtro por categoría (solo existe en index.html)
var campoBusqueda = document.getElementById('buscador-articulos');
var chips = document.querySelectorAll('.chip');
var tarjetas = document.querySelectorAll('.tarjeta');
var mensajeSinResultados = document.getElementById('sin-resultados');

if (campoBusqueda && tarjetas.length) {
  var categoriaActiva = 'Todas';

  function aplicarFiltros() {
    var texto = campoBusqueda.value.trim().toLowerCase();
    var algunaVisible = false;

    tarjetas.forEach(function (tarjeta) {
      var coincideTexto = tarjeta.textContent.toLowerCase().indexOf(texto) !== -1;
      var coincideCategoria = categoriaActiva === 'Todas' || tarjeta.dataset.categoria === categoriaActiva;
      var visible = coincideTexto && coincideCategoria;
      tarjeta.classList.toggle('oculta', !visible);
      if (visible) algunaVisible = true;
    });

    if (mensajeSinResultados) {
      mensajeSinResultados.classList.toggle('visible', !algunaVisible);
    }
  }

  campoBusqueda.addEventListener('input', aplicarFiltros);

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
      chip.setAttribute('aria-pressed', 'true');
      categoriaActiva = chip.dataset.categoria;
      aplicarFiltros();
    });
  });
}
