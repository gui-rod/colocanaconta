import React from 'react';
import { StyleSheet, View } from 'react-native';
import WelcomeMessage from './components/WelcomeMessage';

export default function App() {
  return (
      <View style={styles.container}>
        <WelcomeMessage />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});