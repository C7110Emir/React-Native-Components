import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";

export const TextInputComponent = () => {
  const [userName, onUserNameChange] = useState("");
  const [password, onPasswordChange] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textInputTitle}>Text Input: </Text>
      </View>
      <View>
        <TextInput
          style={styles.userInputField}
          onChangeText={onUserNameChange}
          value={userName}
          placeholder="Email"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.userInputField}
          onChangeText={onPasswordChange}
          value={password}
          placeholder="Password"
        />
        <TouchableOpacity
          onPress={() => Alert.alert("you clicked Enabled Simple Button")}
          style={styles.enabledButtonStyle}
        >
          <Text style={styles.enabledButtonText}>Enabled Simple Button</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.disabledButtonStyle}>
          <Text style={styles.disabledButtonText}>Disabled Simple Button</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  userInputField: {
    height: 50,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textInputTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginRight: 12,
  },
  enabledButtonStyle: {
    width: 200,
    height: 50,
    marginLeft: 12,
    borderRadius: 100,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  enabledButtonText: {
    color: "darkgreen",
    fontSize: 15,
  },
  disabledButtonStyle: {
    backgroundColor: "lightgrey",
    width: 200,
    height: 50,
    marginLeft: 12,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  disabledButtonText: {
    fontSize: 15,
    color: "darkgrey",
  },
});
