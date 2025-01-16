
import { Formik } from "formik";
import { useState } from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity, Platform } from "react-native"
import EnvelopeEmail from "../../../assets/svgs/EnvelopeEmail";
import EyeClose from "../../../assets/svgs/EyeClose";
import EyeOpen from "../../../assets/svgs/EyeOpen";
import PasswordSvg from "../../../assets/svgs/PasswordSvg";
import PersonSvg from "../../../assets/svgs/PersonSvg";
import Btns from "../../../components/Btns";
import Form from "../../../components/Forms";
import colors from "../../../utilities/color";
import fonts from "../../../utilities/fonts";
import * as Yup from "yup"

const registerYup = Yup.object().shape({
	firstName: Yup.string().min(2, "Name is too short").required('Name is required'),
	lastName: Yup.string().min(2, "Name is too short"),
	email: Yup.string().email().required('Email is required'),
	password: Yup.string().required("Password is required")
})

const RegisterForm = ({ handlePress }) => {
	const [show, setShow] = useState(false);
	return (
		<Formik
			initialValues={{
				firstName: "",
				lastName: "",
				email: "",
				password: ""
			}}
			validationSchema={registerYup}
			onSubmit={handlePress}

		>
			{({ values, handleChange, handleSubmit, errors, touched }) => (
				<View style={_styles.container}>

					<View style={_styles.nameContainer}>
						<View style={_styles.nameSubContainer}>
							<Form
								context="First Name"
								value={values.firstName}
								handleChange={handleChange('firstName')}
								maxlength={15}
								customMargin={Platform.OS == "ios" && 10}
								placehd="John"
								passText={(errors.firstName && touched.firstName) && errors.firstName}
								svg={
									<PersonSvg styles={_styles.inputSvg} />
								}
							/>
						</View>
						<View style={[_styles.nameSubContainer, { marginLeft: 20 }]}>
							<Form
								context="Last Name"
								value={values.lastName}
								handleChange={handleChange('lastName')}
								maxlength={15}
								customMargin={Platform.OS == "ios" && 10}
								passText={(errors.lastName && touched.lastName) && errors.lastName}
								placehd="Smith"
								svg={
									<PersonSvg styles={_styles.inputSvg} />
								}
							/>
						</View>
					</View>

					<Form
						context="Email Address"
						value={values.email}
						handleChange={handleChange('email')}
						placehd="johnsmith@gmail.com"
						maxlength={30}
						typeInput="email-address"
						passText={(errors.email && touched.email) && errors.email}
						customMargin={Platform.OS == "ios" && 10}
						svg={
							<EnvelopeEmail
								styles={_styles.inputSvg} />
						}
					/>
					<Form
						context={"Password"}
						value={values.password}
						handleChange={handleChange('password')}
						placehd="********"
						maxlength={25}
						passText={(errors.password && touched.password) && errors.password}
						customMargin={Platform.OS == "ios" && 10}
						secureText={!show}
						svg={
							<PasswordSvg
								styles={_styles.inputPassSvg} />
						}
						svgPass={
							<TouchableOpacity
								onPress={() => setShow(!show)}>
								{!show ? <EyeClose styles={_styles.inputSvg} />
									: <EyeOpen style={_styles.inputSvg} />}
							</TouchableOpacity>
						}
					/>
					{/* Login btn */}
					<View style={{ marginTop: 15, width: "100%" }}>
						<Btns
							text="REGISTER"
							color={colors.primary}
							textColor="white"
							handlePress={handleSubmit}
						/>
					</View>
				</View>
			)}
		</Formik>
	);
}

const _styles = StyleSheet.create({
	container: {
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
	nameContainer: {
		flexDirection: "row",
		alignItems: 'center',
		justifyContent: 'center'
	},
	nameSubContainer: {
		width: Dimensions.get("screen").width / 2.4
	}

})

export default RegisterForm
