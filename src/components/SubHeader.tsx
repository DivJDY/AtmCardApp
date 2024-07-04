/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../styles/globalStyle';

const SubHeader = () => {
  return (
    <View style={{margin: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Image
          source={require('../../assets/circle.png')}
          style={{width: 71, height: 71}}
        />
        <TouchableOpacity
          onPress={() => Alert.alert('If you need any help, just ask!')}
          style={styles.tipsBtn}>
          <Image
            source={require('../../assets/tips.png')}
            style={{width: 24, height: 24}}
          />
          <Text style={[styles.txt, {fontSize: 14}]}>Tips</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.txt1]}>All your credit cards</Text>
      <Text
        style={[
          styles.txt1,
          {fontSize: 16, fontWeight: 600, marginBottom: 25},
        ]}>
        Find all your credits cards here
      </Text>
    </View>
  );
};

export default SubHeader;
