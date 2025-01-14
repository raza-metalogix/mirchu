import { StyleSheet, Platform, StatusBar, FlatList, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeaderCompo from '../../../components/HeaderCompo';
import ListingProduct from './FeatureProduct';
import ListerSwiper from './ListerSwiper';
const ListingScreen = () => {
	return (
		<SafeAreaProvider style={_styles.container}>
			<StatusBar
				backgroundColor="white"
				barStyle="dark-content"
			/>
			<FlatList
				data={[3]}
				keyExtractor={(_, index) => index.toString()}
				renderItem={({ _, index }) => <View
					key={index}>
					<HeaderCompo />
					<ListerSwiper />
					<ListingProduct />
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
	}
})

export default ListingScreen
