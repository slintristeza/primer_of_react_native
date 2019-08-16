import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';

const Hoge = props => {
  const getText = isShow => (isShow ? 'こんにちは' : '非表示です');
  const [hoge, setHoge] = useState(getText(props.isShow));
  return (
    <View>
      <Text>{hoge}</Text>
    </View>
  );
};

export default Hoge;
