<template>
  <div id="singleblog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.body}}</article>
  </div>
</template>

<script>
import { constants } from "crypto";
export default {
  name: "singleblog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts/" + this.id)
      .then(function(data) {
        //console.log(data);
        this.blog = data.body;
      });
  }
};
</script>

<style>
#singleblog {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border: 1px dotted #aaa;
}
</style>
