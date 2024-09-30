import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Milan Sandeepa</Text>
      <Text style={styles.subtext}>This is a new beginning</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 30,
    color: 'black',
  },
  subtext: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
});
