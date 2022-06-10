import { SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SigninScreen from './src/screens/signin/signin.screen';
import SignupScreen from './src/screens/signup/signup.screen';
import HomeScreen from './src/screens/home/home.screen';

import { AppStyle, theme } from './App.style';
import store from './src/store';
import screens from './src/shared/screens.name';

export default function App() {
const Stack = createNativeStackNavigator();
  
	return (
		<SafeAreaView style={AppStyle.content}>
      <PaperProvider theme={theme}>
        <ReduxProvider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name={screens.signin} component={SigninScreen} />
              <Stack.Screen name={screens.signup} component={SignupScreen} />
              <Stack.Screen name={screens.home} component={HomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </ReduxProvider>
      </PaperProvider>
		</SafeAreaView>
	);
}
