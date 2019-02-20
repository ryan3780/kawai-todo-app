import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TextInput, Dimensions, Platform, ScrollView } from 'react-native';
import { Constants } from 'expo';
import { AppLoading } from 'expo';
import ToDo from "./ToDo";
import uuid from 'uuid/v1';

const { height, width } = Dimensions.get("window");

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    newToDo: "",
    loadedToDos: false,
  }
  componentDidMount = () => {
    this._loadToDos();
  }

  render() {
    const { newToDo, loadedToDos } = this.state;
    if (!loadedToDos) {
      return <AppLoading />
    }
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Kawai To Do</Text>
        <View style={styles.card}>
          <TextInput style={styles.input}
            placeholder={"New To Do"}
            value={newToDo}
            onChangeText={this._controllNewToDo}
            placeholderTextColor={"#999"}
            autoCorrect={false}
            onSubmitEditing={this._addToDo}
          />
          <ScrollView contentContainerStyle={styles.toDos}>
            <ToDo text={"Hello I'm a To Do"} />
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
  _loadToDos = () => {
    this.setState({
      loadedToDos: true
    })
  }
  _addToDo = () => {
    const { newToDo } = this.state;
    if (newToDo !== "") {
      this.setState({
        newToDo: ""
      })
      this.setState(prevState => {
        const ID = uuidv1();
        const newToDoObject = {

        }
      })
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F23657',
    // paddingTop: Constants.statusBarHeight,

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