import { Box, ScrollView, Text, VStack } from "native-base";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function SignIn() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} justifyContent="center" alignItems="center">
        <Box mb={10} w="full">
          <Text fontSize="xl" color="green.700" fontFamily="body">
            Bem Vindo
          </Text>
          <Text fontSize="lg" color="blue" fontFamily="heading" mt={1}>
            Entre com suas credênciais
          </Text>
        </Box>

        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input placeholder="Senha" secureTextEntry />

        <Button title="Entrar" mt={5}/>
      </VStack>
    </ScrollView>
  );
}
