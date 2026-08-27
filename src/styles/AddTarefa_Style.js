import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFF8E7'
    },

    innerForm: {
        boxShadow: 'rgba(70, 55, 20, 0.12) 0px 2px 4px, rgba(70, 55, 20, 0.08) 0px 6px 12px',
        borderRadius: 14,
        backgroundColor: '#FFFFFF',
        paddingVertical: 20,
        paddingHorizontal: 20,
        display: 'flex',
        alignSelf: 'center',
        marginBottom: 100,
        marginTop: 15,
        width: '90%'
    },

    scrollContainer: {
        height: 1
    },

    textBox: {
        paddingHorizontal: 10,
        borderRadius: 8,
        marginBottom: 25,
        height: 40,
        width: '100%',
        backgroundColor: '#FFFDF5',
        borderWidth: 1,
        borderColor: '#E6D9A8',
        color: '#302B20',
        fontSize: 15,

        boxShadow: 'rgba(70, 55, 20, 0.08) 0px 2px 4px'
    },

    opcaoEntrada: {
        display: 'flex',
        alignItems: 'center'
    },

    opcaoEntradaText: {
        color: '#C28A00',
        marginBottom: 20,
        fontFamily: 'Inter_700Bold',
    },

    boxTitle: {
        marginBottom: 10,
        fontSize: 20,
        fontFamily: 'Inter_700Bold',
        color: '#302B20',
    },

    header: {
        backgroundColor: '#FFCB45',
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        width: '100%',
        gap: 10,
        top: 0,
        position: 'absolute'
    },

    formButton: {
        paddingHorizontal: 10,
        paddingVertical: 11,
        borderRadius: 10,
        alignSelf: 'center',
        width: '80%',
        marginTop: 10,
        backgroundColor: '#E0A800',

        boxShadow: 'rgba(180, 130, 0, 0.25) 0px 3px 6px'
    },

    formButtonText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontFamily: 'Inter_700Bold'
    }
});