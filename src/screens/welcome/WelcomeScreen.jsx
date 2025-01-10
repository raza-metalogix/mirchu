import { useNavigation } from "@react-navigation/native";
import { View, Text, SafeAreaView, StyleSheet, FlatList, StatusBar } from "react-native"
import Btns from "../../components/Btns";
import colors from "../../utilities/color";
import fonts from "../../utilities/fonts";
import context from "./context";
const WelcomeScreen = () => {
	const nav = useNavigation()

	return (
		<SafeAreaView style={_styles.container}>
			<StatusBar
				backgroundColor={colors.primary}
				barStyle="light-content"
			/>
			<View style={_styles.contextContainer}>
				<Text style={_styles.heading}>Mirchu</Text>
				<Text style={_styles.subHeading}>Best Online SuperMarket</Text>
			</View>

			<View style={_styles.listContainer}>
				<FlatList
					ItemSeparatorComponent={
						() => <View style={{ height: 30 }} />
					}
					data={context}
					renderItem={({ item }) =>
						<Btns
							text={item.text}
							handlePress={() => nav.navigate(item.route)}
							textColor={colors.primary}
						/>}
				/>
			</View>
		</SafeAreaView>

	);
}

const _styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.primary

	},
	contextContainer: {
		marginBottom: 80
	},
	heading: {
		textAlign: "center",
		color: colors.textPrimary,
		fontSize: 50,
		fontFamily: fonts.roboto.black,
		letterSpacing: 1.2
	},
	subHeading: {
		textAlign: "center",
		color: colors.textPrimary,
		fontFamily: fonts.montserrat.medium,
		fontSize: 16
	},
	listContainer: {
		height: 250,
	}
})

export default WelcomeScreen
