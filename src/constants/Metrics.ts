export const Metrics = {
  smallSpacing: 4,
  tinySpacing: 8,
  standardSpacing: 16,
  largeSpacing: 24,
} as const;

export const Spacings = {
  smallSpacing: `${Metrics.smallSpacing}px`,
  tinySpacing: `${Metrics.tinySpacing}px`,
  standardSpacing: `${Metrics.standardSpacing}px`,
  largeSpacing: `${Metrics.largeSpacing}px`,
} as const;
