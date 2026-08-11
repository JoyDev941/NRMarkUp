import { Text, View } from "react-native";
import { base } from "@/global"
import Tile from "@/components/Tile/TileComponents"


export default function Index() {
  return (
    <View style={base.screen}>
      <Tile/>
    </View>
  );
}
