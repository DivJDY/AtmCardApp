import React from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const ShowModal = ({modalVisible, setModalVisible}: any) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Development in Progress...!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop: 15,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: '#252525',
  },
  textStyle: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 18,
    color: '#252525',
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 600,
  },
});

export default ShowModal;
