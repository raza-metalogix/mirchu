import {View, Text, FlatList, TouchableOpacity, StyleSheet} from "react-native"
import fonts from "../../../../utilities/fonts"
import DeleteSvg from "../../../../assets/svgs/delete_svg"

const Context = () => {
    return(
	<View style={_styles.container}>
	<Text style={_styles.heading}>Cart</Text>

	<TouchableOpacity>
	    <DeleteSvg style={_styles.svg} />
	</TouchableOpacity>

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
    heading:{
	fontSize:25,
	fontFamily:fonts.poppins_semiBold,
	color:"black"
    },
    svg:{
	width:25,
	height:25,
	opacity:0.7
    }
})

export default Context;
