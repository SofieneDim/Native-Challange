import { StyleSheet } from "react-native";
import { DefaultTheme } from "react-native-paper";

export const primaryColor = "rgb(86 ,134, 255)";
export const secondaryColor = "rgb(221 ,221, 221)";

export const AppStyle = StyleSheet.create({
  content: {
    height: "100%",
    backgroundColor: secondaryColor,
  },
});

export const theme = {
  ...DefaultTheme,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    primary: primaryColor,
    background: "transparent",
  },
};
