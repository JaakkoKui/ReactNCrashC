import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import gStyles from "../../styles.js";

export default function App() {
  return (
    <View className=" bg-blue-500 flex-1 items-center justify-center">
      <Text>Profile</Text>
      <Link href="/" style={{ color: 'blue' }}>Home</Link>
      <StatusBar style="auto" />
    </View>
  );
}


 