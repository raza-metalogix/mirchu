import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {Platform, Text} from "react-native"
import CategorySvg from "../assets/svgs/CategorySvg";
import HomeSvg from "../assets/svgs/HomeSvg";
import PersonSvg from "../assets/svgs/PersonSvg";
import CartSvg from "../assets/svgs/CartSvg";
import TabLabel from "../components/TabLabel";
import ListingScreen from "../screens/home/listing/ListingScreen";
import SearhcScreen from "../screens/home/search/SearchScreen";
import ProfileScreen from "../screens/home/profile/ProfileScreen";
import CategoryScreen from "../screens/home/category/CategoryScreen" 
import CartScreen from "../screens/home/cart/CartScreen"
import colors from "../utilities/color";
import routes from "./routes";

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
    return (
	<Tab.Navigator
	screenOptions={{
	    headerShown: false,
	    tabBarShowLabel: false,
	    tabBarStyle:{
		paddingTop:Platform.OS == 'ios' ? 10:0,
		height:Platform.OS == "ios" ? "7%" : 50,
	    }
	}}
	>
	<Tab.Screen
	name={routes.tab_listing}
	component={ListingScreen}
	options={{
		tabBarIcon: (el) => {
		    return <HomeSvg
		    color={el.focused && colors.primary}
	    style={{ width: 25, height: 25, opacity: el.focused?1:0.8 }}
			/>
		},
	}}
	/>
	<Tab.Screen
	name={routes.tab_categroy}
	component={CategoryScreen}
	options={{
		tabBarIcon: (el) =>
		<CategorySvg
	    color={el.focused && colors.primary}
	    foc={el.focused}
		/>,
	}}
	/>
	<Tab.Screen
	name={routes.tab_cart}
	component={CartScreen}
	options={{
		tabBarIcon: (el) =>
		<CartSvg
	    color={el.focused && colors.primary}
	    style={{ width: 25, height: 25, opacity: el.focused?1:0.8 }}
		/>,
	}}
	/>
	<Tab.Screen
	name={routes.tab_account}
	component={ProfileScreen}
	options={{
		tabBarIcon: (el) =>
		<PersonSvg
	    color={el.focused && colors.primary}
	    styles={{ width: 25, height: 25, opacity: el.focused?1:0.8 }}
		/>,
	}}
	/>
	</Tab.Navigator>
    );
}

export default TabNavigation
