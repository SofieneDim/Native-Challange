import React from "react";
import { ScrollView, useWindowDimensions, View } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";

import SocialMediaBar from "../../components/social_media_bar/socialMediaBar";
import { singupStyle } from "./signup.style";

const SignupScreen = () => {
  const { height } = useWindowDimensions();
  
  return (
		<View style={singupStyle.content}>
			<View style={singupStyle.view}>
				<Card style={[singupStyle.card, { minHeight: height * 0.7 }]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={singupStyle.cardContent}>
              <Card.Title title="Sign Up" titleStyle={singupStyle.cardTitle}></Card.Title>
              <Card.Content>
                <TextInput
                  label="Email"
                  keyboardType="email-address"
                  style={singupStyle.cardInput}
                />
                <TextInput
                  label="Password"
                  style={singupStyle.cardInput}
                />
                <TextInput
                  label="Confirm password"
                  style={singupStyle.cardInput}
                />
                <Button
                  mode="contained"
                  uppercase={false}
                  style={singupStyle.cardButton}
                  labelStyle={singupStyle.cardLoginButtonLabel}
                >{'Signup'}</Button>
                <SocialMediaBar />
              </Card.Content>
					  </View>
          </ScrollView>
				</Card>
			</View>
		</View>
  )
}

export default SignupScreen