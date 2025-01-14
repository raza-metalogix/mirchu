import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, StatusBar } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthContext from "../../../components/AuthContext";
import AuthFooter from "../../../components/AuthFooter";
import AuthLogo from "../../../components/AuthLogo";
import routes from "../../../navigations/routes";
import RegisterForm from "./RegisterFrom";
const RegisterScreen = () => {
	const nav = useNavigation()
	return (
		<SafeAreaProvider>
			<StatusBar backgroundColor="white" barStyle="dark-content" />
			<View style={_styles.container}>
				{/* image */}
				<AuthLogo handlePress={() => nav.goBack()} />
				{/* heading */}
				<AuthContext context="Hello! Register to get started" />
				{/* Forms */}
				<RegisterForm handlePress={() => nav.navigate(routes.home)} />
				{/* register */}
				<AuthFooter
					handlePress={() => nav.navigate(routes.auth_login)}
					context="Already have an account?"
					nav="login"
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

export default RegisterScreen
