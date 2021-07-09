console.log('workiiing')
const express = require('express')
const app = express();
const path = require('path')
const api = require('./api.js')
// app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static(__dirname + '/public'))

// server erstellen / initialisieren

//port definieren
const PORT = process.env.PORT || 3000

// wir definieren , mit welcher Methode die Anfrage kommt .get
//Aufbau: Pafad, Callback
app.get('/', (req, res) => {
    // res.send('Heloo')
    // SendFile nur für HTML.(PFAD, OPTIONEN) hier braucht man den absoluten Pfad
    res.sendFile('./views/index.html', { root: __dirname })

})
app.get('/', (req, res) => {
    // res.send('Heloo')
    // SendFile nur für HTML.(PFAD, OPTIONEN) hier braucht man den absoluten Pfad
    // res.redirect('./views/about.html', { root: __dirname })
    res.redirect('/community')

})
app.get('/community', (req, res) => {
    res.sendFile('./views/community.html', { root: __dirname })
})
app.get('/', (req, res) => {
    res.redirect('/solution')
})
app.get('/solutions', (req, res) => {
    res.sendFile('./views/solutions.html', { root: __dirname })
})
console.log(api.movies)
app.get('/api', (req, res) => {
    res.json(api.movies)
})
app.get('/api/:year', (req, res) => {
    let movieByYear = api.movies.filter(movieObj => movieObj.year === req.params.year)
    res.json(movieByYear)
})


app.use((req, res) => {
    // res.status(404)
    // res.sendFile('./views/404.html', { root: __dirname })
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})

// app.use(express.static(__dirname + '/public'))



// app.get('/api', (req, res) => {
//     res.json([
//         { name: 'isabem', age: 43 },
//         { name: 'gudrun', age: 23 }
//     ])
// })



app.listen(PORT, () => console.log(`listening to on ${PORT}`))
