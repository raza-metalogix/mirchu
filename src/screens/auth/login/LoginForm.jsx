import { Formik } from "formik";
import { useState } from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import EnvelopeEmail from "../../../assets/svgs/EnvelopeEmail";
import EyeClose from "../../../assets/svgs/EyeClose";
import EyeOpen from "../../../assets/svgs/EyeOpen";
import PasswordSvg from "../../../assets/svgs/PasswordSvg";
import Btns from "../../../components/Btns";
import Form from "../../../components/Forms";
import colors from "../../../utilities/color";
import fonts from "../../../utilities/fonts";
import LoginHelp from "./LoginHelp";
const LoginForm = ({ handlePress }) => {
	const [show, setShow] = useState(false);
	return (
		<Formik
			initialValues={{ email: "", password: "" }}
			onSubmit={value => console.log(value)}
		>
			{({ values, handleChange, handleSubmit }) => (
				<View style={_styles.container}>

					<Form
						context={"Email Address"}
						placehd="johnsmith@gmail.com"
						value={values.email}
						handleChange={handleChange('email')}
						maxlength={30}
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
					<View style={{ marginTop: 50, width: "100%" }}>
						<Btns
							text="LOGIN"
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
	inputContainer: {
		width: "100%",
		marginBottom: 20,
		backgroundColor: colors.lightDark,
		borderRadius: 7,
		paddingHorizontal: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	inputPassContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	textInput: {
		height: 60,
		fontFamily: fonts.roboto.regular,
		fontSize: 16,
		paddingHorizontal: 10,
		color: colors.textSecondary,
	},
	formText: {
		width: "100%",
		fontWeight: "500",
		color: colors.textSecondary,
		fontSize: 20,
		marginBottom: 11
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
	}

})

export default LoginForm