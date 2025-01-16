import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import Animated, { useSharedValue } from "react-native-reanimated"
const Description = () => {
	const moveX = useSharedValue(0);
	const handlePress = () => {
		moveX.value = moveX.value + 150
	}
	return (
		<View style={_styles.container}>
			<View style={{ flexDirection: "row" }}>
				<TouchableOpacity
					style={_styles.btnContainer}
					onPress={handlePress}
				>
					<Text style={_styles.text}>Description</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={[{ marginLeft: 30 }, _styles.btnContainer]}
					onPress={handlePress}
				>
					<Text style={_styles.text}>Review</Text>
				</TouchableOpacity>
			</View>
			<View>
				<Animated.View style={{
					width: 100,
					height: 5,
					backgroundColor: "black",
					transform: [{ translateX: moveX.value }]
				}} />

				<View style={{
					borderWidth: 1
				}} />
			</View>

		</View >
	);
}

const _styles = StyleSheet.create({
	container: {
		marginTop: 20,
	},
	btnContainer: {
		width: 100,
		height: 50,
		alignItems: "center",
		justifyContent: "center"
	},
	text: {
		fontSize: 17,
		color: "black",
		fontWeight: "600"
	}
})

export default Description
