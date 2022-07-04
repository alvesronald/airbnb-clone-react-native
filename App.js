import React from 'react';
import {SafeAreaView} from 'react-native';

// screens
import HomeScreen from './src/screens/Home';
import SearchResultScreen from './src/screens/SearchResult';
import DestinationSearchScreen from './src/screens/DestinationSearch';

// components



const App = () => {
  return (
    <SafeAreaView>
      {/* <HomeScreen /> */}
      {/* <Post post={post1} />        */}
      {/* <SearchResultScreen /> */}
      <DestinationSearchScreen />
    </SafeAreaView>
  );
};

export default App;
