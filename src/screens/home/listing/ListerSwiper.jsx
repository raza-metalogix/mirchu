import { Dimensions, Image, StyleSheet, View, Platform } from "react-native";
import { swipeImg } from "../../../utilities/images"
import { SwiperFlatList } from 'react-native-swiper-flatlist';
const ListerSwiper = () => {
    return (
	<View style={_styles.container}>
	<SwiperFlatList
	style={_styles.imgSwiper}
	data={swipeImg}
	showsHorizontalScrollIndicator={false}
	horizontal={true}
	autoplay={true}
	autoplayLoop={true}
	keyExtraction={(_, index) => index.toString()}
	renderItem={({ item }) =>
	    <View
	    style={{
		width: Dimensions.get("screen").width,
		    height: 160,
		    alignItems: 'center'
	    }}
	    >
	    <View
	    style={_styles.imgMajor}
	    >
	    <Image
	    style={_styles.imgContainer}
	    source={item}
	    />
	    </View>
	    </View>
	}
	/>
	</View>
    )
}

const _styles = StyleSheet.create({
    container: {
	alignItems: "center",
	marginTop: 40,
    },
    imgSwiper: {
    },
    imgMajor: {
	borderRadius: 15,
	height: Platform.OS == 'ios' ? 130 : 160,
	overflow: "hidden",
	justifyContent: "center",
	alignItems: "center"
    },
    imgContainer: {
	width: Dimensions.get("screen").width * 0.92,
	height: 160,
	resizeMode: 'contain',
	borderRadius: 10,
    }
})

export default ListerSwiper
