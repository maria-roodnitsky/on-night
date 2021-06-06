/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';
import axios from 'axios';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  TouchableHighlight,
} from 'react-native';

const ROOT_URL = 'https://on-night-api.herokuapp.com/api';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgb(240,240,240)',
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
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 3,
      },
      subtitle: {
        fontSize: 12,
      },
      separator: {
        height: 1,
        backgroundColor: 'rgb(200,200,200)',
      },
      listView: {
        backgroundColor: 'rgb(240,240,240)',
      },
      loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: 20,
        height: 20
      },
  });

class StudentSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'true facts',
      isLoading: true,
      dataSource: [],
      studentQuery: 'Will',
      users: [],
      userEmails: [],
      students: [],
    };
  }

  // ---------- componentDidMount here! -----------//

  componentDidMount() {
      this.fetchData();
      this.fetchUsers();
  }

  // ------------ put fetchData here! -------------//

  fetchData() {
    // youtubeSearch(this.state.query)
    //   .then((responseData) => {
    //     this.setState({
    //       dataSource: responseData,
    //       isLoading: false,
    //     });
    //   }).catch((error) => {
    //     console.log(error);
    //   });
    axios.get(`https://api-lookup.dartmouth.edu/v1/lookup?q=${this.state.studentQuery}`, {headers: {'authorization': this.props.token}}).then((response) => {
        this.setState({students: response.data.users, isLoading: false});
    }).catch((error) => {
        console.log(error);
    })
  }

  fetchUsers() {
    axios.get(`${ROOT_URL}/users`, {headers: {'authorization': this.props.token}}).then((response) => {
        this.setState({users: response.data});
        let userEmails = [];
        for (const user of response.data) {
            userEmails.push(user.email);
        }
        this.setState({userEmails});
    }).catch((error) => {
        console.log(error);
    })
  }


  renderLoadingView() {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }


  renderStudentCell(student) {
    let registered = false;
    if (student.mail != null && this.state.userEmails.includes(student.mail.toLowerCase())) {
        registered = true;
    }
    return (
      <TouchableHighlight underlayColor="orange">
        <View>
          <View style={styles.container}>
            <View style={styles.rightContainer}>
              <Text style={styles.title}>{student.displayName}</Text>
              <Text style={styles.subtitle}>{student.mail}</Text>
              {registered && <Text>On onnight</Text>}
            </View>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  }

  render() {
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
          style={styles.listView}
        />
      </View>
    );
  }
}

export default StudentSearch;