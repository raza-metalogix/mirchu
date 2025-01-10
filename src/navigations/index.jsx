import { NavigationContainer } from "@react-navigation/native"
import { useEffect } from "react";
import { Platform } from "react-native";
import SplashScreen from "react-native-splash-screen";
import StackNavigation from "./StackNavigation";
const ScreenNavigation = () => {
	useEffect(() => {
		if (Platform.OS === "android") return SplashScreen.hide()
	}, [])
	return (
		<NavigationContainer>
			<StackNavigation />
		</NavigationContainer>
	);
}
export default ScreenNavigation
