// Single source of truth for Effortless Business's brand palette + logo, kept in
// sync with the @theme block in src/index.css. Swap both files here if the
// palette ever changes — components only reference the `brand-*` Tailwind
// tokens (never hardcoded hex), so this is the one place a rebrand touches.
export const theme = {
  brandName: 'Effortless Business',
  logoUrl: null as string | null,
  colors: {
    brand50: '#fef4f1',
    brand100: '#fde6de',
    brand200: '#fdc9b4',
    brand300: '#fca17d',
    brand400: '#fb7641',
    brand500: '#fa5a1b',
    brand600: '#dc4105',
    brand700: '#b43604',
    brand800: '#8d2d07',
    brand900: '#702305',
  },
}
