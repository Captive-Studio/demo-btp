import { Chantiers } from '@/components/Chantiers';
import { MobileHeader } from '@/components/MobileHeader';
import { ThemedView } from '@/components/ThemedView';
import { Text } from "@/components/ui/text";
import { View } from 'react-native';

export default function HomeScreen() {
  const getCurrentDate=()=>{
    const today = new Date();
    const formattedDate = today.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });

    return formattedDate;
  }

  return (
    <ThemedView className='flex flex-col gap-4'>
      <MobileHeader title="Mes taches"></MobileHeader>
      <View className='flex flex-col gap-6'>
        <View className="flex flex-row items-center px-4">
          <Text className="inline-block text-lg font-semibold text-left text-[#1c2a3b]">Aujourd’hui - </Text>
          <Text className="inline-block text-sm text-left text-[#3f5569]">{ getCurrentDate() }</Text>
        </View>
        <Chantiers></Chantiers>
      </View>
    </ThemedView>
  );
}


