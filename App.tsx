import { StatusBar } from "react-native";
import { NativeBaseProvider, View } from "native-base";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import { THEME } from "./src/theme";
import { SignIn } from "./src/pages/SignIn";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <SignIn /> : <View />}
    </NativeBaseProvider>
  );
}
