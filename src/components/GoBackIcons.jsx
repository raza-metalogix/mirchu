import { StyleSheet, TouchableOpacity } from 'react-native';
import ChavronSvg from "../assets/svgs/ChevronSvg";
const GoBackIcon = ({ handlePress }) => {
	return (
		<TouchableOpacity
			onPress={handlePress}
			style={_styles.container}
		>
			<ChavronSvg styles={_styles.svg} />
		</TouchableOpacity>
	);
}

const _styles = StyleSheet.create({
	container: {
		position: "absolute",
		backgroundColor: "white",
		width: 45,
		height: 45,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 30,

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
		elevation: 4,
	},
	svg: {
		width: 20,
		height: 20
	}
})

export default GoBackIcon
