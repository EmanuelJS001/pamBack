import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    scrollContainer: {
        
        height: 1
    },

    container: {
        flex: 1,
        backgroundColor: '#FFF8E7'
    },

    innerForm: {
        boxShadow: 'rgba(70, 55, 20, 0.12) 0px 2px 4px, rgba(70, 55, 20, 0.08) 0px 6px 12px',
        borderRadius: 16,
        paddingVertical: 35,
        paddingHorizontal: 22,
        display: 'flex',
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 25,
        width: '90%',
        backgroundColor: '#FFFFFF'
    },

    textBox: {
        paddingHorizontal: 10,
        borderRadius: 8,
        marginBottom: 25,
        height: 42,
        width: '100%',
        backgroundColor: '#FFFDF5',
        borderWidth: 1,
        borderColor: '#E6D9A8',
        color: '#302B20',
        fontSize: 16,

        boxShadow: 'rgba(90, 75, 30, 0.08) 0px 2px 4px'
    },

    opcaoEntrada: {
        display: 'flex',
        alignItems: 'center'
    },

    opcaoEntradaText: {
        color: '#C28A00',
        marginBottom: 20,
        fontFamily: 'Inter_700Bold',
        fontSize: 15
    },

    boxTitle: {
        marginBottom: 8,
        fontSize: 18,
        fontFamily: 'Inter_700Bold',
        color: '#302B20'
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
        paddingVertical: 12,
        borderRadius: 10,
        alignSelf: 'center',
        width: '80%',
        marginTop: 10,
        backgroundColor: '#E0A800',

        boxShadow: 'rgba(180, 130, 0, 0.25) 0px 3px 6px'
    },

    formButtonText: {
        textAlign: 'center',
        fontSize: 19,
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontFamily: 'Inter_700Bold'
    }
});
