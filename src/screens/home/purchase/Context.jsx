import { View, Text, StyleSheet, Platform } from "react-native"
import colors from "../../../utilities/color"
import fonts from "../../../utilities/fonts"
const Context = () => {
    return (
	<View style={_styles.container}>

	<View style={_styles.price_container}>
	<Text style={_styles.price}>Rs 59</Text>
	<View style={_styles.price_sub_cont}>
	<Text style={_styles.cutPrice}>Rs 70</Text>
	<View
	style={{
	    backgroundColor: "#fde7e8",
		alignItems: 'center',
		justifyContent: "center",
		marginLeft: 5,
		paddingHorizontal: 5,
	}}>
	<Text style={_styles.off}>16% off</Text>
	</View>
	</View>
	</View>

	<Text
	style={_styles.title}
	>
	Buy Coriander-Dhanya (سبز دھنیا) bunch
	</Text>


	</View>
    );
}

const _styles = StyleSheet.create({
    container: {
	marginTop: 10,
    },
    title: {
	color: "black",
	fontSize: 18,
	fontFamily: fonts.poppins_medium
    },
    price_container: {
	marginTop: 7,
	flexDirection: "row",
	marginBottom: Platform.OS == "ios" ? 10 : 0,
    },
    price_sub_cont: {
	marginLeft: 5,
	flexDirection: "row",
	alignItems: "center",
    },
    price: {
	color: colors.primary,
	fontFamily: fonts.poppins_semiBold,
	fontSize: 25,
    },
    cutPrice: {
	textDecorationLine: "line-through",
	color: "#808080",
	fontSize: 12,
	fontFamily: fonts.poppins_medium
    },
    off: {
	fontFamily: fonts.poppins_medium,
	color: colors.secondary,
	backgroundColor: "#fde7e8",
	fontSize: 12,
    }
})

export default Context
