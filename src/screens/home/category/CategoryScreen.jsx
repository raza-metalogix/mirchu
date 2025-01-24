import {View, Text, StyleSheet, StatusBar } from "react-native"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import colors from "../../../utilities/color"
import HeaderCompo from '../../../components/HeaderCompo';
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
	<HeaderCompo show={false} />
	<View style={_styles.sub_container}>
	<Context />
	<Listing />
	</View>
	</SafeAreaView>
	</SafeAreaProvider>
    );
}

const _styles = StyleSheet.create({
    container:{
	flex:1,
	backgroundColor: "white",
    },
    sub_container:{
	paddingHorizontal:20,
	marginTop:13,
	flex:1
    }
})

export default CategoryScreen
