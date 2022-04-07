import React, { useState } from "react";
import { StyleSheet, View, Switch, Text, TouchableOpacity } from "react-native";

export const SwitchComponent = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Text
        style={isEnabled ? styles.switchTextEnabled : styles.switchTextDisabled}
      >
        Switch:
      </Text>
      <TouchableOpacity style={styles.switch}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </TouchableOpacity>
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
  switch: {
    marginLeft: 50,
  },
  switchTextEnabled: {
    fontSize: 24,
    fontWeight: "700",
    marginRight: 12,
    color: "lightblue",
  },
  switchTextDisabled: {
    fontSize: 24,
    fontWeight: "700",
    marginRight: 12,
    color: "green",
  },
});
