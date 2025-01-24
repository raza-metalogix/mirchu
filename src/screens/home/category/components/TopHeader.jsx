import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native"
import BackSvgVector from "../../../../assets/svgs/back_svg_vector"
import {useNavigation} from "@react-navigation/native"
import {logo} from "../../../../utilities/images"
import {HeartSvg} from "../../../../assets/svgs/HeartSvg"
import CartSvg from "../../../../assets/svgs/CartSvg"
import SearchSvg from "../../../../assets/svgs/SearchSvg"
import colors from "../../../../utilities/color"
import fonts from "../../../../utilities/fonts"
import routes from "../../../../navigations/routes"

const TopHeader  = ({show}) => {
    const nav = useNavigation()
    return (
	<View style={_styles.container}>
	
	<View style={_styles.oneContainer}>
	{show && 
	<TouchableOpacity 
	    onPress={()=> nav.goBack()}
	    style={{marginRight:10,}}
	>
	    <BackSvgVector styles={_styles.back_svg} />	
	</TouchableOpacity>
	}

		{/* Logo */}
	<Image
	    source={logo}
	    style={[_styles.logo,show &&{marginLeft:5}]}
	/>
	</View>

	<View style={_styles.twoContainer}>
	{/* search */}
	<TouchableOpacity 
	    style={{marginRight:15,}}
	>
	    <SearchSvg styles={_styles.back_svg} />	
	</TouchableOpacity>
	{/* heart */}
	<TouchableOpacity 
	    onPress={()=>nav.navigate(routes.fav_items)}
	    style={{marginRight:15,}}
	>
	<View style={_styles.tag_con}>
	<Text style={_styles.tag_txt}>15</Text>
	</View>
	    <HeartSvg style={_styles.back_svg} />	
	</TouchableOpacity>
	{/* cart */}

	</View>

	</View>
    );
}

const _styles = StyleSheet.create({
    container:{
	flexDirection:"row",
	alignItems:"center",
	justifyContent:"space-between",
	paddingRight:0,
    },
    oneContainer:{
	flexDirection:"row",
	alignItems:'center'
    },
    twoContainer:{
	flexDirection:"row",
	alignItems:"center"
    },
    back_svg:{
	width:30,
	height:30,
	opacity:0.8
    },
    logo:{
	width:150,
	resizeMode:"contain"
    },
    tag_con:{
	backgroundColor: colors.secondary,
	alignItems:"center",
	justifyContent:"center",
	width:25,
	height:25,
	borderRadius:15,
	position:"absolute",
	right:-12,
	top:-8,
	zIndex:1,
    },
    tag_txt:{
	fontFamily: fonts.poppins_medium,
	color:"white",
	fontSize: 11,
    }
})

export default TopHeader;
