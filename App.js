/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

import Hoge from './components/Hoge';
import ExampleList from './components/ExampleList';

const callback = text => {
  // eslint-disable-next-line no-alert
  alert(`Callback from component text=${text}`);
};

const App = () => {
  return (
    <View style={styles.container}>
      <ExampleList />
      <Hoge isShow={false} callback={callback} />
    </View>
    // <View style={{flex: 1, flexDirection:"row"}}>
    //   <View style={{flex: 1, backgroundColor: 'red'}} />
    //   <View style={{flex: 2, backgroundColor: 'blue'}} />
    //   <View style={{flex: 3, backgroundColor: 'green'}} />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;
