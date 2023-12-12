const { validationResult } = require('express-validator')
const database = require('../db')

const initDatabase = (req, res) => {
    const sqlQuery = 'CREATE TABLE IF NOT EXISTS emails(id int AUTO_INCREMENT, firstname VARCHAR(50), lastname VARCHAR(50), email VARCHAR(50), PRIMARY KEY(id))'

    database.query(sqlQuery, (err) => {
       
        if(err) throw err

        res.send('Table created!')
    })
}

const getSubscribers = (req, res) => {
    const sqlQuery = 'SELECT * FROM emails'

    database.query(sqlQuery, (err, result) => {
        if(err) throw err

        res.json({'emails': result})
    })
}

const getOneSubscriber = (req, res) => {
    const userId = req.params.id
 
    const sqlQuery = 'SELECT * FROM emails WHERE id=?'

    database.query(sqlQuery, userId, (err,result) => {
        if(err) throw err

        if(result.length != 0){
            res.json({'emails': result})
        } else{
            res.send('User does not exist!')
        } 
    })
}

const addSubscriber = (req, res) => {
    const errors = validationResult(req)

    if(errors.array().length > 0) {
        res.send(errors.array())
    } else {
        const subscriber = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email
        }

        const sqlQuery = 'INSERT INTO emails SET ?'

        database.query(sqlQuery, subscriber, (err, row) => {
            if(err) throw err

            res.json({'emails': row})
        })
    }
}

const updateSubscriber = (req, res) => {
    const userId = req.params.id  

    
    const errors = validationResult(req)

    if(errors.array().length > 0){
        res.send(errors.array())
    } else {
        const subscriber = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email
        }
    
        const userId = req.params.id  
        const sqlQuery = 'UPDATE emails SET ? WHERE id = '+userId+''

        database.query(sqlQuery, subscriber, (err, result) => {
            if(err) throw err

            if(result.affectedRows != 0 && result.changedRows != 0){
                // res.json({'emails': result})
                res.send('Updated succesfully!')
            } else if (result.changedRows == 0 && result.affectedRows != 0){
                res.send('User already exist with these details!')
            } 
            else {
                res.send('User does not exist!')
            }
            
        })
    }  
}

const partialUpdate = (req, res) => {
    const userId = req.params.id  

    const errors = validationResult(req)

    if(errors.array().length > 0){
        res.send(errors.array())
    } else{
        const subscriber = {
            email: req.body.email
        }

        const userId = req.params.id

        const sqlQuery = 'UPDATE emails SET ? WHERE id = '+userId+''

        database.query(sqlQuery, subscriber, (err, result) => {
            if(err) throw err

            if(result.affectedRows != 0 && result.changedRows != 0){
                // res.json({'emails': result})
                res.send('Updated succesfully!')
            } else if (result.changedRows == 0 && result.affectedRows != 0){
                res.send('User already exist with these details!')
            } 
            else {
                res.send('User does not exist!')
            }
        })
    }
}

const deleteUser = (req, res) => {
    const userId = req.params.id  

        const sqlQuery = 'DELETE FROM emails WHERE id = ?'

        database.query(sqlQuery, userId, (err, result) => {
            if(err) throw err

            if(result.affectedRows != 0){
                res.send('Deleted succesfully!')
            } 
            else {
                res.send('User does not exist!')
            }
        })
}

module.exports = {
    initDatabase,
    getSubscribers,
    getOneSubscriber,
    addSubscriber,
    updateSubscriber,
    partialUpdate,
    deleteUser
}