import { CheckIcon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import { Chantier } from "../Chantier";
import { Box } from "../ui/box";
import { Button, ButtonText } from "../ui/button";
import { Todo, TodoIcon, TodoIndicator, TodoLabel } from "../ui/todo";

type ChantiersProps = PropsWithChildren<object>;

export const Chantiers = (props: ChantiersProps) => {
	return (
    <View className="px-4">
      <View className="flex flex-col gap-6">
        <Chantier title="Chantier A" description="123 Rue de la République, 75001 Paris">
          <Box>
            <Todo value={"maintenance-compresseur-a"}>
              <TodoIndicator>
                <TodoIcon as={CheckIcon} />
              </TodoIndicator>
              <TodoLabel>Maintenance compresseur A</TodoLabel>
            </Todo>
            <Text size="sm" className="ml-7">
              Vérifier pression et température
            </Text>
          </Box>

          <Box>
            <Todo defaultIsChecked={true} value={"inspection-de-securite"}>
              <TodoIndicator>
                <TodoIcon as={CheckIcon} />
              </TodoIndicator>
              <TodoLabel>Inspection de sécurité</TodoLabel>
            </Todo>
            <Text size="sm" className="ml-7">
              Contrôler les issues de secours
            </Text>
          </Box>

          <Box>
            <Todo value={"rapport-d-intervention"}>
              <TodoIndicator>
                <TodoIcon as={CheckIcon} />
              </TodoIndicator>
              <TodoLabel>Rapport d’intervention</TodoLabel>
            </Todo>
            <Text size="sm" className="ml-7">
              Déclarer l’incident et clôturer
            </Text>
          </Box>

          <Box>
            <Todo value={"rapport-d-intervention"}>
              <TodoIndicator>
                <TodoIcon as={CheckIcon} />
              </TodoIndicator>
              <TodoLabel>Rapport d’intervention</TodoLabel>
            </Todo>
            <Text size="sm" className="ml-7">
              Déclarer l’incident et clôturer
            </Text>
          </Box>
        </Chantier>
        <Chantier title="Chantier B" description="456 Avenue des Champs-Élysées, 75008 Paris">
          <Box>
            <Todo value={"maintenance-compresseur-a"}>
              <TodoIndicator>
                <TodoIcon as={CheckIcon} />
              </TodoIndicator>
              <TodoLabel>Maintenance compresseur A</TodoLabel>
            </Todo>
            <Text size="sm" className="ml-7">
              Vérifier pression et température
            </Text>
          </Box>

          <Box>
            <Todo defaultIsChecked={true} value={"inspection-de-securite"}>
              <TodoIndicator>
                <TodoIcon as={CheckIcon} />
              </TodoIndicator>
              <TodoLabel>Inspection de sécurité</TodoLabel>
            </Todo>
            <Text size="sm" className="ml-7">
              Contrôler les issues de secours
            </Text>
          </Box>

          <Box>
            <Todo value={"rapport-d-intervention"}>
              <TodoIndicator>
                <TodoIcon as={CheckIcon} />
              </TodoIndicator>
              <TodoLabel>Rapport d’intervention</TodoLabel>
            </Todo>
            <Text size="sm" className="ml-7">
              Déclarer l’incident et clôturer
            </Text>
          </Box>
        </Chantier>

        <Button size="md" variant="outline" action="secondary" onPress={() => console.log("Bouton pressé")}>
          <ButtonText className="text-primary-900">Signaler un problème</ButtonText>
        </Button>
      </View>
    </View>
	)
}
