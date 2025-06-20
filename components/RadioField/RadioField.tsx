import { useState, type PropsWithChildren } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './RadioField.style';


type RadioFieldProps = PropsWithChildren<{
  label: string;
  hint?: string;
  defaultChecked?: boolean;
}>;

export const RadioField = (props: RadioFieldProps) => {
  const { label, hint, defaultChecked = false } = props;
  const [checked, setChecked] = useState(defaultChecked);

  const checkedBackgroundColor = "#012448";
  let inputStyle = styles.input;
  if (checked) {
    inputStyle.backgroundColor = checkedBackgroundColor;
  }

  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <Pressable 
      onPress={toggleChecked}
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        borderRadius: 4,
        marginBottom: 16,
        width: "100%"
      }}>
      <View 
        style={{
          width: 24,
          height: 24,
          borderColor: "#012448",
          borderRadius: 4,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
          padding: 4,
          marginRight: 8,
          backgroundColor: checked ? checkedBackgroundColor : 'transparent',
        }}>
        {checked && (
          <Image
            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ig31RP7HR6/5bjw1i9v_expires_30_days.png" }}
            resizeMode={"stretch"}
            style={{
              width: 16,
              height: 16,
            }}
          />
        )}
      </View>
      <View >
        <Text 
          style={{
            color: "#151617",
            fontSize: 16,
          }}>
          {label}
        </Text>
        <Text 
          style={{
            color: "#5F6571",
            fontSize: 12,
          }}>
          {hint}
        </Text>
      </View>
    </Pressable>
  );
}
