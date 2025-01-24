import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context"
import {View, Text, StyleSheet} from "react-native"

const ProfileScreen = ()=>{
    return(
	<SafeAreaProvider>
	    <SafeAreaView style={_styles.container}>
		<View>
		    <Text style={{color:"black"}}>under construction</Text>
		</View>
	    </SafeAreaView>
	</SafeAreaProvider>
    );
}

const _styles =StyleSheet.create({
    container:{
	flex:1,
	backgroundColor:"white",
	paddingHorizontal:20
    }
})

export default ProfileScreen
