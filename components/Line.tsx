import React from 'react';
import {StyleSheet, View} from 'react-native';

const Line = () => {
  return <View style={styles.line}></View>;
};

const styles = StyleSheet.create({
  line: {
    borderTopWidth: 0.5,
    borderTopColor: '#cfcfcf',
    margin: 10,
  },
});

export default Line;
