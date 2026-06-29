# Project Guidelines

## Deployment & CI/CD
- **GitHub Actions:** This project uses GitHub Actions for deployment (`.github/workflows/deploy.yml`).
- **FTP Upload Tool:** The deployment uses `lftp` because the hoster (Netcup/Plesk) has strict TLS requirements that standard Node.js FTP clients fail on (`ECONNRESET`).
- **Deployment Path:** The target directory on the Netcup server is `/httpdocs/`.
- **Routing:** The site is a React SPA (Vite) and uses client-side routing. A `.htaccess` file in the `public/` folder redirects all unknown requests to `index.html` to prevent 404 errors on direct visits to subpages.
