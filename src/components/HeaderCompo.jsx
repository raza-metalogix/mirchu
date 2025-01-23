import { View, Image, StyleSheet, TouchableOpacity, Platform, Text } from "react-native";
import { logo } from "../utilities/images";
import SearchSvg from "../assets/svgs/SearchSvg"
import { HeartSvg } from "../assets/svgs/HeartSvg"
import colors from "../utilities/color"
import fonts from "../utilities/fonts"
import { useNavigation } from "@react-navigation/native"
import routes from "../navigations/routes"
const HeaderCompo = () => {
    const nav = useNavigation()
    return (
	<View style={_style.container}>

	<Image source={logo} style={_style.image} />

	<View
	style={{flexDirection:"row", alignItems:"center"}}
	>
	<TouchableOpacity
	onPress={()=> nav.navigate(routes.search)}
	>
	    <SearchSvg  /> 
	</TouchableOpacity>

	<TouchableOpacity
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
		height: 25
	}}
	/>
	</View>
	</TouchableOpacity>

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
	borderBottomColor: "#e6e6e6",
	borderBottomWidth: 1,
	paddingHorizontal: 20,
	paddingBottom: 5,
    },
    image: {
	width: "30%",
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
    }
})

export default HeaderCompo
