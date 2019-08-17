import React from 'react';
import {FlatList, Text} from 'react-native';

const list = [
  {name: 'hoge', key: '1'},
  {name: 'fuga', key: '2'},
  {name: 'piyo', key: '3'},
];

const ExampleList = () => {
  return (
    <FlatList
      data={list}
      renderItem={({item}) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
};

export default ExampleList;
