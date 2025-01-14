import { useNavigation } from "@react-navigation/native";
import { StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthContext from "../../../components/AuthContext";
import AuthLogo from "../../../components/AuthLogo";
import routes from "../../../navigations/routes";
import OPTSection from "./OPTSection";

const OPTScreen = () => {
	const nav = useNavigation()
	return (
		<SafeAreaProvider>
			<StatusBar backgroundColor="white" barStyle="dark-content" />
			<View style={_styles.container}>
				{/* image */}
				<AuthLogo handlePress={() => nav.goBack()} />
				{/* heading */}
				<AuthContext context="Enter Verification Code" />
				{/* Forms */}
				<OPTSection handlePress={() => nav.navigate(routes.auth_change_pas)} />
				{/* Footer */}
			</View>
		</SafeAreaProvider>

	);
}


const _styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
})

export default OPTScreen
