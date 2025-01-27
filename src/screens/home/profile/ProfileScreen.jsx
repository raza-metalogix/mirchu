import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context"
import {View, Text, StyleSheet, Image, StatusBar} from "react-native"
import HeaderCompo from "../../../components/HeaderCompo"
import Form from "./components/Form"
import Body from "./components/Body"

const ProfileScreen = ()=>{
    return(
	<SafeAreaProvider>
	    <SafeAreaView style={_styles.container}>
	    <StatusBar 
		backgroundColor="white"
		barStyle="dark-content"
	    />
		<HeaderCompo 
		    heart={true}
		    border={true}
		    txt="Profile"
		/>
		
		<View style={{marginTop:12}}>
		    <Form
			txt="Meta Logix"
			img={
			    <Image 
				style={_styles.img}
				source={
				    {uri:"https://mirchu.pk/cdn/shop/files/1708200363.png?v=1722246381&width=360"}
				}
			    />
		    }/>
		</View>
		    <Body />
	    </SafeAreaView>
	</SafeAreaProvider>
    );
}

const _styles =StyleSheet.create({
    container:{
	flex:1,
	backgroundColor:"white",
    },
    img:{
	width:55,
	height:55,
    },
})

export default ProfileScreen
