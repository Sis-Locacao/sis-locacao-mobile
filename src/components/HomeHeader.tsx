import { HStack, Heading, Image, Text, VStack } from "native-base";

import LogoSvg from "../assets/logo.svg";

export function HomeHeader() {
  return (
    <HStack py={12} bg="blue" px={8}>
      <VStack flex={1}>
        <Text color="white" mb={2} fontSize="md">
          Bom dia 🌞
        </Text>
        <Heading color="green.500" fontSize="xl">
          Narcisio Dias
        </Heading>
      </VStack>

      <LogoSvg />
    </HStack>
  );
}
