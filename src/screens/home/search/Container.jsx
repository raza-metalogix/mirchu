import { useEffect, useRef, useState } from "react";
import { View, StyleSheet, TextInput, Platform, TouchableOpacity } from "react-native"
import SearchSvg from "../../../assets/svgs/SearchSvg";
import colors from "../../../utilities/color";
const Container = () => {
	const [text, setText] = useState("")
	const ref = useRef(null)
	useEffect(() => {
		ref.current.focus()
	}, [])
	return (
		<View
			style={_styles.container}
		>
			<View style={_styles.subContainer}>
				<TextInput
					ref={ref}
					style={_styles.input}
					value={text}
					onChangeText={text => setText(text)}
					placeholder="Search over 1000+ products"
				/>
				<TouchableOpacity onPress={() => console.log(text)}>
					<SearchSvg />
				</TouchableOpacity>

				<View />
			</View>
		</View>

	);
}

const _styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primary,
		height: Platform.OS == "ios" ? 115 : 100,
		justifyContent: "flex-end",
		alignItems: 'center',
		paddingBottom: 15,
		paddingLeft: 20,
	},
	subContainer: {
		width: 300,
		height: 50,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
		borderRadius: 5,
		paddingHorizontal: 30,
		overflow: "hidden",
	},
	svg: {
		width: 20,
		height: 20
	},
	input: {
		height: "100%",
		width: "100%",
	}
})

export default Container
