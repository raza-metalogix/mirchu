import { StyleSheet, View, Text } from "react-native"
import colors from "../../utilities/color";
import fonts from "../../utilities/fonts";
import FormSection from "./FormSection";
const AuthSection = () => {
	const subheading = "To keep in connected with us, Please login with your personal info."
	return (
		<View style={_styles.container}>
			{/* heading */}
			<View>
				<Text style={_styles.heading}>Welcome Back!</Text>
				<Text style={_styles.subheading}>{subheading}</Text>
			</View>
			<FormSection />
		</View>
	);
}

const _styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		borderTopStartRadius: 30,
		borderTopEndRadius: 30,
		paddingHorizontal: 20,
		paddingVertical: 50
	},
	heading: {
		fontSize: 30,
		fontFamily: fonts.roboto.black,
		color: colors.textSecondary
	},
	subheading: {
		marginTop: 6,
		fontFamily: fonts.montserrat.medium,
		color: colors.textSecondary,
		opacity: 0.7,
		fontSize: 15,
		lineHeight: 25,

	}
})

export default AuthSection;
