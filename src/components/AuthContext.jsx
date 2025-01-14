import { View, Text, StyleSheet } from "react-native"
import colors from "../utilities/color";
import fonts from "../utilities/fonts";
const AuthContext = ({ context }) => {
	return (
		<View style={_styles.container}>
			<Text style={_styles.text}>{context}</Text>
		</View>
	);
}

const _styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		alignItems: 'center',
	},
	text: {
		fontSize: 20,
		fontFamily: fonts.roboto.medium,
		color: colors.textSecondary
	}
})

export default AuthContext
