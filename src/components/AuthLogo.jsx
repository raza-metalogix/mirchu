import { View, Image, StyleSheet, Platform, TouchableOpacity } from "react-native"
import ChavronSvg from "../assets/svgs/ChevronSvg";
import { logo } from "../utilities/images";

const AuthLogo = ({ handlePress }) => {
	return (
		<View style={_styles.container}>
			<TouchableOpacity
				onPress={handlePress}
				style={{ width: 25 }}
			>
				<ChavronSvg styles={_styles.svg} />
			</TouchableOpacity>

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
		padding: 20,
		marginTop: Platform.OS == "ios" ? 40 : 0,
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
		width: 25,
		height: 25
	}
})

export default AuthLogo;
