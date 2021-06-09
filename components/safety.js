/* eslint-disable one-var */
/* eslint-disable class-methods-use-this */
// NOTE: We refered to the react native docs for our font styles

import React, { Component } from 'react';
import {
  Linking, StyleSheet, View, Text, Image, FlatList, Dimensions, ImageBackground,
} from 'react-native';
import Girl from '../img/Girl.svg';
import Boy from '../img/Boy.svg';
import Champagne from '../img/Wine.svg';

const styles = StyleSheet.create({
  backgroundImg: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  title: {
    fontSize: 25,
    marginBottom: 5,
    color: 'white',
    fontFamily: 'Comfortaa-Bold',
  },
  question: {
    fontSize: 18,
    // fontStyle: "italic",
    marginBottom: 15,
    color: 'white',
    fontFamily: 'Comfortaa-Regular',
    marginTop: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white',
    fontFamily: 'Open-Sans',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Open-Sans',
    textTransform: 'uppercase',
  },
  gif_box: {
    height: 70,
    width: 70,
    marginTop: 30,
    marginLeft: 0,
  },
  gif_container: {
    flexDirection: 'row',
  },
  content_box: {
    flexDirection: 'column',
    width: Dimensions.get('window').width * 0.65,
  },
  text_boy: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 1,
    color: 'white',
    fontFamily: 'Open-Sans',
  },
  image_box: {
    height: 20,
    width: 100,
    flexDirection: 'row',
    margin: 5,
  },
  content: {
    fontSize: 15,
    marginBottom: 5,
    fontFamily: 'Open-Sans',
  },
  container: {
    marginTop: 10,
    backgroundColor: '#00FFFF10',
    marginBottom: 10,
    width: Dimensions.get('window').width - 30,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
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
  },
  subtitle: {
    fontSize: 12,
  },
  separator: {
    height: 1,
    backgroundColor: 'rgb(200,200,200)',
  },
  listView: {
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: '#A9469F',
    width: '75%',
    padding: 10,
    borderRadius: 20,
    margin: 10,
    opacity: 0.8,
    borderWidth: 2,
    borderColor: '#A9469F',
  },
});

const safetyPoints = [
  {
    title: 'Level 1: Sobriety',
    low_female_count: 0,
    high_female_count: 1,
    low_male_count: 0,
    high_male_count: 1,
    moving: [{ key: 'Slightly impaired reaction time' }],
    interacting: [{ key: 'Slightly poorer judgement' }, { key: 'Unlikely to appear intoxicated' }],
    conclusion: 'fine',
    content: 'If they want to stay sober, amazing! We love our sober friends.',
    gif: 1,
  },
  {
    title: 'Level 2: Euphoria',
    low_female_count: 1,
    high_female_count: 2,
    low_male_count: 2,
    high_male_count: 4,
    moving: [{ key: 'Moderately impaired reaction time' }, { key: 'Moderately impaired coordination' }],
    interacting: [
      { key: 'More confident, chatty, talkative, animated' },
      { key: 'Declining inhibitions and judgement' },
      { key: 'Memory beginning to jumble' },
      { key: 'Lessening awareness of danger' },
      { key: 'Decreasing alertness' },
      { key: 'Trouble processing information' }],
    conclusion: 'tipsy',
    content: 'They are still in the scope of drinking responsibly! Try to keep them from texting an ex (they may officially be brave enough to do it) but they\'re still right of mind (they want to text them when they\'re sober too).',
    gif: 2,
  },
  {
    title: 'Level 3: Excitement',
    low_female_count: 2,
    high_female_count: 4,
    low_male_count: 3,
    high_male_count: 5,
    moving: [{ key: 'Nausea and/or vomiting' }, { key: 'Clumsy with clearly impaired coordination' }, { key: 'Blurry vision, decreased peripheral awareness, sensitive to light' }],
    interacting: [{ key: 'Easily excited or saddened' }, { key: 'Slurred speech' }, { key: 'Memory loss' }, { key: 'Clearly impaired perception and judgement' }, { key: 'Sleepy' }, { key: 'Declining inhibitions and judgement' }],
    conclusion: 'drunk',
    content: 'They should probably be done for the night. They may still be having fun, but they are beginning to walk the fine line of fun and not-fun. This is the time to offer a glass of water.',
    gif: 3,
  },
  {
    low_female_count: 4,
    high_female_count: 0, // dummy for catching high case
    low_male_count: 5,
    high_male_count: 0,
    title: 'Level 4: Confusion',
    moving: [{ key: 'Clearly impaired coordination' }, { key: 'Walking with a stagger or unable to stand' }],
    interacting: [
      { key: 'Emotionally unstable and disoriented' },
      { key: 'Dizzy' },
      { key: 'Memory lapses (blacking out) where they are not quite passed out but operating as a walking, talking, zombie on autopilot' },
      { key: 'Much higher pain tolerance' },
      { key: 'Emotional outbursts and confusion' }],
    conclusion: 'dangerously drunk',
    content: 'This person needs to stop drinking. If you need to be a little mean with them to make that happen, do so. (They will likely appreciate it in the morning.) Because they are so disengaged with the real world, make sure you see them make it home or to a place where they cannot hurt themselves.',
    gif: 4,
  },
  {
    title: 'Level 5: Stupor',
    low_female_count: 4,
    high_female_count: 0, // dummy for catching high case
    low_male_count: 5,
    high_male_count: 0,
    moving: [
      { key: 'Losing most or all control over bodily and motor functions' },
      { key: 'Not responding appropriately to stimuli' },
      { key: 'Unable to stand or walk' },
      { key: 'Vomiting' },
      { key: 'Trouble breathing' },
      { key: 'Gag reflex not working appropriately' },
      { key: 'Unresponsive or completely passed out' },
      { key: 'Seizures' },
      { key: 'Blue or pale skin' }],
    interacting: [{ key: 'Emotionally unstable and disoriented' }, { key: 'Dizzy' }, { key: 'Memory lapses (blacking out) where they are not quite passed out but operating as a walking, talking, zombie on autopilot' }, { key: 'Much higher pain tolerance' }, { key: 'Emotional outbursts and confusion' }],
    conclusion: 'profoundly intoxicated and in dangerous territory of alcohol poisoning and death',
    content: 'This person needs immediate medical help to survive. Do not leave them to sleep it off. In that time, they may fall into respiratory arrest or choke on their own vomit. If there is even an inkling of a thought that a person may be in this state of intoxication, call for help. It\'s okay, call. You\'re doing the brave (and right) thing.',
    gif: 5,
  },
];

