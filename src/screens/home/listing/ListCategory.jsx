import { View, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity, Text } from "react-native"
import { listCategoryImgs } from "../../../utilities/images";
import colors from "../../../utilities/color";
import fonts from "../../../utilities/fonts";
const ListCategroy = () => {
	return (
		<View style={_styles.container}>
			<Text style={_styles.heading}>Best Categories</Text>
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
	},
	heading: {
		fontSize: 18,
		fontFamily: fonts.poppins_bold,
		color: colors.textSecondary,
		marginBottom: 20,
	},
})

export default ListCategroy
