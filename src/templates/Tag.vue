<template>
  <Layout>
    <h1 class="tag-title text-center space-bottom"># {{ $page.tag.title }}</h1>

    <div class="posts">
      <PostTeaser
        v-for="edge in $page.tag.belongsTo.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on BlogPost {
            title
            path
            content
          }
        }
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
  },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>
