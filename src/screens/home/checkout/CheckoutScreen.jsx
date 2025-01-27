import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context"
import {StyleSheet, StatusBar, FlatList, View, ScrollView} from "react-native"
import HeaderCompo from '../../../components/HeaderCompo';
import List from "./components/List"
import Context from "./components/Context"
import Footer from "./components/Footer"
import Forms from "./components/Forms"

const CheckoutScreen = () => {
    return(
	<SafeAreaProvider>
	    <SafeAreaView style={_styles.container}>
		<StatusBar 
		    backgroundColor="white"
		    barStyle="dark-content"
		/>

		<HeaderCompo 
		    show={true}
		/>
		
		<FlatList	
		    data={[1]}
		    keyExtraction={item=> item.toString()}
		    ListFooterComponent={()=> <View style={{height:300}}/>}
		    renderItem={({_})=>
			<View style={{paddingHorizontal:10, marginTop:10}}>
			    <List />
			    <Context />
			    <Forms />
			</View>
		    }
		/>
		
		 <Footer /> 

	    </SafeAreaView>
	</SafeAreaProvider>
    )
}

const _styles= StyleSheet.create({
    container:{
	flex:1,
	backgroundColor:"white"
    }
})

export default CheckoutScreen;
