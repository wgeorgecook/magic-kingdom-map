# Welcome to the Magic Kingdom

## Introduction
If you know me, you know that I love Disney. When I was tasked with creating an application that pulled and displayed local venues from my favorite neighborhood, I of course had to pick the Happiest Place on Earth. This, Welcome to the Magic Kingdom was born!
This is the final project for the [Udacity Front End Web Development Nanodegree](https://www.udacity.com/school-of-programming). I am extremely grateful for the fine folks at Udacity and Google for the [Grow With Google scholarship](https://www.udacity.com/grow-with-google). Without this colaboration, this would not be possible.

## Background
Welcome to the Magic Kingdom is a progressive web app written with [React.js](https://reactjs.org/). The most important React library I made use of [react-google-maps](https://github.com/tomchentw/react-google-maps).

## Features
Welcome to the Magic Kingdom renders markers on a Google map of ten Magic Kingdom attractions defined in `data.json`, and creates a button corresponding for each of them. The `LocationFilter.js` component is a drop down menu which sorts the attractions based on their category (or categories), and only shows those attractions on the map. Clicking on a button triggers the `RideDetails.js` component to load data from Foursquare about the attraction and display it to the user.

## Installation
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). To begin, clone this repository, `cd` into it, and run `npm install`. After installing required packages, build the production bundle by running `npm run build` to get things moving. To get a server running, the easiest way is to run `serve -s build`. In this process the local url is copied to your clipboard. Paste it into a browser or navigate to http://http://localhost:5000/ and have fun! If you'd prefer to run the development (non-optimized) build, instead run `npm start` from the root directory. Your default browser will automatically open to https://localhost:3000/ and serve the application from there.

## External API Usage
This application utilizes two external APIs. Cheif among them is the [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial). To generate name, photos, and ratings, I am utilizing [Foursquare](https://developer.foursquare.com/docs/api).

## Contributing
Welcome to the Magic Kingdom was and is a scholarly endeavor for me. I submitted it as a project to Udacity. However, if you have a fun idea you'd like to implement into it, please fork this repo, make your changes, and submit a detailed pull request including what your feature does and how it might impact functionality already included in `master`.