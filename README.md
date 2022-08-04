<img src="./readme/title1.svg"/>

<div align="center">

> Hello world! This is the project’s summary that describes the project plain and simple, limited to the space available.

**[PROJECT PHILOSOPHY](https://github.com/jatannoury/FortunusVision#project-philosophy) • [WIREFRAMES](https://github.com/jatannoury/FortunusVision#wireframes) • [TECH STACK](https://github.com/jatannoury/FortunusVision#tech-stack) • [IMPLEMENTATION](https://github.com/jatannoury/FortunusVision#impplementation) • [HOW TO RUN?](https://github.com/jatannoury/FortunusVision#how-to-run)**

</div>

<br><br>

<img  id="project-philosophy" src="./readme/title2.svg"/>

> Have you ever wanted to communicate with a fortune teller from the comfort of your own home? Fortunus Vision is a mobile application built with react native and the MERN stacks that allows you to communicate with a fortune teller via phone call or voice message integrated in a chatting system.
>
> A coin system was implemented, with fees varying between voice message and phone call, as well as between an expert and another. It is also possible to schedule an appointment with your preferred expert.

### User Stories

- As a user, I want to know my fortune by consulting an expert
- As a user, I want to send a voice message to my favorite expert
- As a user, I want to call my favorite expert
- As a user, I want to book an appointment with my favorite fortune teller
- As a user, I want to rate the expert after each phone call

### Fortune teller Stories

- As an expert, I want to receive the voice messages of my clients
- As an expert, I want to receive the phone calls of my clients
- As an expert, I want to set my own availabilty through a calendar
- As an expert, I want to change my billing information
- As an expert, I want to get paid after each service offered

### Admin Stories

- As an admin, I want to view all my users and experts
- As an admin, I want to search for a specific user given his name or email
- As an admin, I want to delete a user account
- As an admin, I want to view the total number of users and experts
- As an admin, I want to see the total number of coins transferred within the market.
- As an admin, I want to accept and reject users transfer to experts requests.

<br><br>

<img id="wireframes" src="./readme/title3.svg"/>

> This design was planned before on paper, then moved to Figma app for the fine details.
> Note that i didn't use any styling library or theme, all from scratch and using pure css modules

| SignIn | Register | LandingScreen |
| ------- | ------- | ------- |
| ![SignIn](https://github.com/jatannoury/FortunusVision/blob/main/readme/figma/SignIn.png) | ![Register](https://github.com/jatannoury/FortunusVision/blob/main/readme/figma/Register.png) | ![LandingScreen](https://github.com/jatannoury/FortunusVision/blob/main/readme/figma/DisplayExperts.png) |

| Artists results                                                                                | Artist's Albums                                                                               |
| ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| ![Artists results](https://github.com/julescript/spotifyndr/blob/master/demo/Artists_Page.jpg) | ![Artist's Albums](https://github.com/julescript/spotifyndr/blob/master/demo/Albums_Page.jpg) |

<br><br>

<img id="tech-stack" src="./readme/title4.svg"/>

Here's a brief high-level overview of the tech stack the Well app uses:

- This project uses the [React Native development framework](https://reactnative.dev/) for the development of the core content of the application (user and expert screens). React Native is a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android. It’s based on React, Facebook’s JavaScript library for building user interfaces, but instead of targeting the browser, it targets mobile platforms

- Moreover this project uses the [ReactJs](https://reactjs.org/) for the development of the admin content of the application. React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time.

- To serve the data, this project uses [NodeJs development framework](https://nodejs.org/en/) as Backend. NodeJs is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications.

- For persistent storage (database), the app uses the [MongoDB Atlas](https://www.mongodb.com/) package which allows the app to create a custom storage schema and save it to a cloud database. MongoDB Atlas is a fully-managed cloud database that handles all the complexity of deploying, managing, and healing your deployments on the cloud service provider of your choice (AWS , Azure, and GCP). MongoDB Atlas is the best way to deploy, run, and scale MongoDB in the cloud.

- To send voice messages, the app uses the [Firebase](https://firebase.google.com/) package which supports Android & iOS. Firebase is an app development platform aids in the creation and expansion of games and apps. Trusted by millions of companies worldwide and backed by Google.

- In order to establish voice calls, the app uses [Agora.io](https://www.agora.io/en/) which supports voice and video communication on Android, iOS, and even the web. Agora.io provides building blocks for you to add real-time engagement functions through a powerful SDK. You can integrate the Agora SDK to enable real-time engagement in your own application quickly. 

- For the application state management, [Redux Toolkit](https://redux-toolkit.js.org/) have been integrated.Redux Toolkit is an opinionated toolset for efficient Redux development created by the Redux team. It is the standard and recommended way to write Redux logic and manage state in your JavaScript applications.

- The app uses the font ["Roboto"](https://fonts.google.com/specimen/Roboto) as its main font, and the design of the app adheres to the material design guidelines.

<br><br>
<img id="impplementation" src="./readme/title5.svg"/>

> Uing the above mentioned tecch stacks and the wireframes build with figma from the user sotries we have, the implementation of the app is shown as below, these are screenshots from the real app

| Landing                                                                                | Home/Search                                                                               |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![Landing](https://github.com/julescript/spotifyndr/blob/master/demo/Landing_Page.jpg) | ![Home/Search](https://github.com/julescript/spotifyndr/blob/master/demo/Search_Page.jpg) |

<br><br>
<img id="how-to-run" src="./readme/title6.svg"/>

> This is an example of how you may give instructions on setting up your project locally.
> To get a local copy up and running follow these simple example steps.

### Prerequisites

In order to run the project correctly, you need to install the following packages

- npm
  ```sh
  npm install npm@latest -g
  ```

- expo
  ```sh
  npm install -g expo-cli
  ```

- react-cli
  ```sh
  npm install -g react-cli react
  ```

- NodeJs

  Install [NodeJs](https://nodejs.org/en/)

   


### Installation

_Below is an example of how you can install the project on your local device


- Clone the repo
   ```sh
   git clone https://github.com/jatannoury/FortunusVision.git
   ```
##### To Run The Mobile App

1. Navigate to the Frontend folder 
   ```sh
   cd FortunusVision-FrontEnd
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Set up your local hostname
   - Go to cmd, type ipconfig and scroll down to the IPv4 Address key, then copy its value
   - Go to utils folder in FortunusVision-FrontEnd "Desktop\FortunusVision\FortunusVision-FrontEnd\utils", enter http.js file and paste the hostname copied from the previous step in hostname constant located at line 2 

4. Run the start up command
   ```sh
   npm start
   ```

##### To Run The Desktop App
1. Navigate to the admin folder
   ```sh
   cd admin
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Set up your local hostname
   - Go to cmd, type ipconfig and scroll down to the IPv4 Address key, then copy its value
   - Go to utils folder in admin "Desktop\FortunusVision\admin\src\helper\http.js", enter http.js file and paste the hostname copied from the previous step in hostname constant located at line 2 

4. Run the start up command
   ```sh
   npm start
   ```

##### To Run The Server

1. Navigate to the Backend folder
   ```sh
   cd FortunusVision-BackendEnd
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Go to "Desktop\FortunusVision\fortunusVision-Backend" create a .env file and paste into it "DB_CONNECT=mongodb+srv://"YOUR_MONGODB_USERNAME":"YOUR_MONGODB_PASSWORD"@cluster0.fi3bv.mongodb.net/"YOUR_MONGODB_COLLECTION"?retryWrites=true
TOKEN_SECRET=femdasl;kfnds;afmnsaf;lk" 

4. Set up your local hostname
   - Go to cmd, type ipconfig and scroll down to the IPv4 Address key, then copy its value
   - Go to index folder in admin "\Desktop\FortunusVision\fortunusVision-Backend\index.js", and paste the hostname copied from the previous step in hostname constant located at line 16

5. Run the start up command
   ```sh
   npm start
   ```