import {View, Text, StyleSheet, StatusBar } from "react-native"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import colors from "../../../utilities/color"
import TopHeader from "./components/TopHeader"
import Context from "./components/Context"
import CategoryList from "./components/CategoryList"
import Listing from "./components/Listing"
const CategoryScreen = () => {
    return (
	<SafeAreaProvider>
	<SafeAreaView
	    style={_styles.container}
	>
	<StatusBar 
	    backgroundColor="white"
	    barStyle="dark-content"
	/>
	<TopHeader />
	<Context />
	<Listing />
	
	</SafeAreaView>
	</SafeAreaProvider>
    );
}

const _styles = StyleSheet.create({
    container:{
	flex:1,
	backgroundColor: "white",
	paddingHorizontal:20,
    }
})

export default CategoryScreen
