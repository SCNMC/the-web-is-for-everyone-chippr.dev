const express = require('express')
const app = express()
const port = 3000
 
 app.get('/' , (req, res) => {
    res.sendFile('index.html', {root: __dirname});

});
 app.listen(process.env.PORT || 3000, () => console.log(`App avaialble on http://localhost:3000`))

 app.use(express.static('styles'))
