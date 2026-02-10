import { Image } from "expo-image";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerLargeTitleEnabled: true, title: "Hello World" }} />
      <View className="flex-1 items-center justify-center">


        <Image
          source={require("@/assets/images/splash-icon.png")}
          style={{ width: 200, height: 200 }}
        />
      </View>

    </>
  );
}
