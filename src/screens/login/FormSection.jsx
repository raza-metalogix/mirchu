import { ErrorMessage, Formik } from "formik";
import { useState } from "react";
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from "react-native"
import ArrowTick from "../../assets/svgs/ArrowTick";
import EyeClose from "../../assets/svgs/EyeClose";
import EyeOpen from "../../assets/svgs/EyeOpen";
import Btns from "../../components/Btns";
import colors from "../../utilities/color";
import fonts from "../../utilities/fonts";
import * as Yup from "yup"
const SignupSchema = Yup.object().shape({
	email: Yup.string().email('Invalid Email').required('Require'),
	password: Yup.string().max(20, 'Too Long!').required("Password is Required"),
})
const FormSection = () => {
	const [remem, setRemem] = useState(false)
	const [show, setShow] = useState(false)
	return (
		<Formik
			initialValues={{ email: "", password: "" }}
			onSubmit={value => console.log(value)}
		>
			{({ handleChange, handleSubmit, errors, values }) => (
				<View style={_styles.container}>
					<Text style={_styles.errorText}>
						<ErrorMessage
							name="email"
						>
							{msg => <Text>{msg}</Text>}
						</ErrorMessage>
					</Text>
					<TextInput
						value={values.email}
						onChangeText={handleChange('email')}
						style={_styles.input}
						placeholder="johnsmith@gmail.com"
						autoCapitalize="none"
						inputMode="email"
						autoCorrect={false}
						textContentType='emailAddress'
						keyboardType='email-address'
						autoCompleteType='email'
					/>
					<View style={_styles.inputContainer}>
						<TextInput
							value={values.password}
							onChangeText={handleChange('password')}
							style={_styles.inputPass}
							placeholder="***********"
							maxLength={20}
							secureTextEntry={!show}
						/>

						<TouchableOpacity onPress={() => setShow(!show)}>
							{show ?
								<EyeOpen
									style={_styles.eyesvg} />
								:
								<EyeClose
									styles={_styles.eyesvg} />
							}
						</TouchableOpacity>

					</View>

					<View style={_styles.helpContainer}>
						{/* Remember btn */}
						<TouchableOpacity
							style={_styles.rememberContainer}
							onPress={() => setRemem(!remem)}
						>
							<View style={[_styles.remember, remem ? {
								backgroundColor: remem ? colors.primary : "white"
							} : { borderWidth: 1 }]}>
								<ArrowTick style={_styles.svg} />
							</View>

							<Text style={_styles.remembertext}>Remember me?</Text>

						</TouchableOpacity>
						{/* Forgot Pass */}
						<TouchableOpacity>
							<Text style={_styles.forPass}>Forget Password?</Text>
						</TouchableOpacity>
					</View>
					{/* Login */}
					<View style={_styles.btnContainer}>
						<Btns
							text="Log In"
							handlePress={handleSubmit}
							color={colors.primary}
							textColor="white"
						/>
					</View>

				</View >

			)}
		</Formik>
	);
}

const _styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		marginTop: 30,
		borderTopStartRadius: 30,
		borderTopEndRadius: 30,
	},
	input: {
		height: 60,
		marginVertical: 12,
		padding: 20,
		backgroundColor: colors.lightDark,
		fontFamily: fonts.montserrat.semibold,
		borderRadius: 10
	},
	inputContainer: {
		height: 60,
		marginVertical: 12,
		padding: 20,
		backgroundColor: colors.lightDark,
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',

	},
	inputPass: {
		fontFamily: fonts.montserrat.semibold,
		height: 60,
		width: 200,
	},
	errorText: {
		color: colors.secondary,
		textAlign: 'center'
	},
	helpContainer: {
		marginTop: 17,
		marginBottom: 50,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	forPass: {
		color: colors.primary,
		fontFamily: fonts.roboto.medium,
	},
	rememberContainer: {
		flexDirection: "row",
		alignItems: 'center'
	},
	remember: {
		width: 20,
		height: 20,
		marginRight: 7,
		borderRadius: 4,
		alignItems: "center",
		justifyContent: "center",
	},
	remembertext: {
		color: colors.textSecondary,
		opacity: 0.4,
		fontFamily: fonts.montserrat.semibold,
	},
	btnContainer: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	svg: {
		width: 18,
		height: 18
	},
	eyesvg: {
		width: 20,
		height: 20,
		opacity: 0.8,
	}
})

export default FormSection;
