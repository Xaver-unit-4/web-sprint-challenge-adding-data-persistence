// build your `Project` model here
const db = require('../../data/dbConfig')
function getAll() {
  return db('project')
    .select('project.*')
}

function add(project) {
  return db('project').insert(project)
    .then(([project_id]) => {
      return db('project').where('project_id', project_id).first()
    })
}

module.exports = {
  getAll,
  add
}