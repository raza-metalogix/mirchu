import { View, Image, Dimensions, StyleSheet } from "react-native"
import { SwiperFlatList } from "react-native-swiper-flatlist";
const ImageSwiper = () => {
	const imgsContext = [
		"https://mirchu.pk/cdn/shop/files/1_ecb03966-d7b8-4def-a675-eb09e79c691c.png?v=1722244521&width=360",
		"https://mirchu.pk/cdn/shop/files/1708200358.png?v=1722244522&width=360",
		"https://mirchu.pk/cdn/shop/files/1708200485.png?v=1722244522&width=360",
		"https://mirchu.pk/cdn/shop/files/1708200519.png?v=1722244522&width=360",
		"https://mirchu.pk/cdn/shop/files/1708200526.png?v=1722244522&width=360"
	]
	return (
		<View style={_style.container}>
			<SwiperFlatList
				index={2}
				showPagination
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
	img: {
		width: Dimensions.get("screen").width,
		height: 360,
		resizeMode: "cover"
	}
})

export default ImageSwiper
