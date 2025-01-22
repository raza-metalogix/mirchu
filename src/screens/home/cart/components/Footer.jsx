import { TouchableOpacity, StyleSheet, View, Text, } from "react-native"
import colors from "../../../../utilities/color"
import fonts from "../../../../utilities/fonts"

const Footer = ()=>{
    return(
	<View style={_styles.container}>

	{/* Checkout */}
	<View style={_styles.checkout_con}>
	<TouchableOpacity>
	<View style={_styles.box}/>
	</TouchableOpacity>
	    <Text style={{color:"black", fontSize:16}}>All</Text>
	</View>

	<View style={_styles.sub_container}>
	{/* total */}
	<View style={_styles.total_con}>
	    <Text style={_styles.sub_total}>Subtotal :</Text>
	    <Text style={_styles.total}>Rs. 90</Text>
	</View>
	
	<TouchableOpacity style={_styles.btn}>
	    <Text style={_styles.btn_txt}>Checkout</Text>
	</TouchableOpacity>

	</View>

	</View>
    );
}

const _styles =  StyleSheet.create({
    container:{
	paddingVertical:20,
	flexDirection:"row",
	justifyContent:"space-between",
	backgroundColor: "white"
    },
    checkout_con:{
	flexDirection:"row",
    },
    box:{
	width:20,
	height:20,
	borderWidth:1,
	borderColor:"#666699",
	borderRadius:5,
	marginRight:5
    },
    sub_container:{
	flexDirection:"row",
    },
    total_con:{
	flexDirection:"row"
    },
    sub_total:{
	color:"black",
	fontFamily: fonts.poppins_medium,
	marginRight:10
    },
    total:{
	color:"black",
	fontFamily: fonts.poppins_semiBold,
	fontSize:16,
	color:colors.secondary
    },
    btn:{
	width:100,
	height:50,
	marginLeft:20,
	alignItems:"center",
	justifyContent:"center",
	backgroundColor: colors.secondary,
	borderRadius:10,

    },
    btn_txt:{
	color:"white",
	fontFamily: fonts.poppins_medium
    }
})

export default Footer
