import { Dimensions, View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import CrossSvg from "../../../assets/svgs/cross_svg"
import { swipeImg } from "../../../utilities/images"
import colors from "../../../utilities/color"
import fonts from "../../../utilities/fonts"
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withDelay,
    useDerivedValue
} from 'react-native-reanimated'
const BottomMenu = ({ show, handlePress }) => {
    const height = useSharedValue(0)
    const progress = useDerivedValue(() =>
	withTiming(show ? 0 : 1, { duration: 500 })
    )
    const sheetStyles = useAnimatedStyle(() => ({
	transform: [{ translateY: progress.value * 2 * height.value }]
    }))

    const backdropStyle = useAnimatedStyle(() => ({
	opacity: 0.3 - progress.value,
	zIndex: show
	? 1
	: withDelay(500, withTiming(-1, { duration: 0 })),
    }));
    return (
	<>
	<Animated.View
	onPress={handlePress}
	style={[{
	    position: "absolute",
	    width: "100%",
	    height: "200%",
	    backgroundColor: "black",
	    top: -100,
	}, backdropStyle]}
	/>
	<Animated.View
	onLayout={(e) => height.value += e.nativeEvent.layout.height}
	style={[_styles.container, sheetStyles]}
	>
	<TopHeader handlePress={handlePress} />

	</Animated.View>
	</>
    );
}

const TopHeader = ({ handlePress }) => {
    return (
	<View
	style={{
	    flexDirection: "row",
		justifyContent: "space-between"
	}}
	>
	<View
	style={{
	    flexDirection: "row",
		justifyContent: "space-between"
	}}
	>
	<Image source={swipeImg[0]}
	style={{
	    width: 100,
		height: 100,
		resizeMode: "cover",
		borderRadius: 7
	}}
	/>
	<View style={{
	    marginLeft: 15,
	}}>
	<Text style={_styles.priceText}>Rs. 5,499</Text>
	<Text style={_styles.sub_price}>Rs. 12,499</Text>
	</View>
	</View>
	<TouchableOpacity onPress={handlePress}>
	<CrossSvg style={{ width: 25, height: 25, opacity: 0.7 }} />
	</TouchableOpacity>

	</View>
    );
}
const _styles = StyleSheet.create({
    container: {
	width: Dimensions.get("screen").width,
	height: "80%",
	backgroundColor: "white",
	position: "absolute",
	bottom: 0,
	zIndex: 3,
	padding: 20,
	borderTopRightRadius: 10,
	borderTopLeftRadius: 10,
    },
    priceText: {
	color: colors.secondary,
	fontSize: 20,
	fontFamily: fonts.poppins_semiBold
    },
    sub_price: {
    }
})

export default BottomMenu
