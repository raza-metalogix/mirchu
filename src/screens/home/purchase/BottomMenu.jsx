import { Dimensions,
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    FlatList,
} from "react-native"
import {imgsContext} from "./ImageSwiper"
import CrossSvg from "../../../assets/svgs/cross_svg"
import { swipeImg } from "../../../utilities/images"
import colors from "../../../utilities/color"
import Btns from "../../../components/Btns"
import fonts from "../../../utilities/fonts"
import routes from "../../../navigations/routes"
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withDelay,
    useDerivedValue
} from 'react-native-reanimated'
import useStore from "./store"
import {useNavigation} from "@react-navigation/native"

const BottomMenu = () => {
    const nav = useNavigation()
    const {showCart, setShowCart} = useStore()
    const height = useSharedValue(0)
    const progress = useDerivedValue(() =>
	withTiming(showCart ? 0 : 1, { duration: 500 })
    )
    const sheetStyles = useAnimatedStyle(() => ({
	transform: [{ translateY: progress.value * 2 * height.value }]
    }))

    const backdropStyle = useAnimatedStyle(() => ({
	opacity: 0.3 - progress.value,
	zIndex: showCart 
	? 1
	: -1,
    }));
    return (
	<>
	<TouchableWithoutFeedback
	onPress={()=> setShowCart("")}
	>
	<Animated.View
	style={[{
	    position: "absolute",
	    width: "100%",
	    height: "200%",
	    backgroundColor: "black",
	    top: -100,
	}, backdropStyle]}
	/>
	</TouchableWithoutFeedback>
	<Animated.View
	onLayout={(e) => height.value += e.nativeEvent.layout.height}
	style={[_styles.container, sheetStyles]}
	>
	    <View>
		<TopHeader  />
		<ImgList />
		<QuantityCounter />
	    </View>
	<View style={{height:"50%",justifyContent:"flex-end"}}>
	<Btns 
	handlePress={()=> showCart != "cart" && nav.navigate(routes.main_checkout) }
	text={showCart == "cart" ? "Add to Cart" : "Buy"}
	color={showCart == "cart"  ? colors.primary : colors.secondary}
	textColor="white"
	/>

	</View>
	</Animated.View>
	</>
    );
}

const ImgList = ()=> {
    const store = useStore();
    return(
	<View
	style={{
	    marginTop:20,
	}}
	>
	<FlatList 
	data={imgsContext}
	horizontal
	keyExtraction={(_,index)=> index.toString()}
	showsHorizontalScrollIndicator={false}
	ItemSeparatorComponent={()=> <View style={{width:10}}/>}
	renderItem={({item,index})=> 
	    <TouchableOpacity
	    onPress={()=>store.handleSelect(index)}
	    activeOpacity={0.5}
	    style={{
		borderWidth:1,
		borderColor:index == store.select ? colors.secondary : "white"
	    }}
	    >
	    <Image
	    source={{uri:item}} 
	    style={{
		width:100,
		    height:100,
	    }}/>
	    </TouchableOpacity>
	}
	/>
	</View>
    );
}

const TopHeader = () => {
    const {select, setShowCart} = useStore();
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
	<Image source={{uri:imgsContext[select]}}
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
	<View
	style={{flexDirection:"row"}}
	>
	<Text style={_styles.sub_price}>Rs. 12,499</Text>
	<View
	style={{
	    backgroundColor: "#fde7e8",
		alignItems: 'center',
		justifyContent: "center",
		marginLeft: 5,
		paddingHorizontal: 5,
	}}>
	<Text style={_styles.off}>16% off</Text>
	</View>
	</View>

	<Text style={_styles.sub_name}>Buy Apple Gala (گالا) - 1kg</Text>

	</View>
	</View>

	<TouchableOpacity onPress={()=> setShowCart("")}>
	<CrossSvg style={{ width: 25, height: 25, opacity: 0.7 }} />
	</TouchableOpacity>
	</View>
    );
}

const QuantityCounter = () =>{
    const {quantity, setQuantity} = useStore()
    return(
	<View
	style={{
	    marginTop:25,
	    flexDirection:"row",
		alignItems:"center",
		justifyContent:"space-between"
	}}
	>
	 <Text
	    style={{
		fontSize:16,
		color:'black',
		fontFamily: fonts.poppins_medium
	    }}
	>Quantity</Text>
	
	<View style={{flexDirection:"row"}}>

	<TouchableOpacity
	activeOpacity={0.7}
	style={{
	    width:25,
		height:25,
	    backgroundColor: "#c2c2d6",
		alignItems:"center",
		justifyContent:"center",
		marginRight:15,
		borderRadius:4,
	}}
	onPress={()=> quantity > 1 && setQuantity(quantity-1)}
	>
	<Text style={{fontSize:16, color:"white"}}>-</Text>
	</TouchableOpacity>

	<Text style={{fontSize:16, color:"black"}}>{quantity}</Text>

	<TouchableOpacity
	activeOpacity={0.7}
	style={{
	    width:25,
		height:25,
	    backgroundColor: "#c2c2d6",
		alignItems:"center",
		justifyContent:"center",
		marginLeft:15,
		borderRadius:4,
	}}
	onPress={()=> quantity < 7 && setQuantity(quantity+1)}>
	<Text style={{fontSize:16, color:"white"}}>+</Text>
	</TouchableOpacity>

	</View>

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
	textDecorationLine: "line-through",
	color: "#808080",
	fontSize: 12,
	fontFamily: fonts.poppins_medium
    },
    sub_name:{
	marginTop:5,
	color: "#808080",
	fontSize: 12,
	fontFamily: fonts.poppins_medium
    },
    off:{
	fontFamily: fonts.poppins_medium,
	color: colors.secondary,
	backgroundColor: "#fde7e8",
	fontSize: 12,
    }
})

export default BottomMenu
