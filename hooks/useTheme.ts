import { SpacingKey, Spacings } from '@/constants/Spacings';

export function useTheme() {
  const spacing = (value: SpacingKey) => Spacings[value];

  return {
    spacing,
  }
}
