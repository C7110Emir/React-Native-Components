import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";

export const ImageComponent = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.imageText}>Image:</Text>
      </View>
      <View>
        <Image
          style={styles.imageStyle}
          source={{
            uri: "https://picsum.photos/200",
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  imageStyle: {
    width: 200,
    height: 200,
  },
  imageText: {
    fontSize: 24,
    fontWeight: "700",
    marginRight: 75,
  },
});
