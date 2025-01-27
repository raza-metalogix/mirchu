import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context"
import {View, StyleSheet, StatusBar, FlatList, Text} from "react-native"
import {useState, useEffect} from "react"
import useCart from "./components/cart"
import HeaderCompo from '../../../components/HeaderCompo';
import colors from "../../../utilities/color"
import Listing from "./components/Listing"
import Footer from "./components/Footer"

const CartScreen = () => {
    const [context, setContext] = useState([1,2,3,4,5,6,7,8,9,10])
    const  {selectAll,selectIndex, setSelectIndex} = useCart()

    const handlePress = () => {
	if(selectAll) setContext([])
	else if (!selectAll && selectIndex.length !=0){
	    setContext(
		context.filter(el=> !selectIndex.includes(el))
	    )
	    setSelectIndex([])
	}	
    }
    return(
	<SafeAreaProvider>
	<SafeAreaView
	    style={_styles.container}
	>
	<StatusBar 
	    backgroundColor="white"
	    barStyle="dark-content"
	/>

	<HeaderCompo 
	    border={true}
	    txt="Carts"
	    del={true}
	    onDelPress={handlePress}
	/>

	<FlatList 
	    style={{height:"82%",paddingHorizontal:10, paddingTop:10, }}
	    showsVerticalScrollIndicator={false}
	    ItemSeparatorComponent={()=><View style={{height:15}}/>}
	    ListFooterComponent={()=> <View style={{height:200}}/>}
	    data={context}
	    keyExtraction={(_,index)=> index.toString()}
	    renderItem={({item})=> context.length != 0 ?
		    <Listing index={item} /> :
		    <Text>Cart is empty </Text>
	    }
	/>

	{context.length != 0 && <Footer />}	
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
