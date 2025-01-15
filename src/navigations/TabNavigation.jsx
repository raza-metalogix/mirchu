import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import CategorySvg from "../assets/svgs/CategorySvg";
import HomeSvg from "../assets/svgs/HomeSvg";
import SearchSvg from "../assets/svgs/SearchSvg";
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
				name={routes.home_listing}
				component={ListingScreen}
				options={{
					tabBarLabel: (el) => <TabLabel txt="Home" foc={el.focused} />,
					tabBarIcon: (el) => {
						return <HomeSvg foc={el.focused} />
					},
				}}
			/>
			<Tab.Screen
				name={routes.home_categroy}
				component={SearhcScreen}
				options={{
					tabBarLabel: (el) => <TabLabel txt="Categroy" foc={el.focused} />,
					tabBarIcon: (el) =>
						<CategorySvg color={el.focused && colors.primary} />,
				}}
			/>
			<Tab.Screen
				name={routes.home_search}
				component={SearhcScreen}
				options={{
					tabBarLabel: (el) => <TabLabel txt="Search" foc={el.focused} />,
					tabBarIcon: (el) =>
						<SearchSvg foc={el.focused} />,
				}}
			/>
		</Tab.Navigator>
	);
}

export default TabNavigation
