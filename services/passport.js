const passport = require ( 'passport' ) 
const GoogleStrategy = require ( 'passport-google-oauth20' ).Strategy

// Two important options to give - Client ID and a client secret which are provided to us directly from google's 
// oauth service. This allow google to identify from which app the user is coming from. We have to sign up to 
// google oauth API. Register our application and to tell google we have users who want use our application
// and will use google oauth for authentication. 

// configure passport to use google startegy for authentication
passport.use ( new GoogleStrategy ( {
    clientID: process.env.googleClientID,
    clientSecret: process.env.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, ( accessToken, refreshToken, profile, done ) => {
    console.log ( 'accessToken', accessToken )
    console.log ( 'refreshToken', refreshToken )
    console.log ( 'profile', profile )
} ) )