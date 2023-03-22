import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native'
import Plus from '../SVG/products/plus'
import EarnInterst from '../SVG/products/earnInterst'
import Bmc from '../SVG/products/bmc'


export const Products = () => {
	// style={styles.titleBlock}
	return (
		<View>
		{/* <Text >
		Products
			</Text> */}
			<View
			>

				<LinearGradient colors={['#520D8C', '#31C9B1']}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 1 }}
					style={styles.earnblock}
				>
					
			
             </LinearGradient>
				<LinearGradient
					colors={['#FF3B61', '#FF9921']}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 1 }}
					style={styles.earnblock}>
					
				</LinearGradient>

			</View>
			{/* <Bmc/> */}
			{/* <EarnInterst/> */}
			{/* <Plus/> */}
	</View>
	
	) 
};

const styles = StyleSheet.create({
	earnblock: {
		width: 169,
		height: 187,
		backgroundColor: "",
		borderRadius:20,
	},
})