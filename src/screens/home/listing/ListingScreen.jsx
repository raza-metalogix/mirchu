import { StyleSheet, Platform, StatusBar, FlatList, Image, View, Dimensions } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HeaderCompo from '../../../components/HeaderCompo';
import ListingProduct from './FeatureProduct';
import ListCategroy from './ListCategory';
import ListerSwiper from './ListerSwiper';
import { useNavigation } from "@react-navigation/native";
import PopularListing from "./PopularListing"
const ListingScreen = () => {
    const nav = useNavigation();
    const handlePress = () => nav.navigate("home_purchase");
    return (
	<SafeAreaProvider style={_styles.container}>
	<SafeAreaView>
	<StatusBar
	backgroundColor="white"
	barStyle="dark-content"
	/>
	<HeaderCompo border={true} showlogo={true} search={true} heart={true} />
	<FlatList
	showsVerticalScrollIndicator={false}
	data={[1]}
	keyExtractor={(_, index) => index.toString()}
	ListFooterComponent={()=> <View style={{height:200}}/>}
	renderItem={({ _, index }) => <View
	    key={index}>
	    <ListerSwiper />
	    <ListCategroy />
	    <PopularListing />
	    <ListingProduct
		handlePress={handlePress}
		heading="Feature Product" />
	    </View>
	}
	/>
	</SafeAreaView>
	</SafeAreaProvider>
    );
}

const _styles = StyleSheet.create({
    container: {
	flex: 1,
	backgroundColor: "white"
    },
})

export default ListingScreen
