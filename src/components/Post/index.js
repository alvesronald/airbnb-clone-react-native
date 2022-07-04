import React from 'react';
import {View, Text,Image} from 'react-native';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
        <Image 
            source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg' }} 
            style={styles.image} 
        />

        <Text style={styles.bedrooms}>
            1 bed 1 bedroom
        </Text>

        <Text style={styles.description} numberOfLines={2}>
            Entire Flat: s simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley
        </Text>

        <Text style={styles.prices}>
            <Text style={styles.oldPrice}>$36 </Text>
            <Text style={styles.price}>  $30 </Text>
            / night
        </Text>

        <Text style={styles.totalPrice}>$230 total</Text>

    </View>
  );
};

export default Post;