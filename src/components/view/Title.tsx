import * as React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle, View} from 'react-native';

interface TextProps {
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
}

const Title: React.SFC<TextProps> = (props): JSX.Element => (
  <View style={styles.container}>
    <Text style={[props.labelStyle]}>{props.label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Title;
