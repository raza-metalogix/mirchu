import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context"
import {StyleSheet, Text} from "react-native"

const CheckoutScreen = () => {
    return(
	<SafeAreaProvider>
	    <SafeAreaView>
		<Text>hello</Text>
	    </SafeAreaView>
	</SafeAreaProvider>
    )
}

const _styles= StyleSheet.create({
    container:{
	flex:1,
	paddingHorizontal:20
    }
})

export default CheckoutScreen;
