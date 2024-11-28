import { SafeAreaView, StyleSheet, ImageBackground } from 'react-native';

import CountDown from './components/countdown';

import './managers/notifications.js';

export default () => (
  <SafeAreaView style={styles.container}>
    <ImageBackground
      source={require('./assets/images/bg.jpg')}
      resizeMode="cover"></ImageBackground>
    <CountDown />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
