import { useState } from "react";
import { Heading, ScrollView, VStack } from "native-base";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../../src/components/Input";
import { Button } from "../../src/components/Button";

type ReceiptData = {
  valorEnergia: string;
  valorAgua: string;
  dataInicio: string;
  dataFim: string;
};

const newReceiptSchema = yup.object({
  valorEnergia: yup.string().required("Informe o valor da energia."),
  valorAgua: yup.string().required("Informe o valor da água."),
  dataInicio: yup.string().required("Informe a data de inicio."),
  dataFim: yup.string().required("Informe a data fim."),
});

export function NewReceipt() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ReceiptData>({
    resolver: yupResolver(newReceiptSchema),
  });

  function handleNewReceipt(data: ReceiptData) {
    console.log(data);
  }

  return (
    <ScrollView>
      <VStack py={12} bg="blue" px={8}>
        <Heading color="white" fontSize={25}>
          Recibo 05/12
        </Heading>
      </VStack>

      <VStack mt={10} px={8} flex={1}>
        <Controller
          control={control}
          name="valorEnergia"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Valor da conta de energia"
              value={value}
              onChangeText={onChange}
              errorMessage={errors.valorEnergia?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="valorAgua"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Valor da conta de água"
              value={value}
              onChangeText={onChange}
              errorMessage={errors.valorAgua?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="dataInicio"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Data de Início"
              value={value}
              onChangeText={onChange}
              errorMessage={errors.dataInicio?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="dataFim"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Data Fim"
              value={value}
              onChangeText={onChange}
              errorMessage={errors.dataFim?.message}
            />
          )}
        />

        <Button
          title="Salvar recibo"
          onPress={handleSubmit(handleNewReceipt)}
        />
      </VStack>
    </ScrollView>
  );
}
