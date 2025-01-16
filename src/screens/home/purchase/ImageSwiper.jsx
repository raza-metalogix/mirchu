import { View, Image, Dimensions, Text, StyleSheet } from "react-native"
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { useRef, useState } from "react"
const ImageSwiper = () => {
	const imgsContext = [
		"https://mirchu.pk/cdn/shop/files/1_ecb03966-d7b8-4def-a675-eb09e79c691c.png?v=1722244521&width=360",
		"https://mirchu.pk/cdn/shop/files/1708200358.png?v=1722244522&width=360",
		"https://mirchu.pk/cdn/shop/files/1708200485.png?v=1722244522&width=360",
		"https://mirchu.pk/cdn/shop/files/1708200519.png?v=1722244522&width=360",
		"https://mirchu.pk/cdn/shop/files/1708200526.png?v=1722244522&width=360"
	]
	const ref = useRef(null)
	const [curr, setCurr] = useState(1)
	return (
		<View style={_style.container}>
			<View style={_style.counter}>
				<Text
					style={{ color: "white", fontSize: 13 }}
				>{curr} / 5</Text>
			</View>
			<SwiperFlatList
				ref={ref}
				index={0}
				onChangeIndex={({ index }) => setCurr(index + 1)}
				data={imgsContext}
				renderItem={({ item }) =>
					<Image
						source={{ uri: item }}
						style={_style.img}
					/>
				}
			/>
		</View>
	);
}

const _style = StyleSheet.create({
	container: {
		position: "relative"
	},
	img: {
		width: Dimensions.get("screen").width,
		height: 360,
		resizeMode: "cover"
	},
	counter: {
		position: "absolute",
		zIndex: 1,
		bottom: 10,
		right: 13,
		width: 50,
		height: 23,
		backgroundColor: "black",
		borderRadius: 30,
		alignItems: "center",
		justifyContent: "center",
		opacity: 0.7
	}
})

export default ImageSwiper
