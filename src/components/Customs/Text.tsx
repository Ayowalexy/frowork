import React, { ReactNode } from "react";
import { colors } from "../../utils/colors";
import { Text, StyleProp, TextStyle, StyleSheet } from "react-native";

type props = {
  children: ReactNode;
  extrasStyles?: StyleProp<TextStyle>;
  type?: "lg" | "sm";
};

export const IText = ({ children, extrasStyles, type = "sm" }: props) => (
  <Text
    style={[
      styles.text,
      extrasStyles,
      
        { fontFamily:  "PoppinsBold"  },
    ]}
  >
    {children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    color: colors.black,
  },
});
