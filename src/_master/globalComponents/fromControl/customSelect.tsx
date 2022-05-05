import React, {useState} from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, SIZES} from '../../constant/themes';

export function CustomSelect(props: any) {
  const {setValue, value, name, label, options} = props;

  const [bottomModal, setBottomModal] = useState(false);

  return (
    <>
      <View>
        <Text style={styles.fontBold}>{label}</Text>

        <TouchableOpacity
          onPress={() => {
            setBottomModal(true);
          }}>
          <View style={styles.selectWrapper}>
            <Text style={{color: COLORS.gray}}>
              {value.label || 'Select one'}
            </Text>

            <Icon
              name={'arrow-down-drop-circle-outline'}
              size={16}
              color={'gray'}
            />
          </View>
        </TouchableOpacity>
      </View>

      <Modal
        visible={bottomModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setBottomModal(false)}>
        <TouchableWithoutFeedback onPress={() => setBottomModal(false)}>
          <View style={styles.centeredView}>
            <TouchableWithoutFeedback onPress={() => false}>
              <View style={styles.modalStyle}>
                <>
                  <Text style={styles.header}>{'Select one' || name}</Text>

                  <FlatList
                    data={options || []}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        onPress={() => {
                          setValue(item);
                          setBottomModal(false);
                        }}
                        style={styles.textLabelWrapper}
                        key={item?.value}>
                        <Icon
                          name={
                            value?.value === item?.value
                              ? 'check-circle'
                              : 'checkbox-blank-circle-outline'
                          }
                          size={20}
                          color={'gray'}
                        />

                        <Text style={styles.textLabel}>
                          {item?.label || ''}
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                </>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  selectWrapper: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    paddingHorizontal: 5,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: COLORS.modalUnderBgColor,
  },
  modalStyle: {
    width: SIZES.width,
    height: SIZES.height / 2,
    backgroundColor: '#fff',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  textLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  textLabel: {fontSize: 20, marginLeft: 5},
  fontBold: {fontWeight: 'bold'},
});
