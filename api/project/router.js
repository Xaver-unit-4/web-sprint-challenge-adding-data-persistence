// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')
const router = express.Router()

router.get('/project', (req, res, next) => {
  Project.getAll()
  .then(project => {
    res.json(project)
  })
  .catch(next)
})

router.post('/project', (req, res, next) => {
  const project = req.body

  Project.add(project)
    .then(project => {
      res.status(201).json(project)
    })
    .catch(next)
})