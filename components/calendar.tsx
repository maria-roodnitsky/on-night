import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import axios from 'axios';
const ROOT_URL = 'https://on-night-api.herokuapp.com/api';




const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Schedule: React.FC = (props) => {
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

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
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
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <Avatar.Text label="E" />
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
    <View style={{flex: 1}}>
      <Agenda
        items={events}
        loadItemsForMonth={loadEvents}
        selected={'2021-06-02'}
        renderItem={renderEvent}
        theme={{
            selectedDayBackgroundColor: '#A9469F60',
            backgroundColor: '#32315C',
            calendarBackground: '#32315C',
            agendaKnobColor: 'white',
            selectedDotColor: '#ffffff',
            dayTextColor: 'white',
            monthTextColor: 'white',

}}    />
    </View>
  );
};

export default Schedule;