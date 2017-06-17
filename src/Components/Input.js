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
      {props.underline ? <Hr /> : null}
    </View>
  )
}

export default Input;
