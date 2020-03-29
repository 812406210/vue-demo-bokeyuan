<template>
  <div class="hello">
    <index-header></index-header>
    <index-main></index-main>
  </div>
</template>

<script>
  import indexHeader from '@/components/indexComponents/indexHeader'
  import indexMain from '@/components/indexComponents/indexMain'
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'indexHeader':indexHeader,
    'indexMain':indexMain,
  }
}
</script>
<style scoped>

</style>
