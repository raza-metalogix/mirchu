import { createStackNavigator } from "@react-navigation/stack"
import ChangePassword from "../screens/auth/change_pass/ChangePassword";
import ConfrimEmail from "../screens/auth/confirm_email/ConfirmEmail";
import LoginScreen from "../screens/auth/login/LoginScreen";
import TabNavigation from "./TabNavigation"
import OPTScreen from "../screens/auth/opt/OPTScreen";
import RegisterScreen from "../screens/auth/register/RegisterScreen";
import WelcomeScreen from "../screens/welcome/WelcomeScreen";
import PurchaseScreen from "../screens/home/purchase/PurchaseScreen";
import SearchScreen from "../screens/home/search/SearchScreen";
import CategoryListingScreen from "../screens/home/category/CategoryListingScreen" 
import CartScreen from "../screens/home/cart/CartScreen"
import FavItemScreen from "../screens/home/favourite/FavItemScreen"
import routes from "./routes";

const Stack = createStackNavigator()

const StackNavigation = () => {
    return (
	<Stack.Navigator
	screenOptions={{ headerShown: false }}
	// initialRouteName={routes.fav_items}
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
	<Stack.Screen name={routes.search} component={SearchScreen} />
	{/* other */}
	<Stack.Screen name={routes.main_categories} component={CategoryListingScreen} />
	<Stack.Screen name={routes.cart} component={CartScreen} />

	<Stack.Screen name={routes.fav_items} component={FavItemScreen} />
	</Stack.Navigator>
    );
}
export default StackNavigation
