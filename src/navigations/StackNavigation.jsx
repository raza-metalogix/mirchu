import { createStackNavigator } from "@react-navigation/stack"
import ChangePassword from "../screens/auth/change_pass/ChangePassword";
import ConfrimEmail from "../screens/auth/confirm_email/ConfirmEmail";
import LoginScreen from "../screens/auth/login/LoginScreen";
import TabNavigation from "./TabNavigation"
import OPTScreen from "../screens/auth/opt/OPTScreen";
import RegisterScreen from "../screens/auth/register/RegisterScreen";
import WelcomeScreen from "../screens/welcome/WelcomeScreen";
import PurchaseScreen from "../screens/home/purchase/PurchaseScreen";
import routes from "./routes";

const Stack = createStackNavigator()

const StackNavigation = () => {
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
		//initialRouteName={routes.home_purchase}
		>
			{/* Auth Screens */}
			<Stack.Screen name={routes.nav_welcome} component={WelcomeScreen} />
			<Stack.Screen name={routes.auth_login} component={LoginScreen} />
			<Stack.Screen name={routes.auth_register} component={RegisterScreen} />
			<Stack.Screen name={routes.auth_confirm} component={ConfrimEmail} />
			<Stack.Screen name={routes.auth_opt_pass} component={OPTScreen} />
			<Stack.Screen name={routes.auth_change_pas} component={ChangePassword} />
			<Stack.Screen name={routes.home_purchase} component={PurchaseScreen} />
			{/* home Screen */}
			<Stack.Screen name={routes.tab} component={TabNavigation} />
		</Stack.Navigator>
	);
}
export default StackNavigation
