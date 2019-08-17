const express = require ( 'express' )
const passport = require ( 'passport' ) 
const GoogleStrategy = require ( 'passport-google-oauth20' ).Strategy

// create express app
const app = express ()

// Select port for Heroku Deployment 
const PORT = process.env.PORT || 5000

// Two important options to give - Client ID and a client secret which are provided to us directly from google's 
// oauth service. This allow google to identify from which app the user is coming from. We have to sign up to 
// google oauth API. Register our application and to tell google we have users who want use our application
// and will use google oauth for authentication. 

// configure passport to use google startegy for authentication
passport.use ( new GoogleStrategy ( {
    clientID: process.env.googleClientID,
    clientSecret: process.env.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, ( accessToken ) => {
    console.log ( accessToken )
} ) )

// Route to handle google authentication
// behind the scenes google string is identifier for the new google strategy that is being created and passed to the 
// passport in the above request 
app.get ( '/auth/google', passport.authenticate ( 'google', {
    scope: [ 'profile', 'email' ]
} ) )

// listen for express app
app.listen ( PORT, () => {
    console.log ( `Server is listening on port ${PORT}` )
} )