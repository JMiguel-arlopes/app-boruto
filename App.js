import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Banner from './src/Banner'
import Venda from './src/Venda';
export default function App() {
  return (
    <View>
      {/* <StatusBar style="auto" /> */}
      <Text>Me acharam</Text>
      <Banner></Banner>
      <Venda></Venda>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
