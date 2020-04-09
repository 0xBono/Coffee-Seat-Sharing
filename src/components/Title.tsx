/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {moderateScale} from '../constants/size';
import Color from '../constants/color';

interface TextProps {
  Subject: string;
  Subtitle: string;
}

const Title: React.SFC<TextProps> = (props): JSX.Element => (
  <View style={styles.container}>
    <Text
      style={{
        fontSize: moderateScale(32, 0.4),
        fontWeight: 'normal',
        lineHeight: moderateScale(44),
      }}>
      {props.Subject}
    </Text>
    <Text
      style={{
        fontSize: moderateScale(32, 0.4),
        fontWeight: 'bold',
        lineHeight: moderateScale(44),
      }}>
      {props.Subtitle}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    color: Color.Black,
  },
});

export default Title;
