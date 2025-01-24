import { View, FlatList, Image, Platform, StyleSheet, Dimensions, TouchableOpacity, Text } from "react-native"
import { listCategoryImgs } from "../../../utilities/images";
import fonts from "../../../utilities/fonts";
import CardHeading from "../../../components/CardHeading"
import colors from "../../../utilities/color";
import routes from "../../../navigations/routes";
import {useNavigation} from "@react-navigation/native"
const ListCategroy = () => {
    const nav = useNavigation()
    return (
	<View style={_styles.container}>
	    <CardHeading heading="Best Categories" btnText="See All"/>
	<FlatList
	showsHorizontalScrollIndicator={false}
	data={catagroies}
	horizontal
	ItemSeparatorComponent={()=> <View style={{width:15}}/>}
	keyExtractor={(_, index) => index.toString()}
	renderItem={({ item,index }) =>
	    <TouchableOpacity
	    onPress={()=> nav.navigate(routes.main_categories)}
	    activeOpacity={0.5}
	    style={{
		flexDirection:"column",
		    borderRadius:10,
		    width:80,
		    marginRight: index == catagroies.length-1 ? 50 : 0 
	    }}
	    >
	    <Image
	    style={_styles.img}
	    source={item.img}
	    />
	    <Text
	    style={{
		marginTop:5,
		textAlign:"center",
		color:"black",
		fontFamily: fonts.poppins_medium,
		fontSize:12,
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
	marginBottom:10,
	justifyContent: "center",
	paddingLeft: 10,
	paddingRight: 10
    },
    img: {
	width: "100%",
	height: 70,
	resizeMode: 'cover',
	borderRadius:10,
    },

})

export default ListCategroy
