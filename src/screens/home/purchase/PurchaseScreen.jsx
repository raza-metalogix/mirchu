import { StyleSheet, View, Platform, FlatList } from "react-native"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native"
import ImageSwiper from "./ImageSwiper"
import Context from "./Context"
import Rating from "./Rating"
import PurchaseBtn from "./PurchaseBtn"
import PolicySection from "./PolicySection"
import Description from "./Description"
import TopHeader from "./TopHeader"

const PurchaseScreen = () => {
	const nav = useNavigation()
	return (
		<SafeAreaProvider style={_styles.container}>
			<TopHeader handlePress={() => nav.goBack()} />
			<FlatList
				data={[1]}
				keyExtraction={item => item.toString()}
				showsVerticalScrollIndicator={false}
				renderItem={() =>
					<>
						<ImageSwiper />
						<View style={{ paddingHorizontal: 20 }}>
							<Context />
							<Rating />
							<PolicySection />
							<Description />
						</View>
					</>
				}
			/>
			<PurchaseBtn />
		</SafeAreaProvider>
	);
}

const _styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		paddingTop: Platform.OS == "ios" ? 40 : 0,
	},
})
export default PurchaseScreen
