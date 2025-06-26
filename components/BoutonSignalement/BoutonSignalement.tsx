import React, { useState } from "react";
import { View } from "react-native";
import { ModalSignalement } from "../ModalSignalement";
import { Button, ButtonText } from "../ui/button";

type BoutonSignalementProps = {
  onPress?: () => void;
};

export const BoutonSignalement = ({ onPress }: BoutonSignalementProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      setModalOpen(true);
    }
  };

  return (
    <View className="flex items-center">
      <Button size="md" variant="outline" action="primary" onPress={handlePress}>
        <ButtonText className="text-primary-900">Signaler un problème</ButtonText>
      </Button>

      <ModalSignalement isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </View>
  );
};
