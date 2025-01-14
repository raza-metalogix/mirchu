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
		opacity: 0.7
	},
	remContainer: {
		flexDirection: "row",
		alignItems: 'center',
	},
	rememBox: {
		width: 23,
		height: 23,
		borderRadius: 4,
		marginRight: 7,
		alignItems: "center",
		justifyContent: 'center'
	},
	rememText: {
		color: colors.textSecondary,
		fontFamily: fonts.roboto.regular,
		opacity: 1
	},
	svg: {
		width: 20,
		height: 20,
	}
})

export default LoginHelp
