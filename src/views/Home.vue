<template>
  <div class="home">
    <ul>
      <li @click="change('users')" @mouseover="active(1)" @mouseleave="index=null"
       :class="{isActive:index===1}">获取用户</li>
      <li @click="change('music')" @mouseover="active(2)" @mouseleave="index=null"
       :class="{isActive:index===2}">获取音乐</li>
      <li @click="change('movies')" @mouseover="active(3)" @mouseleave="index=null"
       :class="{isActive:index===3}">获取电影</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      index: null
    }
  },
  methods: {
    active(index) {
      this.index = index
    },
    change(value) {
      this.$router.push(value)
    }
  },
}
</script>

<style scoped>
  li {
    list-style: none;
    background-color: #bfa;
    width: 100px;
    height: 30px;
    text-align: center;
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  .isActive {
    color: red;
  }
</style>
