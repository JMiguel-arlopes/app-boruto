import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Banner from './src/Banner';
import Venda from './src/Venda';
import {
  useFonts,
  Poppins_400Regular
} from '@expo-google-fonts/poppins';

export default function App() {

  const [fonte_load] = useFonts({
    "poppins": Poppins_400Regular
  })

  if (!fonte_load) {
    <View />
  }

  return (
    <View>
      {/* <StatusBar style="auto" /> */}
      <Text>Me acharam</Text>
      <Banner />
      <Venda />
    </View>
  );
}