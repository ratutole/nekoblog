<template>
  <div class="card">
    <h2>{{ post.title }}</h2>
    <p v-html="post.content"></p>
    <g-link :to="post.path">Read Full Post</g-link>
  </div>
</template>

<static-query>
query {
  blogPost {
    content
  }
}
</static-query>

<script>
export default {
  name: "PostTeaser",
  props: ["post"]
};
</script>

<style>
.card {
  padding: 10px 20px;
  border: 1px solid #dfdede;
  margin: 15px 0;
  border-radius: 6px;
  box-shadow: inset 0 3px 6px rgba(2, 2, 2, 0.03);
}
</style>
