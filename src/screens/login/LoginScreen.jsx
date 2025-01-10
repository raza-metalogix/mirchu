import { View, Text, StatusBar, StyleSheet, Platform } from "react-native"
import colors from "../../utilities/color";
import fonts from "../../utilities/fonts";
import AuthSection from "./AuthSection";
const LoginScreen = () => {
	return (
		<View style={_styles.container}>
			<StatusBar
				backgroundColor={colors.primary}
				barStyle="light-content"
			/>
			<View style={_styles.contextContainer}>
				<Text style={_styles.heading}>Sign In</Text>
			</View>
			<AuthSection />
		</View>
	);
}
const _styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primary,
	},
	contextContainer: {
		marginTop: Platform.OS == "ios" ? 80 : 30,
		marginBottom: 30,
		paddingHorizontal: 20,
	},
	heading: {
		color: colors.textPrimary,
		fontSize: 26,
		fontFamily: fonts.roboto.bold,
		letterSpacing: 1.2
	},

})
export default LoginScreen
