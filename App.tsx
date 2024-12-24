/**
 * Google recaptcha V3 React Native App
 * https://github.com/ashu777
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import RecaptchaV3 from 'react-native-secure-captcha-v3';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
    <RecaptchaV3
        baseUrl={'https://yourdomain.com'}
        siteKeyV3={'YOUR_SITE_KEY'}
        onReceiveToken={(token: any) => {
          console.log('token:', token);
        }}
      />
    
    </SafeAreaView>
  );
}



export default App;
