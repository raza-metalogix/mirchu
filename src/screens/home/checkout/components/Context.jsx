import {View, Text, TouchableOpacity, StyleSheet} from "react-native"
import fonts from "../../../../utilities/fonts"
import colors from "../../../../utilities/color"

const Context = () => {
    return(
	<View style={_styles.container}>
	    <Text style={_styles.heading}>Payment</Text>
	    <Text style={_styles.para}>All transaction area secure and encrypted.</Text>
	    
	    <TouchableOpacity
		activeOpacity={0.6}
		style={_styles.btn}
		>
		<Text style={_styles.btn_text}>Cash on Delivery (COD) </Text>
	    </TouchableOpacity>

	</View>
    )
}

const _styles = StyleSheet.create({
    container:{
	marginTop:20
    },
    heading:{
	color: "black",
	fontSize:18,
	fontFamily: fonts.poppins_semiBold,
    },
    para:{
	color:"black",
	fontSize:13,
	fontFamily: fonts.poppins_medium,
	opacity:0.6
    },
    btn:{
	marginTop:15,
	borderWidth:1,
	paddingHorizontal:20,
	paddingVertical:15,
	borderRadius:7,
	borderColor: colors.primary,
	backgroundColor:colors.lightDark
    },
    btn_text:{
	color:"#64646C",
	fontSize: 13,
	fontFamily: fonts.poppins_medium,

    }
})

export default Context
