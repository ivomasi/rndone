import React, { useState } from "react";
import { FlatList } from "react-native";

//comps
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import Separator from "../components/Separator";
import Actions from "../components/Actions";

const data = [
  {
    id: 1,
    title: "Justinn",
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Lindy",
    description: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "Gabriell",
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 4,
    title: "Egor",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. askdjf saksdaj kasjflkadlk fjasllfnas nfjsandj nlfndasnfjlnasl ndfjnasnfndsan nsadlnf ldsnalkndflsaknlkn aslkndflknasl knlfkdsalkn lknklsadnflnskjakj ndfsakjn djnfjknsadkjfnjkas ndjfnasjôdnjfnsadkjn fjnjsadnjk fnasdkjlnfkjsakjdn fjfndsajnf kjasnkjnf djsnjknf a snfn dsajnjf sakjnkjdfnnj jkanjfdjka njnaknjfa kjnlkjan kjnjnasjnak",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 5,
    title: "Trueman",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    image: require("../assets/mosh.jpg"),
  },
];

const Messages = () => {
  const [messages, setMessages] = useState(data);

  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (item) => {
    console.log("delete pressed");

    const filtered = messages.filter((message) => message.id !== item.id);

    setMessages(filtered);
  };

  const handleArchive = () => {
    console.log("archive pressed");

    //achrive message
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => console.log("message tapped")}
              renderRightActions={() => (
                <Actions
                  handleDelete={() => handleDelete(item)}
                  handleArchive={() => handleArchive(item)}
                />
              )}
            />
          );
        }}
        ItemSeparatorComponent={Separator}
        refreshing={refreshing}
        onRefresh={() => {
          //fetch new data
          setMessages(data);
        }}
      />
    </Screen>
  );
};

export default Messages;
