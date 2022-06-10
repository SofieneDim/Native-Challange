import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Button } from 'react-native-paper';
import { useNavigation, StackActions } from "@react-navigation/native";

import screens from '../../shared/screens.name';
import { user_token } from "../../shared/constants";

const HomeScreen = () => {
    const navigation = useNavigation();
	const [token, setToken] = useState('');

	useEffect(() => {
		getToken();
	}, []);

	const getToken = async () => {
		const secureStore = await SecureStore.getItemAsync(user_token) || '';
			setToken(secureStore);
	}

	const onLogout = async () => {
		await SecureStore.deleteItemAsync(user_token);
        navigation.dispatch(StackActions.replace(screens.signin));
	}

	return (
		<View>
			<Text>Your Token: {token}</Text>
		    <Button uppercase={false} onPress={onLogout}>Logout</Button>
        </View>
	)
}

export default HomeScreen
