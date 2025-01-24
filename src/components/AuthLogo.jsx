import { View, Image, StyleSheet, Platform, TouchableOpacity } from "react-native"
import ChavronSvg from "../assets/svgs/ChevronSvg";
import { logo } from "../utilities/images";

const AuthLogo = ({ handlePress,show }) => {
    return (
	<View style={_styles.container}>
	{!show && 
	    <TouchableOpacity
	    onPress={handlePress}
	    style={{ width: 20 }}
	    >
	    <ChavronSvg styles={_styles.svg} />
	    </TouchableOpacity>
	}
	<View
	style={_styles.imgContainer}
	>
	<Image
	source={logo}
	style={_styles.image}
	/>
	<View />
	</View>
	</View>
    );
}

const _styles = StyleSheet.create({
    container: {
	paddingHorizontal: 20,
    },
    imgContainer: {
	alignItems: "center",
	justifyContent: "space-between",
    },
    image: {
	width: 200,
	height: 100,
	resizeMode: "contain",
    },
    svg: {
	width: 20,
	height: 20,
	opacity: 0.8
    }
})

export default AuthLogo;
