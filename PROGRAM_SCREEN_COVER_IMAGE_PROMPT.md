# Program Screen Cover Image — ChatGPT Prompt

Use this with ChatGPT's image generation (or DALL-E) to create a hero cover
for the Effortless System `ProgramScreen.tsx` sales page. It follows the
same style guide as the Module 1-9 cover prompts, but represents the whole
9-module system instead of one module.

Once you have the image, it replaces the numbered gradient strip at the top
of `ProgramScreen.tsx` (the `{/* Cover */}` block) as a background image
behind or in place of that strip.

## Style guide (shared with the per-module covers)

- Flat / vector illustration style, clean and modern, no photorealism.
- Warm orange palette only — pull from the brand ramp: `#fef4f1`, `#fde6de`,
  `#fdc9b4`, `#fca17d`, `#fb7641`, `#fa5a1b`, `#dc4105`, `#b43604`, `#8d2d07`,
  `#702305`. No blues, greens, or purples.
- No text, no numbers, no faces, no logos, no watermarks anywhere in the
  image.
- Landscape banner, roughly 3:1 aspect ratio.

## Prompt to paste into ChatGPT

```
Flat vector illustration, landscape banner, 3:1 aspect ratio. A busy small
business owner at a cluttered desk on the left side, papers and a phone
buzzing, rendered in a slightly overwhelmed but calm pose. On the right
side, the same desk is organized: a clean dashboard-like panel floating
above it with simple geometric shapes suggesting connected modules or
building blocks (small rounded squares linked by thin lines), arranged like
a simple orderly system. A soft gradient or light beam connects the
cluttered left side to the organized right side, showing a transformation
without literally depicting "before/after" text or labels.

Color palette: warm orange tones only, ranging from very light peach
(#fef4f1, #fde6de) through mid orange (#fca17d, #fb7641, #fa5a1b) to deep
burnt orange (#dc4105, #b43604, #8d2d07). No blue, green, or purple
anywhere. Background a soft warm off-white or very light peach.

Style: clean flat vector illustration, modern SaaS/startup aesthetic,
generous negative space, soft rounded shapes, subtle shadows only (no hard
outlines). No text, no numbers, no legible UI copy, no human faces shown in
close detail (silhouette or simplified figure is fine), no logos, no
watermarks.
```

## Notes

- Same "no faces/no text/no logos" constraint as the Module 1-9 prompts, for
  the same reason: keeps the art reusable if the layout changes and avoids
  baking in copy that will go stale.
- If the composition above doesn't land well, a simpler fallback prompt is
  a single flat-illustration scene of nine small rounded module tiles
  arranged in a loose grid or orbit, connected by thin lines, in the same
  warm-orange-only palette, no text/numbers/faces/logos.
