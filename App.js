import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Button,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomScreen from "./app/screens/WelcomScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from './app/components/Icon'
import ListItem from "./app/components/ListItem";
import AccountScreen from './app/screens/AccountScreen'
import ListingsScreen from "./app/components/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  const [category, setCategory] = useState();
  return (
    <ListingEditScreen></ListingEditScreen>
  );
}
