import {View, Text, StyleSheet} from "react-native"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Context from "../cart/components/Context"
import Listing from "./components/Listing"
import Footer from "./components/Footer"
import Filter from "./components/Filter"
const FavItemScreen = ()=> {
    return(
	<SafeAreaProvider>
	<SafeAreaView
	    style={_styles.container}
	>
	<Context txt="Favourites" show={true}/>
	<Filter />
	<Listing />
	<Footer />
	</SafeAreaView>
	</SafeAreaProvider>
    )
}

const _styles = StyleSheet.create({
    container:{
	flex:1,
	backgroundColor:"white",
	paddingHorizontal:20
    }
})

export default FavItemScreen
