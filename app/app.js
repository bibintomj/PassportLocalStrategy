const express = require('express')
const reload = require('reload')
const app = express()

const authRoutes = require('./routes/auth-routes')

// Setting up views
app.set('view engine', 'ejs')
app.set('views', 'app/views')
app.use(express.static('app/public'))

// setting up routes
app.use(authRoutes)

const server = app.listen(3000, function () {
  console.log('Started & Listening..x.')
})

app.get('/', (req, res) => {
  res.render('home')
})

reload(server, app)
