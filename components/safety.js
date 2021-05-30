

//NOTE: We refered to the react native docs for our font styles

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, FlatList} from 'react-native';

const safetyPoints=[
  {
    title: "Users below the age of 21 are strictly prohibited from drinking alcohol at Greek Organizations",
    content: "According to the federal law, any user below the age of 21 is not allowed to get alcoholic drinks and drinking below that age is injurious to health."
  },
  {
    title: "Safe drinking for users above the age of 21",
    content: "To reduce the risk of alcohol-related harms, the 2020-2025 Dietary Guidelines for Americansexternal icon recommends that adults of legal drinking age can choose not to drink, or to drink in moderation by limiting intake to 2 drinks or less in a day for men or 1 drink or less in a day for women, on days when alcohol is consumed."
  },
  {
    title: "Peer Pressure",
    content: "The Guidelines do not recommend that individuals who do not drink alcohol start drinking for any reason and that if adults of legal drinking age choose to drink alcoholic beverages, drinking less is better for health than drinking more."
  },
  {
    title: "If someone has alcohol poisoning",
    content: "Call 911 right away. Don't leave the person alone. Try to keep them awake and sitting upright."
  }
]

class Safety extends Component {


  renderSafetyCell(point) {
    return (
      <View>
        <View style={styles.container}>
          {/* <Image
            source={{ uri: video.snippet.thumbnails.default.url }}
            style={styles.thumbnail}
          /> */}
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{point.title}</Text>
            <Text style={styles.content}>{point.content}</Text>
          </View>
        </View>
        <View style={styles.separator} />
      </View>
    );
  }

  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.title}>
      //     Users below the age of 21 are strictly prohibited from drinking alcohol at Frats.
      //   </Text>
      //   <Text style={styles.content}>
      //     According to the federal law, any user below the age of 21 is not allowed to get alcoholic drinks and drinking below that age is injurious to health.
      //   </Text>
      //   <View style={styles.separator} />
      //   <Text style={styles.title}>
      //     Users below the age of 21 are strictly prohibited from drinking alcohol at Frats.
      //   </Text>
      //   <Text style={styles.content}>
      //     According to the federal law, any user below the age of 21 is not allowed to get alcoholic drinks and drinking below that age is injurious to health.
      //   </Text>
      //           <View style={styles.separator} />
      //   <Text style={styles.title}>
      //     Users below the age of 21 are strictly prohibited from drinking alcohol at Frats.
      //   </Text>
      //   <Text style={styles.content}>
      //     According to the federal law, any user below the age of 21 is not allowed to get alcoholic drinks and drinking below that age is injurious to health.
      //   </Text>
      //   <View style={styles.separator} />
      //   <Text style={styles.title}>
      //     Users below the age of 21 are strictly prohibited from drinking alcohol at Frats.
      //   </Text>
      //   <Text style={styles.content}>
      //     According to the federal law, any user below the age of 21 is not allowed to get alcoholic drinks and drinking below that age is injurious to health.
      //   </Text>
      // </View>
      <View>
        <FlatList 
          data={safetyPoints}
          renderItem={({ item }) => { return this.renderSafetyCell(item); }}
          style={styles.listView}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   fontFamily: "Cochin",
  //   marginTop:30,
  //   marginLeft: 20,
  //   marginRight: 20,
  //   height: 100,
  // },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom:5,
    color: 'purple',
    fontFamily: "Comfortaa-Regular",
  },
  
  content: {
    fontSize: 15,
    marginBottom: 5,
    fontFamily: "Open-Sans",
  },
    separator: {
    height: 1,
    backgroundColor: 'rgb(200,200,200)',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgb(240,240,240)',
    height: 150,
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

export default Safety;