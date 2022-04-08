import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function LoginScreen ({navigation}) {
  return (
    <View style={styles.screen}>
      <Text>Screen 2</Text>
      <Button
        onPress={() => navigation.navigate('Login')}
        title="Go to Screen 1"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

