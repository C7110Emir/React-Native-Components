import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageComponent } from "./Components/ImageComponent";
import { TextInputComponent } from "./Components/TextInputComponent";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  View,
  ImageBackground,
} from "react-native";
import { SwitchComponent } from "./Components/SwitchComponent";
import { ActivityIndicatorComponent } from "./Components/ActivityIndicatorComponent";
import { ModalComponent } from "./Components/ModalComponent";

const EachComponent = ({ component }) => <View>{component}</View>;
const image = { uri: "https://reactjs.org/logo-og.png" };

export default function App() {
  const renderItem = ({ item }) => <EachComponent component={item.component} />;

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="contain"
        style={styles.backgroundImage}
      >
        <StatusBar style="auto" />
        <Text style={styles.componentsText}>React Native Components</Text>
        <ScrollView>
          <ImageComponent />
          <ModalComponent />
          <TextInputComponent />
          <SwitchComponent />
          <ActivityIndicatorComponent />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    flex: 1,
  },
  componentsText: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 50,
  },
  flatListView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
});
