const express = require('express')
const app = express()
const port = 3000
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))

//serve public files 
app.use(express.static('public'))

// hook up template engine 
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
    // res.send('Hallo wereld!')
    res.render('index', {
      title: 'Dit is een index uit EJS',
    })

})
 app.listen(process.env.PORT || 3000, () => console.log(`App avaialble on http://localhost:3000`))


