import { View, Text, Image, StyleSheet } from "react-native"
const Rating = () => {
	return (
		<View>

			<View style={_styles.ratingIcon}>
				<Image
					source={{ uri: "https://mirchu.pk/cdn/shop/t/3/assets/star.png?v=109682652855224361591725598506" }}
					style={_styles.imgs}
				/>
				<Text style={{ marginLeft: 4 }}>4.8 | 5 sold</Text>
			</View>

			<View>

			</View>

		</View>
	);
}

const _styles = StyleSheet.create({
	ratingIcon: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 15,
	},
	imgs: {
		width: 20,
		height: 20,
		transform: [{ translateY: 2 }],
	}
})

export default Rating
