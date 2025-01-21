import {View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native"
import fonts from "../../../../utilities/fonts"
import colors from "../../../../utilities/color"
import useCategory from "../category"
const Context = ({txt}) => {
    const context = ["Milk", "Vegetable", "Meat", "Fruit"];
    const {select, setSelect} = useCategory()
    return (
	<View style={{marginVertical:10}}>
	<Text style={_styles.heading}>{txt || "Categories"}</Text>
	{/*
	<FlatList 
	style={{marginTop:10}}
	    data={context}
	    horizontal
	    keyExtraction={(_,index) => index.toString()}
	    showsHorizontalScrollIndicator={false}
	    ItemSeparatorComponent={()=> <View style={{width:15}}/>}
	    renderItem={({item,index})=>
		<TouchableOpacity
		onPress={()=> setSelect(index)}
		activeOpacity={0.6}
		style={[_styles.cart_cont, 
		   select==index && { backgroundColor:colors.primary }
		]}>
	
		<Text style={[_styles.cart_txt,
		    select == index && {color:"white"}
		]}>{item}</Text>
		</TouchableOpacity>
	    }/>
	    */}
	</View>
    );
}

const _styles = StyleSheet.create({
    heading:{
	fontSize:25,
	fontFamily:fonts.poppins_semiBold,
	color:"black"
    },
    cart_cont:{
	width:120,
	height: 50,
	alignItems:"center",
	justifyContent:"center",
	backgroundColor: "#F4EDCA",
	borderRadius: 5
    },
    cart_txt:{
	fontSize:17,
	fontFamily: fonts.poppins_medium
    }
})

export default Context
