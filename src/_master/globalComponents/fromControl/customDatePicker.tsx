import moment from 'moment';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../constant/themes';
import TextCustom from '../TextCustom';

const CustomDatePicker = (props: any) => {
  const {label, value, setValue} = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <View>
        <TextCustom isBold>{label}</TextCustom>

        <TouchableOpacity
          onPress={() => {
            setOpen(true);
          }}>
          <View style={styles.selectWrapper}>
            <TextCustom style={{color: COLORS.gray}}>
              {moment(value).format('MMMM DD YYYY') || 'Select date'}
            </TextCustom>

            <Icon name={'calendar'} size={16} color={COLORS.gray} />
          </View>
        </TouchableOpacity>
      </View>

      <DatePicker
        modal
        open={open}
        date={value || new Date()}
        mode={'date'}
        onConfirm={(date: any) => {
          setOpen(false);
          setValue(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default CustomDatePicker;

const styles = StyleSheet.create({
  selectWrapper: {
    borderBottomWidth: 1,
    borderColor: COLORS.borderColorDark,
    marginBottom: 20,
    paddingHorizontal: 5,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
