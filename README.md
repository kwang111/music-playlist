#MY README#
Your README should  detail your application’s architecture: 
Organization of your components
How data is passed down through your components
How user interactions can trigger changes in the state of components
Application architecture:

Components/How Data is Passed/User Interactions & States: 

- App: 
Props Recieved: None
Props Passed: -> FilteredList songs(arraylist), addSong (function)
              -> Playlist myPlaylist(arraylist), deleteSong (function)

The overarching react app. It includes the constant array of songs. It has the functions addSong (adds a Song to the user's created playlist called myPlaylist), deleteSong (removes a Song from the user's created playlist called myPlaylist), and calculateTime (which takes the users playlist called myPlaylist and calculates the total duration of the songs in that playlist. It helps with the aggregation). The render function of the app uses a Wrapper and has two sub-sections one called selection and one called playlist. The selection creates a FilteredList component to display the songs to choose from. The songs array and the addSong function is passed as props into FilteredList. The playlist section displays the aggregated duration of myPlaylist and creates a Playlist component to display the array myPlaylist which the users add and remove songs from. The myPlaylist array and deleteSong function is passed as props into Playlist.

-FilteredList: 
Props Recieved: list(arraylist), addSong (function)
Props Passed: -> DisplayList list(arraylist), addSong (function)

This component handles rendering a nav bar of filters and sort options. This component will pass a filtered and sorted list prop down to DisplayList. It also further passes down the prop (function) called addSong which it recieved as a prop from App. State variables language, singer, and sort are updated through user actions clicking on the nav-bar items. Once these state state variables are changed, the FilteredList re-renders passing down the new filtered/sorted list into DisplayList to display properly the new state of the App.

-DisplayList: 
Props Recieved: list(arraylist), addSong (function)
Props Passed: None

This component displays the song-cards avaliable to be selected by the user. It maps each item from the recieved prop called list to the function makeCard which formate the item in the list into a "Song Card" format showing the image, title, artist, language, singer, and duration (the footer). I used react-bootstrap here with CardColumns and Card. The card also has a button called Add Song which calls on the prop (function) addSong passed dowm from App to FilteredList to DisplayList. The addSong function will take the item information of that song card and create a new entry in myPlaylist with that information. In addition, a key is attached to each entry of myPlaylist. This will be used to remove songs from myPlaylist. Since myPlaylist is a state variable, this tells Playlist to re-render the user-generated playlist.

-Playlist: 
Props Recieved: list(arraylist), deleteSong (function)
Props Passed: None

This component renders the user-generated music playlist. It recieves the state variable myPlaylist from App as a prop and renders each item in that list into a "Playlist Song Card" by mapping the function PlaylistCard to each item in this.props.list. It has a button called deleteSong which will call on the prop (function) deleteSong passed down from App to modify the array "myPlaylist" which is passed in. When the User clicks on the button, it will pass in the key for the item in myPlaylist for deleteSong function in App.


Known Bug:
Cards will not display properly until you navigate to filter combination: Chinese & Other. After going to that filter, you can return to the other filter options and everything will work properly. I tried to resolve the bug but was unable to do so by myself.






#Items From React App Package#
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
