import React from "react";
import { Button, ButtonText } from "../ui/button";
import { Heading } from "../ui/heading";
import { CloseIcon, Icon } from "../ui/icon";
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "../ui/modal";
import { Text } from "../ui/text";

type ModalSignalementProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const ModalSignalement = ({ isOpen, onClose }: ModalSignalementProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader className="flex justify-between items-center">
          <Heading size="md" className="text-typography-950">
            Invite your team
          </Heading>
          <ModalCloseButton onPress={onClose}>
            <Icon
              as={CloseIcon}
              size="md"
              className="stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900"
            />
          </ModalCloseButton>
        </ModalHeader>

        <ModalBody>
          <Text size="sm" className="text-typography-500">
            Elevate user interactions with our versatile modals. Seamlessly
            integrate notifications, forms, and media displays. Make an impact
            effortlessly.
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button variant="outline" action="secondary" onPress={onClose}>
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button onPress={onClose}>
            <ButtonText>Explore</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
