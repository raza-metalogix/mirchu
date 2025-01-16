import { View, Text, StyleSheet, FlatList, Platform } from "react-native"
import fonts from "../../../utilities/fonts"
const Description = () => {
	const name = "Gener"
	return (
		<View style={_styles.container}>
			<Text style={_styles.heading} >Description</Text>
			<Text
				style={{
					color: "black",
					opacity: 0.6,
					fontFamily: fonts.poppins_regular,
					marginTop: 10,
				}}
			>{desc}</Text>
			<List heading="Benefits of Gener" list={bene} />
			<List heading="Usage of Gener" list={usage} />
			<List
				heading="Nutritional Value of Ginger (per 100 grams)"
				list={nutri}
				style={{ flexDirection: "row" }}
				addMargin={10}
			/>

		</View>
	);
}

const List = ({ heading, list, style, addMargin }) => {
	return (
		<View style={{ marginTop: 20 }}>
			<Text style={_styles.heading} >{heading}</Text>
			<FlatList
				data={[...Array(7)]}
				enableScroll={false}
				showsVerticalScrollIndicator={false}
				keyExtraction={(_, index) => index.toString()}
				renderItem={() =>
					<View style={[{ marginTop: 10 }, style]}>
						<Text
							style={_styles.listHeading}
						>{list.heading}:</Text>
						<Text
							style={[_styles.listText, { marginLeft: addMargin }]}

						>{list.txt}</Text>
					</View>
				}
			/>

		</View>
	);
}

const _styles = StyleSheet.create({
	container: {
		marginTop: 30,
	},
	heading: {
		fontFamily: fonts.poppins_semiBold,
		color: "black",
		fontSize: 17,
	},
	listHeading: {
		fontSize: 16,
		color: "black",
		fontFamily: fonts.poppins_medium,
		opacity: 0.7
	},
	listText: {
		color: "black",
		marginTop: Platform.OS == "ios" ? 10 : 0,
		opacity: 0.7,
		fontFamily: fonts.poppins_regular
	}
})

export default Description


const desc = `Ginger (Zingiber officinale) is a flowering plant whose rhizome, ginger root, or ginger, is widely used as a spice and a folk medicine. It is believed to have originated in the tropical rainforests of the Indian subcontinent and Southeast Asia. Historical records suggest that ginger has been cultivated and used for over 5,000 years. It was highly prized in ancient China and India for its medicinal properties. Ginger was exported to Europe via the spice trade and became widely used in the Roman Empire. During the Middle Ages, it was an expensive commodity, often used to make sweets
`
const bene = {
	heading: "Anti-Inflammatory and Antioxidant",
	txt: "Ginger contains gingerol, a substance with powerful anti-inflammatory and antioxidant effects, which can help reduce oxidative stress and inflammation in the body."
}

const usage = {
	heading: "Culinary Uses",
	txt: "Ginger is used globally in a variety of culinary dishes, from savory to sweet. It is a key ingredient in Asian cuisines, used in curries, soups, stir-fries, and marinades. It is also used in baking, especially in gingerbread, cakes, and cookies."
}


const nutri = {
	heading: "Calories",
	txt: "80 kcal"

}

