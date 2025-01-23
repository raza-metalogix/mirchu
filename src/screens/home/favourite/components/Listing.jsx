import {View, FlatList, Text, Image, StyleSheet} from "react-native"
import fonts from "../../../../utilities/fonts"
import colors from "../../../../utilities/color"
const Listing = () =>{
    return(
	<View style={{marginTop:20}}>
	    <FlatList 
		data={[...Array(10)]}
		keyExtraction={item=>item.toString()}
		ListFooterComponent={()=> <View style={{height:200}}/>}
		showsVerticalScrollIndicator={false}
		ItemSeparatorComponent={()=> <View style={{height:20}}/>}
		renderItem={({item})=> <Component />}
	    />
	</View>
    );
}

const Component = () => {
    return (
	<View style={_styles.container}> 
	<Image
	    source={{uri:context.img}}
	    style={_styles.img}
	/>
	<View>
	    <Text style={_styles.heading}>{context.heading.substr(0,25)}...</Text>
	    <View style={_styles.sub_container}>
		<View>
		   <Text style={_styles.price}>Rs. {context.price}</Text>
		    <Text style={_styles.price_sub}>Rs. {context.price}</Text>
		</View>
		<View style={_styles.tag_container}>
		    <Text style={_styles.off}>60% off</Text>
		</View>
	    </View>
	</View>
	</View>
    )
}


const _styles = StyleSheet.create({
    container:{
	backgroundColor:"white",
	flexDirection:"row"
    },
    sub_container:{
	marginTop:5,
	flexDirection:"row",
	alignItems:"flex-end",
    },
    heading:{
	color:"black",
	fontSize:16,
	fontFamily: fonts.poppins_semiBold
    },
    img:{
	width:100,
	height:80,
	borderRadius:10,
	marginRight:12
    },
    price:{
	fontFamily: fonts.poppins_medium,
	color: colors.secondary,
	fontSize:18
    },
    price_sub:{
	fontFamily: fonts.poppins_medium,
	color:"black",
	opacity:0.5,
	textDecorationLine:"line-through"
    },
    tag_container:{
	backgroundColor: "#fde7e8",
	alignItems: 'center',
	justifyContent: "center",
	marginLeft: 10,
	paddingHorizontal: 5,
    },
    off:{
	fontFamily: fonts.poppins_medium,
	color: colors.secondary,
	backgroundColor: "#fde7e8",
	fontSize: 12,
    }
})



const context = {
    img:"https://mirchu.pk/cdn/shop/files/1708200144.png?v=1721380505&width=360",
    heading:"Buy Apple Golden Delicious(گولڈن ڈیلیشس سیب) - 1kg",
    price:"210",
}


export default Listing
