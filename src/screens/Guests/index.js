import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const GuestsScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const navigation = useNavigation()

  return (
    <View style={{ justifyContent: 'space-between', height:'100%' }}>
      <View>
        {/* Adults */}
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold', color: '#000'}}>Adults</Text>
            <Text>Ages 13 or above</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text style={styles.actionText}>-</Text>
            </Pressable>

            <Text style={styles.title}>{adults}</Text>

            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text style={styles.actionText}>+</Text>
            </Pressable>
          </View>
        </View>

        {/* Children */}
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold', color: '#000'}}>Children</Text>
            <Text>Ages 2 - 12</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}>
              <Text style={styles.actionText}>-</Text>
            </Pressable>

            <Text style={styles.title}>{children}</Text>

            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}>
              <Text style={styles.actionText}>+</Text>
            </Pressable>
          </View>
        </View>

        {/* Infants */}
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold', color: '#000'}}>Infants</Text>
            <Text>Under 2</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}>
              <Text style={styles.actionText}>-</Text>
            </Pressable>

            <Text style={styles.title}>{infants}</Text>

            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.button}>
              <Text style={styles.actionText}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Pressable 
        style={styles.searchButton} 
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.searchButtonText}>Search</Text>
      </Pressable>
    </View>
  );
};

export default GuestsScreen;
