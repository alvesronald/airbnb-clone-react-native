import React, { useState } from 'react';
import {View, Text, TextInput, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';

// data
import search from '../../../assets/data/search';

// icons
import Entypo from 'react-native-vector-icons/Entypo'

const data = search;

const DestinationSearchScreen = () => {

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
            <TouchableOpacity onPress={() => console.warn(item.description)}>
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
