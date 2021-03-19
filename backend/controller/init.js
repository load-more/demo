let User = require('./User')
let Music = require('./Music')
let Movie = require('./Movie')

User.add(
{
  name: 'Tom',
  gender: 0,
  age: 15
})
User.add(
  {
    name: 'John',
    gender: 0,
    age: 14
  }
)
User.add(
  {
    name: 'Sara',
    gender: 1,
    age: 18
  }
)
User.add(
  {
    name: 'Linda',
    gender: 1,
    age: 22
  }
)

Music.add({
  name: 'aaa',
  author: 'a',
  star: 111
})
Music.add({
  name: 'bbb',
  author: 'b',
  star: 222
})
Music.add({
  name: 'ccc',
  author: 'c',
  star: 333
})
Music.add({
  name: 'ddd',
  author: 'd',
  star: 444
})

Movie.add({
  name: 'aaaa',
  time: '2020',
  star: 22
})
Movie.add({
  name: 'bbbb',
  time: '2021',
  star: 33
})
Movie.add({
  name: 'cccc',
  time: '2010',
  star: 44
})
Movie.add({
  name: 'dddd',
  time: '2018',
  star: 55
})