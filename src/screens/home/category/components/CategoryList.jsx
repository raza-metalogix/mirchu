import { View, Text, TouchableOpacity,Image, StyleSheet } from "react-native"
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
	    <Text>{context.heading}</Text>

	<View>
	    <Text style={_styles.price}>{context.price}</Text>
	    {/* off */}
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

	<View style={_styles.iconsContainer}>
	    <TouchableOpacity>
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
	marginTop:30,
    },
    img:{
	width:100,
	height:100,
    },
    twoContainer:{
	flexDirection:"row"
    },
    cardContainer:{
	backgroundColor:"white",
	flexDirection:'column'
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
	width:30,
	height:30,
	opacity:0.8
    },
    iconsContainer:{
	flexDirection:"row",
    }
})

const context = {
    img:"https://mirchu.pk/cdn/shop/files/1_6f3e2951-dced-48bc-8085-64c4b70d3eab.png?v=1722250639&width=360",
    heading:"Buy Yellow Potatoes(پیلے آلو)-1kg",
    price: "Rs. 78",
    sub_price:"Rs. 92",
    off: "60"
}

export default CategoryList;
