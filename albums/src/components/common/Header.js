import React from 'react';
import { Text, TouchableOpacity, Linking } from 'react-native';

const Header = (props) => {
	const { textStyle, viewStyle} = styles;
	return (
		<TouchableOpacity style = {viewStyle}>
			<Text style = {textStyle} onPress = {() => {Linking.openURL('http://rbk.org')}}>Hack Review from RBK</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		fontSize: 20
	},
	viewStyle: {
		backgroundColor: '#f4428f',
		justifyContent: 'center',
		alignItems: 'center',
		height: 90,
		paddingTop: 20,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 4},
		shadowOpacity: 0.4,
		elevation: 2,
		position: 'relative'
	}
};

export { Header };