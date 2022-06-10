import React from 'react';
import { Text, Pressable } from 'react-native';
import { Avatar } from 'react-native-paper';

import { socialMediaStyle } from './socialMedia.style';

const SocialMediaButton = (props: any) => {
	return (
		<Pressable onPress={props.onPress}>
			<Avatar.Icon size={50} icon={props.icon} color={props.fgColor} style={[{backgroundColor: props.bgColor}]} />
		</Pressable>
	)
}

export default SocialMediaButton;
