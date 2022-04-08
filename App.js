import React, {useEffect} from 'react';

// import things related to React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import screens
import OnBoardingScreen from './src/screen/OnBoardingScreen';
import LoginScreen from './src/screen/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a "stack"
const MyStack = createNativeStackNavigator();

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);
  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <NavigationContainer>
        <MyStack.Navigator>
          <MyStack.Screen name="OnBoarding" component={OnBoardingScreen} />
          <MyStack.Screen name="Login" component={LoginScreen} />
        </MyStack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <LoginScreen />;
  }
};

export default App;
