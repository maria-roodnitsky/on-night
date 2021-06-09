
# OnNight

## 6/8/2021:

Phew, can you believe we made it to June 8th? * pan to Aarnav sitting in a blistering hot room in Hanover * **Aarnav vigorously nods** * pan to Maria sitting in a jacket in San Francisco where the weather never changes * **Maria cheekily shrugs**

Anyways, let's talk a little bit about what we've done in the last few weeks.

**IMPORTANT NOTE:** While you can follow the instructions in the 'instructions' section, if you missed us at Technigala, I would highly recommend getting on a call with us to learn about onnight, its full functionality, and how to use it. You really cannot appreciate the full functionality of onnight without having multiple users interact at the same time, and we would like you to see it (we're very proud with our work).

## What worked well
### We worked well. We were an amazing team. We are walking out of this project not as teammates but as friends. 😄

Each one of us took on a main role: (i.e. backend, frontend UI, frontend API calls and data structures, team planning and management, design, etc.) We then specialized in these tasks! (God, we are an amazing team). This made our communication extraordinarily effective: need a design? Ping Maria. Have a backend question? Send Rishik a Slack. We stayed connected to one another (Slack, texts, ever-open Zoom room) and because all of us were easily reachable, this level of fragmentation was possible. There were times when Maria was the only person who knew what everyone was working on, and it was okay because her high-level understanding of each task was enough to let people get in the weeds on their own tasks without getting bogged down by the implementation and not merge with other tasks! It was genuinely crazy how thorough of features were being simultaneously developed!


## What didn't work well
### We're pretty lucky to say that we never "hit a wall." All of our bugs were chased down without too much pain and suffering -- aren't we lucky ducks? 🦆

- Mailgun has some bumps! We're trying to figure out how to stop sending emails to spam.
- We, for the most part, hooked backend up to frontend pretty easily. Sometimes parts were developed at different times though, so testing depended on all of them being done and that caused some "wait, but did it work?" moments.
- Like with all teams, valuing everyone's time while also keeping people sufficiently informed can be a challenge. Letting go of pieces we weren't directly involved with was hard at first, but eventually we got enough experience working with each other that we trusted the "task hand off."

## INSTRUCTIONS (important)

### getting into app and getting logged in to your acct and authenticated

First, download expo on whatever mobile store you have. Then login with the following credentials:

Username: `onnight.testing`
Password: `onnight2021`

Select the project entitled `on-night` (NOT OnNight, which is an version for testing) or scan the bar code at [this link](https://expo.io/@onnight.testing/on-night).

At this point, you should be able to sign in or sign up. If you choose sign up, you will need your Dartmouth email and you will need to be an undergraduate student (app checks if you are an undergrad). If you are not an undergrad and still want to use the app, please sign in with the credentials below:

**Will Toth credentials:**
email: `william.a.toth.23@dartmouth.edu`
password: `password`
(i know, very very original password)

If you are able to sign up, a link will be sent to your email before you can enter. It takes anywhere from a few seconds to a few minutes to receive this email, so hang tight. Also, check your spam/junk folders too as it could appear there. Once you have done so, you can can click the button in app and proceed to the content.

There is also a forgot password function that works in a similar fashion to the email verification if you forget a password or want to change it.

### once authenticated and in app

There are three main tabs in the app

**1) Calendar:** this one is pretty self explanatory. you can pull it down to check out all the year or look at specific days and weeks

**2) Safety:** This one is important but also pretty self explanatory. Note that you can call SNS by pressing the button on the bottom

**3) Profile:** This tab will look pretty normal if you are not an admin, but if you are, is incredibly complex and functional. This is where you add and delete events and can add members to your org and search the entire dartmouth directory. The following section will detail the profile tab

### Profile tab and admin portal

The first thing to note about the profile tab. If you are not in an org, you should see the onnight logo as your avatar, and if you are you will see your greek space's house as your logo. If you are not an admin, you can edit your profile, logout, or refresh the page.

*Note on refreshing:* this functionality is useful for if your permissions are updated. This way you wont have to close the app. If someone adds you as a member to their greek org or promotes you to admin status, the refresh button will show you those changes then and there.

**If you ARE an Admin**
This is where the app gets interesting. If you are an admin, you will see an additial button that says "admin portal". Click it, and it will take you to the admin portal. From here, you can go to events or members. Note that if you are an admin but unaffiliated, it will ask you to be added to an org before you can edit it's members/events.

If you click events, you will see all of the events organizaed by your greek space. You have the option to create new ones (that non admins can see on the calendar) or delete them. 

If you click members, you can view all of the members currently in your org. If you want to add a member, click 'add new member'. This will take you to a search area, where you can search **anyone in the dartmouth direcrtory**! Each person will have 1 of 3 things. If they aren't on onnight, the app will inform you that they aren't and tell you to tell them to join. If they are unaffiliated, you can add them to your org then and there! If they are affiliated already, it will notify you of this as well.

**Note: If you sign up directly, you will not be an admin, nor will you be in an org**. Please get on a zoom call with us or ask us to grant you org membership and adminship to experience *onnight in its entirety*. If you sign in with the Will Toth credentials, you will be an admin of Psi U (try adding Aarnav to your org).

## Fancy Shmancy stuff / extra credit

While there is no "extra credit" portion of this, there are a few things we feel we went above and beyond on and think are worth mentioning.

- **Dartmouth Directory Lookup:** This feature was never used in the curriculum of CS52 but is incredibly functional for Dartmouth related apps (pretty sure this is what Last Chances uses). We allow greek org admins to search the Dartmouth directory to add memebers to their orgs. What makes it even more special is that we combine the Dartmouth directory with the onnight directory of users to determine who is onnight and affiliated, who is on an unaffiliated, and who is not on it at all.
- **Stunning safety tab and SNS call button:** This feature, while much less fancy with API calls, is incredibly important when creating a greek life centered app. We wanted to make something actually helpful, and in doing so, we made something stunning. In addition, the functionality to call SNS direftly by pressing a button on the app is pretty cool.
- **Different levels of authenication:** Admins, non admins, and those affiliated/unaffiliated all have different permissions, which was incredibly complex but also really cool to implement. Descriptions for what you can do as what are mentioned multiple times elsewhere in the READme
- **Org auto changes:** If you notice, you never need to specify what org you are in. If you are in one, the app will itself construct itelf around your org. This could be small things like the button to add a member saying 'add to Psi Upsilon' for example if you are in it, to larger things like your logo auto updating to the maps photo of your org.
- **Email verification / forgot password**: These work somewhat similarly but are a little different. Users need to sign in with their Dartmouth emails and need to get authenticated by checking their emails, which was challenging to implement without google authentication or auth0. The forgot password functionality allows them to change their password too by similar mechanisms.
- **Beautiful UI:** I mean cmon, our UI is so cute. Shoutout to Maria for haveing such a good knack for design.

## Design 
Figma has been updated! There is also a [GIF.md](https://github.com/dartmouth-cs52-21S/project-on-night/blob/master/gifs.md) in the repo to poke around with. 😄

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
