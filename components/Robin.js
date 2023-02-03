import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import { useState } from 'react';

const Robin = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Button onPress={() => setCount(count + 1)} title="Increase"></Button>
      <Button onPress={() => setCount(0)} title="Reset"></Button>
      <Text>Current count: <Text style={styles.BoldText}>{count}</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  BoldText: {
    fontWeight: "bold",
    fontSize: 18
  }
});


export default Robin;