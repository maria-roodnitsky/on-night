import axios from 'axios';

const ROOT_URL = 'https://on-night-api.herokuapp.com/api';

export function getEvents() {
    axios.get(`${ROOT_URL}/events`).then((response) => {
        return response.data;
    })
}

// export function getEvents() {
//     return (dispatch) => {
//       axios.get(`${ROOT_URL}/events`).then((response) => {
//         dispatch(response.data);
//       }).catch((error) => {
//         dispatch(error);
//       });
//     };
//   }