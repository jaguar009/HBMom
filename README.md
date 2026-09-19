# Para ti, mamá

Landing de cumpleaños para **María del Pilar Peralta Ramírez**, con diseño marfil, vino y dorado, imágenes originales, trayectoria interactiva, carta en un diálogo accesible, aparición al desplazarse y celebración con confeti y deseos.

## Abrir

Abre `index.html` directamente: las imágenes, CSS y scripts usan rutas relativas y no requieren red. Para una vista con servidor local, con Node.js 20 o posterior:

```sh
npm start
```

Abre http://127.0.0.1:4173. No hace falta `npm install`, compilación, claves, base de datos ni servicios externos. `npm run check` comprueba la sintaxis de JavaScript.

## Publicar en GitHub Pages

La raíz de esta carpeta debe ser la raíz del repositorio: `index.html`, `styles.css`, `content.js`, `app.js`, `assets/` y `.nojekyll`. Puedes subir todos los archivos de esta carpeta. En GitHub, configura Pages para publicar desde la rama correspondiente (normalmente `main`) y la carpeta raíz. No se necesita workflow de compilación. Las rutas relativas funcionan también en `https://usuario.github.io/nombre-repositorio/`.

Este paquete **no se ha publicado ni se ha conectado a una cuenta de GitHub**. El archivo `ENTREGA-CODEX.md` contiene el encargo listo para la sesión encargada de publicarlo. La publicación desde una rama y la raíz se corresponde con la [documentación oficial de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), consultada para esta entrega.

## Personalizar

- `content.js`: párrafos de la carta, firma, deseos, seis hitos y cronología extensa.
- `index.html`: nombre, títulos y textos de portada. No se fijó edad ni fecha de cumpleaños.
- `styles.css`: colores y adaptación responsive. Usa fuentes del sistema, sin descargas externas.
- `assets/`: imágenes creadas para este homenaje. No contienen un retrato de la homenajeada. Si se desea incorporar una fotografía familiar, puede añadirse posteriormente.

Los enlaces de fuentes se abren en otra pestaña. No hay analítica, cookies, formularios, cargas de archivos ni transmisión de datos. El confeti se activa únicamente al pulsar el botón, se elimina después y respeta la preferencia de movimiento reducido. Cada pulsación muestra otro deseo.

## Contenido profesional

La fuente inicial de trabajo es el PDF aportado por el usuario, `Deep Research Backing Conversation for session None.pdf`, 16 páginas, con corte de investigación del 18 de septiembre de 2026. El sitio se amplió después con investigación web el 19 de septiembre de 2026. El archivo `INVESTIGACION-PUBLICA.md` contiene el detalle de los hallazgos y enlaces. Se distingue el contenido factual de la dedicatoria familiar. No se atribuyen grados, premios, edad, fecha de nacimiento o cargo vigente que las fuentes no confirman.

La cronología extendida incluye la designación de 1999 como Fiscal Ad Hoc para investigaciones y procesos por terrorismo, la confirmación normativa de esa función en 2000, la referencia periodística de 2001 como fiscal antiterrorismo, el proceso de ratificación de 2002–2004 y la secuencia del caso Sodalicio de 2015–2017 con la revisión superior y la incertidumbre sobre el desenlace disciplinario. La portada presenta una selección de cargos históricos. No se sugiere ejercicio ininterrumpido ni que una adscripción de 2021 sea el cargo actual. El PDF original no se distribuye en el repositorio.

La investigación web adicional consultó la Resolución 148-99-MP-CEMP publicada en una reproducción de El Peruano, las Resoluciones 168-2000-MP-CEMP y 704-2000-MP-CEMP, una resolución de ratificación del CNM de 2007, Tribunal Constitucional y la entrevista de El Comercio sobre Mesa Redonda. La fórmula más precisa es: **Fiscal Provincial Titular de la 28.ª Fiscalía Provincial Penal de Lima y Fiscal Ad Hoc para investigaciones y procesos por terrorismo**. “Fiscal antiterrorismo” aparece como descripción periodística de 2001; “fiscal especializada” aparece en algunas referencias secundarias, pero la landing prioriza la denominación normativa.

## Imágenes

Generadas con ImageGen integrado, sin fotos de prensa ni retratos sintéticos:

- `assets/flores-y-justicia.png`: flores crema y rosa, balanza antigua de latón y libros sobre lino marfil, luz cálida, composición editorial vertical.
- `assets/carta.png`: sobre marfil con sello de lacre en forma de corazón, flores secas y cinta sobre fondo vino, sin texto incorporado.

Los textos y controles del sitio son HTML real. El sobre es una imagen decorativa dentro de un botón; la carta se abre como contenido seleccionable y accesible.
