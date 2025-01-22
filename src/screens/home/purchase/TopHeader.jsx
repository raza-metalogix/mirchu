import {
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    TextInput,
    Text,
} from "react-native"
import BackSvgVector from "../../../assets/svgs/back_svg_vector"
import { useState } from "react"
import colors from "../../../utilities/color"
import SearchSvg from "../../../assets/svgs/SearchSvg"
import CartSvg from "../../../assets/svgs/CartSvg"
import ShareSvg from "../../../assets/svgs/ShareSvg"
import { useNavigation } from "@react-navigation/native"
import routes from "../../../navigations/routes"

const TopHeader = () => {
    const nav = useNavigation()
    return (
	<View style={_styles.container}>
	<TouchableOpacity onPress={() => nav.goBack()}>
	  <BackSvgVector styles={_styles.svg} />
	</TouchableOpacity>

	<View 
	style={{
	    flexDirection:"row",
		alignItems:"center"
	}}
	>
	<TouchableOpacity 
	style={{marginRight:20,}}
	onPress={()=> nav.navigate(routes.search)}
	>
	<SearchSvg  style={{opacity:0.8}}/>	
	</TouchableOpacity>
    
	<TouchableOpacity
	onPress={()=> nav.navigate(routes.cart)}
	style={_styles.cartContainer}>
	<CartSvg
	color="black"
	style={{
	    width: 30,
		height: 30,
		opacity: 0.8,
	}}
	/>
	<View style={_styles.cartCount}>
	<Text
	style={{
	    color: "white",
		fontSize: 10,
	}}
	>
	12
	</Text>
	</View>
	</TouchableOpacity>

	</View>

	</View>
    );
}

const _styles = StyleSheet.create({
    container: {
	width: Dimensions.get("screen").width,
	height: 65,
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
	paddingHorizontal: 20,
	backgroundColor: "white"
    },
    svg: {
	width: 30,
	height: 30,
	opacity:0.8
    },
    inputContainer: {
	marginLeft: 10,
	width: 210,
	borderWidth: 1,
	borderColor: colors.primary,
	borderRadius: 10,
	height: 40,
	paddingHorizontal: 12,
	flexDirection: "row",
	alignItems: "center",
    },
    input: {
	marginLeft: 5,
	width: "100%",
	height: "100%",
	color: "black",
    },
    cartContainer: {
	position: "relative",
    },
    cartCount: {
	position: "absolute",
	top: -5,
	right: -10,
	backgroundColor: colors.secondary,
	borderRadius: 30,
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center"
    }
})

export default TopHeader
