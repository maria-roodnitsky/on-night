

//NOTE: We refered to the react native docs for our font styles

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, FlatList, Dimensions, ImageBackground} from 'react-native';
import Girl from '../img/Girl.svg';
import Boy from '../img/Boy.svg';
import Champagne from '../img/Wine.svg';
import Angel from '../img/angel.gif';


const safetyPoints=[
  {
    title: "Level 1: Sobriety",
    low_female_count: 0,
    high_female_count: 1,
    low_male_count: 0,
    high_male_count: 1,
    moving: [{key: 'Slightly impaired reaction time'},],
    interacting: [{key: 'Slightly poorer judgement'}, {key: 'Unlikely to appear intoxicated'}],
    conclusion: "fine",
    content: "If they want to stay sober, amazing! We love our sober friends.",
    gif: 1,},
  {
    title: "Level 2: Euphoria",
    low_female_count: 1,
    high_female_count: 2,
    low_male_count: 1,
    high_male_count: 3,
    moving: [{key: 'Slightly impaired reaction time'},],
    interacting: [{key: 'Slightly poorer judgement'}, {key: 'Unlikely to appear intoxicated'}],
    gif: 2,

// Men: 2 - 4

// Physical state:
// Slightly 
// coordination, slower reaction time

// Mental state:
// - more confident, chatty, talkative, animated, seem euphoric
// - Inhibitions also begin to decline: impaired judgement, memory, 
// - alertness is decreased, the individual begins having trouble processing information, they do not detect danger as quickly


    content: "To reduce the risk of alcohol-related harms, the 2020-2025 Dietary Guidelines for Americansexternal icon recommends that adults of legal drinking age can choose not to drink, or to drink in moderation by limiting intake to 2 drinks or less in a day for men or 1 drink or less in a day for women, on days when alcohol is consumed."
  },
  {
    title: "Level 3: Excitement",
    content: "The Guidelines do not recommend that individuals who do not drink alcohol start drinking for any reason and that if adults of legal drinking age choose to drink alcoholic beverages, drinking less is better for health than drinking more.",
    gif: 3,
  },
  {
    title: "Level 4: Confusion",
    content: "Call 911 right away. Don't leave the person alone. Try to keep them awake and sitting upright.",
    gif: 4,
  },
  {
    title: "Level 5: Stupor",
    content: "Call 911 right away. Don't leave the person alone. Try to keep them awake and sitting upright.",
    gif: 5,
  }
]

class Safety extends Component {


  renderSafetyCell(point) {


    let imgSource

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

    let viewContainer

    if (point.low_female_count == 0) {
      viewContainer = ( <View>
      <Text style={styles.text}> 0 </Text>
      </View>
      );
    } else {
      viewContainer = (
        <View></View>
      );
    }

    return (
      
        <View style={styles.container}>
          {/* <Image
            source={{ uri: video.snippet.thumbnails.default.url }}
            style={styles.thumbnail}
          /> */}
          <View style={styles.rightContainer}>
            <View style={styles.gif_container}>
            <View style={styles.content_box}>
            <Text style={styles.title}>{point.title}</Text>
            <Text style={styles.question}>Drinks per hour?</Text>
            <View style={styles.image_box}>
				      <Girl height={20} width={20}/>
              <Text style={styles.text}>  =  </Text>
              {viewContainer}
              {Array.from(Array(point.low_female_count)).map(() => {
                return <Champagne height={22} width={22}/>
                })}
              <Text style={styles.text_boy}> - </Text>
              {Array.from(Array(point.high_female_count)).map(() => {return <Champagne height={22} width={22}/>})}
			      </View>
            <View style={styles.image_box}>
				      <Boy height={18} width={15}/>
              <Text style={styles.text_boy}>   =  </Text>
              {viewContainer}
              {Array.from(Array(point.low_male_count)).map(() => {return <Champagne height={22} width={22}/>})}
              <Text style={styles.text_boy}> - </Text>
              {Array.from(Array(point.high_male_count)).map(() => {return <Champagne height={22} width={22}/>})}
			      </View>
            </View>
            <Image
        source={imgSource}
         style={styles.gif_box}
      />
      </View>
            <Text style={[styles.question, {marginBottom: 3}]}>Physical state?</Text>
            <FlatList
            data={point.moving}
            renderItem={({item}) =><View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>{'\u2022'}</Text>
            <Text style={[{flex: 1, paddingLeft: 15}, styles.text]}>{item.key}</Text>
          </View>}/>
          <Text style={[styles.question, {marginBottom: 3}]}>Mental state?</Text>
            <FlatList
            data={point.interacting}
            renderItem={({item}) =><View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>{'\u2022'}</Text>
            <Text style={[{flex: 1, paddingLeft: 15}, styles.text]}>{item.key}</Text>
          </View>}/>
            <Text style={[styles.question, {fontFamily: "Comfortaa-Bold", marginBottom: 3}]}>Conclusion: this person is {point.conclusion}.</Text>
            <Text style={styles.text}>{point.content}</Text>
          </View>
        </View>
    );
  }

  render() {
    return (
      <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImg}>
        <FlatList 
          data={safetyPoints}
          renderItem={({ item }) => { return this.renderSafetyCell(item); }}
          style={styles.listView}
        />
        <View style={{height: 175}}/>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImg: {
    width: '100%',
    height: Dimensions.get("window").height,
  },
  title: {
    fontSize:25,
    marginBottom: 5,
    color: 'white',
    fontFamily: "Comfortaa-Bold",
  },
  question: {
    fontSize: 18,
    // fontStyle: "italic",
    marginBottom: 15,
    color: 'white',
    fontFamily: "Comfortaa-Regular",
    marginTop: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white',
    fontFamily: "Open-Sans",
  },
  gif_box: {
    height: 70, 
    width: 70,
    marginTop: 30,
    marginLeft: 0,
  },
  gif_container:{
    flexDirection: 'row',
  },
  content_box:{
    flexDirection: 'column',
    width: Dimensions.get("window").width * .65,
  },
  text_boy: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 1,
    color: 'white',
    fontFamily: "Open-Sans",
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
    fontFamily: "Open-Sans",
  },
    separator: {
    height: 1,
    backgroundColor: '#00FFFF10',
  },
  container: {
    marginTop: 10,
    backgroundColor: '#00FFFF10',
    marginBottom: 10,
    width: Dimensions.get("window").width - 30,
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
});

export default Safety;