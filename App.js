import React from 'react';
import { Text, View, StyleSheet, StatusBar, TextInput, Dimensions, Platform, ScrollView } from 'react-native';
import ToDo from "./ToDo";

const { height, width } = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    newToDo: "",
  }
  render() {
    const { newToDo } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Kawai To Do</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder={"New To Do"} value={newToDo}
            onChangeText={this._controllNewToDo} placeholderTextColor={"#999"}
            autoCorrect={false} />
          <ScrollView contentContainerStyle={styles.toDos}>
            <ToDo />
          </ScrollView>
        </View>
      </View>
    );
  }
  _controllNewToDo = text => {
    this.setState({
      newToDo: text
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#F23657',

  },
  title: {
    color: 'white',
    fontSize: 30,
    marginTop: 50,
    fontWeight: "200",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width - 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffest: {
          height: -1,
          width: 0,
        }
      },
      android: {
        elevation: 3,
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 25,
  },
  toDos: {
    alignItems: "center",
  },
});