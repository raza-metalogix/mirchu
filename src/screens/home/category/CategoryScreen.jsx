import {View, Text, StyleSheet, StatusBar } from "react-native"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import colors from "../../../utilities/color"
import TopHeader from "./components/TopHeader"
import Context from "./components/Context"
import CategoryList from "./components/CategoryList"
const CategoryScreen = () => {
    return (
	<SafeAreaProvider>
	<SafeAreaView
	    style={_styles.container}
	>
	<StatusBar 
	    backgroundColor={colors.darkWhite}
	    barStyle="dark-content"
	/>
    
	<TopHeader />
	<Context />
	<CategoryList/>

	</SafeAreaView>
	</SafeAreaProvider>
    );
}

const _styles = StyleSheet.create({
    container:{
	backgroundColor: colors.darkWhite,
	paddingHorizontal:20,
    }
})

export default CategoryScreen
