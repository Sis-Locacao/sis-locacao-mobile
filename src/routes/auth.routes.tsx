import {
    createNativeStackNavigator,
    NativeStackNavigationProp,
  } from "@react-navigation/native-stack";

import { SignIn } from "../pages/SignIn";
  
  type AuthRoutes = {
    signIn: undefined;
    home: undefined;
  };
  
  export type AuthNavigatorRouteProps = NativeStackNavigationProp<AuthRoutes>;
  
  const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();
  
  export function AuthRoutes() {
    return (
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="signIn" component={SignIn} />
      </Navigator>
    );
  }
  