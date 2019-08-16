const express = require ( 'express' )

// create express app
const app = express ()

// Select port for Heroku Deployment 
const PORT = process.env.PORT || 5000

// Route handler
app.get ( '/', ( req, res ) => {
    res.send ( {
        hi: 'there'
    } )
} )

// listen for express app
app.listen ( PORT, () => {
    console.log ( `Server is listening on port ${PORT}` )
} )