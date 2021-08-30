// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')
const router = express.Router()

router.get('/resource', (req, res, next) => {
  Resource.getAll()
    .then(resource => {
      res.json(resource)
    })
    .catch(next)
})

router.post('/resource', (req, res, next) => {
  const resource = req.body

  Resource.add(resource)
    .then(resource => {
      res.status(201).json(resource)
    })
    .catch(next)
})