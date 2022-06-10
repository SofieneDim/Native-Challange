import { StyleSheet } from "react-native";
import { primaryColor } from "../../../App.style";

export const singupStyle = StyleSheet.create({
  content: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  view: {
    width: "90%",
  },
  card: {
    display: "flex",
  },
  cardContent: {
    margin: "auto",
    marginLeft: 0,
    marginRight: 0,
  },
  cardTitle: {
    padding: 25,
    paddingLeft: 0,
    paddingRight: 0,
    fontSize: 30,
    fontWeight: "bold",
    color: primaryColor,
    textAlign: "center",
  },
  cardButton: {
    margin: 10,
    marginLeft: 0,
    marginRight: 0,
    height: 40,
  },
  cardButtonLabel: {
    fontSize: 11,
    fontWeight: "600",
  },
  cardLoginButtonLabel: {
    color: "white",
    fontSize: 17,
    fontWeight: "600",
  },
  cardInput: {
    margin: 2,
    marginLeft: 0,
    marginRight: 0,
  },
});
