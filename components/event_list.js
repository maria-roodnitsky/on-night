/* eslint-disable react/destructuring-assignment */
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
  TouchableOpacity
} from 'react-native';
import {getEvents} from '../api_calls';
import axios from 'axios';
import { createStackNavigator } from '@react-navigation/stack';


const ROOT_URL = 'https://on-night-api.herokuapp.com/api';

const Stack = createStackNavigator();

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
    }
  });

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'true facts',
      isLoading: true,
      dataSource: [],
      events: [],
    };
  }

  // ---------- componentDidMount here! -----------//

  componentDidMount() {
      this.fetchEvents();
  }

  fetchEvents = () => {
    // const allEvents = getEvents();
      axios.get(`${ROOT_URL}/events`, {headers: {'authorization': this.props.token}}).then((response) => {
          this.setState({events: response.data});
      })

  }


  showVideoDetail(video) {
    // pass in video into this.props.navigation.state.params.video in navigated view
    this.props.navigation.navigate('Detail', { video });
  }

  renderLoadingView() {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  renderEventCell(event) {
    return (
      <View>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate("Test")}}>
          <View style={styles.container}>
            {/* <Image
              source={{ uri: video.snippet.thumbnails.default.url }}
              style={styles.thumbnail}
            /> */}
            <View style={styles.rightContainer}>
              <Image
                source={require('../img/greek_spaces/alphachi.jpg')}
                style={styles.image}
              />
              <Text style={styles.title}>{event.title}</Text>
              <Text style={styles.subtitle}>{event.location}</Text>
              <Text style={styles.subtitle}>{event.month}/{event.day}/{event.year}, {event.time}</Text>
              <Text>{event.description}</Text>
            </View>
          </View>
          <View style={styles.separator} />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    // if (this.state.isLoading) {
    //   return this.renderLoadingView();
    // }
    return (
      <View>
        
        <FlatList
          data={this.state.events}
          renderItem={({ item }) => { return this.renderEventCell(item); }}
          style={styles.listView}
        />
      </View>
    );
  }
}

export default EventList;