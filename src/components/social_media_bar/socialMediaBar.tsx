import { View } from 'react-native';
import React from 'react';

import SocialMediaButton from "../buttons/social_media/socialMedia.button";
import { socialMediaStyle } from "./socialMediaBar.style";

const socialMediaBar = () => {
  return (
    <View style={socialMediaStyle.socialMedia}>
      <SocialMediaButton
        icon="google"
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
        onPress={() => console.warn("google")}
      />
      <SocialMediaButton
        icon="facebook"
        bgColor="#E7EAF4"
        fgColor="#4765A9"
        onPress={() => console.warn("facebook")}
      />
      <SocialMediaButton
        icon="apple"
        bgColor="#e3e3e3"
        fgColor="#363636"
        onPress={() => console.warn("apple")}
      />
    </View>
  )
}

export default socialMediaBar