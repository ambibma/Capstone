# JamMate

---
#### By Ambi Hidalgo
##### ambio.pk@gmail.com 

---
## About 
JamMate is Epicodus Capstone project. The aim of this application is to serve as a mobile matchmaking application for musicians, producers, mixers with one goal in mind: to collab and jam. Create your own WANTED ad as in a profile format: Seeking, inspiration, equipment and possibly upload your own demos to give others an idea to riff of your music. Matching will allow you to communicate with your matches via direct messaging to arrange a jam meetup. 


## Technologies Used
* React Native
* Firebase
* Javascript


## Setup/Installation Requirements
TBD

---



### Research & Planning Log
#### Sunday, 05/28
* 5:00pm: Concieve Idea, Write out capstone proposal, create technology plan
* 7:00pm -8:00pm : Research React Native via Youtube, compare between Flutter and React Native 

### Sunday, 06/4 

* 5:00pm-6:00pm: Sign up for React Native Udemy Course

### Friday, 6/16

* 3:00pm: Create Readme, repo and reformat capstone-proposal.md
* 7pm-8:50pm: Complete React Native Section 1: Getting Started, Add separate branch called UdemyProject1 to build practice app along with the course.

### Monday, 6/19

* 2:00pm: Finish setting up dev environment complete with Android and iOS emulation
         <img src  = ./DevLogImg/log1.png width= '250'/> 
* 4:00pm: Udemy Section 2: React Native Basics [Course Goals App]
* 7:00pm: Complete lessons Section 2 (12 to 23 out of 38) Learn Styling, Flexbox in Native, Learn  EventHandlers and adding data to state using hooks


### Tuesday, 6/27
* 7:00pm  Section 2: 24/38  
* 8:07 Section 2 Lessons 24-26/38 Learn ScrollView and FlatList props
* 9:20pm: Section 2  Lessons: 27-30 : Separate Application into separate  files, use props and explore 'Pressable' component 

### Wednesday, 6/28
* 2:30pm Section 2: 30/38 
* 4:30pm: Complete Section 2: 38/38 ✅, complete first practice app (goals app.)
    <img src='./DevLogImg/log2.png' width='250'>
* 4:50 : Add README to practice application 
* 8:00pm : Begin Section 4 (skip 3: debugging for now) Start practice Project2 (guess Number game)
* 9:30pm :  Complete Section 4: Lesson 45-52 of 78 Learn custom Button creation, platform styling, text specific input fields

### Thursday, 6/29
* 4:30pm - 6:00pm Lesson 52-56 Visual Feedback to Buttons

### Friday, 6/30
* 1:30pm: Section 3:57/78 Begin Game Logic
* 3:00pm: Section 3:59/78 Input Field error handling
* 5:30pm: Create Plan/design in notebook of Screens and Components. Screens determine which components will be necessary to handle what is shown to the user. Components listed to determine which components are going to be needed to be custom, such as buttons, profile display etc. This is the bare bones start of a game-plan. Docs will be reformatted and created again digitally.
    https://docs.google.com/presentation/d/1O1sLVeLzv1KDaUPaEyBdcASvCrg3iJYVJhbauGH5Ls0/edit#slide=id.p

### Monday, July 3rd

* 3:00pm-9:00pm Section 3: 60-69 : Start Game screens, Device screen restrictions, global color objects, import Native Icons, creating your own css, implementing icons into buttons.

### Tuesday, July 4th

* 11:00Am-2:00pm Section 3 :70-72 : Add Splash Screen/solve major bug within course for App to handle loading custom fonts and icons.

### Wednesday, July 5th  

* 12:00pm -2:00pm Section 3: 72/78 of 78 ✅: Complete Guess My Number Application, practice app #2
    https://github.com/ambibma/guess-my-number

### Thursday, July 6th
* 1:00pm -5:00pm : Brainstorm new app names, begin application initialization, add ToDo/plan. Research through React Native documentation. Brainstorm FireBase backend, initialize a bare bones expo quick start project. 

### Friday, July 7th
* 4:00pm-10:30pm : Section 6 (Navigation) Lessons 90-95 . Research React Navigation though its documents, look at another tutorial of a tinder-clone application with Firebase, learn about how firebase will be used to display information to a "Cards" component.

### Saturday, July 8th
* 1:00pm - 5:00pm : Section 6 Lessons 96-100. Stack Navigation, registering screens.

### Monday, July 10th 

* 3:00pm -5:00pm: Section 6 101-105. Stack Navigation, passing data to new screens with useNavigation hook.

### Wednesday, July 11th
* 2:00pm - 8:00pm  Section 6: 105-110 Stack Navigator using the drawer navigator
* 8:00pm - 9:20pm: Complete Section 6: 110-113 Finish Meals Application ✅
* 9:30 - 10:30pm Section  7:  114- 118: Learn about use contextHook, create FavoritesContext with CRUD! Learn how to use a context onto components. Update Meals application to now have usable CRUD favorites functionality! ✅
      https://github.com/ambibma/meals-react-native

### Thursday, July 12th
* 3:00pm - Begin implementing Navigation and dummy screens into app!
* 5:00pm - Implement navigation by bottom tabs between Homescreen and profile screen
* 6:00pm - Add dummy data, Start Creating Profile Card, Profile List to render cards with     scrollable list 
* 9:44pm - Work on bugs not displaying images correctly onto cards, WIP Text onto profile image card
   
   <img src= ./DevLogImg/log3.png width=150 >

