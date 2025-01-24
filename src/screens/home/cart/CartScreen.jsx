import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context"
import {View, StyleSheet, StatusBar, FlatList} from "react-native"
import HeaderCompo from '../../../components/HeaderCompo';
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
	<HeaderCompo border={true} txt="Carts" del={true} />
	<FlatList 
	    style={{height:"82%",paddingHorizontal:10, paddingTop:10, }}
	    showsVerticalScrollIndicator={false}
	    ItemSeparatorComponent={()=><View style={{height:15}}/>}
	    ListFooterComponent={()=> <View style={{height:200}}/>}
	    data={[...Array(10)]}
	    keyExtraction={(_,index)=> index.toString()}
	    renderItem={({_,index})=><Listing index={index} />}
	/>

	<Footer />
	    </SafeAreaView>
	</SafeAreaProvider>
    );
}

const _styles = StyleSheet.create({
    container:{
	flex:1,
	backgroundColor: "white",
    }
})

export default CartScreen
