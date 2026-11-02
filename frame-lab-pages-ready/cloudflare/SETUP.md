# FRAME LAB — Cloudflare Pages Functions setup

This project uses `functions/_middleware.js` for same-origin login and admin API routes. Do not deploy `cloudflare/worker.js` as a separate Worker for this Pages deployment.

## 1. Supabase
1. Create a Supabase project.
2. Run `supabase/schema.sql` in Supabase SQL Editor.
3. In Supabase Project Settings → API, copy the Project URL and **service_role** key. Keep the service role key private.
4. Run `supabase/admin-password-login-migration.sql` in SQL Editor.

## 2. Upload this version to GitHub
Upload the contents of this folder to the root of the connected repository, including the new `functions` folder. `functions/_middleware.js` must be at the repository root path `functions/_middleware.js`.

Cloudflare Pages build settings: Framework preset `None`; Build command empty; Build output directory `.`.

## 3. Pages environment variables
In Cloudflare Dashboard → Workers & Pages → frame-lab → Settings → Variables and Secrets, add these for **Production**:
- `ADMIN_USERNAME` = `frameadmin_353795`
- `ADMIN_PASSWORD` = the private generated password (Secret)
- `SESSION_SECRET` = the private generated session secret (Secret)
- `ADMIN_USER_ID` = `5649ea22-7409-4437-bfbf-6a61eaa34619`
- `SUPABASE_URL` = your Supabase Project URL
- `SUPABASE_SERVICE_ROLE_KEY` = your Supabase service_role key (Secret)

Save changes and trigger a new deployment. Secrets must never be committed to GitHub.

## 4. Login
After deployment and Supabase setup, open `/admin.html` on the `pages.dev` site and use the generated username and password. There is no registration page.
