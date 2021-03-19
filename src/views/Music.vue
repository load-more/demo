<template>
  <div>
    <ul>
      <li v-for="(item, index) in music" :key="index">
        name：{{item.name}}，author：{{item.author}}，star：{{item.star}}
      </li>
    </ul>
  </div>
</template>

<script>
import {getMusic} from '@/network/index.js'

export default {
  name: 'Music',
  data() {
    return {
      music: null,
    }
  },
  methods: {
    getMusic() {
      getMusic().then(res => {
        this.music = res.data.data
        // console.log(this.music);
      })
    }
  },
  created() {
    this.getMusic()
  }
}
</script>

<style scoped>

</style>
