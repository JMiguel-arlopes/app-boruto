import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Banner from './src/Banner'
export default function App() {
  return (
    <View>
      {/* <StatusBar style="auto" /> */}
      <Text>Me acharam </Text>
      <Banner></Banner>

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
