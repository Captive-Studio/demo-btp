import { Chantiers } from '@/components/Chantiers';
import { MobileHeader } from '@/components/MobileHeader';
import { View } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <MobileHeader title="Mes taches"></MobileHeader>
      <Chantiers></Chantiers>
    </View>
  );
}


