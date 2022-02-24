/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

// import {Button} from 'react-native-elements';

// import Card from './components/Card';
// import PersonalInfoScreen from './screens/PersonalInfoScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';

const App = () => {
  return <ConfirmationScreen />;
  // <SafeAreaView style={styles.container}>
  //   <Card style={styles.pgInfo}>
  //     <View>
  //       <Text style={{color: 'white'}}>step 1 of 4</Text>
  //       <Text style={{color: 'white', fontSize: 18}}>
  //         Personal Information
  //       </Text>
  //     </View>
  //   </Card>
  //   <Image
  //     style={styles.perInfoImg}
  //     source={{
  //       uri: '/Users/apple/dev/learning/PerInfoScreen/assets/image.png',
  //     }}
  //   />
  //   <View>
  //     <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>
  //       What's your name?
  //     </Text>
  //   </View>
  //   <View style={styles.usrInfo}>
  //     <Text style={{color: 'white', fontSize: 15}}>First Name </Text>
  //     <TextInput style={styles.txtContainer} />
  //     <Text style={{color: 'white', fontSize: 15}}>Last Name </Text>
  //     <TextInput style={styles.txtContainer} />
  //   </View>
  // </SafeAreaView>
};

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: '#1d2951',
  //   flex: 1,
  //   alignItems: 'center',
  //   // marginVertical: 10,
  //   justifyContent: 'space-around',
  //   // padding: 10,
  // },
  // txtContainer: {
  //   borderBottomWidth: 1,
  //   borderColor: 'white',
  // },
  // pgInfo: {
  //   height: 80,
  // },
  // usrInfo: {
  //   height: '15%',
  //   width: '90%',
  //   justifyContent: 'space-around',
  // },
  // perInfoImg: {height: '50%', width: '100%'},
});

export default App;
