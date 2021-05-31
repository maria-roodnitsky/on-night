import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {getEvents} from '../api_calls';
import axios from 'axios';

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
  });

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'true facts',
      isLoading: true,
      dataSource: [],
      users: [],
    };
  }

  // ---------- componentDidMount here! -----------//

  componentDidMount() {
      this.fetchUsers();
  }

  fetchUsers = () => {
    // const allEvents = getEvents();
      axios.get(`${ROOT_URL}/users`, {headers: {'authorization': this.props.token}}).then((response) => {
          this.setState({users: response.data});
      })

  }

  renderLoadingView() {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  renderUserCell(user) {
    return (
      <View>
        <View style={styles.container}>
          {/* <Image
            source={{ uri: video.snippet.thumbnails.default.url }}
            style={styles.thumbnail}
          /> */}
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{user.lastName}, {user.firstName}</Text>
            <Text style={styles.subtitle}>{user.classYear}</Text>
            <Text style={styles.subtitle}>{user.house}</Text>
            <Text>{user.permission}</Text>
          </View>
        </View>
        <View style={styles.separator} />
      </View>
    );
  }

  render() {
    // if (this.state.isLoading) {
    //   return this.renderLoadingView();
    // }
    return (
      <View>
        {/* <SearchBar
          backgroundColor="#c4302b"
          showsCancelButton={false}
          textFieldBackgroundColor="#c4302b"
          onChangeText={(query) => {
            this.setState({ query });
            this.fetchData();
          }}
          value={this.state.query}
        />

        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => { return this.renderVideoCell(item); }}
          keyExtractor={(item) => item.snippet.thumbnails.default.url}
          style={styles.listView}
        /> */}
        <FlatList
          data={this.state.users}
          renderItem={({ item }) => { return this.renderUserCell(item); }}
          style={styles.listView}
        />
      </View>
    );
  }
}

export default UserList;