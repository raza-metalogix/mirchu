import { View, Text, StyleSheet, FlatList } from "react-native"
import {
	DeliverySvg,
	RefundSvg,
	MessageSvg
} from "../../../assets/svgs/PurchaseSvgs";

const context = [
	{ svg: <DeliverySvg size={25} />, text: "Cash on Delivery" },
	{ svg: <RefundSvg size={25} />, text: "Easy Return & Refund Policy" },
	{ svg: <MessageSvg size={25} />, text: "24/7 Customer Support" }
]


const PolicySection = () => {
	return (
		<View style={_styles.container}>
			<FlatList
				style={{ marginTop: 15 }}
				data={context}
				keyExtraction={(_, index) => index.toString()}
				renderItem={({ item }) =>
					<View style={_styles.imgContainer}>
						{item.svg}
						<Text
							style={{
								marginLeft: 10,
								color: "black",
								fontSize: 16
							}}
						>
							{item.text}
						</Text>
					</View>
				}
			/>
		</View>
	);
}

const _styles = StyleSheet.create({
	container: {
		marginTop: 10,
		height: 110,
	},
	imgContainer: {
		marginTop: 5,
		flexDirection: "row",
		opacity: 0.6
	}
})


export default PolicySection



