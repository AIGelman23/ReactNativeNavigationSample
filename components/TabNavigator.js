import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DetailsScreen from "../screens/DetailsScreen";
import AboutScreen from "../screens/AboutScreen";
import DeveloperScreen from "../screens/DeveloperScreen";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

// Stack Navigation

const HomeStack = createStackNavigator(
  { HomeScreen }, // Gives ability to create title
  {
    Home: { screen: HomeScreen },
    navigationOptions: {
      tabBarLabel: "Home"
    },
    defaultNavigationOptions: {
      // Change header for this stack
      title: "Home Screen",
      headerStyle: {
        backgroundColor: "#000",
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 1,
        shadowOpacity: 0.3,
        elevation: 2
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        fontFamily: "Arial"
      }
    }
  }
);

const SettingsStack = createStackNavigator(
  { SettingsScreen }, // Gives ability to create title
  {
    navigationOptions: {
      tabBarLabel: "Settings" // Change label of navigation tab
    },
    Settings: { screen: SettingsScreen },
    defaultNavigationOptions: {
      // Change header for this stack
      title: "Settings Screen",
      headerStyle: {
        backgroundColor: "#000"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        fontFamily: "Arial"
      }
    }
  }
);

const DetailsStack = createStackNavigator(
  // { DetailsScreen }, // Gives ability to create title
  {
    Details: { screen: DetailsScreen },
    About: { screen: AboutScreen },
    Developer: { screen: DeveloperScreen }
  }
);

// End Stack Navigation

// App Container
export default createAppContainer(
  createMaterialBottomTabNavigator(
    {
      Home: { screen: HomeStack },
      Details: { screen: DetailsStack },
      Settings: { screen: SettingsStack }
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;

          let IconComponent = Ionicons;

          let iconName;

          if (routeName === "Home") {
            iconName = `ios-home`;
          } else if (routeName === "Settings") {
            iconName = `ios-options`;
          } else if (routeName === "Details") {
            iconName = "ios-information-circle";
          }

          // add components as needed to the return statement
          return (
            <View style={{ width: 24, height: 24, margin: 2, marginLeft: 10 }}>
              <IconComponent name={iconName} size={20} color={tintColor} />
            </View>
          );
        }
      }),
      initialRouteName: "Home",
      activeColor: "#ffff00",
      inactiveColor: "#fff",
      barStyle: {
        backgroundColor: "#000",
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 1,
        shadowOpacity: 0.3,
        elevation: 2
      }
    }
  )
);

// End App Container
