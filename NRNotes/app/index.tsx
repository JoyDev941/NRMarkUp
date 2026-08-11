import { base } from "@/global";
import { tileData } from "@/model/tileInterface";
import { useState } from "react";
import { View } from "react-native";


export default function Index() {
  const [note, setnote] = useState<tileData[]> ([]);

  return (
    <View style={base.screen}>
    </View>
  );
}
