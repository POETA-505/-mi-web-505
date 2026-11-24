# Tecnofácil

Sitio de guías de tecnología cotidiana, listo para subir a GitHub Pages. No necesitas instalar nada ni usar la línea de comandos — todo se hace desde el navegador.

## Antes de subirlo: completa estos 3 datos

Busca y reemplaza en todos los archivos (con "Buscar y reemplazar" de tu editor de texto, o avísame y te los relleno yo):

1. `[tu-correo@ejemplo.com]` → tu correo real (aparece en `contacto.html`, `privacidad.html` y `terminos.html`).
2. `[completa la fecha]` → la fecha de hoy (aparece en `privacidad.html` y `terminos.html`).
3. `tecnofacil.example` → cuando tengas tu dirección final (ver paso 5 más abajo), cámbiala en todos los archivos donde aparece (`sitemap.xml`, `robots.txt`, y la etiqueta `canonical` de cada página).

## Cómo subirlo a GitHub Pages (paso a paso, sin comandos)

**1. Crea tu cuenta** en [github.com](https://github.com) si no tienes una (gratis).

**2. Crea un repositorio con este nombre exacto:** `turousuario.github.io` (cambia "turousuario" por tu nombre de usuario real de GitHub, tal cual aparece). Este nombre específico es importante: así tu sitio queda publicado directo en la raíz de esa dirección, sin carpetas extra ni rutas que ajustar.
   - Botón verde **New** → nombre del repositorio → márcalo como **Public** → **Create repository**.

**3. Sube los archivos:**
   - Dentro del repositorio recién creado, haz clic en **Add file → Upload files**.
   - Arrastra **todo el contenido** de esta carpeta (no la carpeta en sí, sino lo que está adentro: `index.html`, `favicon.svg`, las carpetas `assets` y `articulos`, etc.) directo a la ventana del navegador.
   - Baja y haz clic en **Commit changes**.

**4. Activa GitHub Pages:**
   - Ve a la pestaña **Settings** del repositorio → en el menú de la izquierda, **Pages**.
   - En "Source", elige la rama `main` y la carpeta `/ (root)` → **Save**.

**5. Espera 1-2 minutos.** Tu sitio queda disponible en:
   `https://turousuario.github.io/`

Esa es la dirección real que debes usar para reemplazar `tecnofacil.example` en el paso anterior, y la que vas a registrar en Google Search Console y en AdSense.

## Cómo agregar un artículo nuevo

1. Duplica cualquier archivo de la carpeta `articulos/` y cámbiale el nombre (sin espacios ni tildes, ej. `nombre-del-articulo.html`).
2. Edita adentro: título, categoría, fecha, contenido y los dos enlaces de "Artículos relacionados" al final.
3. Agrega una tarjeta nueva para ese artículo en `index.html` (copia un bloque `<article class="tarjeta">...</article>` existente y cambia sus datos).
4. Agrega la nueva dirección en `sitemap.xml`.
5. Vuelve a subir esos archivos modificados a GitHub (mismo botón **Add file → Upload files**, o edítalos directo en la web de GitHub con el ícono del lápiz).

## Dónde pegar tu código de AdSense (cuando te aprueben)

Google te va a dar un fragmento de código para pegar. Dos lugares:

- **Para la verificación inicial del sitio:** pégalo dentro de la etiqueta `<head>` de `index.html` (y, para que funcione en todas las páginas, repítelo en el `<head>` de cada archivo `.html`).
- **Para los anuncios en sí**, una vez aprobado: Google te da anuncios automáticos (se colocan solos) o bloques de anuncio para pegar donde quieras — por ejemplo, dentro de cada artículo, después del primer párrafo.

## Antes de aplicar a AdSense

- Ya hay **10 artículos** publicados (celulares, computadoras, internet, archivos y seguridad). Apunta a sumar varios más antes de aplicar — revisa `ideas-articulos.md` para no quedarte sin temas.
- Completa de verdad los 3 datos de la sección de arriba.
- Completa el archivo `ads.txt` cuando Google te dé tu ID de editor (trae instrucciones dentro del mismo archivo).
- Regístrate en [Google Search Console](https://search.google.com/search-console), agrega tu dirección y envía el `sitemap.xml`.
- Ten tráfico orgánico real (gente que llega por su cuenta) antes de aplicar, no solo tus propias visitas.

## Lo que ya viene incorporado para la aprobación

- **Aviso de cookies**: aparece solo, en todas las páginas, sin que tengas que tocar nada (vive en `assets/script.js`).
- **`ads.txt`**: listo para completar con tu ID de editor cuando te aprueben.
- **Datos estructurados (JSON-LD)**: cada artículo y la portada ya llevan el marcado que Google usa para entender tu contenido.
- **`sitemap.xml` y `robots.txt`**: ya actualizados con los 10 artículos.

## Qué contiene esta carpeta

```
index.html              → portada con buscador y filtro por categoría
sobre.html              → quiénes somos
contacto.html           → contacto
privacidad.html         → política de privacidad (requisito de AdSense)
terminos.html           → términos de servicio (requisito de AdSense)
404.html                → página de error
favicon.svg             → ícono del sitio
sitemap.xml             → mapa del sitio para buscadores
robots.txt              → permisos para buscadores
assets/style.css        → todo el diseño del sitio
assets/script.js        → el buscador y el filtro de categorías
articulos/*.html        → los 5 artículos publicados
```

## Nota sobre los otros proyectos de esta conversación

Este sitio reemplaza tanto al acortador de enlaces (requería servidor, ya no lo necesitas) como al kit de Blogger que te dieron en otra sesión (usa un sistema distinto, incompatible con GitHub).

**Importante: NO subas a este repositorio los archivos `Centro_de_lanzamiento.html`, `Centro_de_lanzamiento.md` ni `tema-blogger.xml`.** Esos son de un proyecto para Blogger, no para GitHub — no son parte de este sitio y no van a funcionar aquí. Sube únicamente lo que está dentro de esta carpeta (`tecnofacil`).
