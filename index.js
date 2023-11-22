import express, { json } from 'express'
const app = express()

import routes from './src/routes/routes.js'

app.use(json())
app.use(routes)

app.listen(9898, () => {
    console.log('Server running!');
})