import React, { useState } from 'react';
import {View, Text, TextInput, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';

// data
import search from '../../../assets/data/search';

// icons
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';

const data = search;

const DestinationSearchScreen = () => {
  const navigation = useNavigation();
  
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
       <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}       
       />
       <FlatList 
          data={data}       
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Guests')}>
              <View style={styles.row}>
                <View style={styles.iconContainer}>
                  <Entypo name="location-pin" size={35}  />
                </View>
                <Text style={styles.locationText}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
       />
    </View>
  );
};

export default DestinationSearchScreen;
