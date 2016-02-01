## Welcome to Vendor
Vendor is a full-stack Javascript demonstration application for the Vend recruitment process. 
The set of tools used for developing this app, is typically called a MEAN stack. To run the app, you must require
the stacks dependencies: [MongoDB](http://www.mongodb.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), and [AngularJS](http://angularjs.org/)

## Vendor Technologies
**About:**
I chose to use these technologies because of its simplicity as a software bundle. I was also looking for something I could utilise that would build on my knowledge of front-end technologies. I have some expereince in this area and this was a great oppurtunity to extend on my own toolbelt. I had some issues setting up authentication but resolved this by parsing json passport middleware. 

**Technologies:**
* MongoDB, Node.js, Express and AngularJS
* Grunt, npm, SCSS, swig, sweetalert, bootstrap

**Grunt:**
I chose grunt as a task runner for sass compilation and css linting. There were are other options to minify JS but decided not to for demo purposes and the applications size. 

**Passport:**
Vendor utilises [passport](http://passportjs.org/) - simple authentication middleware. The app uses auth endpoints to handle its local strategy. On sign in, Passport will then invoke our configuration, passes the email and password to its verification method and checks for matching credentials in the database. AngularJS will either redirect a successful user to the welcome page or attach the error properties to the scope which will be available to the form via the ng-bind directive as validation feedback. The signup page works in similar fashion. 

**Views:**
The main templates are tied using swig templating. Each route is determined by custom Node.js methods which serve each route with the index template. The index template includes the rendered template configured through angulars service provider: $routeProvider - set up on our client route config. The template is included using angulars ng-view directive. Serving each template this way meant I was able to focus more on the HTML scaffolding and scss styling without too much route configuration and repitive templating. 

**Scss:**
Scss is great for setting up our mixins and nesting. I didn't want too many class selectors. This is easily manageable though scss which prevents too much dumping of code and targets elements easily. Custom media queries are also served through a seperate media file. Scss imports this file before compiling into .css which prevents extra HTTP requests.

## Before You Begin 
Before you begin I recommend you read about the basic building blocks that assemble a MEAN application: 
* MongoDB - Go through [MongoDB Official Website](http://mongodb.org/) and proceed to their [Official Manual](http://docs.mongodb.org/manual/), which should help you understand NoSQL and MongoDB better.
* Express - The best way to understand express is through its [Official Website](http://expressjs.com/), particularly [The Express Guide](http://expressjs.com/guide.html); you can also go through this [StackOverflow Thread](http://stackoverflow.com/questions/8144214/learning-express-for-node-js) for more resources.
* AngularJS - Angular's [Official Website](http://angularjs.org/) is a great starting point. You can also use [Thinkster Popular Guide](http://www.thinkster.io/), and the [Egghead Videos](https://egghead.io/).
* Node.js - Start by going through [Node.js Official Website](http://nodejs.org/) and this [StackOverflow Thread](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js), which should get you going with the Node.js platform in no time.

## Prerequisites
Make sure you have installed all these prerequisites on your development machine.
* Node.js - [Download & Install Node.js](http://www.nodejs.org/download/) and the npm package manager, if you encounter any problems, you can also use this [Github Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* MongoDB - [Download & Install MongoDB](http://www.mongodb.org/downloads), and make sure it's running on the default port (27017).
* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages, in order to install it make sure you've installed Node.js and npm, then install bower globally using npm:

```
$ npm install -g bower
```

* Grunt - You're going to use the [Grunt Task Runner](http://gruntjs.com/) to automate your development process, in order to install it make sure you've installed Node.js and npm, then install grunt globally using npm:

```
$ sudo npm install -g grunt-cli
```

* nvm - Install and manage different versions of node. This app was developed using the latest version of node
which is currently v4.2.4

```
$ npm install -g nvm
```

## Quick Install
```
$ npm install
```
```
$ bower install
```
**Run your app**
```
$ grunt
```










