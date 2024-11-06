import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View  className="flex-1 items-center justify-center bg-red-500">
      <Text >Profile</Text>
      <Link href="/" style={{ color: 'blue' }}>Home</Link>
      <StatusBar style="auto" />
    </View>
  );
}


 