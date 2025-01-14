import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeSvg from "../assets/svgs/HomeSvg";
import TabLabel from "../components/TabLabel";
import ListingScreen from "../screens/home/listing/ListingScreen";
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
		</Tab.Navigator>
	);
}

export default TabNavigation
