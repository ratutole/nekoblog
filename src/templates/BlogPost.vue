<template>
  <Layout>
    <div class="mt-16">
      <h1 v-html="$page.blogPost.title"  class="mb-6 heading--sub font-normal text-xl border-b border-indigo-300"/>
      <div v-html="$page.blogPost.content" />
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  blogPost(id: $id) {
    title
    content
  }
}
</page-query>
