import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import { View, Text, StyleSheet, FlatList, StatusBar } from "react-native"
import TopHeader from "./components/TopHeader"
import HeaderCompo from '../../../components/HeaderCompo';
import Context from "./components/Context"
import colors from "../../../utilities/color"
import CategoryList from "./components/CategoryList"
const CategoryListingScreen = () => {
    return(
	<SafeAreaProvider>
	<SafeAreaView
	    style={_styles.container}
	>
	<StatusBar 
	    backgroundColor="white"
	    barStyle="dark-content"
	/>

	<HeaderCompo show={true} />
	<View 
	    style={{
		marginTop:10,
		paddingHorizontal:10,
	    }}
	>
	<Context txt="Fresh Vegetables"/>
	<FlatList 
	data={[...Array(10)]}
	style={{ paddingTop:10, }}
	numColumns={2}
	ListFooterComponent={()=> <View 
	    style={{height:400, width:100,}}
	    />}
	columnWrapperStyle={{ gap: 12 }}
	ItemSeparatorComponent={()=> <View style={{height:20}}/>}
	showsVerticalScrollIndicator={false}
	keyExtraction={(_,index)=> index.toString()}
	ListHeaderComponent={()=> 
	    <>
	    </>

	}
	keyExtraction={(_,index)=> index.toString()}
	showsVerticalScrollIndicator={false}
	renderItem={({_})=>
	    <CategoryList/>
	}
	/>
	</View>

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

export default CategoryListingScreen
