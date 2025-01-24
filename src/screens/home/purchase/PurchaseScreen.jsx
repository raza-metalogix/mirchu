import { StyleSheet, View, StatusBar, Platform, FlatList } from "react-native"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ImageSwiper from "./ImageSwiper"
import Context from "./Context"
import Rating from "./Rating"
import PurchaseBtn from "./PurchaseBtn"
import PolicySection from "./PolicySection"
import Description from "./Description"
import TopHeader from "./TopHeader"
import { useState } from "react"
import BottomMenu from "./BottomMenu"
const PurchaseScreen = () => {
    return (
	<SafeAreaProvider style={_styles.container}>
	<StatusBar 
	barStyle="dark-content"
	translucent={true}
	backgroundColor={'transparent'} 
	/>
	<TopHeader />
	<FlatList
	data={[1]}
	keyExtraction={item => item.toString()}
	showsVerticalScrollIndicator={false}
	renderItem={() =>
	    <>
	    <ImageSwiper />
	    <View style={{ paddingHorizontal: 20 }}>
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
	</SafeAreaProvider>
    );
}



const _styles = StyleSheet.create({
    container: {
	flex: 1,
	backgroundColor: "white",
	paddingTop: Platform.OS == "ios" ? 40 : 20,
    },
})
export default PurchaseScreen
