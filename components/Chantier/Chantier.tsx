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
      className="flex flex-col gap-3">
      <View
        className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-0.5"
      >
        <Text
          className="self-stretch flex-grow-0 flex-shrink-0 w-[342px] text-base font-semibold text-left text-neutral-800"
        >
          {title}
        </Text>
        <Text className="self-stretch flex-grow-0 flex-shrink-0 w-[342px] text-sm text-left text-neutral-600">
          {description}
        </Text>
      </View>
      <View 
        className="flex flex-col gap-2.5">
        {children}
      </View>
    </View>
	)
}
