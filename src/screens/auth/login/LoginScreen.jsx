import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, StatusBar } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthContext from "../../../components/AuthContext";
import AuthFooter from "../../../components/AuthFooter";
import AuthLogo from "../../../components/AuthLogo";
import routes from "../../../navigations/routes";
import LoginForm from "./LoginForm";
const LoginScreen = () => {
	const nav = useNavigation()
	return (
		<SafeAreaProvider>
			<StatusBar backgroundColor="white" barStyle="dark-content" />
			<View style={_styles.container}>
				{/* image */}
				<AuthLogo handlePress={() => nav.goBack()} />
				{/* heading */}
				<AuthContext context="Welcome back! Glad to see you, Again!" />
				{/* Forms */}
				<LoginForm handlePress={() => nav.navigate(routes.auth_confirm)} />
				{/* Footer */}
				<AuthFooter
					handlePress={() => nav.navigate(routes.auth_register)}
					context="Need an Account?"
					nav="sign up"
				/>
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
export default LoginScreen
