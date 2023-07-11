import { useState } from "react";
import { Center, FlatList, Heading, Text, VStack } from "native-base";
import { LocationHeader } from "../../src/components/LocationHeader";
import { Button } from "../../src/components/Button";
import { CardReceipt } from "../../src/components/CardReceipt";
import { AppNavigatorRouteProps } from "src/routes/app.routes";
import { useNavigation } from "@react-navigation/native";

export function Location() {
  const [data, setData] = useState(["1", "2", "3", "5", "6", "7"]);
  const navigation = useNavigation<AppNavigatorRouteProps>();

  function handleNewReceipt() {
    navigation.navigate("newReceipt");
  }

  function handleUpdateReceipt(){
    navigation.navigate("newReceipt");
  }

  return (
    <VStack flex={1}>
      <LocationHeader />

      <VStack my={5} mx={7} flex={1}>
        <Heading mb={5} color="green.700">
          Meus Recibos
        </Heading>

        <FlatList
          data={data}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }): any => <CardReceipt handleUpdateReceipt={handleUpdateReceipt}/>}
          showsVerticalScrollIndicator={false}
          //   _contentContainerStyle={{ px: 6 }}
        />

        <Button title="Novo Recibo" onPress={handleNewReceipt} />
      </VStack>
    </VStack>
  );
}
