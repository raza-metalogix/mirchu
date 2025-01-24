import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import fonts from "../utilities/fonts"
import colors from "../utilities/color"

const CardHeading = ({heading, btnText, handlePress}) => {
    return(
	<View style={_styles.container}>
	    <Text style={_styles.heading}>{heading || "Context"}</Text>
	    <TouchableOpacity
		activeOpacity={0.5}
		onPress={handlePress}
	    >
		<Text style={[_styles.btn_text,{marginRight:10}]}>{btnText || "Btn"}</Text>
	    </TouchableOpacity>
	</View>
    );
}

const _styles=StyleSheet.create({
    container:{
	flexDirection:"row",
	alignItems:"center",
	justifyContent:"space-between",
	marginBottom:10,
    },
    heading: {
	fontSize: 18,
	fontFamily: fonts.poppins_semiBold,
	color: colors.textSecondary,
    },
    btn_text:{
	fontSize: 16,
	fontFamily: fonts.poppins_medium,
	color: colors.secondary,
    }
})

export default CardHeading;
