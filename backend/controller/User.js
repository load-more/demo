let mg = require('mongoose')

// 建立模型
let userModel = mg.model('User', {
  name: {
    type: String,
    required: true
  },
  gender: Number,
  age: Number
})

// 连接数据库
mg.connect('mongodb://localhost/demo2', {
  auth: {
    authSource: 'admin'
  },
  user: 'demo2',
  pass: 'jiayou'
})

let User = {
  add(params) {
    new userModel(params).save()
      .then(() => console.log('add successfully!'))
      .catch(() => console.log('add failed!'))
  },
  find(params, callback) {
    return userModel.find(params, callback)
  }
}

module.exports = User