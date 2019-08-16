import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';

const Hoge = props => {
  const [hoge, setHoge] = useState('こんにちは');
  useEffect(() => {
    if (!props.isShow) {
      setHoge('非表示です');
    }
  }, [hoge, props]);
  return (
    <View>
      <Text>{hoge}</Text>
    </View>
  );
};

export default Hoge;
