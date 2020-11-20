<template>
  <div class="card p-3 h-full flex flex-col justify-between shadow">
    <div>
    <h2 class="mb-2">{{ post.title }}</h2>
    <p v-html="post.content"></p>
    </div>
    <div>
    <PostTags :post="post"></PostTags>
    <g-link :to="post.path" class="text-blue-800 block text-right uppercase text-sm font-medium">read the full post</g-link>
    </div>
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
import PostTags from "./PostTags";
export default {
  name: "PostTeaser",
  props: ["post"],
  components: {
    PostTags
  }
};
</script>

<style scoped>
  .card{
    background: #ebfffa;
  }
</style>
