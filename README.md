## ReceiptTracker
This home repository of reciept tracker.


##Technology Being used
1. React
2. Redux
3. super agent
4. Firebase
5. Mocha test framework(Subsequently sinon would be used for spy and stubs)
6. Chai as the assert Library

##Contributing
1. clone the repository
1. make sure you have the latest version of node installed precisesly 6.3.1
1. npm install
2. npm i -g eslint
3. npm i -g stylelint
4. npm test
4. npm run dev
5. start coding and once you are through please run
5. npm run eslint
6. npm run styelint
8. pass the style guide tests
9. Submit a PR :grin:

##StyleGuide
We are basically using two approach to the style guide for different technologies being used.
1. [SCSS Style guide](CssContributing.md)
2. [AirBnb React Style guide](https://github.com/airbnb/javascript/tree/master/react)


##Folder Structure
This project folder structure is by component bases
All the source files are in the src folder
###components
  - All component Should have its own folder. The should have there assets(images, scss) and should containt it's specs as shown in the bare bone of the app.
  - Each component must be atleast 90% tested.

###containers
  Use cases for different pages
  - Same for the components The should have there assets and should contain it's own specs

###helpers
Utility functions that should be used throughout the app. This might consist of higher order components and libraries

###Styles
The home to your scss styles. Please use the given variables and mixins for consistency

###Theme
Bootstrap theme nothing much here

###routes
For serving different pages of the app. Most probably will be containing the components to the app

###server.js
This serves the route directory to the express backend of the project

###client.js
This is the entry point for the server

###redux
This is the home of your reducers and stores and middleware



