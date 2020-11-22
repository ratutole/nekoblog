<template>
  <Layout class="bg-indigo-100">
    <div class="mt-16">
      <h1 class="mb-6 heading heading--sub font-normal text-xl"><blog-icon /> Blog</h1>
      <div v-for="edge in $page.posts.edges" :key="edge.node.id">
        <post-teaser :post="edge.node" class="mb-6"></post-teaser>
      </div>
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
        summary
        path  
        tags{
          id
          title
          path
        }    
      }
    }
  }
}
</page-query>

<script>
import PostTeaser from "~/components/PostTeaser.vue";
import BlogIcon from '~/assets/icons/book.svg'

export default {
  components: {
    PostTeaser,
    BlogIcon
  }
};
</script>
