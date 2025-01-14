import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { View, StyleSheet, StatusBar, Dimensions } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context";
import EnvelopeEmail from "../../../assets/svgs/EnvelopeEmail";
import AuthContext from "../../../components/AuthContext";
import AuthLogo from "../../../components/AuthLogo";
import Btns from "../../../components/Btns";
import Form from "../../../components/Forms";
import routes from "../../../navigations/routes";
import colors from "../../../utilities/color";
import fonts from "../../../utilities/fonts";
const ConfrimEmail = () => {
	const nav = useNavigation()
	return (
		<SafeAreaProvider>
			<StatusBar backgroundColor="white" barStyle="dark-content" />
			<View style={_styles.container}>
				{/* image */}
				<AuthLogo handlePress={() => nav.goBack()} />
				{/* heading */}
				<AuthContext context="Please Confirm your Email" />
				{/* Forms */}

				<ConfrimForm
					handlePress={() => nav.navigate(routes.auth_opt_pass)}
				/>
				{/* Footer */}
			</View>
		</SafeAreaProvider>
	);
}

const ConfrimForm = ({ handlePress }) => {
	return (
		<Formik
			initialValues={{ email: "" }}
			onSubmit={handlePress}
		>
			{({ values, handleChange, handleSubmit }) => (
				<View style={_styles.subContainer}>
					<Form
						context="Email Address"
						placehd="johnsmith@gmail.com"
						maxlength={30}
						value={values.email}
						handleChange={handleChange('email')}
						svg={
							<EnvelopeEmail styles={_styles.inputSvg} />
						}
					/>
					<View style={{ width: "100%" }}>
						<Btns
							text="SUBMIT"
							color={colors.primary}
							textColor="white"
							handlePress={handlePress}
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
	textInput: {
		height: 60,
		fontFamily: fonts.roboto.regular,
		fontSize: 16,
		paddingHorizontal: 10,
		color: colors.textSecondary,
	},
})
export default ConfrimEmail
