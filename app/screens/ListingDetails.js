import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

//comps
import ListItem from "../components/ListItem";

//global styles
import { colors } from "../global/globalStyles";

const ListingDetails = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.description_details}>
        <Text style={styles.title}>sadf</Text>
        <Text style={styles.subTitle}>asdfas</Text>
      </View>
      <ListItem
        image={require("../assets/mosh.jpg")}
        title={"Mosh Apemadami"}
        subTitle={"5 Listings"}
      />
    </View>
  );
};

export default ListingDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  description_details: {
    backgroundColor: colors.white,
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: { fontSize: 24, marginBottom: 10 },
  subTitle: { fontWeight: "bold", color: colors.secondary, fontSize: 20 },
});
