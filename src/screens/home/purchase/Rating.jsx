import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import { HeartSvg } from "../../../assets/svgs/HeartSvg"
import colors from "../../../utilities/color"
import { useState } from "react"
import ShareSvg from "../../../assets/svgs/ShareSvg"
const Rating = () => {
	const rat = [20, 10, 200, 100]
	const sold = [3.1, 1, 2.1, 1.2]
	return (
		<View style={_styles.container}>
			<View style={_styles.ratingIcon}>
				<Image
					source={{ uri: "https://mirchu.pk/cdn/shop/t/3/assets/star.png?v=109682652855224361591725598506" }}
					style={_styles.imgs}
				/>
				<Text style={{ marginLeft: 4, color: "black" }}> 4.8 ({rat[Math.floor(Math.random() * rat.length)]}) </Text>

				<Text style={{ marginLeft: 4, opacity: 0.3, color: "black" }}>|</Text>

				<Text style={{ marginLeft: 7, color: "black" }}>
					{sold[Math.floor(Math.random() * sold.length)]}k sold
				</Text>
			</View>
			{/* share and fav icons */}
			<RatingIcon />
		</View>
	);
}

const RatingIcon = () => {
	const [like, setLiked] = useState(false);
	return (
		<View style={_styles.iconsContainer}>
			<TouchableOpacity onPress={() => setLiked(!like)}>
				<HeartSvg
					style={{ width: 25, height: 25, opacity: like ? 1 : 0.8 }}
					color={like && colors.secondary} />
			</TouchableOpacity>

			<TouchableOpacity
				style={{ marginLeft: 20 }}
			>
				<ShareSvg
					style={{
						width: 30,
						height: 30,
						opacity: 0.8
					}}
				/>
			</TouchableOpacity>

		</View>
	);
}

const _styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 15,
	},
	ratingIcon: {
		flexDirection: "row",
		alignItems: "center",
	},
	imgs: {
		width: 20,
		height: 20,
		transform: [{ translateY: 2 }],
	},
	iconsContainer: {
		flexDirection: "row",
		alignItems: "center"
	}
})

export default Rating
