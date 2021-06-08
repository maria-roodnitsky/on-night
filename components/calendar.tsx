import React, {useState} from 'react';
import {View, TouchableOpacity, Text, SafeAreaView, ImageBackground, Image, Dimensions} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import axios from 'axios';

const ROOT_URL = 'https://on-night-api.herokuapp.com/api';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

interface ScheduleProps {
  token: string,
}

const Schedule: React.FC<ScheduleProps> = (props) => {
  const [items, setItems] = useState({});
  const [events, setEvents] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const loadEvents = () => {
    axios.get(`${ROOT_URL}/events`, {headers: {'authorization': props.token}}).then((response) => {
      const eventsList = response.data;
      const eventCal = {};
      for (const event of eventsList) {
        let year = event.year.toString();
        let month = event.month.toString();
        let day = event.day.toString();
        if (day.length == 1) {
          day = "0" + day
        }
        if (month.length == 1) {
          month = "0" + month
        }
        const dateStr = year + "-" + month + "-" + day
        const info = {location: event.location, time: event.time, title: event.title, description: event.description}
        if (eventCal.hasOwnProperty(dateStr)) {
          eventCal[dateStr].push(info)
        } else {
          eventCal[dateStr] = []
          eventCal[dateStr].push(info)
        }
      }
      setEvents(eventCal);
    }).catch((error) => {
      console.log(error);
    })
  }

  const renderImage = (event) => {
    let imgSource = require('../img/greek_spaces/none.png');
        if (event.location == 'Alpha Chi') {
            imgSource = require('../img/greek_spaces/alphachi.jpg');
        } else if (event.location == 'Alpha Theta') {
            imgSource = require('../img/greek_spaces/alphatheta.jpg');
        } else if (event.location == 'Alpha Phi') {
            imgSource = require('../img/greek_spaces/aphi.jpg');
        } else if (event.location == 'Alpha Xi Delta') {
            imgSource = require('../img/greek_spaces/axid.jpg');
        } else if (event.location == 'Beta Alpha Omega') {
            imgSource = require('../img/greek_spaces/beta.jpg');
        } else if (event.location == 'Bones Gate') {
            imgSource = require('../img/greek_spaces/bg.jpg');
        } else if (event.location == 'Chi Delta') {
            imgSource = require('../img/greek_spaces/chidelt.jpg');
        } else if (event.location == 'Chi Gamma Epsilon') {
            imgSource = require('../img/greek_spaces/chigam.jpg');
        } else if (event.location == 'Epsilon Kappa Theta') {
            imgSource = require('../img/greek_spaces/ekt.jpg');
        } else if (event.location == 'Gamma Delta Chi') {
            imgSource = require('../img/greek_spaces/gdx.jpg');
        } else if (event.location == 'Chi Heorot') {
            imgSource = require('../img/greek_spaces/heorot.jpg');
        } else if (event.location == 'Kappa Kappa Gamma') {
            imgSource = require('../img/greek_spaces/kappa.jpg');
        } else if (event.location == 'Kappa Delta') {
            imgSource = require('../img/greek_spaces/kd.jpg');
        } else if (event.location == 'Kappa Delta Epsilon') {
            imgSource = require('../img/greek_spaces/kde.jpg');
        } else if (event.location == 'Phi Delta') {
            imgSource = require('../img/greek_spaces/phidelt.jpg');
        } else if (event.location == 'Phi Tau') {
            imgSource = require('../img/greek_spaces/phitau.jpg');
        } else if (event.location == 'Psi Upsilon') {
            imgSource=require('../img/greek_spaces/psiu.jpg');
        } else if (event.location == 'Sigma Alpha Epsilon') {
            imgSource = require('../img/greek_spaces/sae.jpg');
        } else if (event.location == 'Sigma Delta') {
            imgSource = require('../img/greek_spaces/sigmadelt.jpg');
        } else if (event.location == 'Sigma Nu') {
            imgSource = require('../img/greek_spaces/signu.jpg');
        } else if (event.location == 'Tabard') {
            imgSource = require('../img/greek_spaces/tabard.jpg');
        } else if (event.location == 'Theta Delta Chi') {
            imgSource = require('../img/greek_spaces/tdx.jpg');
        } else if (event.location == 'Tri Kap') {
            imgSource = require('../img/greek_spaces/trikap.jpg');
        }
        return <Image source={imgSource} style={{width: 75, height: 75, borderRadius: 50}}/>;
    }

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17, marginBottom:50}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
              <Avatar.Text label="J" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  const renderEvent = (event) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17, marginBottom:20}}>
        <Card style={{backgroundColor: 'rgba(255,255,255,0.5)'}}>
          <Card.Content>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              {renderImage(event)}
              <Text style={{margin: 3, fontFamily: 'Open-Sans', fontSize: 20}}>{event.title}</Text>
              <Text style={{margin: 3, fontFamily: 'Open-Sans'}}>{event.location}, {event.time}</Text>
              <Text style={{margin: 3, fontFamily: 'Open-Sans'}}>{event.description}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  }

  return (
      <ImageBackground source={require('../img/background.jpg')} style={{width: '100%',height: Dimensions.get("window").height,}}>
        <View style={{flex: .8}}>
          <Agenda
            items={events}
            loadItemsForMonth={loadEvents}
            selected={'2021-06-02'}
            renderItem={renderEvent}
            theme={{
                selectedDayBackgroundColor: '#A9469F60',
                backgroundColor: 'transparent',
                calendarBackground: '#32315C',
                agendaKnobColor: 'white',
                selectedDotColor: '#ffffff',
                dayTextColor: 'white',
                monthTextColor: 'white',
            }}/>
        </View>
      </ImageBackground>
  );
};

export default Schedule;