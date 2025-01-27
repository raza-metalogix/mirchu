import { View, Text, StyleSheet } from "react-native"
import Form from "../../../../components/Forms"
import fonts from "../../../../utilities/fonts"
import colors from "../../../../utilities/color"
import {useState} from "react"

const Forms = () => {
    const [val, setVal] = useState()
    return (
	<View style={_styles.container}>
	    <Text style={[_styles.heading, {marginBottom:10}]}>Delivery</Text>
	    {/* Names */}
	    <View style={{flexDirection:"row"}}>
		<View style={{flex:1}}>
		    <Form 
			value={val}
			handleChange={txt=> setVal(txt)}
			placehd="First Name"
		    />
		</View>
		<View style={{width:13}}/>
		<View style={{flex:1}}>
		    <Form 
			value={val}
			handleChange={txt=> setVal(txt)}
			placehd="Last Name"
		    />
		</View>
	    </View>

	    <Form 
		value={val}
		handleChange={txt=> setVal(txt)}
		placehd="Address"
	    />

	    <Form 
		value={val}
		handleChange={txt=> setVal(txt)}
		placehd="City"
	    />

	    <Form 
		value={val}
		handleChange={txt=> setVal(txt)}
		placehd="Delievery Schedule"
	    />

	    <Form 
		value={val}
		handleChange={txt=> setVal(txt)}
		placehd="Postal Code"
	    />

	    <Form 
		value={val}
		handleChange={txt=> setVal(txt)}
		placehd="Phone"
	    />

	</View>
    )
}

const _styles = StyleSheet.create({
    container:{
	marginTop:20,
    },
    heading:{
	color: "black",
	fontSize:18,
	fontFamily: fonts.poppins_semiBold,
    },
})


export default Forms;
