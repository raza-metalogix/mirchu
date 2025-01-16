import { Formik } from "formik";
import { useState } from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from "react-native"
import EnvelopeEmail from "../../../assets/svgs/EnvelopeEmail";
import EyeClose from "../../../assets/svgs/EyeClose";
import EyeOpen from "../../../assets/svgs/EyeOpen";
import PasswordSvg from "../../../assets/svgs/PasswordSvg";
import Btns from "../../../components/Btns";
import Form from "../../../components/Forms";
import colors from "../../../utilities/color";
import fonts from "../../../utilities/fonts";
import LoginHelp from "./LoginHelp";
import * as Yup from "yup"

const signupSchema = Yup.object().shape({
	email: Yup.string()
		.required('Email is required')
		.email('Invalid email'),

	password: Yup.string()
		.required('Password is requried')

})

const LoginForm = ({ handlePress }) => {
	const [show, setShow] = useState(false);
	const [error, setError] = useState("")
	return (
		<Formik
			initialValues={{ email: "", password: "" }}
			validationSchema={signupSchema}
			onSubmit={value => {
				setError('Invalid email or password')
				handlePress()
			}}
		>
			{({ values, handleChange, errors, touched, handleSubmit }) => (
				<View style={_styles.container}>
					<Text style={_styles.passText}>{error}</Text>
					<Form
						context={"Email Address"}
						placehd="johnsmith@gmail.com"
						value={values.email}
						handleChange={handleChange('email')}
						customMargin={10}
						maxlength={30}
						passText={(errors.email && touched.email) && errors.email}
						svg={
							<EnvelopeEmail styles={_styles.inputSvg} />
						}
					/>

					<Form
						context="Password"
						placehd="*********"
						value={values.password}
						handleChange={handleChange('password')}
						maxlength={30}
						secureText={!show}
						passText={(errors.password && touched.password) && errors.password}
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
					{/* reminder */}
					<LoginHelp handlePress={handlePress} />
					{/* Login btn */}
					<View style={{ marginTop: 40, width: "100%" }}>
						<Btns
							text="LOGIN"
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
		width: Dimensions.get("screen").width,
		alignItems: "center",
		paddingHorizontal: 25,
		marginTop: 20,
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
})

export default LoginForm
