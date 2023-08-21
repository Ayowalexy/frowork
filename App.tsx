import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Main } from './src/navigators/main';
import { useFonts } from "expo-font";

export default function App() {
  // const [loaded] = useFonts({
  //   DMSansBold: require("./assets/fonts/DMSans-Bold.ttf"),
  //   DMSansMedium: require("./assets/fonts/DMSans-Medium.ttf"),
  //   DMSansRegular: require("./assets/fonts/DMSans-Regular.ttf"),
  //   DMSansItalic: require("./assets/fonts/DMSans-Italic.ttf"),
  //   Poppins: require("./assets/fonts/Poppins-Black.ttf"),

  // });
  const [loaded] = useFonts({
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsExtraLight: require("./assets/fonts/Poppins-ExtraLight.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Main />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
