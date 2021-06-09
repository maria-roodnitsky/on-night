
# OnNight

## 6/8/2021:

Phew, can you believe we made it to June 8th? **pan to Aarnav sitting in a blistering hot room in Hanover** **Aarnav vigorously nods** **pan to Maria sitting in a jacket in San Francisco where the weather never changes** **Maria cheekily shrugs**

## What worked well
To start, one of the best things was that each person had a different role (i.e. backend, frontend UI, frontend API calls and data structures, etc.) and we all specialized in them (evidence for the fact that humans always work better together!!). We buil the OnNight app in React Native. First, we built the designs in Figma for every screen. Next, as a part of the scaffolding assignment, built the basic functionality in the app. Further on, we started brainstorming and building each screen to build the MVP before starting to add extensive functionality. After we had all the basic screens well connected to the backend and working as required, we moved on to add advanced features and designing. Throughout the entire process of building the app in React Native, we referred to React Native documentation to understand how each individual component works and implemented that in the app. React Native documentation was our primary source of reference. While building the app, we realized that each team member had certain strengths. We leveraged those strengths by assigning each task efficiently. One of the strongest points in the entire process was that each team member helped the other in solving bugs that came up. For example, there were numerous bugs that frequently came up while connecting the frontend to the back end, but with the help of team members, we could figure those out. We did not have to rely a lot on external support as we could solve most of the issues with support of each other. The biggest observation was that even though React Native worked differently from React in a lot of ways, the concept/ main logic was the same, which made it very easy to pick up React Native. The React Native short assignments helped us tremendously in understanding the flow of how React Native works. The landing page of the app renders the OnNight logo and the option to Sign in or Sign Up. The design decision of this page was that the user would not have to think and can directly go to the page they want to. Both the sign in and sign up pages, offer to switch between each other in case the user wants to change their option. In addition, all pages for authentication have a back button to allow the user to go back to the previous page. The sign in page offers a forget password option, which helps the user reset the password through a 2 step process. We could figure the implementation through a series of brainstorming sessions and implementation step by step. After the user signs up, they go through an email authentication step as well. After the user is authenticated and enters the app, they can switch between different tabs. Two tabs for events and the user are dynamic and are connected to the API. Figuring out the design and the calendar view of the app was somehow challenging but worked well by referring to various React Native external components and documentation. The App also has an admin version, which is given only access to the greek life house admins. Through the admin portal, the admins can add events and invite users. In essence, implementing and debugging went well and we were able to implement the features we wanted to. We worked as a very strong complementing team and were able to achieve incredible results in a very short time.

## What didn't work well
- Initial bumps in the implementation + deployment of Mailgun as our mailing service to send account activation and password reset emails 
- - This fed directly into somewhat undecipherable error codes in Heroku that weren’t discovered until the Bug Hunt. Furthermore it crashed our app multiple times, preventing anybody else from signing up and signing into the app. While the issue was later resolved with Tim, it cost us valuable time that could’ve been spent demonstrating the product and getting feedback from other 52 peers  
- Some issues with hooking up the backend to the frontend (e.g. configuring various screens and buttons to hit particular routes on the backend that initiate the account activation and password reset processes) 
- When working in a large team, people have different coding styles and often need to work on the same files, so our different approaches sometimes confused each other. However, they also exposed us to newer and better ways of doing things.

## User Flow

1. The landing screen of the app shows two options to the user to decide betwen Sign In and Sign Up. The desion decision between making the user decide is that the user who wants to just sign in does not have to go to the signup page and vice versa.
2. Sign Up- If the user clicks on the sign up button, the user will be redirected to the signup page, where they are required to enter their dartmouth email and set a password. The dartmouth email must be their full dartmouth email that has their first name, last name, and their class year. The passwords also must match. The sign up page also offers the user to sign in in case they find out that they already have an account.
3. After the user signs up, they get to a screen where they are asked to confirm their email and click a button after they have confirmed the link on their email. 
4. The user also gets an option to Sign In. They have to enter their email and password. In case they don't have an account, they will be notified.
5. On the sign in page, the user can forgot their password as well. When they click forget password, they are redirected to a page where they have to enter their email. After they enter their email, they have to confirm it and click on the confirm button. Post that, they have to enter their new password and are logged in the app.

## Dev Site Update

**Front End:** We built the frontend using React Native. We added the Safety, Events, and Users tab. Both, Events and Users, tab are dynamic and fetch data from the API (backend). The events tab displays the frat events and the users tab displays the users of the app, both of which will be updated by the admins. Safety page is a static page which provides information about safety guidelies that need to be followed in frats. We utilize a color theme which is integral to the app. Note that while the app is fetching data at the momoment, all of the API functions (get, post, delete, put) are functional. The back end README is updated as well at https://github.com/dartmouth-cs52-21S/project-api-on-night.

What Worked: We were able to create the front end in React Native from Scratch. We were able to make the events, users, and safety recommendations scrollable. All the pages have sufficient border margins and display the text efficiently. We were able to fetch data from API and display on the app. 

What did not work: There were a lot of things that worked in React but did not work in React Native. We had to, in a way, recreate our understanding of some react/html elements, usting views, flatlists, and stack navigators and screens. 

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
