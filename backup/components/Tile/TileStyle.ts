import { StyleSheet } from 'react-native';

const a = "#ADD7F6";
const b = "#87BFFF";
const c = "#3F8EFC";
const d = "#2667FF";
const e = "#3B28CC";

export const textStyleTile = StyleSheet.create({
    TileTemplate:{
        height: 75,
        width: 280,
        marginLeft: 10,
    },
    TitleDesign:{
        width: '100%',
        height: 25,
    },
    TextTitle:{
        fontSize: 20,
        fontFamily: 'Roboto',
    },
    BodyDesign:{
        width: '100%',
        flex: 1,
    },
    TextBody:{
        fontSize: 14,
    }
})

export const tileSeries = StyleSheet.create({
    TileLoc:{
        backgroundColor: "#FFFFFF",
        height: 113,
        width: 385,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,
        borderRadius: 5,
    },

    TileBase:{
        backgroundColor: "white",
        height: 75,
        width: 75,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4
    },

    TileNavy:{backgroundColor: "#227C9D"},

    TileAqua:{backgroundColor: "#17C3B2"},

    TileCreamYellow:{backgroundColor: "#FFCB77"},

    TileWhiteCream:{backgroundColor: "#FEF9EF"},

    TileConcreteRed:{backgroundColor: "#FE6D73"}
})
