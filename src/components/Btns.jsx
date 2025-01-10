import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native"
import fonts from "../utilities/fonts";
const Btns = ({ text, handlePress, color, textColor }) => {
	return (
		<TouchableOpacity
			activeOpacity={0.5}
			onPress={handlePress}
			style={[_styles.container, { backgroundColor: color || "white" }]}
		>
			<Text
				style={[_styles.text, { color: textColor || "black" }]}>
				{text}
			</Text>
		</TouchableOpacity>
	);
}
const _styles = StyleSheet.create({
	container: {
		paddingVertical: 16,
		width: Dimensions.get("screen").width / 1.2,
		alignItems: "center",
		justifyContent: 'center',
		borderRadius: 30,
	},
	text: {
		fontFamily: fonts.roboto.medium,
		fontSize: 20,
	}
})

export default Btns;

