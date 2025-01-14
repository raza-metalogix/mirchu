import { View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import HamburgerSvg from "../assets/svgs/HamburgerSvg";
import { logo } from "../utilities/images";

const HeaderCompo = () => {
	return (
		<View style={_style.container}>
			<View style={_style.svgContainer}>
				<TouchableOpacity>
					<HamburgerSvg styles={_style.svg} />
				</TouchableOpacity>
			</View>
			<Image source={logo} style={_style.image} />
		</View>
	);
}

const _style = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		position: "relative"

	},
	image: {
		width: 200,
		height: 100,
		resizeMode: "contain",
	},
	svgContainer: {
		position: "absolute",
		left: 20,
	},
	svg: {
		width: 30,
		height: 30
	}
})

export default HeaderCompo