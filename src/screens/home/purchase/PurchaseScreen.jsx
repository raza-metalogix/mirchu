import { StyleSheet, LogBox, View, ScrollView, Platform } from "react-native"
import { useEffect } from "react"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import GoBackIcon from "../../../components/GoBackIcons"
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
	const handlePress = () => nav.goBack()
	useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
	}, [])
	return (
		<SafeAreaProvider style={_styles.container}>
			<TopHeader />
			<ImageSwiper />
			<View style={{ paddingHorizontal: 20 }}>
				<Context />
				<Rating />
				<PurchaseBtn />
				<PolicySection />
				<Description />
			</View>
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
