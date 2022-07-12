import React from 'react';
import {SafeAreaView} from 'react-native';

// screens
import HomeScreen from './src/screens/Home';
import SearchResultScreen from './src/screens/SearchResult';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';
import Routes from './src/navigation/Routes';

const App = () => {
  return <Routes />
};

export default App;
