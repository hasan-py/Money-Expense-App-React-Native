import React from 'react';
import {Modal, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {COLORS, SIZES} from '../constant/themes';

export default function GlobalModal({
  showModal,
  setShowModal,
  children,
  isSmall,
  isMid,
}: any) {
  return (
    <Modal
      visible={showModal}
      transparent={true}
      animationType="fade"
      onRequestClose={() => setShowModal(false)}>
      <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback onPress={() => false}>
            <View
              style={
                isSmall
                  ? styles.modalStyleSmall
                  : isMid
                  ? styles.modalStyleMid
                  : styles.modalStyle
              }>
              {children}
            </View>
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
    height: SIZES.height / 2.2,
    backgroundColor: COLORS.white,
    borderRadius: 15,
  },
  modalStyleSmall: {
    width: SIZES.width / 1.15,
    height: SIZES.height / 4.2,
    backgroundColor: COLORS.white,
    borderRadius: 15,
  },
  modalStyleMid: {
    width: SIZES.width / 1.15,
    height: SIZES.height / 1.8,
    backgroundColor: COLORS.white,
    borderRadius: 15,
  },
});
