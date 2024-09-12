// build your `Task` model here
const db = require('../../data/dbConfig')
function getAll() {
  return db('task')
    .select('task.*')
}

function add(task) {
  return db('task').insert(task)
    .then(([task_id]) => {
      return db('task').where('task_id', task_id).first()
    })
}

module.exports = {
  getAll,
  add
}