class Safety extends Component {
  renderSafetyCell(point) {
    let imgSource;

    if (point.gif == 1) {
      imgSource = require('../img/angel.gif');
    } else if (point.gif == 2) {
      imgSource = require('../img/wink.gif');
    } else if (point.gif == 3) {
      imgSource = require('../img/drunk.gif');
    } else if (point.gif == 4) {
      imgSource = require('../img/vomit.gif');
    } else if (point.gif == 5) {
      imgSource = require('../img/coma.gif');
    }

    let viewContainer;

    if (point.low_female_count == 0) {
      viewContainer = (
        <View>
          <Text style={styles.text}> 0 </Text>
        </View>
      );
    } else {
      viewContainer = (
        <View />
      );
    }

    let viewContainer2;

    if (point.high_female_count == 0) {
      viewContainer2 = (
        <View>
          <Text style={styles.text}> + </Text>
        </View>
      );
    } else {
      viewContainer2 = (
        <Text style={styles.text}> - </Text>
      );
    }

    return (

      <View style={styles.container}>
        <View style={styles.rightContainer}>
          <View style={styles.gif_container}>
            <View style={styles.content_box}>
              <Text style={styles.title}>{point.title}</Text>
              <Text style={styles.question}>Drinks per hour?</Text>
              <View style={styles.image_box}>
                <Girl height={20} width={20} />
                <Text style={styles.text}>  =  </Text>
                {viewContainer}
                {Array.from(Array(point.low_female_count)).map(() => {
                  return <Champagne height={22} width={22} />;
                })}
                {viewContainer2}
                {Array.from(Array(point.high_female_count)).map(() => { return <Champagne height={22} width={22} />; })}
              </View>
              <View style={styles.image_box}>
                <Boy height={18} width={15} />
                <Text style={styles.text_boy}>   =  </Text>
                {viewContainer}
                {Array.from(Array(point.low_male_count)).map(() => { return <Champagne height={22} width={22} />; })}
                {viewContainer2}
                {Array.from(Array(point.high_male_count)).map(() => { return <Champagne height={22} width={22} />; })}
              </View>
            </View>
            <Image
              source={imgSource}
              style={styles.gif_box}
            />
          </View>
          <Text style={[styles.question, { marginBottom: 3 }]}>Physical state?</Text>
          <FlatList
            data={point.moving}
            renderItem={({ item }) => (
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.text}>{'\u2022'}</Text>
                <Text style={[{ flex: 1, paddingLeft: 15 }, styles.text]}>{item.key}</Text>
              </View>
            )}
          />
          <Text style={[styles.question, { marginBottom: 3 }]}>Mental state?</Text>
          <FlatList
            data={point.interacting}
            renderItem={({ item }) => (
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.text}>{'\u2022'}</Text>
                <Text style={[{ flex: 1, paddingLeft: 15 }, styles.text]}>{item.key}</Text>
              </View>
            )}
          />
          <Text style={[styles.question, { fontFamily: 'Comfortaa-Bold', marginBottom: 3 }]}>
            Conclusion: this person is
            {' '}
            {point.conclusion}
            .
          </Text>
          <Text style={styles.text}>{point.content}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImg}>
        <FlatList
          ListHeaderComponent={(
            <View style={[styles.container, { backgroundColor: '#A9469F10' }]}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <Text style={styles.title}>"Are they too drunk?"</Text>
              <Text style={[styles.text, { fontSize: 14 }]}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                We're pretty good at knowing when someone is not okay. If you're reading the content of this page while watching over someone, err on the side of being too cautious. Your gut feeling (especially when it comes to how drunk the people around you are) tends to be right. If after looking through these 5 stages of intoxication, a part of you thinks you should get between someone and their next drink or you should call for help, do it. Maybe someone will do the same for you someday. We take care of each other — let's be good at it.
              </Text>
            </View>
)}
          data={safetyPoints}
          renderItem={({ item }) => { return this.renderSafetyCell(item); }}
          style={styles.listView}
        />
        <View style={[styles.buttonContainer, { backgroundColor: '#fc035e80', borderColor: '#fc035e' }]}>
          <Text
            style={styles.buttonText}
            onPress={() => Linking.openURL('tel:6036464000')}
          >
            Call SNS
          </Text>
        </View>
        <View style={{ height: Dimensions.get('window').height * 0.2 }} />

      </ImageBackground>
    );
  }
}

export default Safety;
