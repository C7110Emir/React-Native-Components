import React, { useState } from "react";
import { StyleSheet, View, Pressable, Text, Modal } from "react-native";

export const ModalComponent = () => {
  const [modalState, setModalState] = useState(false);
  const [pressableState, setPressableState] = useState(false);
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalState}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalState(!modalState);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalState(!modalState)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalState(true)}
        onPressIn={() => setPressableState(true)}
        onPressOut={() => setPressableState(false)}
      >
        <Text style={styles.textStyle}>
          {pressableState ? "pressed" : "press me"}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
