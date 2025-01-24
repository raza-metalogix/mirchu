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
	    // scrollEnabled={false}
	    showsVerticalScrollIndicator = {false}
	    style={_styles.sub_container}
	    data={context}
	    ListFooterComponent={()=> <View style={{height:150}}/>}
	    ItemSeparatorComponent={()=> <View style={{height:20}}/>}
	    keyExtraction={(_,index)=> index.toString()}
	    renderItem={({item,index})=>
		<TouchableOpacity
		onPress={()=> nav.navigate(routes.main_categories)}
		activeOpacity={0.7}
		style={[_styles.view_container, 
		    index==4 && {backgroundColor:"#7AEB80"}
		]}>
		<Image style={_styles.img} source={{uri:item.img}} />
		    <View style={{
			marginLeft:10,
			width:"63%"
		    }}>
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
	img:"https://mirchu.pk/cdn/shop/files/2_d5e19e07-9fbd-49a8-9c47-f7414f50bc05.png?v=1720696958&width=1100", 
	heading:"Fresh Meat",
	txt:"Get Low cost and High quality meat at your door."
    },
    {
	img:"https://mirchu.pk/cdn/shop/files/4_38895e73-67c1-4c0c-9a44-998846bfb4fc.png?v=1720696957&width=1100", 
	heading:"Clean Vegetables",
	txt:"Real, fresh, health and modern. From farm to plate."
    },
    {
	img:"https://mirchu.pk/cdn/shop/files/mlk.jpg?v=1725263243&width=1100", 
	heading:"High quality milk",
	txt:"Milk that meets high standards for quality."
    },
    {
	img:"https://mirchu.pk/cdn/shop/files/3_7c0e5268-66b2-42a7-9316-08f0028be2f2.png?v=1720696958&width=1100", 
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
	width:"32%",
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
	fontSize:14,
	opacity:0.6,
    },
})

export default Listing
