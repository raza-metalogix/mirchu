import { View, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import { listCategoryImgs } from "../../../utilities/images";
const ListCategroy = () => {
	return (
		<View style={_styles.container}>
			<FlatList
				scrollEnabled={false}
				data={listCategoryImgs}
				horizontal
				ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
				keyExtractor={(_, index) => index.toString()}
				renderItem={({ item }) =>
					<TouchableOpacity
						activeOpacity={0.5}
					>
						<Image
							style={_styles.img}
							source={item}
						/>
					</TouchableOpacity>

				}
			/>
		</View>
	);
}

const _styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		justifyContent: "center",
		paddingLeft: 8
	},
	img: {
		width: Dimensions.get("screen").width / 4.5,
		height: 80,
		resizeMode: 'cover'
	}
})

export default ListCategroy
