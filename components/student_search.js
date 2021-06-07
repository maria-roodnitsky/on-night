/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';
import { Text, View, Button, FlatList, ActivityIndicator, TextInput, SafeAreaView, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, TouchableHighlight, Dimensions, KeyboardAvoidingView } from 'react-native';
import axios from 'axios';

const ROOT_URL = 'https://on-night-api.herokuapp.com/api';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgb(240,240,240)',
      },
      backgroundImg: {
        width: '100%',
        height: Dimensions.get("window").height,
      },
      thumbnail: {
        width: 100,
        height: 100,
        marginRight: 5,
        backgroundColor: 'black',
      },
      rightContainer: {
        flex: 1,
        padding: 5,
        height: 100,
      },
      heading: {
        fontSize: 32,
        textAlign: 'center',
        margin: 25,
        fontFamily: 'Comfortaa-Regular',
        color: 'black',
        marginTop: Dimensions.get("window").height * .1,
      },
      house: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Comfortaa-Regular',
        color: 'white',
        marginBottom: 20,
        lineHeight: 30,
      },
      contents: {
        width: '90%',
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 10,
        margin: 10,
        marginLeft: '5%',
        },
      title: {
        fontSize: 17,
        marginLeft: 10,
        marginTop: 10,
        fontFamily: 'Comfortaa-Regular',
        color: 'black',
        lineHeight: 30,
      },
      subtitle: {
        fontSize: 12,
        fontFamily: 'Comfortaa-Regular',
        marginLeft: 10,
      },
      subtitle2: {
        fontSize: 15,
        fontFamily: 'Comfortaa-Regular',
        marginLeft: 10,
        marginTop: 10,
      },
      separator: {
        height: 1,
        backgroundColor: 'rgb(200,200,200)',
      },
      loading: {
        marginTop: 200,
      },
      image: {
        width: 20,
        height: 20
      },
      buttonContainer: {
        backgroundColor: '#A9469F',
        padding: 10,
        borderRadius: 20, 
        margin: 10,
        opacity: .8,
        borderWidth: 2,
        borderColor:'#A9469F',
      },
      buttonText: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Open-Sans', 
        textTransform: "uppercase",
        fontSize: 10,
      },
      buttonContainer2: {
        backgroundColor: 'transparent',
        padding: 10,
        borderRadius: 10, 
        margin: 10,
        opacity: .8,
        borderWidth: 2,
        borderColor:'rgb(50,50,50)',
      },
      buttonText2: {
        textAlign: 'center',
        color: 'rgb(50,50,50)',
        fontFamily: 'Open-Sans', 
        textTransform: "uppercase",
        fontSize: 13,
      },
  });

class StudentSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
      studentQuery: 'John Doe',
      userEmails: [],
      students: [],
    };
  }

  // ---------- componentDidMount here! -----------//

  componentDidMount() {
      this.fetchData();
      this.fetchUsers();
  }


  fetchData() {
    axios.get(`https://api-lookup.dartmouth.edu/v1/lookup?q=${this.state.studentQuery}`, {headers: {'authorization': this.props.token}}).then((response) => {
        const students = []
        for (let student of response.data.users) {
            if (student.mail != null) {
                students.push(student);
            }
        }
        this.setState({students, isLoading: false});
    }).catch((error) => {
        console.log(error);
    })
  }

  fetchUsers() {
    const userEmails = [];
    for (const user of this.props.users) {
        userEmails.push(user.email);
    }
    this.setState({userEmails});
  }

  addToOrg = (user) => {
      const fields = {house: this.props.user.house}
      axios.put(`${ROOT_URL}/users/${user._id}`, fields).then((response) => {
        console.log(response.data);
        this.props.navigation.navigate("Members");
      }).catch((error) => {
        console.log("Failed to add to org");
      });
  }


  renderLoadingView() {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }


  renderStudentCell(student) {
    let registered = false;
    if (student.mail != null && this.state.userEmails.includes(student.mail.toLowerCase())) {
        registered = true;
    }
    let currUser = null;
    if (student.mail != null) {
        for (const user of this.props.users) {
            if (user.email == student.mail.toLowerCase()) {
                currUser = user;
            }
        }
    }

    return (
      <View style={styles.contents}>
          <View>
                <Text style={styles.title}>{student.displayName}</Text>
                <Text style={styles.subtitle}>{student.mail}</Text>
                {registered && currUser != null && currUser.house == 'none' && <TouchableOpacity style={styles.buttonContainer} onPress={() => {this.addToOrg(currUser)}}>
                        <Text style={styles.buttonText}>Add To {this.props.user.house}</Text>
                    </TouchableOpacity>}
                {registered && currUser != null && currUser.house != 'none' && <TouchableOpacity style={styles.buttonContainer2}>
                    <Text style={styles.buttonText2}>User Already Affiliated</Text>
                </TouchableOpacity>}
                {!registered && <Text style={styles.subtitle2}>User not on onnight. Tell them to join!!</Text>}
          </View>
      </View>
    );
  }

  renderContent() {
    if (this.state.isLoading) {
      return this.renderLoadingView();
    }
    return (
      <View>
        <SearchBar
          backgroundColor="#A9469F"
          showsCancelButton={false}
          onChangeText={(studentQuery) => {
            this.setState({ studentQuery });
            this.fetchData();
          }}
          value={this.state.studentQuery}
        />

        <FlatList
          data={this.state.students}
          renderItem={({ item }) => { return this.renderStudentCell(item); }}
        />
      </View>
    );
  }
  render() {
      return (
        <SafeAreaView>
            <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImg}>
                {this.renderContent()}
            </ImageBackground>
        </SafeAreaView>
      );
  }
}

export default StudentSearch;