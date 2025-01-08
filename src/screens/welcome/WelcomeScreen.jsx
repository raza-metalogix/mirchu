import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import colors from "../../utilities/color";
const WelcomeScreen = () => {
	return (
		<SafeAreaView style={_styles.container}>
			<View>
				<Text style={_styles.heading}>Mirchu</Text>
				<Text style={_styles.subHeading}>Best Online SuperMarket</Text>
			</View>
		</SafeAreaView>

	);
}

const _styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	heading: {
		textAlign: "center",
		color: colors.textSecondary,
		fontSize: 40,
	},
	subHeading: {
		textAlign: "center",
		color: colors.textSecondary,

	}
})

export default WelcomeScreen
