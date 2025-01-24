import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TouchableHighlight, Platform } from "react-native";
import CardHeading from "../../../components/CardHeading"
import PlusSvg from "../../../assets/svgs/plus_svg"
import colors from "../../../utilities/color";
import fonts from "../../../utilities/fonts";
import { productImg } from "../../../utilities/images";


const context = {
    img:"https://mirchu.pk/cdn/shop/files/1708200145.png?v=1721381995&width=360",
    heading:"Buy Yellow Potatoes(پیلے آلو)-1kg",
    price: "Rs. 78",
    tag:"Vegetable"
}

const ListingProduct = ({ heading, handlePress }) => {
    return (
	<View style={_styles.container}>
	    <CardHeading heading={heading} btnText="See All" />
	<FlatList
	scrollEnabled={false}
	data={[...Array(5)]}
	ItemSeparatorComponent={() => <View style={{
	    height: 15,
	}} />}
	keyExtractor={(_, index) => index.toString()}
	renderItem={({_})=>
		<TouchableOpacity
		    activeOpacity={0.6}
		    onPress={handlePress}
		    style={_styles.cart_cont}
		>
		    <Image 
			source={{uri: context.img}}
			style={_styles.img}
		     />
		    <View style={_styles.sub_cont}>
			<View>
			    <View style={_styles.rating_cont}>
				<View style={_styles.tag}>
				    <Text style={_styles.tag_txt}>{context.tag}</Text>
				</View>
				<Rating />
			    </View>
			    <Text style={_styles.card_heading}>{context.heading}</Text>
			</View>
			<Price />
		    </View>
		</TouchableOpacity>
	}
	/>
	</View>
    );
}
const Price = () => {
		
    return (
	<View style={{flexDirection:'row', flex:1, justifyContent:'space-between'}}>
	    <Text style={_styles.card_price}> {context.price}</Text>
	    <View style={_styles.plus_icon_cont}>
		<PlusSvg style={_styles.plus_icon} />
	    </View>
	</View>
    )
}

const Rating = () => {
    const img = "https://mirchu.pk/cdn/shop/t/3/assets/star.png?v=109682652855224361591725598506"
    return(
	<View style={{flexDirection:"row", alignItems:'center'}}>
	    <Image 
		source={{uri:img}}
		style={{
		    width:15,
		    height:12,
		}}
	    />
	    <Text style={_styles.rating_txt}> 4.6</Text>
	</View>
    )
}

const _styles = StyleSheet.create({
    container: {
	marginTop: 30,
	paddingHorizontal: 10,
    },
    cart_cont:{
	backgroundColor:"#F5F5F5",
	padding:10,
	borderRadius:10,
	flexDirection:'row',
    },
    img:{
	width:"32%",
	height:110,
	resizeMode:"cover",
	borderRadius:10,
    },
    sub_cont:{
	marginLeft:15,
	paddingRight:5,
	flex:1,
	justifyContent:"space-between"
    },
    card_heading:{
	color:"black",
	fontSize: 14,
	fontFamily: fonts.poppins_medium,
	marginBottom:10,
	width:"85%"
    },
    card_price:{
	color:"black",
	fontSize: 16,
	fontFamily: fonts.poppins_semiBold,
	color: colors.secondary
    },
    tag:{
	backgroundColor: colors.lightYellow,
	paddingHorizontal:10,
	paddingVertical:3,
	borderRadius:7
    },
    tag_txt:{
	color:"black",
	fontSize:10,
	fontFamily: fonts.poppins_medium
    },
    rating_cont:{
	flexDirection:'row',
	justifyContent:"space-between",
	marginBottom:5
    },
    rating_txt:{
	color:"black",
	fontFamily: fonts.poppins_regular, fontSize:12
    },
    plus_icon_cont:{
	width:30,
	height:30,
	justifyContent:"center",
	borderRadius:30,
	backgroundColor:"white",

	shadowColor:"#000",
	shadowOffset:{
	    width:0,
	    height:1
	},
	shadowOpacity:0.25,
	shadowRadius: 0.84,

	elevation: 2,
    },
    plus_icon:{
	with:20,
	height:20,
    }
    
})

export default ListingProduct
