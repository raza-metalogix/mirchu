import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import CategorySvg from "../assets/svgs/CategorySvg";
import HomeSvg from "../assets/svgs/HomeSvg";
import PersonSvg from "../assets/svgs/PersonSvg";
import CartSvg from "../assets/svgs/CartSvg";
import TabLabel from "../components/TabLabel";
import ListingScreen from "../screens/home/listing/ListingScreen";
import SearhcScreen from "../screens/home/search/SearchScreen";
import colors from "../utilities/color";
import routes from "./routes";

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
	return (
		<Tab.Navigator
			screenOptions={{ headerShown: false }}
		>
			<Tab.Screen
				name={routes.tab_listing}
				component={ListingScreen}
				options={{
					tabBarLabel: (el) => <TabLabel txt="Home" foc={el.focused} />,
					tabBarIcon: (el) => {
						return <HomeSvg foc={el.focused} />
					},
				}}
			/>
			<Tab.Screen
				name={routes.tab_categroy}
				component={ListingScreen}
				options={{
					tabBarLabel: (el) => <TabLabel txt="Categroy" foc={el.focused} />,
					tabBarIcon: (el) =>
						<CategorySvg
							color={el.focused && colors.primary}
							foc={el.focused}
						/>,
				}}
			/>
			<Tab.Screen
				name={routes.tab_cart}
				component={ListingScreen}
				options={{
					tabBarLabel: (el) => <TabLabel txt="Cart" foc={el.focused} />,
					tabBarIcon: (el) =>
						<CartSvg
							color={el.focused && colors.primary}
							style={{ width: 20, height: 20 }}
						/>,
				}}
			/>
			<Tab.Screen
				name={routes.tab_account}
				component={ListingScreen}
				options={{
					tabBarLabel: (el) => <TabLabel txt="Profile" foc={el.focused} />,
					tabBarIcon: (el) =>
						<PersonSvg
							color={el.focused && colors.primary}
							style={{ width: 20, height: 20 }}
						/>,
				}}
			/>
		</Tab.Navigator>
	);
}

export default TabNavigation
