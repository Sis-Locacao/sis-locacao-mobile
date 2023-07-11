import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { HStack, Heading, Icon, Text, VStack } from "native-base";

type CardReceiptProps = {
  handleUpdateReceipt: () => void;
};

export function CardReceipt({ handleUpdateReceipt }: CardReceiptProps) {
  return (
    <TouchableOpacity onPress={handleUpdateReceipt}>
      <HStack alignItems="center" bg="gray.200" mb={3} px={3} py={4}>
        <Icon as={MaterialIcons} color="green.700" name="local-atm" size={8} />
        <VStack ml={4} flex={1}>
          <Text fontFamily="heading" color="blue" fontSize="lg">
            Recibo 01 de 12
          </Text>
          <Text fontFamily="heading" color="gray.500" fontSize="sm">
            14/06/2023 á 16/06/2024
          </Text>
        </VStack>
        <TouchableOpacity>
          <Icon as={MaterialIcons} color="red" name="delete-outline" size={8} />
        </TouchableOpacity>
      </HStack>
    </TouchableOpacity>
  );
}
