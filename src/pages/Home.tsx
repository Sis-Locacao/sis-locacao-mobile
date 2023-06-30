import { TouchableOpacity, FlatList } from "react-native";
import { HStack, Icon, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import { HomeHeader } from "../components/HomeHeader";
import { CardLocation } from "../components/CardLocation";

export function Home() {
  const data = [
    {
      id: 1,
      imagePhoto: "https://github.com/williamwjd.png",
      name: "William Dias",
      dataInicio: "30/06/2023",
      dataFim: "30/06/2024",
      locacao: {
        apelido: "Casa 01-A",
      },
    },
    {
        id: 2,
        imagePhoto: "https://github.com/williamwjd.png",
        name: "William Dias",
        dataInicio: "30/06/2023",
        dataFim: "30/06/2024",
        locacao: {
          apelido: "Casa 01-A",
        },
      },
      {
        id: 3,
        imagePhoto: "https://github.com/williamwjd.png",
        name: "William Dias",
        dataInicio: "30/06/2023",
        dataFim: "30/06/2024",
        locacao: {
          apelido: "Casa 01-A",
        },
      }
  ];

  return (
    <VStack>
      <HomeHeader />

      <HStack my="25px" mx="25px" alignItems="center">
        <Text color="green.700" fontSize="xl" flex={1}>
          Minhas Locações
        </Text>
        <TouchableOpacity>
          <Icon
            as={MaterialIcons}
            color="green.700"
            name="filter-alt"
            size={7}
          />
        </TouchableOpacity>
      </HStack>

      <VStack mx="25px">
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }):any => <CardLocation  data={item}/>}
        />
      </VStack>
    </VStack>
  );
}
