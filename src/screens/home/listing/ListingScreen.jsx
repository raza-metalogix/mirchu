import { StyleSheet, Platform, StatusBar, FlatList, Image, View, Dimensions } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeaderCompo from '../../../components/HeaderCompo';
import { web_banner } from '../../../utilities/images';
import ListingProduct from './FeatureProduct';
import ListCategroy from './ListCategory';
import ListerSwiper from './ListerSwiper';
import { useNavigation } from "@react-navigation/native";
const ListingScreen = () => {
    const nav = useNavigation();
    const handlePress = () => nav.navigate("home_purchase");
    return (
	<SafeAreaProvider style={_styles.container}>
	<StatusBar
	backgroundColor="white"
	barStyle="dark-content"
	/>
	<HeaderCompo />
	<FlatList
	showsVerticalScrollIndicator={false}
	data={[3]}
	keyExtractor={(_, index) => index.toString()}
	renderItem={({ _, index }) => <View
	    key={index}>
	    <ListerSwiper />
	    <ListCategroy />
	    <ListingProduct
	    handlePress={handlePress}
	    heading="Feature Product" />
	    <Image
	    style={_styles.imgBanner}
	    source={web_banner}
	    />
	    <ListingProduct heading="Popular Product" />
	    </View>
	}
	/>
	</SafeAreaProvider>
    );
}

const _styles = StyleSheet.create({
    container: {
	flex: 1,
	paddingVertical: Platform.OS === "ios" ? 40 : 0,
	backgroundColor: "white"
    },
    imgBanner: {
	width: Dimensions.get("screen").width,
	height: 200,
	alignSelf: "flex-end",
	marginVertical: 50,
    }
})

export default ListingScreen
