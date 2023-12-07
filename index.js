const express = require('express')
const app = express()

const routes = require ('./src/routes/routes.js')

app.use(express.json())
app.use(routes)

app.listen(9898, '0.0.0.0', () => {
    console.log('Server running!');
})