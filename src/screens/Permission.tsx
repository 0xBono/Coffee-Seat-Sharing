/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {scale, verticalScale, moderateScale} from '../constants/size';
import Color from '../constants/color';

class Permission extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.fontContainer}>
          <Text
            style={{
              fontSize: moderateScale(32, 0.4),
              fontWeight: 'normal',
              lineHeight: moderateScale(44),
            }}>
            우리 이젠,
          </Text>
          <Text
            style={{
              fontSize: moderateScale(32, 0.4),
              fontWeight: 'bold',
              lineHeight: moderateScale(44),
            }}>
            자리 찾아 헤매지 말자.
          </Text>
        </View>
        <View style={styles.lineContainer} />
        <View style={styles.alertContainer}>
          <Text
            style={{
              marginTop: scale(4),
              fontSize: moderateScale(16, 0.4),
              fontWeight: '500',
              lineHeight: moderateScale(24),
            }}>
            알림
          </Text>
          <Text
            style={{
              marginTop: scale(4),
              fontSize: moderateScale(14, 0.4),
              fontWeight: 'normal',
              lineHeight: moderateScale(20),
              color: Color.Gray,
            }}>
            자리 예약 확인, 취소 알림 등
          </Text>
        </View>
        <View style={styles.alertContainer}>
          <Text
            style={{
              marginTop: scale(4),
              fontSize: moderateScale(16, 0.4),
              fontWeight: '500',
              lineHeight: moderateScale(24),
            }}>
            위치
          </Text>
          <Text
            style={{
              marginTop: scale(4),
              fontSize: moderateScale(14, 0.4),
              fontWeight: 'normal',
              lineHeight: moderateScale(20),
              color: Color.Gray,
            }}>
            내 주변 이용 가능한 카페 정보 표시
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <Text
            style={{
              fontSize: moderateScale(14, 0.4),
              fontWeight: 'normal',
              lineHeight: moderateScale(20),
              color: Color.Gray,
            }}>
            릴레잇 서비스를 잘 이용하기 위해{'\n'}
            필요한 접근 권한을 꼭 확인해줘.
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text
            style={{
              fontSize: moderateScale(16, 0.4),
              fontWeight: '500',
              color: Color.White,
              lineHeight: moderateScale(24),
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            확인
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fontContainer: {
    marginTop: scale(160),
    marginLeft: scale(26),
  },
  lineContainer: {
    width: moderateScale(327),
    height: verticalScale(1),
    marginTop: scale(40),
    alignSelf: 'center',
    backgroundColor: Color.Gray,
  },
  alertContainer: {
    marginTop: scale(40),
    marginLeft: scale(60),
  },
  contentContainer: {
    marginTop: scale(40),
    marginLeft: scale(26),
  },
  buttonContainer: {
    width: moderateScale(327),
    height: verticalScale(60),
    marginTop: scale(100),
    borderRadius: 8,

    backgroundColor: Color.Black,
    shadowColor: Color.DarkShadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Permission;
