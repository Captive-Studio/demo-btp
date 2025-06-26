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
  ModalHeader
} from "../ui/modal";
import { Textarea, TextareaInput } from "../ui/textarea";

type ModalSignalementProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const ModalSignalement = ({ isOpen, onClose }: ModalSignalementProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader className="flex justify-between items-center">
          <Heading size="md" className="text-typography-950">
            Signaler un problème
          </Heading>
          <ModalCloseButton onPress={onClose}>
            <Icon
              as={CloseIcon}
              size="md"
              className="stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900"
            />
          </ModalCloseButton>
        </ModalHeader>

        <ModalBody className="mt-6">
          <Textarea size="md">
            <TextareaInput
              placeholder="Décrivez votre problème..."
            />
          </Textarea>
        </ModalBody>


        <Button size="md" variant="solid" action="primary" onPress={onClose}>
          <ButtonText>Envoyer</ButtonText>
        </Button>
      </ModalContent>
    </Modal>
  );
};
