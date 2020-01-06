import React from "react";
import { Text, View, StyleSheet } from "react-native";
import TabNavigator from "./components/TabNavigator";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});
