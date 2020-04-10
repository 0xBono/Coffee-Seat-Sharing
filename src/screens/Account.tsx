import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Title from '../components/Title';
import {scale, verticalScale, moderateScale} from '../constants/size';
import Color from '../constants/color';
import KakaoButton from '../components/KaKaoButton';
import Background from '../assets/onbarding_img';
import KakaoLogins from '@react-native-seoul/kakao-login';

if (!KakaoLogins) {
  console.error('Module is Not Linked');
}

const logCallback = (log: string, callback: void) => {
  console.log(log);
  callback;
};

const TOKEN_EMPTY = 'token has not fetched';

export default function Account() {
  const [loginLoading, setLoginLoading] = useState(false);

  const [token, setToken] = useState(TOKEN_EMPTY);

  const kakaoLogin = () => {
    logCallback('Login Start', setLoginLoading(true));

    KakaoLogins.login()
      .then(result => {
        setToken(result.accessToken);
        logCallback(
          `Login Finished:${JSON.stringify(result)}`,
          setLoginLoading(false),
        );
      })
      .catch(err => {
        if (err.code === 'E_CANCELLED_OPERATION') {
          logCallback(`Login Cancelled:${err.message}`, setLoginLoading(false));
        } else {
          logCallback(
            `Login Failed:${err.code} ${err.message}`,
            setLoginLoading(false),
          );
        }
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Background width={moderateScale(375)} height={verticalScale(564)} />
      </View>
      <View style={styles.fontContainer}>
        <Title Subject={'우리 이젠,'} Subtitle={'자리 찾아 헤매지 말자.'} />
      </View>
      <View style={styles.button}>
        <KakaoButton
          Bgcolor={Color.Yellow}
          Ftcolor={Color.Brown}
          Label={'카카오계정으로 시작하기'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  fontContainer: {
    marginTop: scale(160),
    marginLeft: scale(26),
  },
  button: {
    marginBottom: scale(32),
    marginTop: scale(474),
  },
  background: {
    position: 'absolute',
    marginTop: scale(281),
    marginLeft: scale(22),
  },
});
