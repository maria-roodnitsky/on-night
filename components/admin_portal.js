import React, { Component } from 'react';
import {
  Text, View, SafeAreaView, StyleSheet, ImageBackground, TouchableOpacity, Dimensions,
} from 'react-native';

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
    textTransform: 'uppercase',
  },
  inputIcon: {
    flex: 1,
    flexDirection: 'row',

  },
  heading: {
    fontSize: 32,
    textAlign: 'center',
    margin: 25,
    fontFamily: 'Comfortaa-Regular',
    color: 'white',
    marginTop: Dimensions.get('window').height * 0.1,
  },
  house: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Comfortaa-Regular',
    color: 'white',
    marginBottom: 20,
    lineHeight: 30,
  },
  title: {
    fontSize: 17,
    marginLeft: 15,
    marginTop: 20,
    fontFamily: 'Comfortaa-Regular',
    color: 'white',
    marginBottom: 20,
    lineHeight: 30,
  },
  contentsTitle: {
    fontSize: 15,
    marginTop: 20,
    fontFamily: 'Comfortaa-Regular',
    color: 'black',
    marginBottom: 20,
    lineHeight: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  question: {
    fontSize: 16,
    margin: 25,
    color: 'white',
    fontFamily: 'Comfortaa-Regular',
  },
  backgroundImg: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: '90%',
    height: 100,
    padding: 10,
    borderRadius: 10,
    margin: 10,
    opacity: 0.8,
  },
  secondaryButtonContainer: {
    alignSelf: 'center',
    backgroundColor: '#A9469F',
    width: '50%',
    padding: 10,
    borderRadius: 20,
    margin: 10,
    opacity: 0.6,
    borderWidth: 2,
    borderColor: '#A9469F',
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Open-Sans',
    textTransform: 'uppercase',
    fontSize: 20,
    marginTop: 25,
  },
  contents: {
    width: '90%',
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 10,
    marginLeft: '5%',
  },
  footer: {
    marginTop: 200,
    alignSelf: 'center',
  },
});

class AdminPortal extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

    renderPortalContents = () => {
      if (this.props.user.house != 'none') {
        return (
          <View>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => { this.props.navigation.navigate('Events'); }}>
              <Text style={styles.buttonText}>Events</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => { this.props.navigation.navigate('Members'); }}>
              <Text style={styles.buttonText}>Members</Text>
            </TouchableOpacity>
          </View>
        );
      } else {
        return (
          <View style={styles.contents}>
            <Text style={styles.contentsTitle}>To edit your organization, please have your current admin add you as a member</Text>
          </View>
        );
      }
    }

    renderPortal = () => {
      if (this.props.user == null) {
        return (
          <View style={styles.container}>
            <Text style={styles.heading}> Loading</Text>
          </View>
        );
      } else {
        return (
          <View>
            <Text style={styles.title}>Welcome to the admin portal, the place for those in charge of a greek house on OnNight! Here, you can edit membership and events of our organization.</Text>
            <Text style={styles.house}>
              {' '}
              Your Organization:
              {' '}
              {this.props.user.house}
            </Text>
            {this.renderPortalContents()}
          </View>
        );
      }
    }

    render() {
      return (
        <SafeAreaView>
          <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImg}>
            {this.renderPortal()}
          </ImageBackground>
        </SafeAreaView>
      );
    }
}

export default AdminPortal;
