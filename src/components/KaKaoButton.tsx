/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Kakao from '../assets/normal/kakaotalk';
import {} from '../constants/size';
import {} from '../constants/color';

interface Button {
  Bgcolor: string;
  Ftcolor: string;
  Label: string;
  Press: any;
}

const kakaoButton: React.SFC<Button> = (props): JSX.Element => (
  <View style={styles.container}>
    <TouchableOpacity
      style={{
        width: 327,
        height: 56,
        backgroundColor: props.Bgcolor,
        borderRadius: 8,
        alignSelf: 'center',
      }}
      onPress={props.Press}
      activeOpacity={0.2}>
      <Kakao style={{position: 'absolute', marginTop: 12, marginLeft: 16}} />
      <Text
        style={{
          fontSize: 16,
          fontWeight: '500',
          textAlign: 'center',
          lineHeight: 55,
          color: props.Ftcolor,
        }}>
        {props.Label}
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default kakaoButton;
