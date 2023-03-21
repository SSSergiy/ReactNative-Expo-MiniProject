import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

import SvgBacground from '../SVG/svgBacground'
import Qrcode from '../SVG/balance/qrcode'
import Deposit from '../SVG/balance/deposit'
import Transfer from '../SVG/balance/transfer'
import Union from '../SVG/balance/union'

export const Balance = () => {
	return (
		<View >
		
			
	
			
	
			<Union />
			<SvgBacground />
		
	
			<Deposit />
			<Transfer/>
	<Qrcode/>
		</View>
	) 
};
const styles = StyleSheet.create({

}

)


