import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import fonts from "../../../../utilities/fonts"
import colors from "../../../../utilities/color"

const Listing = () => {
    return (
	<View style={_styles.container}>
	{/* Checkout box */}
	<TouchableOpacity>
	<View style={_styles.box}/>
	</TouchableOpacity>
	{/* Cart */}
	<View style={_styles.cart_container}>
	{/* images */}
	<Image 
	    style={_styles.img}
	    source={{uri:context.img}}
	/>
	{/*  sub container */}
	<View>
	{/* context */}
	<Text style={_styles.heading}>{context.heading.substr(0,25)}...</Text>
	
	<View style={_styles.price_cont}>
	{/* sub price */}
	<View>
	<Text style={_styles.price}>Rs. {context.price}</Text>
	<Text style={_styles.price_sub}>Rs. {context.price}</Text>
	</View>
	{/* counter */}
	<View style={_styles.count_con}>

	<TouchableOpacity style={_styles.count_box}>
	<Text style={{color:"black",opacity:0.5}}>-</Text>
	</TouchableOpacity>

	<Text style={_styles.count_txt}>1</Text>

	<TouchableOpacity style={_styles.count_box}>
	<Text style={{color:"black",opacity:0.5}}>+</Text>
	</TouchableOpacity>

	</View>
	{/* counter */}
	</View>
	</View>
	</View>
	</View>
    );
}

const _styles = StyleSheet.create({
    container:{
	flexDirection:"row",
	alignItems:"center",
    },
    box:{
	width:20,
	height:20,
	borderWidth:1,
	borderColor:"#666699",
	borderRadius:5,
	marginRight:12
    },
    cart_container:{
	flexDirection:"row"
    },
    heading:{
	color:"black",
	fontSize:16,
	fontFamily: fonts.poppins_semiBold
    },
    img:{
	width:100,
	height:80,
	borderRadius:10,
	marginRight:12
    },
    price_cont:{
	flexDirection:"row",
	alignItems:"flex-end",
	justifyContent:"space-between"
	
    },
    price:{
	fontFamily: fonts.poppins_medium,
	color: colors.secondary,
	fontSize:16
    },
    price_sub:{
	fontFamily: fonts.poppins_medium,
	color:"black",
	opacity:0.5,
	textDecorationLine:"line-through"
    },
    count_con:{
	flexDirection:"row",
	alignItems:"center"
    },
    count_box:{
	backgroundColor:"#E9E9E9",
	width:23,
	height:23,
	alignItems:"center"
    },
    count_txt:{
	color:"black",
	marginHorizontal:14
    }
})


const context = {
    img:"https://mirchu.pk/cdn/shop/files/1708200144.png?v=1721380505&width=360",
    heading:"Buy Apple Golden Delicious(گولڈن ڈیلیشس سیب) - 1kg",
    price:"210",
}

export default Listing