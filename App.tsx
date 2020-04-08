import * as React from 'react';
import {StatusBar, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import Account from './src/screens/Account';
import Permission from './src/screens/Permission';

function Demo({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Button
        title="카카오 로그인 페이지"
        onPress={() => navigation.navigate('Account')}
        color="#000"
      />
      <Button
        title="권한 동의 페이지"
        onPress={() => navigation.navigate('Permission')}
        color="#000"
      />
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Demo" component={Demo} />
          <Stack.Screen name="Account" component={Account} />
          <Stack.Screen name="Permission" component={Permission} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
