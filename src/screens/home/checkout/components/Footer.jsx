import { View, Text, TouchableOpacity,TextInput, StyleSheet } from "react-native"
import fonts from "../../../../utilities/fonts"
import colors from "../../../../utilities/color"
import Btn from "../../../../components/Btns"
import {useState} from "react"

const Footer = ()=>{
    const [coupon, setCoupon] = useState("")

    return(
	<View style={_styles.container}>
	    <View style={_styles.input_cont}>
		<TextInput 
		    value={coupon}
		    style={_styles.input}
		    keyboardType="phone-pad"
		    placeholder="Discount coupon"
		    placeholderTextColor="#D6D6DA"
		    onChange={txt=> setCoupon(txt)}
		/>
		<TouchableOpacity activeOpacity={0.5}>
		    <Text style={_styles.input_btn_txt}>Apply</Text>
		</TouchableOpacity>
	    </View>
	    {/* Price */}
	    <View style={_styles.price_cont}>
		<Text style={_styles.total}>Total</Text>
		<View style={_styles.price_sub_cont}>
		    <Text style={[_styles.pkr,{marginTop:6}]}>PKR</Text>
		    <Text style={_styles.price}>Rs.124</Text>
		</View>
	    </View>
	    <Btn 
		text="Complete Order"
		textColor="white"
		color={colors.primary}
	    />
	</View>
    )
}

const _styles = StyleSheet.create({
    container:{
	paddingVertical:20,
	paddingHorizontal:10,
	borderTopWidth:1,
	position:"absolute",
	bottom:0,
	width:"100%",
	backgroundColor:"white"
    },
    input_cont:{
	flexDirection:'row',
	justifyContent:"space-between",
	alignItems:"center",
	backgroundColor:colors.lightDark,
	paddingHorizontal:15,
	borderRadius:7,
    },
    input:{
	flex:0.9,
	color:"#64646C",
	fontFamily: fonts.poppins_medium,
	height: 60,
    },
    input_btn_txt:{
	color:"#64646C",
	fontFamily: fonts.poppins_medium
    },
    price_cont:{
	marginVertical:15,
	flexDirection:"row",
	justifyContent:"space-between"
    },
    total:{
	color:"black",
	fontSize:16,
	fontFamily: fonts.poppins_medium,
    },
    price_sub_cont:{
	flexDirection:"row",
    },
    pkr:{
	color:"black",
	fontSize:11,
	fontFamily: fonts.poppins_medium,
	opacity: 0.5
    },
    price:{
	marginLeft:5,
	fontSize:16,
	color: colors.secondary,
	fontFamily: fonts.poppins_medium,
    }
})

export default Footer;
