import { Center, HStack, Heading, Text, VStack } from "native-base";
import { UserPhoto } from "./UserPhoto";

export function LocationHeader() {
  return (
    <VStack py={12} bg="blue" px={8}>
      <HStack alignItems="center">
        <UserPhoto
          source={{ uri: "https://github.com/williamwjd.png" }}
          size={16}
          alt="Foto do inquilino"
          mr={4}
          borderWidth={2}
          borderColor="green.700"
        />
        <VStack>
          <Heading color="white">William Dias</Heading>
          <Text color="gray.700" mt={1}>Casa 01 - A</Text>
        </VStack>
      </HStack>

      <Center mt={5}>
        <Text color="green.500" fontFamily="body">14/06/2023 á 16/06/2024</Text>
        <Text color="gray.700" mt={1} fontFamily="heading">falta 135 dias para vencer esse contrato</Text>
      </Center>
    </VStack>
  );
}
