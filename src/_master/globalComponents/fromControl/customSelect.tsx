import React, {useState} from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, SIZES} from '../../constant/themes';
import {NoDataFound} from '../noDataFound';
import TextCustom from '../TextCustom';

export function CustomSelect(props: any) {
  const {setValue, value, name, label, options} = props;

  const [bottomModal, setBottomModal] = useState(false);

  return (
    <>
      <View>
        <TextCustom isBold>{label}</TextCustom>

        <TouchableOpacity
          onPress={() => {
            setBottomModal(true);
          }}>
          <View style={styles.selectWrapper}>
            <TextCustom
              style={{color: value.label ? COLORS.gray : COLORS.placeholder}}>
              {value.label || 'Select one'}
            </TextCustom>

            <Icon
              name={'arrow-down-drop-circle-outline'}
              size={16}
              color={COLORS.gray}
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
                  <TextCustom style={styles.header}>
                    {'Select one' || name}
                  </TextCustom>

                  <NoDataFound
                    data={options}
                    message="No categories available"
                  />

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
                          color={COLORS.gray}
                        />

                        <TextCustom style={styles.textLabel}>
                          {item?.label || ''}
                        </TextCustom>
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
    borderColor: COLORS.gray,
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
    backgroundColor: COLORS.white,
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
    borderColor: COLORS.borderColor,
    color: COLORS.gray,
  },
  textLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    color: COLORS.gray,
  },
  textLabel: {fontSize: 20, marginLeft: 5, color: COLORS.gray},
});
