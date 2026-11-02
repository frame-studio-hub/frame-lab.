import adminWorker from '../cloudflare/worker.js';

export async function onRequest(context) {
  const { request, next, env } = context;
  const pathname = new URL(request.url).pathname;

  if (
    pathname.startsWith('/auth/') ||
    pathname.startsWith('/api/')
  ) {
    return adminWorker.fetch(request, env);
  }

  return next();
}
