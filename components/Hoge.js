import React from 'react';
import {Text, View} from 'react-native';

const Hoge = props => {
  const hoge = props.isShow ? <Text>hoge</Text> : null;
  return <View>{hoge}</View>;
};

export default Hoge;
