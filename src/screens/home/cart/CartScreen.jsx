import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context"
import {View, Text, StyleSheet, StatusBar, FlatList} from "react-native"
import TopHeader from "../category/components/TopHeader"
import Context from "./components/Context"
import colors from "../../../utilities/color"
import Listing from "./components/Listing"
import Footer from "./components/Footer"

const CartScreen = () => {
    return(
	<SafeAreaProvider>
	<SafeAreaView
	    style={_styles.container}
	>
	<StatusBar 
	    backgroundColor="white"
	    barStyle="dark-content"
	/>

	<Context />
	<FlatList 
	    style={{height:"82%"}}
	    showsVerticalScrollIndicator={false}
	    ItemSeparatorComponent={()=><View style={{height:30}}/>}
	    ListFooterComponent={()=> <View style={{height:300}}/>}
	    data={[...Array(10)]}
	    keyExtraction={(_,index)=> index.toString()}
	    renderItem={({_})=><Listing />}
	/>

	<Footer />
	    </SafeAreaView>
	</SafeAreaProvider>
    );
}

const _styles = StyleSheet.create({
    container:{
	backgroundColor: "white",
	paddingHorizontal:20
    }
})

export default CartScreen
