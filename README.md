## NC News

## About

NC News is a social news aggregation site developed with React and React-Bootsrap.

NC News has articles which are divided into topics. Each article has user curated ratings and can be up or down voted using the API, as long as a user is logged in. Users can also add comments about an article. Comments can also be up or down voted. A user can remove any comments which they have added.

All data come from own implementation of the NC News API server available [here](https://jacob-nc-news.herokuapp.com/api/) and git repository [here](https://github.com/jjacoba/be-nc-news).

All front end implementation of the NC News available [here](https://netlify-jjacoba.netlify.com/) and git repository [here](https://github.com/jjacoba/fe-nc-news).

## Setup

You will need Node.js, npm and git installed before being able to run this project.

* To check if ```Node.js``` is installed on your machine open a terminal window and enter:

```
$ node -v
```

If you do not already have Node.js installed follow the instructions on this [guide](https://nodejs.org/en/download/package-manager/).

* To check if ```npm``` is installed on your machine enter this command in you terminal window:

```
$ npm -v
```

If you do not have npm already installed follow this [guide](https://www.npmjs.com/get-npm) to set it up.

* To check if ```git``` is installed on your machine enter the following in your terminal window:

```
$ git --version
```

If you do not already have git installed on your machine follow this [guide](https://git-scm.com/).

## Prerequisites

Dependencies used in the project:

* reach/router : 1.2.1
* axios : 0.19.0
* bootstrap : 4.3.1
* react : 16.9.0
* react-dom : 16.9.0
* react-scripts: 3.1.1

## Installation

To run this project you will need to clone this repository onto your local machine.

```
$ git clone https://github.com/jjacoba/fe-nc-news
```

Navigate inside the folder and install all dependencies by entering the following commands on your terminal window:

```
$ cd fe-nc-news
$ npm install
```

To run the application locally enter:

```
npm start
```

The application will run on http://localhost:3000.
