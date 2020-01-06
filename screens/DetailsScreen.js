import React from "react";
import { View, Text, Button } from "react-native";

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Details Screen</Text>
        <Button
          title="Go To About Screen"
          onPress={() => this.props.navigation.navigate("About")}
        />
        <Button
          title="Go to Developer Screen"
          onPress={() => this.props.navigation.navigate("Developer")}
        />
      </View>
    );
  }
}

export default DetailsScreen;
