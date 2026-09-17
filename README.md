# Sitio personal — Alfonso Aparicio

Landing page personal en HTML/CSS/JS puro, lista para publicar en GitHub Pages.

## Antes de publicar

Edita en `index.html`:
- El email y el LinkedIn de la sección de contacto (busca `tu-email@ejemplo.com` y `tu-usuario`).
- Los textos de los proyectos si quieres ajustar detalles o añadir enlaces reales.

Si más adelante quieres añadir un enlace a un proyecto, envuélvelo en un `<a>` dentro de `.project-body`.

### Añadir tu foto

Coloca tu foto en `images/alfonso.jpg` (mismo nombre, formato jpg). Mientras ese archivo no exista, el hero muestra automáticamente un placeholder con un ícono y un aviso — no rompe el diseño.

Recomendaciones para la foto:
- Cuadrada o casi cuadrada (el marco es 220×220px en escritorio).
- Buena luz, fondo simple, sin distracciones — se ve recortada dentro de un marco con esquinas técnicas tipo plano.

### Añadir tu CV

Coloca tu CV en PDF en la raíz del proyecto, con el nombre exacto `Alfonso_Aparicio_CV.pdf` (junto a `index.html`). El botón "Descargar CV" del hero ya apunta ahí.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub. Si quieres que sea tu sitio "principal" (accesible directamente en `tu-usuario.github.io` sin subcarpeta), nómbralo exactamente `tu-usuario.github.io`. Si no, cualquier nombre funciona (ej. `personal-site`) y tu sitio quedará en `tu-usuario.github.io/personal-site`.
2. Sube estos archivos (`index.html`, `style.css`, `script.js`) a la raíz del repositorio.
3. Ve a **Settings → Pages** en el repositorio.
4. En "Source", elige la rama `main` y la carpeta `/ (root)`.
5. Guarda. En 1-2 minutos tu sitio estará disponible en la URL que te indique GitHub.

## Conectar tu dominio propio (cuando lo tengas)

1. En tu proveedor de dominio (Namecheap, GoDaddy, etc.), crea los registros DNS:
   - Si apuntas el dominio raíz (`tudominio.com`): 4 registros `A` apuntando a las IPs de GitHub Pages:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Si usas un subdominio (`www.tudominio.com`): un registro `CNAME` apuntando a `tu-usuario.github.io`.
2. En el repositorio, ve a **Settings → Pages → Custom domain** y escribe tu dominio. GitHub creará automáticamente un archivo `CNAME` en el repo — no lo borres.
3. Marca la casilla **Enforce HTTPS** una vez que GitHub confirme que el dominio está verificado (puede tardar unos minutos hasta unas horas).

## Estructura

```
index.html   → contenido y estructura, con textos ES/EN vía data-i18n
style.css    → diseño (paleta, tipografía, layout)
script.js    → selector de idioma (ES/EN) y detalles menores
LICENSE      → MIT para el código (HTML/CSS/JS); tu foto, bio y CV quedan excluidos
.gitignore   → ignora archivos de sistema/editor (.DS_Store, .vscode, etc.)
```

El selector de idioma guarda tu preferencia en el navegador (localStorage), así que cada visitante ve el idioma que eligió la última vez.
