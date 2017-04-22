const routes = require('express').Router()

routes.get('/index', (req, res) => {
  res.json({data:['sate','rujak','batagor','apel','salak']})
})

module.exports = routes;
