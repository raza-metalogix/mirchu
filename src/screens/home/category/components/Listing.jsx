import {View,FlatList, Text, TouchableOpacity, StyleSheet, Image} from "react-native"
import colors from "../../../../utilities/color"
import fonts from "../../../../utilities/fonts"
import { useNavigation } from "@react-navigation/native"
import routes from "../../../../navigations/routes"
const Listing = () =>{
    const nav = useNavigation()
    return (
	<View style={_styles.container}>
	<FlatList 
	    scrollEnabled={false}
	    style={_styles.sub_container}
	    data={context}
	    ItemSeparatorComponent={()=> <View style={{height:20}}/>}
	    keyExtraction={(_,index)=> index.toString()}
	    renderItem={({item,index})=>
		<TouchableOpacity
		onPress={()=> nav.navigate(routes.main_categories)}
		activeOpacity={0.7}
		style={[_styles.view_container, 
		    index==4 && {backgroundColor:"#7AEB80"}
		]}>
		<Image style={_styles.img} source={item.img} />
		    <View style={{marginLeft:12}}>
			<Text style={_styles.heading}>{item.heading}</Text>
			<Text 
			    style={_styles.txt}>
				{item.txt}
			    </Text>
		    </View>
		</TouchableOpacity>
	    }
	/>
	</View>
    );
}

const context = [
    {
	img:require("../../../../assets/images/categories/meat.png"), 
	heading:"Fresh Meat",
	txt:"Get Low cost and High quality meat at your door."
    },
    {
	img:require("../../../../assets/images/categories/vegetables.png"), 
	heading:"Clean Vegetables",
	txt:"Real, fresh, health and modern. From farm to plate."
    },
    {
	img:require("../../../../assets/images/categories/milk.png"), 
	heading:"High quality milk",
	txt:"Milk that meets high standards for quality."
    },
    {
	img:require("../../../../assets/images/categories/fruit.png"), 
	heading:"Garden fresh Fruits",
	txt:"Choose healthy. Be strong and live a long life."
    },
 //    {
	// img:require("../../../../assets/images/categories/special.png"), 
	// heading:"Mirchu Special",
	// txt:"All Seasons special. Get the best or not nothings at all."
 //    }
]

const _styles= StyleSheet.create({
    container:{
	marginTop:10,
    },
    sub_container:{
    },
    view_container:{
	backgroundColor:"#FFF9DE",
	paddingVertical:20,
	paddingHorizontal:10,
	borderRadius:10,
	flexDirection:"row",
	alignItems:"center"
    },
    img:{
	width:112,
	height:90,
    },
    heading:{
	color:"black",
	fontFamily: fonts.poppins_semiBold,
	fontSize:16,
	marginBottom:5,

    },
    txt:{
	color:"black",
	fontFamily: fonts.poppins_medium,
	opacity:0.6,
	width:"72%"
    },
})

export default Listing
