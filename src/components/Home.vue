<script>
export default {
  data() {
    return {
      hi: 1,
      blue: "hello"
    }
  },
  watch: {
    blue() {
      console.log(this.blue)
    }
  }
}
</script>

<template>
  <input v-model="blue" /> aa
</template>

<style scoped>
</style>
