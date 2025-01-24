import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TouchableHighlight, Platform } from "react-native";
import colors from "../../../utilities/color";
import fonts from "../../../utilities/fonts";
import { productImg } from "../../../utilities/images";
const ListingProduct = ({ heading, handlePress }) => {
    const context = [...Array(5)]
    return (
	<View style={_style.container}>
	<Text style={_style.heading}>{heading}</Text>
	<FlatList
	scrollEnabled={false}
	data={context}
	ListFooterComponent={()=> 
	    <View style={_style.btn_container}>
	    <TouchableHighlight
	      activeOpacity={0.6}
	    underlayColor="#DDDDDD"
		onPress={()=> console.log()}
		style={_style.btn}>
		<Text style={_style.btn_txt}>View All</Text>
	    </TouchableHighlight>
	    </View>
	}
	ItemSeparatorComponent={() => <View style={{
	    height: Platform.OS === "ios" ? 30 : 20,
	}} />}
	keyExtractor={(_, index) => index.toString()}
	renderItem={({ _, index }) =>
	    <View style={_style.box}>
	    <TouchableOpacity
	    onPress={handlePress} key={index}>
	    <View style={_style.productContainer}>

	    {/* img */}
	    <View style={_style.imgContainer}>
	    {/* off tag */}
	    <View style={_style.offTag}>
	    <Text
	    style={{
		color: "white",
		fontSize:10,
		fontFamily: fonts.poppins_semiBold
	    }}
	    >
	    90 %
	    </Text>
	    </View>

	    <Image
	    source={{uri:"https://mirchu.pk/cdn/shop/files/1_165620e0-cde7-4c39-943b-d0a85275d4e1.png?v=1722239194&width=360"}}
	    style={_style.img}
	    />
	    </View>

	    <View style={{ marginLeft: 0 }}>
	    <Text
	    style={{ color: "black", fontSize: 16 }}>
	    Buy Coriander-Dhanya (سب...
	    </Text>

	    <View style={{ marginTop: 5 }}>
	    <View style={{ flexDirection: 'row' }}>

	    {/* Price tag */}
	    <View style={{
		backgroundColor: colors.primary,
		    width: 60,
		    alignItems: 'center',
		    justifyContent: 'center',
		    borderRadius: 5
	    }}>
	    <Text
	    style={{ color: "white" }}
	    >
	    Sale
	    </Text>
	    </View>
	    {/* rating */}
	    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
	    {[...Array(5)].map((_, index) =>
		<Image
		key={index}
		source={{ uri: "https://mirchu.pk/cdn/shop/t/3/assets/star.png?v=109682652855224361591725598506" }}
		style={{ width: 15, height: 15 }}
		/>)}
	    </View>


	    </View>
	    <View style={{
		flexDirection: "row",
		    marginTop: 5,
		    alignItems: "center"
	    }}>
	    <Text
	    style={{
		textDecorationLine: "line-through",
		fontSize: 12,
		color:"black",
		opacity:0.5,
		fontFamily:fonts.poppins_medium
	    }}>
	    RS 120
	    </Text>
	    <Text style={{
		color: colors.secondary,
		    fontSize: 16,
		    fontWeight: "600",
		    marginLeft: 10,
		    fontFamily:fonts.poppins_semiBold
	    }}>Rs 98</Text>
	    </View>

	    </View>

	    </View>

	    </View>
	    </TouchableOpacity>
	    </View>
	}
	/>
	</View>
    );
}

const _style = StyleSheet.create({
    container: {
	marginTop: 30,
	paddingHorizontal: 20,
    },
    heading: {
	fontSize: 18,
	fontFamily: fonts.poppins_bold,
	color: colors.textSecondary,
	marginBottom: 10,
    },
    box: {
	position: "relative",
    },
    imgContainer: {
	paddingTop: 20,
	paddingRight: 5,
	position: 'relative',
	overflow: "hidden",
	marginRight: 10

    },
    img: {
	width: 80,
	height: 80,
	borderRadius: 6,
	resizeMode:"cover"
    },
    offTag: {
	position: 'absolute',
	right: 1,
	top: 0,
	zIndex: 1,
	backgroundColor: colors.secondary,
	paddingVertical: 2,
	paddingHorizontal: 7

    },
    productContainer: {
	flexDirection: "row"
    },
    productTag: {
	color: "white",
	fontSize: 10,
	backgroundColor: colors.secondary,
	width: 60,
	textAlign: "center",
	paddingVertical: 2,
	borderRadius: 3,
    },
    addBtn: {
	position: "absolute",
	right: 0,
	bottom: 20,
	backgroundColor: colors.secondary,
	width: 90,
	height: 45,
	alignItems: "center",
	justifyContent: "center",
	borderRadius: 5,
    },
    addText: {
	color: "white",
	fontSize: 16,
	fontWeight: "600"
    },
    btn_container:{
	alignItems:"flex-end",
    },
    btn:{
	backgroundColor:"white",
	width:"20%",
	height:"35%",
	alignItems:'center',
	justifyContent:'center',
	borderBottomWidth:2,
	borderColor:colors.secondary,
    },
    btn_txt:{
	color:"black",
	fontFamily: fonts.poppins_medium
    }
})

export default ListingProduct
