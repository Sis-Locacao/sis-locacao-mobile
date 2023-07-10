import { useState } from "react";
import { Center, FlatList, Heading, Text, VStack } from "native-base";
import { LocationHeader } from "../../src/components/LocationHeader";
import { Button } from "../../src/components/Button";
import { CardReceipt } from "../../src/components/CardReceipt";

export function Location() {
  const [data, setData] = useState(["1", "2", "3", "5", "6", "7"]);

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
          renderItem={({ item }): any => <CardReceipt />}
          showsVerticalScrollIndicator={false}
          //   _contentContainerStyle={{ px: 6 }}
        />

        <Button title="Novo Recibo" />
      </VStack>
    </VStack>
  );
}
