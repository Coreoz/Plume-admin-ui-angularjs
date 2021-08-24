**⚠️ This repository is not maintained anymore. AngularJs should not be used for any new project. This sample [Plume Admin](https://github.com/Coreoz/Plume) project will be replaced with a React sample project ⚠️**

Plume Admin UI - AngularJS
==========================

Plume Admin UI is a JavaScript frontend for [Plume Admin](https://github.com/Coreoz/Plume-admin).
It is written with [AngularJS](https://angularjs.org/).

/!\ Note that the JS frontend AngularJS application is updated only to the minimum to get the demo working.
To build an admin frontend, you should use React or the latest version of Angular.

Installation
------------
1. Install [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) if they are not already installed
2. Install [Gulp](https://gulpjs.com/) globally: `yarn global add gulp --prefix /usr/local`
3. Install the application JS dependencies: `yarn install`
3. Run the application: `yarn start`

If a server with [Plume Admin](https://github.com/Coreoz/Plume-admin) is running localy on <http://localhost:8080>,
then the Plume Admin UI application can be reached on <http://localhost:3000>.

As a reminder, in the login screen the default credentials are:
- login: admin
- password: admin

Building the JS application
---------------------------
Run the command `yarn build` to build the application.

Generated files will be available in the `dist` folder.

