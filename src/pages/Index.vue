<template>
  <Layout>
    <!-- Landing Section start -->

    <div class="landing__content mb-16 text-xl">
      <div class="content mb-8">
        <div class="content__container">
          <ul class="content__container__list">
            <li class="content__container__list__item">Hello</li>
            <li class="content__container__list__item">તમે કેમ છો</li>
            <li class="content__container__list__item">नमस्ते</li>
            <li class="content__container__list__item">こにちは</li>
          </ul>
        </div>
      </div>
      <div class="border-r-2 border-green-400 nk-bg-main py-2">
        <h2 class="heading heading--sub mb-1">
          <g-image src="~/assets/coding.svg" width="150" class="mb-2" />
          Web Developer
        </h2>
      </div>
    </div>

    <section class="mb-6">
      <h3 class="heading font-medium text-lg mb-2">A bit about me</h3>
      <p class="font-medium text-gray-800">Hello, I am Parth. I work in making minimalistic, fast, responsive and beautiful websites. I am very passionate about making websites and working with new technologies. I will use the latest technologies to ensure your site works best on all devices</p>
    </section>
    <!-- Landing section end -->

    <!-- Skills section start -->
    <section>
      <h5 class="heading heading--mod
       mb- text-lg font-medium mb-6">Check out the blog</h5>
      <div class="grid grid-cols-2 gap-4">
        <div
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
        >
          <post-teaser :post="edge.node"></post-teaser>
        </div>
      </div>
    </section>
    <!-- Skills section end -->
  </Layout>
</template>

<page-query>
query {
  posts: allBlogPost(limit:2) {
    edges {
      node {
        id
        title
        content
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
import PostTeaser from "../components/PostTeaser";
export default {
  metaInfo: {
    title: "Welcome to my blog",
  },
  components: {
    PostTeaser,
  },
};
</script>

<style scoped>
.content {
  bottom: 80px;
  height: 60px;
  overflow: hidden;
  color: #565454;
  font-size: 16px;
  line-height: 4rem;
}
@media (max-width: 37.5em) {
  .content {
    display: none;
  }
}
.content__container {
  font-weight: 300;
  overflow: hidden;
  height: 40px;
}
.content__container__text {
  display: inline;
  margin: 0;
}
.content__container__list {
  margin-top: 0;
  text-align: left;
  list-style: none;
  padding: 0;
  -webkit-animation-name: change;
  -webkit-animation-duration: 20s;
  -webkit-animation-iteration-count: infinite;
  animation-name: change;
  animation-duration: 20s;
  animation-iteration-count: infinite;
}
.content__container__list__item {
  line-height: 40px;
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  color: #382933;
}

.heading--mod::after {
  content: "";
  display: block;
  width: 20px;
  height: 1px;
  background: #fe9801;
}

@keyframes change {
  0%,
  12.66%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  16.66%,
  29.32% {
    transform: translate3d(0, -25%, 0);
  }
  33.32%,
  45.98% {
    transform: translate3d(0, -50%, 0);
  }
  49.98%,
  62.64% {
    transform: translate3d(0, -75%, 0);
  }
  66.64%,
  79.3% {
    transform: translate3d(0, -50%, 0);
  }
  83.3%,
  95.96% {
    transform: translate3d(0, -25%, 0);
  }
}

/* Headings */
</style>
