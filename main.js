const express = require('express')
const app = express()
const port = 3000
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))

//serve public files 
app.use(express.static('styles'))

// hook up template engine 

 app.get('/' , (req, res) => {
    res.sendFile('index.ejs', {root: __views});

});
 app.listen(process.env.PORT || 3000, () => console.log(`App avaialble on http://localhost:3000`))


