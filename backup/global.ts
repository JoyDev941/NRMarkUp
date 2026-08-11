import { StyleSheet, View } from 'react-native';

const placeholder = "red";
const a = "#ADD7F6";

export const place = StyleSheet.create({
    holder:{
        height: 150,
        width: 150,
        backgroundColor: placeholder
    },
    fill:{
        flex: 1,
        backgroundColor: placeholder
    }
})

export const base = StyleSheet.create({
    screen:{
        paddingTop: 60,
        paddingLeft: 8,
        paddingBottom: 10,
        
        flex: 1,
        backgroundColor: a
    }
})

