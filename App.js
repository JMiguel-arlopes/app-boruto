import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Loja from './src/telas/Loja'
import mock from './src/mocks/loja'
import {
  useFonts,
  Jost_400Regular,
  Jost_700Bold
} from '@expo-google-fonts/jost';

export default function App() {

  const [fonte_load] = useFonts({
    "jostRegular": Jost_400Regular,
    "jostBold": Jost_700Bold
  })

  if (!fonte_load) {
    return <View />
  }

  return (
    <View>
      {/* <StatusBar style="auto" /> */}
      <Loja {...mock} />
    </View>
  );
}