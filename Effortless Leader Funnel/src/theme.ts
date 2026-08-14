// Single source of truth for EL's brand palette + logo, kept in sync with the
// @theme block in src/index.css. Swap both files here once the real logo and
// brand colors exist — components only reference the `brand-*` Tailwind
// tokens (never hardcoded hex), so this is the one place a rebrand touches.
export const theme = {
  brandName: 'Effortless Leader',
  logoUrl: null as string | null,
  colors: {
    brand50: '#fff7ed',
    brand100: '#ffedd5',
    brand200: '#fed7aa',
    brand300: '#fdba74',
    brand400: '#fb923c',
    brand500: '#f97316',
    brand600: '#ea580c',
    brand700: '#c2410c',
    brand800: '#9a3412',
    brand900: '#7c2d12',
  },
}
