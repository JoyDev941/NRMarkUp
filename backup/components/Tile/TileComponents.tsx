import {View, Text} from 'react-native'
import { tileSeries, textStyleTile } from '@/components/Tile/TileStyle'

const Title = "Title";
const Body = "This is a example of notes tab. It demonstrates the design between A colour palette set, with the objects in the screen.";


export default function Tile(){
    return(
    <View style={tileSeries.TileLoc}>
        <View style={tileSeries.TileBase}></View>
        <View style={textStyleTile.TileTemplate}>
            <View style={textStyleTile.TitleDesign}><Text style={textStyleTile.TextTitle}>{Title}</Text></View>
            <View style={textStyleTile.BodyDesign}><Text style={textStyleTile.TextBody}>{Body}</Text></View>
        </View>
    </View>
    )}

