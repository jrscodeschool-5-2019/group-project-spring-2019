# JRS Students & Alumni Directory

This web app was designed and developed by the JRS Coding School spring cohort of 2019. The app allows current and former JRS students to sign up, log in, and submit a profile of basic demographic data. Anyone can access the directory, which shows cards of all students/alumni who have submitted their information.

The purpose of the app is to allow current and former students to network with each other, as well as to allow companies to search for students/alumni who are seeking employment.

## Technology Used

We used a MERN stack for this app, incorporating passport for authentication.

- Front-end

  - [reactJS](https://reactjs.org)

- Back-end
  - [mongoDB](https://www.mongodb.com)
  - [Express](https://expressjs.com)
  - [nodeJS](https://nodejs.org/en/)
  - [passportJS](https://www.npmjs.com/package/passport)

## Installation Instructions

To success run this program, you will need to have already installed:

- [MongoDB](https://docs.mongodb.com/manual/installation/)
- [npm](https://www.npmjs.com/)
- [nodeJS](https://nodejs.org/en/)
- [nodemon](https://nodemon.io/) (installed globally)

After you have confirmed the successful installation of the above, follow these steps:

1. Clone the github repo

```
git clone https://github.com/jrscodeschool-5-2019/group-project-spring-2019.git
```

```
cd group-project-spring-2019
```

2. Install the node modules for the front end

```
npm install
```

3. Start the frontend server

```
npm start
```

4. Open a new tab or window in your terminal, and make sure mongoDB is running (if you already have mongo running, you will see an error - just ignore it, you are good to go).

```
mongod
```

5. Open a new tab or window in your terminal, and `cd` into the `api` directory

```
cd api
```

6. Install the node modules for the back end

```
npm install
```

7. Start the back end server

```
npm run dev
```

## Usage Instructions

As an unauthenticated user, you can view a list of current and former JRS students and click on each student/alumni card to view a pop-up modal with more details about the person.

As an authenticated user (a current or former student), you can create a profile about yourself to include demographic details and other relevant information. You can also view the list of all current and former students in the same way as an unauthenticated user.

## Optional: How to import test data into mongoDB through Postman

If you want to add test data into your local database in order to see how the app looks and operates with multiple student data, you can import the test data through Postman. These instructions assume user has Postman installed. In order to install and read documentation about Postman, go to [Postman Installation & Documentation](https://learning.getpostman.com/docs/postman/collections/intro_to_collections/)

1. Open Postman

2. Run a `GET` request with URL http://localhost:8000/directory to confirm you can communicate with database

3. Run a `POST` request with URL http://localhost:8000/add-students

4. Below the `POST` url, choose the `Body` radio button, then choose the `raw` radio button, then choose `JSON(application/json)` from dropdown to the right.

5. In your code editor of choice, open the file `dummydata.json` and copy/paste one object at a time from the data array in the `Body` and run the `POST` request (one `POST` request per data object).

## Opportunities for Improvement

The following features may be considered for future versions of the app:

- Develop an admin interface for updating the sidebar events
- Verification of student/alumni status prior to allowing registration (whether through a verification code, checking credentials against a comprehensive database, or otherwise)
- Protect routes on backend from unauthenticated HTTP requests through an app like Postman
- Host the app on a server through AWS, Heroku, or otherwise

## Credits

### Development Team:

- [Tyler Dillon](https://github.com/tydillon)
- [Joe Dukes](https://github.com/jrdukes)
- [Anna Fulton](https://github.com/AnnaCate)
- [Michael Greco](https://github.com/MichaelGreco7)
- [Austin Moquin](https://github.com/moquinad)
- [Kevin Moody](https://github.com/kevinleemoody)
- [Zach Van Slambrook](https://github.com/VanSlam)

### Project Manager:

- [Dominick Inglese](https://github.com/charleston-code)

This project was developed as part of the curriculum for the [JRS Coding School](http://www.harborec.com/jrs-coding-school/), which is operated by the [Harbor Entrepreneur Center](http://www.harborec.com/)
