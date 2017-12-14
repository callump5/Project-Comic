# Angular Todo App

- Hosted Link: https://github.com/callump5/Project-Comic/edit/master/README.md
- Github Link:https://github.com/callump5/Project-Comic

## Overview
### What is this app for?
This website is for fans of DC Universe's 'Hal Jordan and the Green Lantern Corps' comic book series. 

### What does it do?
This site will allow users to find information on the many characters and groups that appear throughout the comic series.
The site will also include a list of all 'episodes' in the series.


### How does it work
The app will work by returning data based on click event that will update the log window.

## Features
### Existing Features
- Click event data fetch for:
	- Characters
	- Groups
	- Episode List

### Future Features
- Uer log in to keep track of owned comics 
 
## Tech Used
### Some the tech used includes:
- [Bootstrap](http://getbootstrap.com/)
	- We use **Bootstrap** to give our project a simple, responsive layout
- [npm](https://www.npmjs.com/)
	- We use **npm** to help manage some of the dependencies in our application
- [bower](https://bower.io/)
	- **Bower** is used to manage the installation of our libraries and frameworks
- [AngularJS](https://angularjs.org/)
	- We use **AngularJS** to handle page routing
## Contributing

### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
  	 `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install

  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request
