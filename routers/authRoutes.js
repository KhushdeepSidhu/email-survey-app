const express = require ( 'express' )
const passport = require ( 'passport' )

const router = new express.Router ()

// Route to handle google authentication using passport
// behind the scenes google string is identifier for the new google strategy that is being created and passed to the 
// passport in the above request 
router.get ( '/auth/google', passport.authenticate ( 'google', {
    scope: [ 'profile', 'email' ]
} ) )

// Route handler to handle the callbackURL - the user is redirected to this URL on our server by the google with the 'code' param
// This route callback has the code sent by the google so the Passport will know that this user has not to go through the Oauth
// process and will make request to google to send the user information requested like 'profile' and 'email'. This information 
// sent by the google can be accessed on the callback function which is used in passport.use.
router.get ( '/auth/google/callback', passport.authenticate ( 'google' ) )

module.exports = router