import React, { useEffect } from "react"
import SplashScreen from "react-native-splash-screen"
import WelcomeScreen from "./src/screens/welcome/WelcomeScreen"
const App = () => {
  useEffect(() => {
    if (Platform.OS === "android") return SplashScreen.hide();
  }, [])
  return (
    <WelcomeScreen />
  )
}

export default App;
