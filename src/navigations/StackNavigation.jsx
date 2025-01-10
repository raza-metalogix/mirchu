import { createStackNavigator } from "@react-navigation/stack"
import LoginScreen from "../screens/login/LoginScreen";
import WelcomeScreen from "../screens/welcome/WelcomeScreen";
import routes from "./routes";

const Stack = createStackNavigator()

const StackNavigation = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={routes.nav_welcome} component={WelcomeScreen} />
			<Stack.Screen name={routes.auth_login} component={LoginScreen} />
			<Stack.Screen name={routes.auth_register} component={LoginScreen} />
		</Stack.Navigator>
	);
}
export default StackNavigation
