import React from 'react';
import {SafeAreaView} from 'react-native';

// screens
import HomeScreen from './src/screens/Home';
import SearchResultScreen from './src/screens/SearchResult';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';

// components



const App = () => {
  return (
    <SafeAreaView>
      {/* <HomeScreen /> */}
      {/* <Post post={post1} />        */}
      {/* <SearchResultScreen /> */}
      {/* <DestinationSearchScreen /> */}
      <GuestsScreen />
    </SafeAreaView>
  );
};

export default App;
