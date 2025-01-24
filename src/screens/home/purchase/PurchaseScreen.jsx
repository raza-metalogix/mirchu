import { StyleSheet, View, StatusBar, Platform, FlatList } from "react-native"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HeaderCompo from '../../../components/HeaderCompo';
import ImageSwiper from "./ImageSwiper"
import Context from "./Context"
import Rating from "./Rating"
import PurchaseBtn from "./PurchaseBtn"
import PolicySection from "./PolicySection"
import Description from "./Description"
import { useState } from "react"
import BottomMenu from "./BottomMenu"
const PurchaseScreen = () => {
    return (
	<SafeAreaProvider >
	<StatusBar 
	barStyle="dark-content"
	translucent={true}
	backgroundColor={'transparent'} 
	/>
	<SafeAreaView style={_styles.container}>
	    <HeaderCompo show={true}  search={true} cart={true} />
	<FlatList
	data={[1]}
	keyExtraction={item => item.toString()}
	showsVerticalScrollIndicator={false}
	renderItem={() =>
	    <>
	    <ImageSwiper />
	    <View style={{ paddingHorizontal: 10 }}>
	    <Context />
	    <Rating />
	    <PolicySection />
	    <Description />
	    </View>
	    </>
	}
	/>
	<PurchaseBtn  />
	<BottomMenu  />
	</SafeAreaView>
	</SafeAreaProvider>
    );
}



const _styles = StyleSheet.create({
    container: {
	flex: 1,
	backgroundColor: "white",
    },
})
export default PurchaseScreen
