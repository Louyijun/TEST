<template>
  <div id="app">
    <!-- <addblog/> -->
    <!-- <showblogs/> -->
    <blogheader/>
    <router-view/>
  </div>
</template>

<script>
import addblog from './components/addblog'
import showblogs from './components/showblogs'
import blogheader from './components/blogheader'

export default {
  name: 'App',
  components: {
    addblog,
    showblogs,
    blogheader
  }
}
</script>

<style>

</style>
