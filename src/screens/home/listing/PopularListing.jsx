import {View, Text,FlatList, StyleSheet, Image, TouchableOpacity} from "react-native"
import CardHeading from "../../../components/CardHeading"
import {useNavigation} from "@react-navigation/native"
import fonts from "../../../utilities/fonts"
import colors from "../../../utilities/color"
import routes from "../../../navigations/routes"

const context = {
    img:"https://mirchu.pk/cdn/shop/files/1708200373_cf755cfa-d607-4c98-a8c9-3fafe45cb311.png?v=1722250640&width=360",
    heading:"Buy Yellow Potatoes(پیلے آلو)-1kg",
    price: "Rs. 78",
    sub_price:"Rs. 92",
    off: "60"
}

const PopularListing = () => {
    const nav = useNavigation()
    return(
	<View style={_styles.container}>
	    <CardHeading heading="Popular Items" btnText="See All" />
	    <FlatList 
		data={[...Array(10)]}
		horizontal
		showsHorizontalScrollIndicator = {false}
		ItemSeparatorComponent={()=> <View style={{width:10}}/>}
		keyExtraction={item=> item.toString()}
		renderItem={({_})=>
		    <TouchableOpacity
			activeOpacity={0.6}
			onPress={()=> nav.navigate(routes.home_purchase)}
			style={_styles.card_container}>
			<Image 
			    style={_styles.img}
			    source={{uri: context.img}}
			/>
			<View style={_styles.sub_cart_cont}>
			    <Text style={_styles.heading}>{context.heading.substr(0,17)}...</Text>
			    <View style={_styles.price_cont}>
				<Text style={_styles.price}>{context.price}</Text>
				<Text style={[_styles.off,{marginLeft:10}]}>16% off</Text>
			    </View>
			</View>
		    </TouchableOpacity>
		}
	    />
	</View>
    );
}

const _styles  = StyleSheet.create({
    container:{
	paddingHorizontal:10,
    },
    card_container:{
	width:150,
	backgroundColor:"#F5F5F5",
	borderRadius:10,
	overflow:"hidden",
    },
    img:{
	width:"100%",
	height:100,
	resizeMode:"cover"
    },
    sub_cart_cont:{
	padding:10,
    },
    heading:{
	fontSize:12,
	fontFamily:fonts.poppins_medium,
	color:"black"
    },
    price_cont:{
	marginTop:5,
	flexDirection:"row",
	alignItems:'center'
    },
    price:{
	color:"black",
	fontSize: 14,
	fontFamily: fonts.poppins_semiBold,
	color: colors.secondary
    },
    off: {
	fontFamily: fonts.poppins_medium,
	color: colors.secondary,
	backgroundColor: "#fde7e8",
	fontSize: 10,
	paddingHorizontal:3,
    }
})

export default PopularListing;
