
# OnNight

## 6/8/2021:

Phew, can you believe we made it to June 8th? * pan to Aarnav sitting in a blistering hot room in Hanover * **Aarnav vigorously nods** * pan to Maria sitting in a jacket in San Francisco where the weather never changes * **Maria cheekily shrugs**

Anyways, let's talk a little bit about what we've done in the last few weeks.

## What worked well
### We worked well. We were an amazing team. We are walking out of this project not as teammates but as friends. 😄

Each one of us took on a main role: (i.e. backend, frontend UI, frontend API calls and data structures, team planning and management, design, etc.) We then specialized in these tasks! (God, we are an amazing team). This made our communication extraordinarily effective: need a design? Ping Maria. Have a backend question? Send Rishik a Slack. We stayed connected to one another (Slack, texts, ever-open Zoom room) and because all of us were easily reachable, this level of fragmentation was possible. There were times when Maria was the only person who knew what everyone was working on, and it was okay because her high-level understanding of each task was enough to let people get in the weeds on their own tasks without getting bogged down by the implementation and not merge with other tasks! It was genuinely crazy how thorough of features were being simultaneously developed!


## What didn't work well
### We're pretty lucky to say that we never "hit a wall." All of our bugs were chased down without too much pain and suffering -- aren't we lucky ducks? 🦆

- Mailgun has some bumps! We're trying to figure out how to stop sending emails to spam.
- We, for the most part, hooked backend up to frontend pretty easily. Sometimes parts were developed at different times though, so testing depended on all of them being done and that caused some "wait, but did it work?" moments.
- Like with all teams, valuing everyone's time while also keeping people sufficiently informed can be a challenge. Letting go of pieces we weren't directly involved with was hard at first, but eventually we got enough experience working with each other that we trusted the "task hand off."

## Running the application
Points to cover: 
- expo install instructions
- when you sign up, what are the defaults?
- what are the different administrative levels of the app? how does this change what you can and cannot access through the application?

## Design 
Figma has been updated! There is also a GIF.md to poke around with. 😄

## User Flows

1. A user can sign up, sign in, and request a "forgot password" reset link 
2. A user can view a calendar of events, access relevant (and beautiful) safety information, and directly contact SNS for help
3. A user can edit their profile
4. An admin user can schedule and remove public Greek events, which are then viewable to all on the calendar
5. An admin user can add/remove users of OnNight to their Greek house
6. An admin user can search the Dartmouth database and see who is on OnNight, who is affiliated, and who has not yet claimed their account


*** 

## 5/22/21 (Dev Site Update):

**Front End:** We built the frontend using React Native. We added the Safety, Events, and Users tab. Both, Events and Users, tab are dynamic and fetch data from the API (backend). The events tab displays the frat events and the users tab displays the users of the app, both of which will be updated by the admins. Safety page is a static page which provides information about safety guidelies that need to be followed in frats. We utilize a color theme which is integral to the app. Note that while the app is fetching data at the momoment, all of the API functions (get, post, delete, put) are functional. The back end README is updated as well at https://github.com/dartmouth-cs52-21S/project-api-on-night.

What Worked: We were able to create the front end in React Native from Scratch. We were able to make the events, users, and safety recommendations scrollable. All the pages have sufficient border margins and display the text efficiently. We were able to fetch data from API and display on the app. 

What did not work: There were a lot of things that worked in React but did not work in React Native. We had to, in a way, recreate our understanding of some react/html elements, usting views, flatlists, and stack navigators and screens. 

## Beginnings of the project

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
