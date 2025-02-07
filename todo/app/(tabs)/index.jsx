import { StyleSheet, View } from 'react-native';
import React from 'react';
import Tabs from '../../components/Tabs';

const Index = () => {
  return (
    <View style={styles.container}>
      <Tabs />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});