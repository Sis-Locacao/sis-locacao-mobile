import { Heading, ScrollView, VStack } from "native-base";
import { Input } from "../../src/components/Input";
import { Button } from "../../src/components/Button";
import { useState } from "react";

type ReceiptData = {
  id: number;
  valorEnergia: number;
  valorAgua: number;
  dataInicio: string;
  dataFim: string;
};

export function NewReceipt() {
  const [data, setData] = useState<ReceiptData>({} as ReceiptData);

  return (
    <ScrollView>
      <VStack py={12} bg="blue" px={8}>
        <Heading color="white" fontSize={25}>
          Recibo 05/12
        </Heading>
      </VStack>

      <VStack mt={10} px={8} flex={1}>
        <Input
          placeholder="Valor da conta de energia"
          value={data.valorEnergia && String(data.valorEnergia)}
        />
        <Input
          placeholder="Valor da conta de água"
          value={data.valorAgua && String(data.valorAgua)}
        />
        <Input placeholder="Data de Início" value={data.dataInicio} />
        <Input placeholder="Data Fim" value={data.dataFim} />

        <Button title="Salvar recibo" />
      </VStack>
    </ScrollView>
  );
}
