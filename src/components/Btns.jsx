import { TouchableOpacity, Text, StyleSheet } from "react-native"
import fonts from "../utilities/fonts";
const Btns = ({ text, width, handlePress, color, textColor }) => {
    return (
	<TouchableOpacity
	activeOpacity={0.5}
	onPress={handlePress}
	style={[_styles.container,
	    {
		backgroundColor: color || "white",
		width: width || "100%",
	    }]}
	>
	<Text
	style={[_styles.text,
	    { color: textColor || "black" }
	]}>
	{text}
	</Text>
	</TouchableOpacity>
    );
}
const _styles = StyleSheet.create({
    container: {
	paddingVertical: 16,
	alignItems: "center",
	justifyContent: 'center',
	borderRadius: 10,
    },
    text: {
	fontFamily: fonts.poppins_medium,
	fontSize: 20,
	letterSpacing: 1.2,
    }
})

export default Btns;

