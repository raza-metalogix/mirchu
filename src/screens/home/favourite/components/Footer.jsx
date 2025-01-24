import {View, Text, TouchableOpacity, Platform, StyleSheet, Dimensions} from "react-native"
import {useNavigation} from "@react-navigation/native"
import colors from "../../../../utilities/color"
import fonts from "../../../../utilities/fonts"
import routes from "../../../../navigations/routes"

const Footer = () =>{
    const nav = useNavigation()
    return(
	<View style={_styles.container}>
	<TouchableOpacity 
		style={_styles.btn}
		onPress={()=>nav.navigate(routes.tab)}
	    >
	    <Text style={_styles.btn_txt}>Explore More</Text>
	</TouchableOpacity>
	</View>
    );
}

const _styles = StyleSheet.create({
    container:{
	position:"absolute",
	backgroundColor:"white",
	width:Dimensions.get("screen").width,
	bottom:0,
	left:0,
	zIndex:1,
	paddingHorizontal:20,
	paddingVertical:Platform.OS =="ios" ? 20: 10,
	flexDirection:'row',
	justifyContent:"flex-end",
	alignItems:"center"
    },
    btn:{
	paddingVertical: Platform.OS == "ios" ? 20 : 10,
	paddingHorizontal:20,
	marginLeft:20,
	alignItems:"center",
	justifyContent:"center",
	backgroundColor: colors.secondary,
	borderRadius:10,
    },
    btn_txt:{
	color:"white",
	fontFamily: fonts.poppins_semiBold,
	fontSize:16,
    }
})

export default Footer;
