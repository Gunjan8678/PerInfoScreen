import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Card from '../components/Card';

const ConfirmationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <View style={styles.iconContainer}>
          <View
            style={{
              // borderColor: 'black',
              // borderWidth: 2,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Icon name="pie-chart" color="#517fa4" size={45} />
          </View>
          <View style={{flex: 4, justifyContent: 'center', padding: 10}}>
            <Text style={{color: 'white', fontSize: 11}}>STEP 4 OF 4</Text>
            <Text style={{color: 'white', fontSize: 18}}>
              Proof of Identity
            </Text>
          </View>
          <View
            style={{
              // borderColor: 'black',
              // borderWidth: 2,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="close" color="white" size={30} />
          </View>
        </View>
      </Card>
      <View style={styles.imgContainer}>
        <ImageBackground
          resizeMode="cover"
          style={{flex: 1, justifyContent: 'center', opacity: 0.6}}
          source={{
            uri: '/Users/apple/dev/learning/PerInfoScreen/assets/image.png',
          }}
        />
      </View>

      <View style={styles.infoContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            width: '100%',
          }}>
          <Text style={{left: 14, fontSize: 15, color: 'white'}}>
            TYPE OF DOCUMENT
          </Text>
        </View>
        <Card>
          <View style={styles.iconContainer}>
            <View
              style={{
                // borderColor: 'black',
                // borderWidth: 2,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="document" color="#517fa4" size={30} />
            </View>
            <View style={{flex: 4, justifyContent: 'space-around'}}>
              <Text style={styles.cardTxt}>Passport</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="chevron-forward" color="white" size={30} />
            </View>
          </View>
        </Card>
        <Card>
          <View style={styles.iconContainer}>
            <View
              style={{
                // borderColor: 'black',
                // borderWidth: 2,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="ios-card-outline" color="#517fa4" size={30} />
            </View>
            <View style={{flex: 4, justifyContent: 'space-around'}}>
              <Text style={styles.cardTxt}>Identity Card</Text>
            </View>
            <View
              style={{
                // borderColor: 'black',
                // borderWidth: 2,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="chevron-forward" color="white" size={30} />
            </View>
          </View>
        </Card>
        <Card>
          <View style={styles.iconContainer}>
            <View
              style={{
                // borderColor: 'black',
                // borderWidth: 2,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="wallet" color="#517fa4" size={30} />
            </View>
            <View
              style={{
                flex: 4,
                justifyContent: 'space-around',
                // borderColor: 'black',
                // borderWidth: 2,
              }}>
              <Text style={styles.cardTxt}>Driver's License</Text>
            </View>
            <View
              style={{
                // borderColor: 'black',
                // borderWidth: 2,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="chevron-forward" color="white" size={30} />
            </View>
          </View>
        </Card>
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
    justifyContent: 'flex-start',
    // padding: 10,
  },
  infoContainer: {
    flex: 2,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start',
    // borderColor: 'black',
    // borderWidth: 2,
  },
  cardTxt: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  iconContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imgContainer: {
    width: '100%',
    height: 300,
  },
});

export default ConfirmationScreen;
