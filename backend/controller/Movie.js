let mg = require('mongoose')

let movieModel = mg.model('Movies', {
  name: {
    type: String,
    required: true
  },
  time: String,
  star: Number
})

mg.connect('mongodb://localhost/demo2', {
  auth: {
    authSource: 'admin'
  },
  user: 'demo2',
  pass: 'jiayou'
})

let Movie = {
  add(params) {
    new movieModel(params).save()
        .then(() => console.log('add successfully!'))
        .catch(() => console.log('add failed!'))
  },
  find(params, callback) {
    return movieModel.find(params, callback)
  }
}

module.exports = Movie
