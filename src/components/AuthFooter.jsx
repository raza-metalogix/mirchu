import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import colors from "../utilities/color";
import fonts from "../utilities/fonts";
const AuthFooter = ({ handlePress, context, nav }) => {
	return (
		<View style={_styles.container}>
			{/* nav */}
			<View style={_styles.subContainer}>
				<Text style={{ color: colors.textSecondary }}>{context}</Text>
				<TouchableOpacity onPress={handlePress}>
					<Text style={_styles.registText}>{nav}</Text>
				</TouchableOpacity>
			</View>
			{/* Policy */}
			<View style={_styles.policyContainer}>
				<Text style={{ color: colors.textSecondary }}>By continuing, you agree to the</Text>
				<View style={_styles.subPolicy}>
					<TouchableOpacity>
						<Text style={_styles.tfS}>Term of Service</Text>
					</TouchableOpacity>
					<Text style={_styles.and}>&</Text>
					<TouchableOpacity>
						<Text style={_styles.tfS}>Privacy Policy </Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const _styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		marginTop: 35,
	},
	subContainer: {
		flexDirection: 'row',
		alignItems: "center",
		justifyContent: "center",
	},
	orContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	orBorder: {
		height: 1,
		width: "40%",
		backgroundColor: "black",
		opacity: 0.5
	},
	orText: {
		marginHorizontal: 6,
		fontSize: 15
	},
	registText: {
		fontWeight: "700",
		color: colors.primary,
		marginLeft: 5,
		fontStyle: "italic"
	},
	policyContainer: {
		alignItems: "center",
		justifyContent: 'center',
		marginTop: 35
	},
	subPolicy: {
		flexDirection: "row",

	},
	tfS: {
		color: colors.primary,
		fontFamily: fonts.poppins_bold,
	},
	and: {
		marginHorizontal: 4,
	}
})

export default AuthFooter
