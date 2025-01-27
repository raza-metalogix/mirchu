import { View, Text,Image, StyleSheet, TouchableOpacity } from "react-native"
import fonts from "../../../../utilities/fonts"
import colors from "../../../../utilities/color"
import Envelope from "../../../../assets/svgs/EnvelopeEmail"
import PersonSvg from "../../../../assets/svgs/PersonSvg"
import PhoneSvg from "../../../../assets/svgs/phone_svg"
import PasswordSvg from "../../../../assets/svgs/PasswordSvg"
import CardHeading from "../../../../components/CardHeading"
import Form from "./Form"

const Body = () => {
    return(
	<View style={_styles.container}>
	    <View style={{paddingHorizontal:10}}> 
		<CardHeading 
		heading="Manage"
	    />
	    </View> 

	     <Form 
		border={true}
		svg={<Envelope 
			color={colors.primary}
			styles={_styles.svg}
			/>
		}
		txt="random@gmail.com"
	    />	
	    <Form 
		border={true}
		svg={<PasswordSvg 
			color={colors.primary}
			styles={{width:25, height:25}}
			/>
		}
		txt="************"
	    />
	    <Form 
		border={true}
		svg={<PhoneSvg 
			color={colors.primary}
			style={{width:25, height:25}}
			/>
		}
		txt="+9212345567"
	    />
	    <Form 
		border={true}
		svg={<PersonSvg 
			color={colors.primary}
			styles={{width:25, height:25}}
			/>
		}
		txt="Some Random Address"
	    />	
	</View>
    )
}

const _styles = StyleSheet.create({
    container:{
	marginTop:20,
    },
    svg:{
	width:30,
	height:30
    }
})

export default Body;
