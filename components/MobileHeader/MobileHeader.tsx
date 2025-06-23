import type { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { Avatar, AvatarFallbackText } from '../ui/avatar';
import { Heading } from '../ui/heading';

const HEADER_HEIGHT = 250;

type MobileHeaderProps = PropsWithChildren<{
  title: string;
}>;

export const MobileHeader = (props: MobileHeaderProps) => {
  const { title } = props;

  return (
    <ThemedView style={styles.container} className='flex flex-row justify-between items-center px-4 py-2'>
      <View>
        <Heading>{title}</Heading>
      </View>
      <View>
        <Avatar size="md">
          <AvatarFallbackText>Jane Doe</AvatarFallbackText>
        </Avatar>
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
