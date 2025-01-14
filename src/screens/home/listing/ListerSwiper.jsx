import { Dimensions, Image, StyleSheet, View } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist"
import { swipeImg } from "../../../utilities/images";
const ListerSwiper = () => {
	return (
		<SwiperFlatList
			autoplay
			autoplayDelay={2}
			autoplayLoop
			data={swipeImg}
			index={0}
			removeClippedSubviews={false}
			renderItem={({ item }) => (
				<Image
					style={_styles.imgContainer}
					source={item}
				/>
			)}
		/>
	);
}

const _styles = StyleSheet.create({
	imgContainer: {
		width: Dimensions.get("screen").width,
		height: 160,
		resizeMode: 'contain'
	}
})

export default ListerSwiper
