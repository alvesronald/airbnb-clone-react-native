import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    button:{
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: '#676767',
        justifyContent: 'center',
        alignItems: 'center'
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
    },
    title:{
        marginHorizontal: 20,
        fontSize: 16,
        color: '#000'
    },
    actionText:{
        fontSize: 20, 
        color: '#474747'
    }
});

export default styles;
