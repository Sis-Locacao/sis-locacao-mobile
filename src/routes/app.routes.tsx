import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { Home } from "../pages/Home";
import { Location } from "../../src/pages/Location";
import { NewReceipt } from "../../src/pages/NewReceipt";

type AppRoutes = {
  home: undefined;
  location: undefined;
  newReceipt: undefined;
};

export type AppNavigatorRouteProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="location" component={Location} />
      <Screen name="newReceipt" component={NewReceipt} />
    </Navigator>
  );
}