### Sunday, July 16th 
* 11:00 Am - 2:00pm - Correct Card styling, cards now have a hero text over their image. Cards can now be pressed to show profile card details. WIP Add cardDetail styling.
* 2:00 4:15pm : Add Card Detail styling, add about profile information reusable component, add profile pressing feed back for both platforms
* 4:15 - 5:00pm : Add like and dislike button on profile details


### Tuesday, July 18th
* 4:00pm - 9:00pm Research useContext and stage code to begin refactoring to create a context-consuming application. Section 8: Lesson 142-144. 

### Wednesday, July 19
* 4:00pm-5:00pm Successfully implement context into application, delete dummy-data and rewrite into users-context, refactor existing code to use useContext hook. Add additional functions into UsersContextProvider to see if that may be used to add users from input when user creates a profile. 

### Thursday, July 20th

* 3:00pm - 6:00pm Prepare application to begin handling user input, create basic input skeletons and components

### Friday, July 21th

12pm -6pm Implement handling user input that adds a user to context. Now, need to  handle differentiating between rendering users based on who is logged in, but first need to understand plugging back end into application in order to base the rendering off of who is logged in. Example: a userId will be checked for the user, and profileId will be used to see what profiles are available.


### Saturday, July 22d
 2:00pm - 8:00pm :  Create separate branch for integration of SupaBase, research documentation, research tutorials. 

### Monday, July 24th

  2:00pm - 11:30pm : Attempt to initialize supabase, experience a failure of initialization. Create AuthStackScreens auth flow, to create a log in and sign in screen before app is shown. Calls to supabase result in failure as SB cannot create an instance. Install yup to handle form submission and handle submission as a specific structured object, debug for many many hours.

### Wednesday, 26th

  4:00pm Begin research on Firebase, as my first option for a backend. Research documentation tutorials. Choose between different options in handling Authorization, 1. axios html post requests, 2. Google auth or 3. sign in with email password from firebase.js

  7:00pm -12:00pm Attempt to implement google auth, learn that it requires having two different firebase initialization files with in the application, must be conditionally handled and must create custom native code in order to use Expo Go, which handles bundling of JS code.

### Thursday, 27th

  2:00pm - 10:00pm: Learn that certain sign in with google libraries are depreciated as well as creating a React Native application that handles iOS and android auth must be registered and build as a EAS (Expo App Service), which fails to build and fail to initialize. Turns out google auth is extremely difficult on React Native Expo applications. Opt in for Sign in with email and password as basic auth for application.

### Friday, 28th

  9:00am - 12:00am :  Begin on creating a custom useAuth hook that can be used to handle back-end log in and logout services, create an Auth providing context to conditionally render protected screens for application. Debug for many hours, while useAuth hook is correctly implemented app.js fails to conditionally render application. Log in is able to execute successfully, however user state renders undefined in app.js .  Many, many, many, hours of research and debugging.  
### Saturday, 29th - Sunday, July  30th

  12:00pm: Take hail mary approach and begin to separate all navigational components into separate files in order to debug, if user constant is false in app function, maybe that is the wrong approach to handle conditional rendering in the application, since it is the first thing that is fired when app is initialized. 
  
  2:30pm : After separating all navigational components into separate files, useAuth is correctly handles conditional rendering!!! Implement logOut function to test and it works!!!



  7:00pm : Begin work on forcing user to create profile base on sign up. Trouble shoot many navigation errors. Being trying many different methods to get that to work.


  10:00am : Complete work capstone, almost hit mvp





---

## Planning
### TO DO

* ~~Implement Basic navigation with bottom tabs~~
* ~~create components for HomeScreen~~
  * ~~Render Card~~
  * ~~Display Cards~~
  * search bar
* ~~Route to details page with nested stack navigation~~
  * ~~Add cardDetails styling~~
  * ~~add like and dislike button~~ 
* ~~Add local userContext for dummy data and make app consume data.~~
* handling user input/profile creation
  * use functionality available in backend
* Refactor context to use backend firestore
* ~~move onto authentication~~
* Add 'liking' functionality that uploads and matches likes
  * Add matching logic using useEffect that watches dependencies for when addLike function is called and updated to database
* Add messaging handling 
* Add 'liked' profiles page that reuse profile card and profile List to display user 'liked' profiles



* Screens:
  * ~~HomeScreen~~
    Components:
    * ~~Navbar~~
      * ~~Navbar container (row)~~
      * Nav Buttons:
        * Search
        * ~~Home~~
        * ~~Profile~~
    * Profile Card
      * Profile Details (Modal, or new Screen?)
        * (Name, Location, Genre, Seeking, Skills, Commitment level, goals, about)
* Log In / Sign Up Screen
    Components:
    ~~* Log In Card~~
      * ~~Text Input * 2 (username, password)~~
      * Log In /
      * Sign Up screen to create profile =>
* Create Profile/Edit
    * Components
     * ~~Form~~
        * ~~Text Inputs (Name, Location, Genre, Seeking, Skills, Commitment level, goals, about)~~
        * Image (Profile Pic /upload user camera)
        * Demo Upload


## React Native Practice Applications
Goals Application 

https://github.com/ambibma/goals-react-native

Guess My Number

https://github.com/ambibma/guess-my-number

Meal Recipes

https://github.com/ambibma/meals-react-native

    
## Known Bugs


send bug concerns to ambio.pk@gmail.com

## License


Copyright Ambi Hidalgo(2023)