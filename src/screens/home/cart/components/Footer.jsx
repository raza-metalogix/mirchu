import { TouchableOpacity, Dimensions, StyleSheet, View, Text, } from "react-native"
import colors from "../../../../utilities/color"
import fonts from "../../../../utilities/fonts"
import {useState, useEffect} from "react"
import useCart from "./cart"
import Box from "./Box"
const Footer = ()=>{
    const {selectAll, price, setSelectAll,setSelectIndex} = useCart()
    const [tick, setTick] = useState(false) 
    return(
	<View style={_styles.container}>
	{/* Checkout */}
	<View style={_styles.checkout_con}>
	    <Box handlePress={()=> {
		setSelectAll(!selectAll)
		setSelectIndex([])
	    }} enable={selectAll}/>
	    <Text style={{color:"black", fontSize:16}}>All</Text>
	</View>

	{ price != 0 &&
	<View style={_styles.sub_container}>
	{/* total */}
	<View style={_styles.total_con}>
	    <Text style={_styles.sub_total}>Subtotal :</Text>
	    <Text style={_styles.total}>Rs. {price}</Text>
	</View>
	<TouchableOpacity style={_styles.btn}>
	    <Text style={_styles.btn_txt}>Checkout</Text>
	</TouchableOpacity>

	</View>
	}	
	</View>
    );
}

const _styles =  StyleSheet.create({
    container:{
	position:"absolute",
	bottom:0,
	left:0,
	height:80,
	width:Dimensions.get("screen").width,
	flexDirection:"row",
	justifyContent:"space-between",
	backgroundColor: "white",
	paddingHorizontal:20,
	borderTopWidth:0.5,
	borderColor:"#d1d1e0"
    },
    checkout_con:{
	flexDirection:"row",
	alignItems:"center"
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
	alignItems:"center"
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
