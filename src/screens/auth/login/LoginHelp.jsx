import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import colors from "../../../utilities/color";
import fonts from "../../../utilities/fonts";
const LoginHelp = ({ handlePress }) => {
	return (
		<View style={_styles.container}>
			{/* Forgot */}
			<TouchableOpacity onPress={handlePress}>
				<Text style={_styles.text}>Forgot Password</Text>
			</TouchableOpacity>
		</View>
	);
}

const _styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-end",
		width: Dimensions.get("screen").width,
		paddingHorizontal: 25,
	},
	text: {
		color: colors.primary,
		fontFamily: fonts.poppins_medium,
		opacity: 0.7
	},
})

export default LoginHelp
