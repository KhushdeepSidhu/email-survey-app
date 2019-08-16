const express = require ( 'express' )

// create express app
const app = express ()

// Route handler
app.get ( '/', ( req, res ) => {
    res.send ( {
        hi: 'there'
    } )
} )

// listen for express app
app.listen ( 5000, () => {
    console.log ( 'Server is listening on port 5000' )
} )