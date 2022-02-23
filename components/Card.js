import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const Card = props => {
  return (
    <View style={{...styles.container, ...props.style}}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: 'white',
    // margin: 30,
    marginHorizontal: '10%',
    backgroundColor: '#002147',
    width: '95%',
    // height: 90,
    // height: '80%',
    justifyContent: 'center',
    padding: 10,
    marginTop: 20,
    paddingVertical: 10,
    justifyContent: 'space-around',
    borderRadius: 20,
  },
});

export default Card;
