const express = require ( 'express' )
const authRoutes = require ( './routers/authRoutes' )
require ( './services/passport' )

// create express app
const app = express ()

// Select port for Heroku Deployment 
const PORT = process.env.PORT || 5000

// Register authRoutes
app.use ( authRoutes )

// listen for express app
app.listen ( PORT, () => {
    console.log ( `Server is listening on port ${PORT}` )
} )