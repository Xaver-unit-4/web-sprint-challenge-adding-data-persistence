// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')
const router = express.Router()

router.get('/task', (req, res, next) => {
  Task.getAll()
    .then(task => {
      res.json(task)
    })
    .catch(next)
})

router.post('/task', (req, res, next) => {
  const task = req.body

  Task.add(task)
    .then(task => {
      res.status(201).json(task)
    })
    .catch(next)
})