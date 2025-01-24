import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, StatusBar, ScrollView } from "react-native"
import { SafeAreaProvider,SafeAreaView } from "react-native-safe-area-context";
import AuthContext from "../../../components/AuthContext";
import AuthFooter from "../../../components/AuthFooter";
import AuthLogo from "../../../components/AuthLogo";
import routes from "../../../navigations/routes";
import LoginForm from "./LoginForm";
const LoginScreen = () => {
    const nav = useNavigation()
    return (
	<SafeAreaProvider>
	<SafeAreaView style={_styles.container}>
	<ScrollView
	automaticallyAdjustKeyboardInsets={true}
	   showsVerticalScrollIndicator={false}
	>
	<StatusBar backgroundColor="white" barStyle="dark-content" />
	{/* image */}
	<AuthLogo handlePress={() => nav.goBack()} show={true} />
	{/* heading */}
	<AuthContext context="Welcome back! Glad to see you, Again!" />
	{/* Forms */}
	<LoginForm handlePress={() => nav.navigate(routes.tab)} />
	{/* Footer */}
	<AuthFooter
	handlePress={() => nav.navigate(routes.auth_register)}
	context="Need an Account?"
	nav="sign up"
	/>
	</ScrollView>
	</SafeAreaView>
	</SafeAreaProvider>
    );
}
const _styles = StyleSheet.create({
    container: {
	flex: 1,
	backgroundColor: "white",
	paddingBottom:40,
    },
})
export default LoginScreen
