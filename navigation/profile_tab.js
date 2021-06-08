import React, { Component } from 'react';
import { Text, View, Button, TextInput, SafeAreaView, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Dimensions, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../components/profile';
import OrgEvents from '../components/org_events';
import OrgMembers from '../components/org_members';
import AdminPortal from '../components/admin_portal';
import { withTheme } from 'react-native-elements';
import NewEvent from '../components/new_event';
import StudentSearch from '../components/student_search';
import axios from 'axios';
import EditProfile from '../components/edit_profile';

const ROOT_URL = 'https://on-night-api.herokuapp.com/api';

const Stack = createStackNavigator();

const styles = StyleSheet.create({ 
  container: {
    paddingTop: 50,
},
input: {
  height: 45,
  margin: 20,
  backgroundColor: '#ffffff80',
  borderRadius: 8, 
  textAlign: 'left',
  paddingLeft: 16,
  fontFamily: 'Open-Sans',
  textTransform: "uppercase"
},
inputIcon : {
  flex: 1,
  flexDirection: 'row',

},  
heading: {
  fontSize: 32,
  textAlign: 'center',
  margin: 25,
  fontFamily: 'Comfortaa-Regular',
  color: 'white',
  marginTop: Dimensions.get("window").height * .1,
},
title: {
  fontSize: 17,
  marginLeft: 15,
  fontFamily: 'Comfortaa-Regular',
  color: 'white',
  marginBottom: 20,
},
question: {
  fontSize: 16,
  margin: 25,
  color: 'white',
  fontFamily: 'Comfortaa-Regular'
},
backgroundImg: {
  width: '100%',
  height: Dimensions.get("window").height,
},
buttonContainer: {
  alignSelf: 'center',
  backgroundColor: '#A9469F',
  width: '50%',
  padding: 10,
  borderRadius: 20, 
  margin: 10,
  opacity: .8,
  borderWidth: 2,
  borderColor:'#A9469F',
},
secondaryButtonContainer: {
  alignSelf: 'center',
  backgroundColor: '#A9469F',
  width: '50%',
  padding: 10,
  borderRadius: 20, 
  margin: 10,
  opacity: .6,
  borderWidth: 2,
  borderColor:'#A9469F',
},
buttonText: {
  textAlign: 'center',
  color: 'white',
  fontFamily: 'Open-Sans', 
  textTransform: "uppercase"
},
footer: {
  marginTop: 200,
  alignSelf: "center",
}
});

// nest stack navigator to handle two internal views
// "name" prop is the name of the route
class ProfileTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      user: null,
      events: null,
      problemLoading: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  refresh = () => {
    this.componentDidMount();
  }

  fetchData = () => {

    axios.get(`${ROOT_URL}/events`, {headers: {'authorization': this.props.token}}).then((response) => {
      this.setState({events: response.data});
    }).catch((error) => {
      this.setState({problemLoading: true})
    });

    axios.get(`${ROOT_URL}/users`, {headers: {'authorization': this.props.token}}).then((response) => {
      this.setState({users: response.data});
      for (const user of response.data) {
        if (user.email == this.props.email) {
            this.setState({user});
        }
    }
    }).catch((error) => {
      this.setState({problemLoading: true})
    });
  }

  reRender = () => {
    this.setState({users: null});
    this.componentDidMount();
  }

  renderTab = () => {
    if ((this.state.users == null || this.state.events == null || this.state.user == null) && this.state.problemLoading == false) {
      return (
        <SafeAreaView>
              <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImg}>
              <View style={styles.container}>
          <Text style={styles.heading}> Loading</Text>
        </View>
              </ImageBackground>
            </SafeAreaView>
      );
    } else if ((this.state.users == null || this.state.events == null || this.state.user == null) && this.state.problemLoading == true) {
      return (
        <View style={styles.container}>
          <Text style={styles.heading}>A problem has occured. Please refresh the app.</Text>
        </View>
      );
    } else {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name="Profile"
            options={{title: 'Profile',
            headerStyle: {
              backgroundColor: '#1c1d31',
              opacity: 1,
              elevation: 0,
            },
            headerTitleStyle: {
              fontSize: 24,
              textAlign: 'left',
              fontFamily: 'Comfortaa-Regular',
              color: 'white',
            }}}
          >
            {props => <Profile {...props} email={this.props.email} user={this.state.user}/>}
          </Stack.Screen>
          <Stack.Screen
            name="Portal"
            options={{title: 'Admin Portal',
            headerStyle: {
              backgroundColor: '#1c1d31',
              opacity: 1,
              elevation: 0,
            },
            headerTitleStyle: {
              fontSize: 24,
              textAlign: 'left',
              fontFamily: 'Comfortaa-Regular',
              color: 'white',
            }}}
          >
            {props => <AdminPortal {...props} email={this.props.email} user={this.state.user}/>}
          </Stack.Screen>
          <Stack.Screen
            name="Events"
            options={{title: 'Events',
            headerStyle: {
              backgroundColor: '#1c1d31',
              opacity: 1,
              elevation: 0,
            },
            headerTitleStyle: {
              fontSize: 24,
              textAlign: 'left',
              fontFamily: 'Comfortaa-Regular',
              color: 'white',
            }}}
          >
            {props => <OrgEvents {...props} reRender={this.reRender} user={this.state.user} events={this.state.events} reRender={this.reRender}/>}
          </Stack.Screen>
          <Stack.Screen
            name="NewEvent"
            options={{title: 'Events',
            headerStyle: {
              backgroundColor: '#1c1d31',
              opacity: 1,
              elevation: 0,
            },
            headerTitleStyle: {
              fontSize: 24,
              textAlign: 'left',
              fontFamily: 'Comfortaa-Regular',
              color: 'white',
            }}}
          >
            {props => <NewEvent {...props} reRender={this.reRender} token={this.props.token} user={this.state.user} events={this.state.events}/>}
          </Stack.Screen>
          <Stack.Screen
            name="Members"
            options={{title: 'Members',
            headerStyle: {
              backgroundColor: '#1c1d31',
              opacity: 1,
              elevation: 0,
            },
            headerTitleStyle: {
              fontSize: 24,
              textAlign: 'left',
              fontFamily: 'Comfortaa-Regular',
              color: 'white',
            }}}
          >
            {props => <OrgMembers {...props} user={this.state.user} users={this.state.users}/>}
          </Stack.Screen>
          <Stack.Screen
            name="NewMember"
            options={{title: 'New Member',
            headerStyle: {
              backgroundColor: '#1c1d31',
              opacity: 1,
              elevation: 0,
            },
            headerTitleStyle: {
              fontSize: 24,
              textAlign: 'left',
              fontFamily: 'Comfortaa-Regular',
              color: 'white',
            }}}
          >
            {props => <StudentSearch {...props} reRender={this.reRender} users={this.state.users} user={this.state.user}/>}
          </Stack.Screen>
          <Stack.Screen
            name="EditProfile"
            options={{title: 'Profile',
            headerStyle: {
              backgroundColor: '#1c1d31',
              opacity: 1,
              elevation: 0,
            },
            headerTitleStyle: {
              fontSize: 24,
              textAlign: 'left',
              fontFamily: 'Comfortaa-Regular',
              color: 'white',
            },
            }}
          >
            {props => <EditProfile {...props} user={this.state.user} reRender={this.reRender}/>}
          </Stack.Screen>
        </Stack.Navigator>
      );
    }
  }

  render () {
    return this.renderTab();
  }
}

export default ProfileTab;