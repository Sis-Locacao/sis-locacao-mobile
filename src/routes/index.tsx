import { Box, useTheme } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const { colors } = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = colors.white;

  return (
    <Box flex={1} bg="white">
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </Box>
  );
}
