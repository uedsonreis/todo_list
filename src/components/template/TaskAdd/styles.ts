import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
        marginVertical: 20,
        paddingHorizontal: 10,
        width: '100%',
        height: 62,
    },

    input: {
        width: Dimensions.get('window').width - 70,
        height: '100%',
    },

    buttonContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        marginRight: 10,
        width: 40,
    },

    button: {
        height: '100%'
    },

});