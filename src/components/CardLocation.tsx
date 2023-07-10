import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { HStack, Text, VStack } from "native-base";
import { UserPhoto } from "./UserPhoto";

type LocationProps = {
  id: number;
  imagePhoto: String;
  name: String;
  dataInicio: String;
  dataFim: String;
  locacao: {
    apelido: String;
  };
};

type CardLocationProps = TouchableOpacityProps & {
  data: LocationProps;
};

export function CardLocation({ data, ...rest }: CardLocationProps) {
  return (
    <TouchableOpacity style={{ marginBottom: 15 }} {...rest}>
      <HStack
        px="19px"
        py="17px"
        bg="gray.200"
        rounded="10px"
        alignItems="center"
      >
        <UserPhoto
          source={{ uri: `${data.imagePhoto}` }}
          size={16}
          alt="Foto do inquilino"
          mr={6}
          borderWidth={2}
          borderColor="green.700"
        />

        <VStack>
          <Text fontSize="md" mb={1} color="blue">
            {data.name}
          </Text>
          <Text fontSize="xs" mb={2} color="gray.500" fontFamily="heading">
            {data.dataInicio} á {data.dataFim}
          </Text>
          <Text fontSize="xs" color="gray.500" fontFamily="heading">
            {data.locacao.apelido}
          </Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
}
