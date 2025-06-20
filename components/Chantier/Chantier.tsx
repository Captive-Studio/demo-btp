import { useTheme } from "@/hooks/useTheme";
import React, { PropsWithChildren } from "react";
import { Text, View } from "react-native";


type ChantierProps = PropsWithChildren<{
  title: string;
  description?: string;
}>;

export const Chantier = (props: ChantierProps) => {
  const { title, description, children } = props;
  const { spacing } = useTheme();

	return (
    <View 
      style={{
        alignItems: "flex-start",
        marginBottom: spacing("150"),
        marginHorizontal: 16,
      }}>
      <View 
        style={{
          marginBottom: 16,
        }}>
        <Text 
          style={{
            color: "#151617",
            fontSize: 16,
            marginBottom: 8,
          }}>
          {title}
        </Text>
        <Text 
          style={{
            color: "#5F6571",
            fontSize: 12,
          }}>
          {description}
        </Text>
      </View>
      <View 
        style={{
          alignItems: "flex-start",
          width: "100%",
        }}>
        {children}
      </View>
    </View>
	)
}
