import {TouchableOpacity, StyleSheet} from "react-native"
import ArrowTick from "../../../../assets/svgs/ArrowTick"
import colors from "../../../../utilities/color"

const Box = ({enable,handlePress}) => {
    return (
	    <TouchableOpacity 
		activeOpacity={0.7}
		onPress={handlePress}
		style={[_styles.box, enable && {
		    backgroundColor:colors.secondary,
		    borderWidth:0,
		}]}
	    >
			<ArrowTick style={{width:15,height:15}}/>
	    </TouchableOpacity>
    )
}

const _styles = StyleSheet.create({
    box:{
	width:18,
	height:18,
	borderWidth:1,
	borderColor:"#666699",
	borderRadius:5,
	marginRight:12,
	alignItems:'center',
	justifyContent:"center"
    },
})

export default Box
