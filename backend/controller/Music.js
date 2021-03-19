let mg = require('mongoose')

let musicModel = mg.model('Music', {
  name: {
    type: String,
    required: true
  },
  author: String,
  star: Number
})

mg.connect('mongodb://localhost/demo2', {
  auth: {
    authSource: 'admin'
  },
  user: 'demo2',
  pass: 'jiayou'
})

let Music = {
  add(params) {
    new musicModel(params).save()
        .then(() => console.log('add successfully!'))
        .catch(() => console.log('add failed!'))
  },
  find(params, callback) {
    return musicModel.find(params,callback)
  }
}

module.exports = Music