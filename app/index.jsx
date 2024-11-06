import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import "../global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-3xl font-black ">Home</Text>
      <Link href="/home" className="text-blue-500 underline mt-4">Profile</Link>
      <StatusBar style="auto" />
    </View>
  );
}