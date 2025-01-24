import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import colors from "../../../utilities/color";
import fonts from "../../../utilities/fonts";
import routes from "../../../navigations/routes"
import {useNavigation} from "@react-navigation/native"
const LoginHelp = () => {
	const nav = useNavigation()
	return (
		<View style={_styles.container}>
			{/* Forgot */}
			<TouchableOpacity onPress={()=> nav.navigate(routes.auth_confirm)}>
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
