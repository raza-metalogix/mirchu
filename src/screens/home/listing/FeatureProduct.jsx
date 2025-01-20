import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Platform } from "react-native";
import colors from "../../../utilities/color";
import fonts from "../../../utilities/fonts";
import { productImg } from "../../../utilities/images";
const ListingProduct = ({ heading, handlePress }) => {
    const context = [...Array(10)]
    return (
	<View style={_style.container}>
	<Text style={_style.heading}>{heading}</Text>
	<FlatList
	scrollEnabled={false}
	data={context}
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
		    fontWeight: "600",
	    }}
	    >
	    90 %
	    </Text>
	    </View>

	    <Image
	    source={productImg}
	    style={_style.img}
	    />
	    </View>

	    <View style={{ marginLeft: 0 }}>
	    <Text
	    style={{ color: "black", fontSize: 16 }}>
	    Buy Coriander-Dhanya (سبز دھنیا) bunch
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
		    color: colors.secondary,
		    fontSize: 12
	    }}>
	    RS 120
	    </Text>
	    <Text style={{
		color: colors.primary,
		    fontSize: 16,
		    fontWeight: "600",
		    marginLeft: 10
	    }}>Rs 98</Text>
	    </View>

	    </View>

	    </View>

	    </View>
	    </TouchableOpacity>
	    <TouchableOpacity
	    style={_style.addBtn}
	    activeOpacity={0.5}
	    >
	    <Text style={_style.addText}>Shop</Text>
	    </TouchableOpacity>
	    </View>
	}
	/>
	</View>
    );
}

const _style = StyleSheet.create({
    container: {
	marginTop: 40,
	paddingHorizontal: 20,
    },
    heading: {
	fontSize: 18,
	fontFamily: fonts.poppins_bold,
	color: colors.textSecondary,
	marginBottom: 20,
    },
    box: {
	position: "relative",
    },
    imgContainer: {
	paddingTop: 20,
	paddingRight: 5,
	position: 'relative',
	borderRadius: 6,
	overflow: "hidden",
	marginRight: 10

    },
    img: {
	width: 80,
	height: 80,
    },
    offTag: {
	position: 'absolute',
	right: 1,
	top: 0,
	zIndex: 1,
	backgroundColor: colors.primary,
	paddingVertical: 2,
	paddingHorizontal: 10

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
    }
})

export default ListingProduct
