import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";

//gesture
import Swipeable from "react-native-gesture-handler/Swipeable";

//styles
import { colors } from "../global/globalStyles";

const ListItem = ({ image, title, subTitle, onPress, renderRightActions }) => {
  const [strippedMessage, setStrippedMessage] = useState("");

  useEffect(() => {
    if (subTitle.length > 40) {
      const sliced = subTitle.slice(0, 41);

      setStrippedMessage(sliced + " ...");
    }
  }, []);

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.list_item_container}>
          <Image style={styles.list_item_image} source={image} />
          <View>
            <Text style={styles.list_item_title}>{title}</Text>
            <Text style={styles.list_item_subtitle}>{strippedMessage}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  list_item_container: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 15,
  },
  list_item_image: { width: 60, height: 60, borderRadius: 50, marginRight: 10 },
  list_item_title: { marginBottom: 5 },
  list_item_subtitle: { color: "#969696" },
});
