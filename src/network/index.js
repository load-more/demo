import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000
})

export function getUsers() {
  return instance({
    url: 'users'
  })
}
export function getMusic() {
  return instance({
    url: 'music'
  })
}
export function getMovies() {
  return instance({
    url: 'movies'
  })
}