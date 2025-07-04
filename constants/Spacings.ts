export const Spacings = {
  "000": 0,
  "025": 4,
  "050": 8,
  "075": 12,
  "100": 16,
  "150": 24,
  "200": 32,
  "300": 48,
  "400": 64,
  "500": 80,
  "600": 96,
  "800": 128,
  "1200": 192,
  "1600": 256,
  "2400": 384,
  "3200": 512,
  "4000": 640,
  "4800": 768,
} as const;

export type SpacingKey = keyof typeof Spacings;
