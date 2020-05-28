import React from 'react';
import { StyleSheet, View } from 'react-native';

import Avatar from './components/avatar';
import About from './components/about';
import Social from './components/social';
import CallButton from './components/callbutton';

export default function App() {
  return (
    <View style={styles.container}>
      <Avatar />
      <About />
      <Social />
      <CallButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202c39',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "crimson",
  }
});
