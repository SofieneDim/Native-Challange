import React, { useState } from "react";
import * as SecureStore from 'expo-secure-store';
import { useNavigation, StackActions } from "@react-navigation/native";
import { ScrollView, useWindowDimensions, View } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";

import { user_token } from "../../shared/constants";
import { login } from '../../services/authentication/authentication.service';
import screens from '../../shared/screens.name';
import { setLoginAttempt } from "../../store/actions/auth.actions";

import SocialMediaBar from "../../components/social_media_bar/socialMediaBar";
import { signinStyle } from "./signin.style";

const SigninScreen = () => {
  const { loginAttempt } = useSelector((state: any) => state.authReducer);
  const dispatch = useDispatch();
  
	const { height } = useWindowDimensions();

	const [hidePassword, setHidePassword] = useState(true);
	const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigation = useNavigation();
  
  const onSignin = async () => {
    dispatch(setLoginAttempt(loginAttempt + 1));
    setIsLoading(true);
    setError(false);

    login(email, password, loginAttempt).then(async (response: any) => {
      await SecureStore.setItemAsync(user_token,response.token);
      setIsLoading(false);
      navigation.dispatch(StackActions.replace(screens.home));
    }).catch(error => {
      console.warn('Error:', error);
      setIsLoading(false);
      setError(error);
    });
  }

	return (
		<View style={signinStyle.content}>
			<View style={signinStyle.view}>
				<Card style={[signinStyle.card, { minHeight: height * 0.7 }]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={signinStyle.cardContent}>
              <Card.Title title="Sign In" titleStyle={signinStyle.cardTitle}></Card.Title>
              <Card.Content>
                <TextInput
                  label="Email"
                  error={!!error}
                  value={email}
                  onChangeText={value => setEmail(value)}
                  keyboardType="email-address"
                  style={signinStyle.cardInput}
                />
                <TextInput
                  label="Password"
                  secureTextEntry={hidePassword}
                  value={password}
                  error={!!error}
                  onChangeText={value => setPassword(value)}
                  right={<TextInput.Icon name="eye" onPress={()=>setHidePassword(!hidePassword)}/>}
                  style={signinStyle.cardInput}
                />
                <Button uppercase={false} style={signinStyle.cardButton} labelStyle={signinStyle.cardButtonLabel}>Forgot password</Button>
                <Button
                  mode="contained"
                  uppercase={false}
                  loading={isLoading}
                  style={signinStyle.cardButton}
                  labelStyle={signinStyle.cardLoginButtonLabel}
                  onPress={onSignin}
                >{isLoading ? 'Logging in' : 'Login'}</Button>
                <Button
                  style={signinStyle.cardButton}
                  labelStyle={signinStyle.cardButtonLabel}
                  onPress={() => navigation.navigate(screens.signup)}
                >Don't have an account? Create one</Button>
                <View style={signinStyle.socialMedia}>
                <SocialMediaBar />
                </View>
              </Card.Content>
					  </View>
          </ScrollView>
				</Card>
			</View>
		</View>
	)
}

export default SigninScreen
