<template>
  <div>
    <ul>
      <li v-for="(item, index) in movies" :key="index">
        name：{{item.name}}，time：{{item.time}}，star：{{item.star}}
      </li>
    </ul>
  </div>
</template>

<script>
import {getMovies} from '@/network/index.js'

export default {
  name: 'Movie',
  data() {
    return {
      movies: null,
    }
  },
  methods: {
    getMovies() {
      getMovies().then(res => {
        this.movies = res.data.data
        // console.log(this.movies);
      })
    }
  },
  created() {
    this.getMovies()
  }
}
</script>

<style scoped>

</style>
