import React, {useState} from 'react';

import {TouchableOpacity, Text, StyleSheet, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DatePicker({
  styleContainer,
  styleText,
  date,
  onChange,
  mode = 'date',
}) {
  const [show, setShow] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setShow(Platform.OS === 'ios');
    // setDate(currentDate);
    onChange(currentDate);
  };

  function showPicker() {
    setShow(true);
  }

  // const {date, show, mode} = this.state;
  // console.log(this.state);

  function formatDate(data = new Date(), format) {
    switch (format) {
      case 'DD/MM/YYYY':
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
  }

  return (
    <TouchableOpacity
      style={[styles.container, styleContainer]}
      onPress={showPicker}>
      <Text style={[styles.dataText, styleText]}>
        {formatDate(date, 'DD/MM/YYYY')}
      </Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour
          display="default"
          onChange={onChangeDate}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderRadius: 5,
    // height: 30,
    justifyContent: 'center',
  },
  dataText: {
    color: '#000',
    fontSize: 16,
    paddingHorizontal: 4,
  },
});
