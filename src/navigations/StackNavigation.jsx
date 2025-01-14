import { createStackNavigator } from "@react-navigation/stack"
import ChangePassword from "../screens/auth/change_pass/ChangePassword";
import ConfrimEmail from "../screens/auth/confirm_email/ConfirmEmail";
import LoginScreen from "../screens/auth/login/LoginScreen";
import OPTScreen from "../screens/auth/opt/OPTScreen";
import RegisterScreen from "../screens/auth/register/RegisterScreen";
import WelcomeScreen from "../screens/welcome/WelcomeScreen";
import routes from "./routes";
import TabNavigation from "./TabNavigation";

const Stack = createStackNavigator()

const StackNavigation = () => {
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName={routes.home}
		>
			{/* Auth Screens */}
			<Stack.Screen name={routes.nav_welcome} component={WelcomeScreen} />
			<Stack.Screen name={routes.auth_login} component={LoginScreen} />
			<Stack.Screen name={routes.auth_register} component={RegisterScreen} />
			<Stack.Screen name={routes.auth_confirm} component={ConfrimEmail} />
			<Stack.Screen name={routes.auth_opt_pass} component={OPTScreen} />
			<Stack.Screen name={routes.auth_change_pas} component={ChangePassword} />
			<Stack.Screen name={routes.home} component={TabNavigation} />

			{/* home Screen */}
		</Stack.Navigator>
	);
}
export default StackNavigation
