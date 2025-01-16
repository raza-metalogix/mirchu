import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigation from "./TabNavigation";
import TabLabel from "../components/TabLabel";
import routes from "./routes";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
	return (
		<Drawer.Navigator screenOptions={{ headerShown: false }}>
			<Drawer.Screen
				name={routes.tab}
				component={TabNavigation}
				options={{
					drawerLabel: (e) => <TabLabel txt="Home" foc={e.focused} />,
				}}
			/>
			<Drawer.Screen
				name={routes.drawer_category}
				component={TabNavigation}
				options={{
					drawerLabel: (e) => <TabLabel txt="Categorise" foc={e.focused} />,
				}}
			/>
			<Drawer.Screen
				name={routes.All}
				component={TabNavigation}
				options={{
					drawerLabel: (e) => <TabLabel txt="All" foc={e.focused} />,
				}}
			/>
			<Drawer.Screen
				name={routes.super_deals}
				component={TabNavigation}
				options={{
					drawerLabel: (e) => <TabLabel txt="Super Deals" foc={e.focused} />,
				}}
			/>
		</Drawer.Navigator>
	);
}

export default DrawerNavigation;
