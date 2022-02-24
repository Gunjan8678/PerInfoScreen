import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';

import Card from '../components/Card';

const PersonalInfoScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.pgInfo}>
        <View style={{justifyContent: 'space-around'}}>
          <Text style={{color: 'white', fontSize=11}}>STEP 1 OF 4</Text>
          <Text style={{color: 'white', fontSize: 18}}>
            Personal Information
          </Text>
        </View>
      </Card>
      <ImageBackground
        resizeMode='cover'
        style={styles.perInfoImg}
        source={{
          uri: '/Users/apple/dev/learning/PerInfoScreen/assets/image.png',
        }}
      />
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>
          What's your name?
        </Text>
      </View>
      <View style={styles.usrInfo}>
        <Text style={{color: 'white', fontSize: 15}}>First Name </Text>
        <TextInput style={styles.txtContainer} />
        <Text style={{color: 'white', fontSize: 15}}>Last Name </Text>
        <TextInput style={styles.txtContainer} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d2951',
    flex: 1,
    alignItems: 'center',
    // marginVertical: 10,
    justifyContent: 'space-around',
    // padding: 10,
  },
  txtContainer: {
    borderBottomWidth: 1,
    borderColor: 'white',
    color: 'white',
  },
  pgInfo: {
    height: 80,
  },
  usrInfo: {
    height: '15%',
    width: '90%',
    justifyContent: 'space-around',
  },
  perInfoImg: {height: '50%', width: '100%'},
});

export default PersonalInfoScreen;
