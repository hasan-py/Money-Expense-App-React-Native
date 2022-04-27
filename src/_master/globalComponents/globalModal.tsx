import React from 'react';
import {Modal, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {COLORS, SIZES} from '../constant/themes';

export default function GlobalModal({showModal, setShowModal, children}: any) {
  return (
    <Modal
      visible={showModal}
      transparent={true}
      animationType="fade"
      onRequestClose={() => setShowModal(false)}>
      <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback onPress={() => false}>
            <View style={styles.modalStyle}>{children}</View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.modalUnderBgColor,
  },
  modalStyle: {
    width: SIZES.width / 1.15,
    height: SIZES.height / 1.5,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
});
