import React, {useState, useEffect} from 'react';
import {Text, View, Button} from 'react-native';

const getText = isShow => (isShow ? 'こんにちは' : '非表示です');

const onPressButton = (setHoge, props) => {
  setHoge('cliiiiiick!!!!');
  props.callback('aaa');
};

const Hoge = props => {
  const [hoge, setHoge] = useState(getText(props.isShow));
  return (
    <View>
      <Text>{hoge}</Text>
      <Button title="click" onPress={() => onPressButton(setHoge, props)} />
    </View>
  );
};

export default Hoge;
