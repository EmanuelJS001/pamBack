import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF9E9',
    },

    innerForm: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 75,
        marginBottom: 100,

        paddingVertical: 28,
        paddingHorizontal: 22,

        backgroundColor: '#FFFFFF',
        borderRadius: 18,

        // Android
        elevation: 5,

        // iOS
        shadowColor: '#6B5420',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.12,
        shadowRadius: 10,
    },

    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 30,
    },

    textBox: {
        width: '100%',
        height: 48,

        paddingHorizontal: 14,

        marginBottom: 22,

        backgroundColor: '#FFFDF7',
        borderWidth: 1,
        borderColor: '#E8D9A6',
        borderRadius: 10,

        color: '#302B20',
        fontSize: 15,

        // Android
        elevation: 1,

        // iOS
        shadowColor: '#6B5420',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3,
    },

    opcaoEntrada: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    },

    opcaoEntradaText: {
        marginBottom: 20,

        color: '#B77900',
        fontSize: 15,
        fontFamily: 'Inter_700Bold',
    },

    boxTitle: {
        marginBottom: 14,

        fontSize: 21,
        lineHeight: 27,

        fontFamily: 'Inter_700Bold',
        color: '#302B20',
    },

    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,

        height: 62,

        paddingHorizontal: 18,

        backgroundColor: '#FFCB45',

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',

        gap: 10,

        // Android
        elevation: 6,

        // iOS
        shadowColor: '#806000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.18,
        shadowRadius: 5,

        zIndex: 10,
    },

    formButton: {
        width: '80%',
        alignSelf: 'center',

        marginTop: 8,

        paddingVertical: 13,
        paddingHorizontal: 18,

        borderRadius: 12,

        backgroundColor: '#D99B00',

        // Android
        elevation: 4,

        // iOS
        shadowColor: '#B27A00',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
    },

    formButtonText: {
        textAlign: 'center',

        fontSize: 18,
        fontFamily: 'Inter_700Bold',
        color: '#FFFFFF',
    },
});