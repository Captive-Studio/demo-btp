import React from "react";
import { View } from "react-native";
import { Button, ButtonText } from "../ui/button";

type BoutonSignalementProps = {
  onPress?: () => void;
};

export const BoutonSignalement = ({ onPress }: BoutonSignalementProps) => {
  return (
    <View className="flex items-center">
      <Button
        size="md"
        variant="outline"
        action="primary"
        onPress={onPress}
      >
        <ButtonText className="text-primary-900">Signaler un problème</ButtonText>
      </Button>
    </View>
  );
};
