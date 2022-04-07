import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export const ActivityIndicatorComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.activityText}>Activity Indicator:</Text>
      <View>
        <ActivityIndicator />
        <ActivityIndicator size="large" />
        <ActivityIndicator size="small" color="lightBlue" />
        <ActivityIndicator size="large" color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    marginTop: 25,
  },
  activityText: {
    fontSize: 24,
    fontWeight: "700",
    marginRight: 12,
  },
});
