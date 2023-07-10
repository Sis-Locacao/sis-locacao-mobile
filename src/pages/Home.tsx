import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HStack, Icon, Text, VStack, FlatList } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import { HomeHeader } from "../components/HomeHeader";
import { CardLocation } from "../components/CardLocation";
import { AppNavigatorRouteProps } from "../../src/routes/app.routes";

export function Home() {
  const navigation = useNavigation<AppNavigatorRouteProps>();

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
    },
    {
      id: 4,
      imagePhoto: "https://github.com/williamwjd.png",
      name: "William Dias",
      dataInicio: "30/06/2023",
      dataFim: "30/06/2024",
      locacao: {
        apelido: "Casa 01-A",
      },
    },
    {
      id: 5,
      imagePhoto: "https://github.com/williamwjd.png",
      name: "William Dias",
      dataInicio: "30/06/2023",
      dataFim: "30/06/2024",
      locacao: {
        apelido: "Casa 01-A",
      },
    },
  ];

  function handleOpenLocation() {
    navigation.navigate("location");
  }

  return (
    <VStack flex={1}>
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

      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }): any => (
          <CardLocation data={item} onPress={handleOpenLocation} />
        )}
        showsVerticalScrollIndicator={false}
        _contentContainerStyle={{ px: 6 }}
      />
    </VStack>
  );
}
