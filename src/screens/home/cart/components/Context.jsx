import {View, Text, FlatList, TouchableOpacity, StyleSheet} from "react-native"
import fonts from "../../../../utilities/fonts"
import DeleteSvg from "../../../../assets/svgs/delete_svg"
import BackSvgVector from "../../../../assets/svgs/back_svg_vector"
import {useNavigation} from "@react-navigation/native"
const Context = ({show, txt}) => {
    const nav = useNavigation()
    return(
	<View style={_styles.container}>
	<View style={_styles.sub_container}>
	{show  &&
	<TouchableOpacity
		onPress={()=> nav.goBack()}
	    >
	    <BackSvgVector styles={_styles.svg} />
	</TouchableOpacity>
	}
	<Text style={[_styles.heading, show&&{marginLeft:15,}]}>{txt || "Cart"}</Text>
	
	</View>


	</View>
    );
}

const _styles = StyleSheet.create({
    container:{
	flexDirection:"row",
	alignItems:"center",
	justifyContent:"space-between",
	marginBottom:15,
    },
    sub_container:{
	flexDirection:"row",
	alignItems:"center"
    },
    heading:{
	fontSize:25,
	fontFamily:fonts.poppins_semiBold,
	color:"black",
    },
})

export default Context;
