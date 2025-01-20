import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { useState } from "react";
import { Dimensions, StatusBar, StyleSheet, TouchableOpacity, View, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import EyeClose from "../../../assets/svgs/EyeClose";
import EyeOpen from "../../../assets/svgs/EyeOpen";
import PasswordSvg from "../../../assets/svgs/PasswordSvg";
import AuthContext from "../../../components/AuthContext";
import AuthLogo from "../../../components/AuthLogo";
import Btns from "../../../components/Btns";
import Form from "../../../components/Forms";
import colors from "../../../utilities/color";

import * as Yup from "yup"
import routes from "../../../navigations/routes";

const changePassSchema = Yup.object().shape({
    pass: Yup.string()
    .required('Password is Rquired'),
    confirmPass: Yup.string()
    .required('Confirm Password is Required').oneOf([Yup.ref('pass'), null], "Passwords must match")
})

const ChangePassword = () => {
    const nav = useNavigation()
    return (
	<SafeAreaProvider>
	<StatusBar backgroundColor="white" barStyle="dark-content" />
	<View style={_styles.container}>
	{/* image */}
	<AuthLogo handlePress={() => nav.goBack()} />
	{/* heading */}
	<AuthContext context="Change Password" />
	{/* Forms */}
	<ChangePassForm nav={nav} />
	{/* Footer */}
	</View>
	</SafeAreaProvider>

    );
}
const ChangePassForm = ({ nav }) => {
    const [show, setShow] = useState(false);
    return (
	<Formik
	initialValues={{ pass: "", confirmPass: "" }}
	validationSchema={changePassSchema}
	onSubmit={val => nav.navigate(routes.tab)}
	>
	{({ values, handleChange, handleSubmit, errors, touched }) => (
	    <View style={_styles.subContainer}>
	    <Form
	    context="Password"
	    placehd="*********"
	    value={values.pass}
	    handleChange={handleChange('pass')}
	    maxlength={30}
	    customMargin={Platform.OS == "ios" ? 10 : 5}
	    secureText={!show}
	    passText={(errors.pass && touched.pass) && errors.pass}
	    svg={
		<PasswordSvg styles={_styles.inputPassSvg} />
	    }
	    svgPass={
		<TouchableOpacity
		onPress={() => setShow(!show)}>
		{!show ? <EyeClose styles={_styles.inputSvg} />
		    : <EyeOpen style={_styles.inputSvg} />}
		</TouchableOpacity>
	    }
	    />
	    <Form
	    context="Confirm Password"
	    placehd="*********"
	    value={values.confirmPass}
	    handleChange={handleChange('confirmPass')}
	    maxlength={30}
	    secureText={!show}
	    customMargin={Platform.OS == "ios" && 10}
	    passText={(errors.confirmPass && touched.confirmPass) && errors.confirmPass}
	    svg={
		<PasswordSvg styles={_styles.inputPassSvg} />
	    }
	    />

	    <View style={{ marginTop: 20, width: "100%" }}>
	    <Btns
	    text="Submit"
	    color={colors.primary}
	    textColor="white"
	    handlePress={handleSubmit}
	    />
	    </View>

	    </View>
	)
	}
	</Formik >
    );
}

const _styles = StyleSheet.create({
    container: {
	flex: 1,
	backgroundColor: "white",
    },
    subContainer: {
	width: Dimensions.get("screen").width,
	alignItems: "center",
	paddingHorizontal: 25,
	marginTop: 30,
    },
    inputSvg: {
	width: 25,
	height: 25,
	opacity: 0.8,
    },
    inputPassSvg: {
	width: 25,
	height: 25,
	opacity: 0.8,
    },
    passText: {
	color: 'red',
	marginBottom: 10,

    }
})

export default ChangePassword;
