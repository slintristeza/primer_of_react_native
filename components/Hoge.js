import React, {useState, useEffect} from 'react';
import {Text, View, Button} from 'react-native';

const Hoge = props => {
  const getText = isShow => (isShow ? 'こんにちは' : '非表示です');
  const [hoge, setHoge] = useState(getText(props.isShow));
  return (
    <View>
      <Text>{hoge}</Text>
      <Button title="click" onPress={() => setHoge('cliiiiiick!!!!')} />
    </View>
  );
};

export default Hoge;
