<template>
  <div v-theme:column="'narrow'" id="showblogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filteredblogs" class="singleblog">
      <router-link v-bind:to="'/blog/'+blog.id">
        <h2 v-rainbow>{{blog.title | touppercase}}</h2>
      </router-link>
      <article>{{blog.body | snippet}}</article>
    </div>
  </div>
</template>

<script>
export default {
  name: "showblogs",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    this.$http.get("./../static/posts.json").then(function(data) {
      this.blogs = data.body.slice(0, 10);
    });
  },
  computed: {
    filteredblogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  }
};
</script>

<style>
#showblogs {
  max-width: 800px;
  margin: 0 auto;
}
.singleblog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border: 1px dotted #aaa;
}

</style>

