import { StyleSheet, Text, View } from "react-native";
import { SplashScreen, Slot, Stack } from "expo-router";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
      "Poppins-Black": require("../../assets/fonts/Poppins-Black.ttf"),
    });
  
    useEffect(() => {
      if (error) throw error;
  
      if (fontsLoaded) {
        SplashScreen.hideAsync();
      }
    }, [fontsLoaded, error]);
  
    if (!fontsLoaded) {
      return null;
    }
  
    if (!fontsLoaded && !error) {
      return null;
    }
  
    return (
      <GlobalProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="search/[query]" options={{ headerShown: false }} />
        </Stack>
      </GlobalProvider>
    );
  };
  
  export default RootLayout;