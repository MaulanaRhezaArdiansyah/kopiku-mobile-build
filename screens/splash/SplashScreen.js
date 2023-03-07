import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { StackActions } from "@react-navigation/native";

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      // this.props.navigation.dispatch(StackActions.replace("Home Drawer"));
      this.props.navigation.dispatch(StackActions.replace("Welcome Page"));
    }, 8000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/kopiku.png")}
        />
        <Text style={styles.text}>Kopiku</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFBA33",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "700",
    color: "#6A4029",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200,
    marginBottom: 10,
  },
});

export default SplashScreen;
