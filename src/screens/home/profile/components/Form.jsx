import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native"
import fonts from "../../../../utilities/fonts"
import colors from "../../../../utilities/color"
const Form = ({img, svg, txt, border}) => {
    return (
	<View style={[_styles.container,
	    border && {
		paddingVertical:13,
		borderBottomWidth:1,
		borderColor: "#e0e0eb"
	    }
	]}>
	{svg}
	{img &&<View style={_styles.img_cont}>
		{img}
	     </View> }
	    <View style={[_styles.context_cont,(img ||svg) &&{marginLeft:7}]}>
		<Text style={_styles.heading}>{txt}</Text>
		<TouchableOpacity>
		    <Text style={_styles.edit}>Edit</Text>
		</TouchableOpacity>
	    </View>
	</View>
    )
}

const _styles = StyleSheet.create({
    container:{
	flexDirection:"row",
	alignItems:"center",
	paddingHorizontal:9,
    },
    img_cont:{
	width:55,
	height:55,
	borderRadius:30,
	overflow:"hidden"
    },
    img:{
	width:55,
	height:55,
    },
    context_cont:{
	flex:1,
	flexDirection:"row",
	justifyContent:"space-between",
	alignItems:"flex-end",
    },
    heading:{
	color:"black",
	fontFamily: fonts.poppins_medium,
	fontSize:14,
	opacity:0.7
    },
    edit:{
	color:"black",
	fontFamily: fonts.poppins_medium,
	fontSize:10,
	opacity:0.7
    }
})

export default Form;
