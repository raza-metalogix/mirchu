import { View, FlatList, Image, Platform, StyleSheet, Dimensions, TouchableOpacity, Text } from "react-native"
import { listCategoryImgs } from "../../../utilities/images";
import fonts from "../../../utilities/fonts";
import colors from "../../../utilities/color";
import routes from "../../../navigations/routes";
import {useNavigation} from "@react-navigation/native"
const ListCategroy = () => {
    const nav = useNavigation()
    return (
	<View style={_styles.container}>
	<Text style={_styles.heading}>Best Categories</Text>
	<FlatList
	showsHorizontalScrollIndicator={false}
	data={catagroies}
	horizontal
	keyExtractor={(_, index) => index.toString()}
	renderItem={({ item }) =>
	    <TouchableOpacity
	    onPress={()=> nav.navigate(routes.main_categories)}
	    activeOpacity={0.5}
	    style={{
		flexDirection:"column",
		backgroundColor: colors.lightYellow,
		paddingVertical:10,
		paddingHorizontal:20,
		    borderRadius:10,
		    marginRight:20,
	    }}
	    >
	    <Image
	    style={_styles.img}
	    source={item.img}
	    />
	    <Text
	    style={{
		marginTop:15,
		textAlign:"center",
		color:"black",
		fontFamily: fonts.poppins_medium,
		fontSize:16,
	    }}
	    >{item.text}</Text>
	    </TouchableOpacity>

	}
	/>
	</View>
    );
}

const catagroies= [
    {img: listCategoryImgs[0], text:"Milk"},
    {img: listCategoryImgs[1], text:"Vegetable"},
    {img: listCategoryImgs[2], text:"Meat"},
    {img: listCategoryImgs[3], text:"Fruits"},

]
const _styles = StyleSheet.create({
    container: {
	marginTop: Platform.OS == "ios" ? 10 : 25,
	justifyContent: "center",
	paddingLeft: 20
    },
    img: {
	width: 100,
	height: 80,
	resizeMode: 'cover'
    },
    heading: {
	fontSize: 18,
	fontFamily: fonts.poppins_bold,
	color: colors.textSecondary,
	marginBottom: 10,
    },
})

export default ListCategroy
