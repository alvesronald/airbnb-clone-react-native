import React from 'react';
import {Text, SafeAreaView, View, ScrollView} from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';

// data
import feed from './assets/data/feed';

const post1 = feed[0]

const App = () => {
  return (
    <SafeAreaView>
      {/* <HomeScreen /> */}
        <Post post={post1} />       
    </SafeAreaView>
  );
};

export default App;
