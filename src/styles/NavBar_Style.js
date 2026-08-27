import { StyleSheet } from 'react-native';

export const geralStyles = StyleSheet.create({

    navBar: {
        position: 'fixed',
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,

        backgroundColor: '#FFFDF5',

        borderTopColor: '#E6D9A8',
        borderTopWidth: 1.5
    },

    iconNavBar: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '20%',
        paddingVertical: 3
    },

    iconNavBarText: {
        color: '#403A2F',
        textAlign: 'center',
        fontSize: 13,
        fontWeight: '600'
    },
});