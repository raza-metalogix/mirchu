import { View, Text,FlatList, TouchableOpacity,Image, StyleSheet } from "react-native"
import {HeartSvg} from "../../../../assets/svgs/HeartSvg"
import CartSvg from "../../../../assets/svgs/CartSvg"
import colors from "../../../../utilities/color"
import fonts from "../../../../utilities/fonts"
const CategoryList = () => {
    return (
	<View style={_styles.container}>
	<View style={_styles.cardContainer}>
	<Image 
	source={{uri:context.img}}
	style={_styles.img}
	/>
	{/* context */}
	<View style={_styles.twoContainer}>

	<Text 
	style={_styles.headering}
	>{context.heading.substr(0,18)}...
	</Text>

	<View 
	style={_styles.sub_container}
	>
	{/* off */}
	<View>
	<Text style={_styles.price}>{context.price}</Text>
	<View 
	style={_styles.offContainer} 
	>
	<Text
	style={_styles.subPrice}
	>{context.sub_price}</Text>
	<View style={_styles.offTag}>
	<Text style={_styles.offTxt}>{context.off}% off</Text>
	</View>
	</View>
	</View>

	{/* icons */}
	<View style={_styles.iconsContainer}>
	<TouchableOpacity style={{marginRight:5}}>
	<HeartSvg style={_styles.back_svg} />	
	</TouchableOpacity>

	<TouchableOpacity>
	<CartSvg style={_styles.back_svg} />	
	</TouchableOpacity>
	</View>

	</View>

	</View>

	</View>


	</View>
    );
}

const _styles= StyleSheet.create({
    container:{
	width:"48.4%",
    },
    img:{
	width:"100%",
	height:180,
	resizeMode:"cover"
    },
    twoContainer:{
	paddingHorizontal:10,
	paddingVertical:15,
	width:"100%",
    },
    headering:{
	fontFamily: fonts.poppins_semiBold,
	fontSize:16,
	color:"black",
    },
    sub_container:{
	marginTop:20,
	flexDirection:"row",
	alignItems:"flex-end",
	justifyContent:"space-between"
    },
    cardContainer:{
	width:"100%",
	backgroundColor: "#F0F0F5",
	flexDirection:'column',
	borderRadius:10,
	overflow:"hidden"
    },
    price:{
	fontSize:20,
	color: colors.secondary,
	fontFamily: fonts.poppins_semiBold
    },
    subPrice:{
	fontSize:13,
	fontFamily: fonts.poppins_medium,
	color:"black",
	opacity:0.5,
	textDecorationLine:"line-through"

    },
    offContainer:{
	flexDirection:'row',
	alignItems:"center",
    },
    offTag:{
	marginLeft:10,
	backgroundColor:"#FDE7E8",
	width:50,
	height:20,
	alignItems:"center",
	justifyContent:"center"

    },
    offTxt:{
	color:colors.secondary,
	fontSize:10,
	fontFamily: fonts.poppins_medium
    },
    back_svg:{
	width:25,
	height:25,
	opacity:0.8
    },
    iconsContainer:{
	flexDirection:"row",
    }
})

const context = {
    img:"https://mirchu.pk/cdn/shop/files/1708200373_cf755cfa-d607-4c98-a8c9-3fafe45cb311.png?v=1722250640&width=360",
    heading:"Buy Yellow Potatoes(پیلے آلو)-1kg",
    price: "Rs. 78",
    sub_price:"Rs. 92",
    off: "60"
}

export default CategoryList;
