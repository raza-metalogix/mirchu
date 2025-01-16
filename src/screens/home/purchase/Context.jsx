import { View, Text, StyleSheet } from "react-native"
import colors from "../../../utilities/color"
const Context = () => {
	return (
		<View style={_styles.container}>
			<Text
				style={_styles.title}
			>
				Buy Coriander-Dhanya (سبز دھنیا bunch
			</Text>

			<View style={_styles.price_container}>
				<Text style={_styles.price}>Rs 59</Text>

				<View style={_styles.price_sub_cont}>
					<Text style={_styles.cutPrice}>Rs 70</Text>
					<Text style={_styles.off}>16%off</Text>
				</View>
			</View>

		</View>
	);
}

const _styles = StyleSheet.create({
	container: {
		marginTop: 20,
	},
	title: {
		color: "black",
		fontSize: 17,
		fontWeight: "600"
	},
	price_container: {
		marginTop: 7,
		flexDirection: "row"
	},
	price_sub_cont: {
		marginLeft: 12,
		flexDirection: "row"
	},
	price: {
		color: colors.primary,
		fontSize: 17,
		fontWeight: "600",
	},
	cutPrice: {
		textDecorationLine: "line-through",
		color: colors.secondary,
		fontSize: 14,
		fontWeight: "600"
	},
	off: {
		marginLeft: 5,
		color: colors.secondary,
		fontSize: 14,
	}
})

export default Context
