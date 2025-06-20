import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ThemedView } from '@/components/ThemedView';

const HEADER_HEIGHT = 250;

type MobileHeaderProps = PropsWithChildren<{
  title: string;
}>;

export const MobileHeader = (props: MobileHeaderProps) => {
  const { title } = props;

  return (
    <ThemedView style={styles.container}>
      <View>
        <Text>{title}</Text>
      </View>
      <View>
        <Text>LT</Text>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
});
