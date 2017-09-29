import React from 'react';
import { TextInput, View } from 'react-native';
import { Hr } from '../Components';

const Input = (props) => {
  return (
    <View>
      {props.number ?
        <TextInput
          {...props}
          keyboardType={ 'numeric' }
          maxLength={ 2 } /> :
          <TextInput {...props} />
      }
      <View style={props.underline ? style.border : null} />
    </View>
  )
}

const style = {
  border: {
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    marginHorizontal: 8
  }
}

export default Input;
