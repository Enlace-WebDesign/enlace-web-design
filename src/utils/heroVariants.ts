export const HERO_VARIANTS = {
  FULLWIDTH: "fullwidth",
  TEXT: "text",
  IMAGE_RIGHT: "image-right",
  GRID_RIGHT: "grid-right",
} as const;

export type HeroVariant = (typeof HERO_VARIANTS)[keyof typeof HERO_VARIANTS];
