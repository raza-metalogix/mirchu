import { Formik } from "formik";
import { useState } from "react";
import { Dimensions, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import EyeClose from "../../../assets/svgs/EyeClose";
import EyeOpen from "../../../assets/svgs/EyeOpen";
import PasswordSvg from "../../../assets/svgs/PasswordSvg";
import AuthContext from "../../../components/AuthContext";
import AuthLogo from "../../../components/AuthLogo";
import colors from "../../../utilities/color";
import fonts from "../../../utilities/fonts";

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
				<ChangePassForm />
				{/* Footer */}
			</View>
		</SafeAreaProvider>

	);
}
const ChangePassForm = () => {
	const [show, setShow] = useState(false);
	return (
		<Formik
			initialValues={{ pass: "", confirmPass: "" }}
			onSubmit={val => console.log(val)}
		>
			{({ values, handleChange, handleSubmit }) => (
				<View style={_styles.subContainer}>
					<Text style={_styles.formText}>Password</Text>
					<View style={_styles.inputContainer}>
						<View style={_styles.inputPassContainer}>
							<PasswordSvg styles={_styles.inputPassSvg} />
							<TextInput
								maxLength={30}
								value={values.pass}
								onChangeText={handleChange('pass')}
								style={[_styles.textInput, { width: "80%" }]}
								placeholder="*********"
								secureTextEntry={!show}
							/>
						</View>
						<TouchableOpacity
							onPress={() => setShow(!show)}>
							{!show ? <EyeClose styles={_styles.inputSvg} />
								: <EyeOpen style={_styles.inputSvg} />}
						</TouchableOpacity>
					</View>
					<Text style={_styles.formText}>Confirm Password</Text>
					<View style={_styles.inputContainer}>
						<View style={_styles.inputPassContainer}>
							<PasswordSvg styles={_styles.inputPassSvg} />
							<TextInput
								maxLength={30}
								value={values.password}
								onChangeText={handleChange('password')}
								style={[_styles.textInput, { width: "80%" }]}
								placeholder="*********"
								secureTextEntry={!show}
							/>
						</View>
					</View>
					<View style={{ marginTop: 50 }}>
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
	inputPassSvg: {
		width: 25,
		height: 25,
		opacity: 0.8,
	}
})

export default ChangePassword;
