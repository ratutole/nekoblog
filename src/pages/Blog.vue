<template>
  <Layout>
    <h1>Welcome to Neko Man's blog</h1>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <post-teaser :post="edge.node"></post-teaser>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allBlogPost {
    edges {
      node {
        id
        title
        content
        path  
        tags    
      }
    }
  }
}
</page-query>

<script>
import PostTeaser from "~/components/PostTeaser.vue";

export default {
  components: {
    PostTeaser
  }
};
</script>
