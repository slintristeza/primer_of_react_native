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

const callback = text => {
  // eslint-disable-next-line no-alert
  alert(`Callback from component text=${text}`);
};

const App = () => {
  return (
    <View style={styles.container}>
      <Hoge isShow={false} callback={callback} />
    </View>
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
