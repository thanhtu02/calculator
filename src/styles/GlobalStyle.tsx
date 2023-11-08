import { StyleSheet } from "react-native";
import { Colors } from "./Color";

export const Styles = StyleSheet.create({
    btnOrange: {
        width: 72,
        height: 72,
        backgroundColor: Colors.orange,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        borderRadius: 90
    },
    btnOrange0: {
        width: 160,
        height: 72,
        backgroundColor: Colors.orange,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        borderRadius: 90
    },
    btnGray: {
        width: 72,
        height: 72,
        backgroundColor: Colors.gray,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        borderRadius: 90
    },
    btnGray0: {
        width: 160,
        height: 72,
        backgroundColor: Colors.gray,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        borderRadius: 90
    },
    btnLight: {
        width: 72,
        height: 72,
        backgroundColor: Colors.btnLight,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
        borderRadius: 90
    },
    btnLight0: {
        width: 160,
        height: 72,
        backgroundColor: Colors.btnLight,
        justifyContent: "center",
        paddingLeft: 30,
        alignSelf: 'flex-end',
        margin: 8,
        borderRadius: 90
    },
    btnDark: {
        width: 72,
        height: 72,
        backgroundColor: Colors.btnDark,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
        borderRadius: 90
    },
    btnDark0: {
        width: 160,
        height: 72,
        backgroundColor: Colors.btnDark,
        justifyContent: "center",
        paddingLeft: 30,
        alignSelf: 'flex-end',
        margin: 8,
        borderRadius: 90
    },

    btnWhite: {
        width: 72,
        height: 72,
        backgroundColor: Colors.btnLight,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
        borderRadius: 90
    },
    btnWhite0: {
        width: 72,
        height: 72,
        backgroundColor: Colors.orange,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
        borderRadius: 90
    },

    smalltextDark: {
        color: Colors.dark,
        fontSize: 32,
    },
    smalltextOrange: {
        color: Colors.orange,
        fontSize: 32,
    },
    smalltextWhite: {
        color: Colors.light,
        fontSize: 32,
    },

    smalltextLight: {
        color: Colors.light,
        fontSize: 32,
    },

    bigtextLight: {
        color: Colors.mix_orange,
        fontSize: 80,
        fontWeight: '500'
    },
    bigtextDark: {
        color: Colors.light,
        fontSize: 80,
        fontWeight: '500'
    },
    row: {
        maxWidth: '100%',
        flexDirection: 'row'
    },
    viewBottom: {
        position: 'absolute',
        bottom: 50,
    },
    screenFirstNumber: {
        fontSize: 96,
        color: Colors.gray,
        fontWeight: '200',
        alignSelf: 'flex-end'
    }, 
    screenSecondNumber: {
        fontSize: 40,
        color: Colors.gray,
        fontWeight: '200',
        alignSelf: 'flex-end'
    }
})