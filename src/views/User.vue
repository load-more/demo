<template>
  <div>
    <ul>
      <li v-for="(item, index) in users" :key="index">
        name：{{item.name}}，gender：{{item.gender ? '女' : '男'}}，age：{{item.age}}
      </li>
    </ul>
  </div>
</template>

<script>
import { getUsers } from '@/network/index.js'

export default {
  name: 'User',
  data() {
    return {
      users: null,
    }
  },
  methods: {
    getUsers() {
      getUsers().then((res) => {
        this.users = res.data.data
        // console.log(this.users);
      })
    }
  },
  created() {
    this.getUsers()
  }
}
</script>

<style scoped>

</style>
