import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import gStyles from "../../styles.js";
import "../../global.css";


export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text>Home</Text>
      <Link href="/profile">Profile</Link>
      <StatusBar style="auto" />
    </View>
  );
}


 