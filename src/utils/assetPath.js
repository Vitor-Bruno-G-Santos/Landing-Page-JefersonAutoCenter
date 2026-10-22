/**
 * Utilitário para resolver URLs de assets estáticos (pasta /public)
 * garantindo compatibilidade total com:
 * 1. npm run dev (local com ou sem subpath)
 * 2. GitHub Pages (com subpath /Landing-Page-JefersonAutoCenter/)
 * 3. Domínio personalizado (com base '/')
 *
 * @param {string} path Caminho do arquivo (ex: 'images/logo.webp' ou './images/logo.webp')
 * @returns {string} URL correta com o prefixo da base configurada no Astro
 */
export function assetUrl(path) {
  if (!path || typeof path !== 'string') return path;

  // URLs externas ou data URLs permanecem intactas
  if (/^(https?:)?\/\//i.test(path) || path.startsWith('data:')) {
    return path;
  }

  const rawBase = import.meta.env.BASE_URL || '/';
  const base = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;

  // Se o caminho já inicia com a base configurada, retorna diretamente sem duplicar
  if (base && (path === base || path.startsWith(`${base}/`))) {
    return path;
  }

  const cleanPath = path.replace(/^\.?\//, '');

  return `${base}/${cleanPath}`;
}

/**
 * Trata strings de srcSet com múltiplos arquivos (ex: "img1.webp 540w, img2.webp 640w")
 * 
 * @param {string} srcSetString
 * @returns {string}
 */
export function assetSrcSet(srcSetString) {
  if (!srcSetString || typeof srcSetString !== 'string') return srcSetString;

  return srcSetString
    .split(',')
    .map((item) => {
      const trimmed = item.trim();
      const parts = trimmed.split(/\s+/);
      const url = parts[0];
      const descriptor = parts.slice(1).join(' ');
      const resolved = assetUrl(url);
      return descriptor ? `${resolved} ${descriptor}` : resolved;
    })
    .join(', ');
}

export default assetUrl;
