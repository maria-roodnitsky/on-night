
# OnNight

## Dev Site Update

**Front End:** We built the frontend using React Native. We added the Safety, Events, and Users tab. Both, Events and Users, tab are dynamic and fetch data from the API (backend). The events tab displays the frat events and the users tab displays the users of the app, both of which will be updated by the admins. Safety page is a static page which provides information about safety guidelies that need to be followed in frats. The app uses a color theme which is integral to the app.

![devsite](https://github.com/dartmouth-cs52-21S/project-on-night/blob/d4f2ac163fdda8a3598990f7badb7409b8fbb316/img/devsite.gif)

![the-best-team](https://user-images.githubusercontent.com/65991441/118315938-03bc2000-b4ab-11eb-92a1-bb04308153c1.png)

Welcome to the repository for the CS52 team who loves Dartmouth endlessly. We hope that -- just by poking around here -- some of that love transfers over to you. 💚

Have fun!


## Architecture

### MERnN Stack (Mongo + Express + React(native) + Node)!!

**React Native+Node:** This will be our front end architecture. Similar to React, this will allow us to do all of the same essential things that we can in React, but for Mobile. At the moment, we have, instead of pulling the starter pack, pulled the React Native EC Assignment, which is currently accessing the youtube api, but this api URL will eventually link to our api and backend!!

**Express + Mongo:** The Express server and MongoDB database will serve as our back end architecture and API, allowing our client to grab data easily from the database.

## Setup

To run this app (before deployment), please clone the repository, do `npm install` and run `expo start`. To get the server to work, please navigate to that repo, clone it, `npm install`, and `npm run`. From here, there are a number of ways to view the running app. You can use the links provide in the terminal to view it in the browser, or you can scan the QR code in the terminal with your phone and view it in the expo app (which you need to download).

## Deployment

There are a number of places to deploy this and a number of ways to do so. The first and easiest would be to deploy the Expo store. To do this, we can, through the Expo XDE, hit publish, and our Expo app will be available to everyone in the world. IOS, Android, Google Play, etc. all have their own processes for app deployment, so we'll need to determine where we want to release it and when.

The backend will be deployed on Heroku. 

## Authors

Made with love by...

* Ray Huang '21 (ΖΨ)
* Maria Roodnitsky '22 (❤️) 
* Aarnav Aggarwal '23 (😄) 
* Rishik Lad '23 (🌊) 
* Will Toth'23 (ΨΥ)

## Acknowledgments

Some of the work for this project was started by Sudharsan Balasubrami '22 (Tri Kap) and Maria Roodnitsky '22 (❤️) during COSC 65 (Smartphone Programming) during 20S. Since then, many people have touched this project, Dartmouth students and non-Dartmouth students alike. We give thanks to everyone who has listened to our ideas, offered their advice, and provided a window into their own invaluable experiences.

Thank you to the following:
* Andrew Campbell** 
* Adam Rinehouse '19 (ΖΨ)
* Nupur Udipi '21 (Georgia Tech) 
* Gayeong Song '22 (🥐)
* Teddy Press '23 (Tri Kap) 

** We find it integral to highlight that a wide breadth of people -- unaffiliated and affiliated alike -- believe in the inclusivity of the Dartmouth Greek system. We hope you enjoy the little easter eggs sprinkled throughout this project that point to the various organizations to which contributors belong. 
