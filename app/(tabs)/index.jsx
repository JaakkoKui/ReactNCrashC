import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import gStyles from "../../styles.js";

export default function App() {
  return (
    <View style={gStyles.container}>
      <Text>Home</Text>
      <Link href="/profile">Profile</Link>
      <StatusBar style="auto" />
    </View>
  );
}


 