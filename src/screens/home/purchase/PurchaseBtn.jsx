import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native"
import colors from "../../../utilities/color"
import fonts from "../../../utilities/fonts"
import { logo } from "../../../utilities/images"
import useStore from "./store"
const PurchaseBtn = () => {
    const {setShowCart} = useStore()
    return (
	<View style={_styles.container}>
	<Image
	source={logo}
	style={{
	    width: "20%",
		resizeMode: "contain"
	}}
	/>
	<TouchableOpacity
	onPress={()=> setShowCart("buy")}
	activeOpacity={0.7}
	style={_styles.btn}
	>
	<Text style={{
	    color: "white",
		fontFamily: fonts.poppins_semiBold,

	}}>Buy Now</Text>
	</TouchableOpacity>

	<TouchableOpacity
	onPress={()=> setShowCart("cart") }
	activeOpacity={0.7}
	style={[_styles.btn, { backgroundColor: colors.primary }]}
	>
	<Text style={{
	    color: "white",
		fontFamily: fonts.poppins_semiBold,

	}}>Add To Cart</Text>
	</TouchableOpacity>

	</View>
    );
}

const _styles = StyleSheet.create({
    container: {
	flexDirection: 'row',
	alignItems: "center",
	justifyContent: "space-between",
	paddingHorizontal: 20,
	paddingVertical: 5,
	borderWidth: 1,
	borderColor: "#e6e6e6",
    },
    btn: {
	width: "35%",
	height: 50,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: colors.secondary,
	borderRadius: 10,

    }
})

export default PurchaseBtn
