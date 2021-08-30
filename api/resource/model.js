// build your `Resource` model here
const db = require('../../data/dbConfig')
function getAll() {
  return db('resource')
    .select('rs.*')
}

function add(resource) {
  return db('resource').insert(resource)
    .then(([resource_id]) => {
      return db('resource').where('resource_id', resource_id).first()
    })
}

module.exports = {
  getAll,
  add
}