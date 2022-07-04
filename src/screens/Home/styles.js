import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    color: 'white',
    fontWeight: 'bold',
    width: '50%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: '#FFF',
    width: 200,
    height: 40,
    marginLeft: 25,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchButton: {
    backgroundColor: '#FFF',
    width: Dimensions.get('screen').width - 20,
    marginHorizontal: 10,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    flexDirection: 'row',
    position: 'absolute',
    top: 20,
    zIndex: 100, // IOS
    elevation: 100 // ANDROID
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
