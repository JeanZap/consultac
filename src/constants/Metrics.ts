export const Metrics = {
  tinySpacing: 8,
  standardSpacing: 16,
  largeSpacing: 24,
} as const;

export const Spacings = {
  tinySpacing: `${Metrics.tinySpacing}px`,
  standardSpacing: `${Metrics.standardSpacing}px`,
  largeSpacing: `${Metrics.largeSpacing}px`,
} as const;
