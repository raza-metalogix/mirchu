import { View, Text, StyleSheet, FlatList, Image, TouchableHighlight } from "react-native";
import colors from "../../../utilities/color";
import fonts from "../../../utilities/fonts";
import { productImg } from "../../../utilities/images";
const ListingProduct = ({ heading }) => {
	const context = [...Array(10)]
	const handlePress = () => console.log()
	return (
		<View style={_style.container}>
			<Text style={_style.heading}>{heading}</Text>
			<FlatList
				scrollEnabled={false}
				data={context}
				ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
				keyExtractor={(_, index) => index.toString()}
				renderItem={({ _, index }) =>
					<TouchableHighlight onPress={handlePress} key={index}>
						<Image
							source={productImg}
							style={_style.img}
						/>
					</TouchableHighlight>
				}
			/>
		</View>
	);
}

const _style = StyleSheet.create({
	container: {
		marginTop: 20,
		paddingHorizontal: 20,
	},
	heading: {
		fontSize: 18,
		fontFamily: fonts.roboto.bold,
		color: colors.textSecondary
	},
	img: {
		width: 80,
		height: 80,
	}
})

export default ListingProduct
