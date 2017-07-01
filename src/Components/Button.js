import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity
      {...props}
      style={ [styles.container, {borderColor: props.color}, props.margin ? { marginTop: 24 } : null, props.style ] }>
      <Text style={{ color: props.color, fontSize: 16 }}>{ props.title }</Text>
    </TouchableOpacity>
  )
}

const styles ={
  container: {
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 12,
    alignItems:  'center'
  }
}

export default Button;
