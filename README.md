# Miti-Miti

Sitio estático de concepto para Miti-Miti: una experiencia para dividir cuentas entre amigos. Está hecho con HTML, CSS y JavaScript sin frameworks ni dependencias de instalación.

## Ver el sitio en tu computadora

### Opción rápida

Abre `index.html` directamente en el navegador.

### Servidor local (recomendado)

Con Python instalado, abre una terminal en la carpeta del proyecto y ejecuta:

```powershell
python -m http.server 8000
```

Luego visita <http://localhost:8000>. Para detener el servidor, vuelve a la terminal y presiona `Ctrl+C`.

También puedes abrir la carpeta en Visual Studio Code e iniciar un servidor con la extensión **Live Server**.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub. Para una dirección como `https://TU-USUARIO.github.io/miti-miti/`, usa `miti-miti` como nombre del repositorio.
2. Sube todos los archivos y la carpeta `assets` a la raíz del repositorio. No hace falta compilar ni instalar dependencias.
3. En GitHub, abre **Settings → Pages**.
4. En **Build and deployment**, elige **Deploy from a branch**; selecciona la rama `main` y la carpeta `/(root)`, y guarda.
5. Espera a que termine el despliegue. GitHub mostrará la dirección del sitio en esa misma sección.
6. Sustituye `https://TU-USUARIO.github.io/miti-miti` por la dirección real en `robots.txt` y en las cuatro entradas de `sitemap.xml`. Sube esos dos cambios y espera a que se actualice el sitio.

Si publicas en un repositorio con otro nombre, usa ese nombre en la URL. Para un repositorio especial llamado `TU-USUARIO.github.io`, la dirección normalmente es `https://TU-USUARIO.github.io/` y no lleva `/miti-miti`.

### Subir desde una terminal (opcional)

Si todavía no inicializaste Git en esta carpeta, puedes conectar el repositorio nuevo así. Cambia la URL por la de tu repositorio:

```powershell
git init
git add .
git commit -m "Publicar sitio Miti-Miti"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/miti-miti.git
git push -u origin main
```

Si ya existe un repositorio Git en la carpeta, no vuelvas a ejecutar `git init` ni `git remote add`; agrega y sube los cambios con los comandos de Git habituales.

## Publicar en Vercel

1. Sube primero el proyecto a GitHub siguiendo los pasos anteriores (puedes dejar GitHub Pages desactivado si solo usarás Vercel).
2. Inicia sesión en [Vercel](https://vercel.com/) y selecciona **Add New → Project**.
3. Importa el repositorio de Miti-Miti.
4. En la configuración, deja el framework como **Other**. No configures comando de instalación ni comando de build.
5. Usa la raíz del repositorio como **Root Directory** y `.` como **Output Directory**. Si el panel no acepta `.` explícitamente, deja el campo vacío para usar el valor predeterminado.
6. Selecciona **Deploy**. Vercel te dará una URL pública; los siguientes `git push` a la rama conectada volverán a desplegar el sitio.
7. Si quieres que los rastreadores encuentren el sitio, actualiza `robots.txt` y `sitemap.xml` con la URL de Vercel, y vuelve a subir los archivos.

El sitio es estático: no requiere backend, variables de entorno ni una configuración de build.

## Estructura

- `index.html`: portada y calculadora para dividir una cuenta.
- `comparar.html`: comparativa y preguntas frecuentes.
- `unete.html`: pasos de uso y formulario demostrativo.
- `comunidad.html`: beneficios de Acolita.
- `style.css`: estilos responsivos compartidos.
- `main.js`: calculadora y respuesta de demostración del formulario.
- `assets/`: iconos e imágenes del sitio.

> **Nota:** Miti-Miti es un concepto académico y no es un producto oficial de Deuna. El formulario de la lista de espera no envía ni almacena información.
