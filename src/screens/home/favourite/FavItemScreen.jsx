import {View, Text, StyleSheet} from "react-native"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Listing from "./components/Listing"
import HeaderCompo from '../../../components/HeaderCompo';
import Footer from "./components/Footer"
import Filter from "./components/Filter"
const FavItemScreen = ()=> {
    return(
	<SafeAreaProvider>
	<SafeAreaView
	    style={_styles.container}
	>
	<HeaderCompo border={true} show={true} txt="Favourites" del={true} />
	<View style={{paddingHorizontal:10, marginTop:15}}>
	    <Filter />
	    <Listing />
	    <Footer />
	</View>
	</SafeAreaView>
	</SafeAreaProvider>
    )
}

const _styles = StyleSheet.create({
    container:{
	flex:1,
	backgroundColor:"white",
    }
})

export default FavItemScreen
