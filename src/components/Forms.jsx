import { View, Text, StyleSheet, TextInput } from "react-native"
import colors from "../utilities/color";
import fonts from "../utilities/fonts";
const Form = ({
    context,
    placehd,
    handleChange,
    value,
    maxlength,
    svg,
    svgPass,
    secureText,
    passText,
    typeInput,
    customMargin

}) => {
    return (
	<View style={{
	    width: "100%",
		marginBottom: customMargin || 0
	}}>
	<Text style={_styles.formText}>{context}</Text>
	<View style={[_styles.inputContainer, {
	    justifyContent: "flex-start"
	}]}>
	{svg}
	<TextInput
	keyboardType={typeInput}
	value={value}
	onChangeText={handleChange}
	style={_styles.textInput}
	placeholderTextColor="#d9d9d9"
	placeholder={placehd}
	maxLength={maxlength}
	autoCapitalize='none'
	secureTextEntry={secureText}
	/>
	{svgPass}
	</View>
	<Text style={_styles.pasText}>
	{passText}
	</Text>
	</View>
    );
}

const _styles = StyleSheet.create({
    inputContainer: {
	width: "100%",
	position: 'relative',
	marginBottom: 0,
	backgroundColor: colors.lightDark,
	borderRadius: 7,
	paddingHorizontal: 15,
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',

    },
    inputSvg: {
	width: 25,
	height: 25,
	opacity: 0.8,
    },
    textInput: {
	width: "85%",
	height: 60,
	fontFamily: fonts.poppins_regular,
	fontSize: 16,
	paddingHorizontal: 10,
	color: "black",
    },
    formText: {
	width: "100%",
	fontWeight: "500",
	color: "black",
	fontSize: 16,
	marginBottom: 11
    },
    pasText: {
	color: 'red',
	width: "100%"
    }
})

export default Form
