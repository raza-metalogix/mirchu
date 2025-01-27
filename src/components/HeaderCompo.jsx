import { View, Image, StyleSheet, TouchableOpacity, Platform, Text } from "react-native";
import { logo } from "../utilities/images";
import SearchSvg from "../assets/svgs/SearchSvg"
import BackSvgVector from "../assets/svgs/back_svg_vector"
import CartSvg from "../assets/svgs/CartSvg"
import DeleteSvg from "../assets/svgs/delete_svg"
import { HeartSvg } from "../assets/svgs/HeartSvg"
import colors from "../utilities/color"
import fonts from "../utilities/fonts"
import { useNavigation } from "@react-navigation/native"
import routes from "../navigations/routes"
const HeaderCompo = ({show, txt, border, showlogo, search, heart, cart, del, onDelPress}) => {
    const nav = useNavigation()
    return (
	<View style={[_style.container, border && {
	borderBottomColor: "#e6e6e6",
	borderBottomWidth: 1,
	paddingBottom: 5,
	}]}>

	<View style={{flexDirection:'row', alignItems:"center"}}>
	{show && 
	    <TouchableOpacity 
	    onPress={()=> nav.goBack()}
	    style={{marginRight:10,}}
	    >
	    <BackSvgVector styles={_style.back_svg} />	
	</TouchableOpacity>
	}

	{txt && <Text style={_style.heading}>{txt}</Text> }

	{showlogo && <Image 
		    source={logo}
		    style={[_style.image,{width: show ? "50%":"55%"}]}
		/>}

	</View>

	<View
	    style={{flexDirection:"row", alignItems:"center"}}
	    >
	    {search && <TouchableOpacity
		    style={{
			opacity: 0.7
		    }}
		    onPress={()=> nav.navigate(routes.search)}
		    >
			<SearchSvg  /> 
		</TouchableOpacity>}

	{ heart &&  <TouchableOpacity
		onPress={()=> nav.navigate(routes.fav_items)}
		style={_style.heartContainer}
		>
		    <View>
			<View style={_style.tagText}>
			<Text style={{
			    fontFamily: fonts.poppins_medium,
			    color: "white",
			    fontSize: 11,
			}}>15</Text>
			</View>
			<HeartSvg
			    style={{
				width: 25,
				height: 25,
				opacity:0.8
			    }}
			    />
		</View>
	</TouchableOpacity> }

	{ cart &&  <TouchableOpacity
		onPress={()=> nav.navigate(routes.fav_items)}
		style={_style.heartContainer}
		>
		    <View>
			<View style={_style.tagText}>
			    <Text style={{
				fontFamily: fonts.poppins_medium,
				color: "white",
				fontSize: 11,
			    }}>15</Text>
			</View>
			<CartSvg
			    style={{
			    width: 25,
			    height: 25,
			    opacity:0.8
			    }}
			/>
		  </View>
	</TouchableOpacity> }  
	{del && 
	<TouchableOpacity onPress={onDelPress}>
	    <DeleteSvg style={_style.svg} />
	</TouchableOpacity>
	}
	</View>
	</View >
    );
}

const _style = StyleSheet.create({
    container: {
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
	position: "relative",
	height:45,
	paddingRight: 20,
	paddingLeft:10,
    },
    heading:{
	fontSize:18,
	fontFamily:fonts.poppins_semiBold,
	color:"black",
    },
    image: {
	height: 50,
	resizeMode: "contain",
    },
    inputContainer: {
	width: "55%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: 'flex-start',
	borderWidth: 1,
	borderColor: colors.primary,
	paddingHorizontal: 10,
	paddingVertical: 6,
	borderRadius: 8,
    },
    text: {
	fontFamily: fonts.poppins_medium,
	marginTop: Platform.OS != "ios" ? 3 : 0,
    },
    tagText: {
	position: "absolute",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: colors.secondary,
	width: 20,
	height: 20,
	borderRadius: 30,
	right: -10,
	top: -5,
	zIndex: 1
    },
    heartContainer:{
	alignItems:"center",
	justifyContent:"flex-end",
	marginLeft: 15,
    },
    back_svg:{
	width:25,
	height:25,
	opacity:0.8
    },
    svg:{
	width:25,
	height:25,
	opacity:0.7
    }
})

export default HeaderCompo
