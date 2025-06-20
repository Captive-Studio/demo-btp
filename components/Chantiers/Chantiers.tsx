import React, { PropsWithChildren } from "react";
import { Text, View } from "react-native";
import { Chantier } from "../Chantier";
import { RadioField } from "../RadioField";

type ChantiersProps = PropsWithChildren<object>;

export const Chantiers = (props: ChantiersProps) => {
  const { children } = props;

  const getCurrentDate=()=>{
    const today = new Date();
    const formattedDate = today.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });

    return formattedDate;
  }

	return (
    <View>
      <View 
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          marginBottom: 24,
        }}>
        <Text 
          style={{
            color: "#1C2A3B",
            marginLeft: 16,
          }}>
          Aujourd’hui - { getCurrentDate() }
        </Text>
        <View 
          style={{
            width: 1,
            height: 24,
          }}>
        </View>
      </View>
      <View >
        <Chantier title="Chantier A" description="123 Rue de la République, 75001 Paris">
          <RadioField label="Maintenance compresseur A" hint="Vérifier pression et température" />
          <RadioField label="Inspection de sécurité" hint="Contrôler les issues de secours" defaultChecked={true} />
          <RadioField label="Rapport d’intervention" hint="Déclarer l’incident et clôturer" />
        </Chantier>
        <Chantier title="Chantier B" description="456 Avenue des Champs-Élysées, 75008 Paris">
          <RadioField label="Maintenance compresseur B" hint="Vérifier pression et température" />
          <RadioField label="Inspection de sécurité" hint="Contrôler les issues de secours" />
          <RadioField label="Rapport d’intervention" hint="Déclarer l’incident et clôturer" />
        </Chantier>
      </View>
    </View>
	)
}
