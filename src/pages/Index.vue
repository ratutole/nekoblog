<template>
  <Layout>
    <!-- Landing Section start -->

    <div class="landing__content mb-10 text-xl">
      <div class="content">
        <div class="content__container">
          <ul class="content__container__list">
            <li class="content__container__list__item">Hello</li>
            <li class="content__container__list__item">તમે કેમ છો</li>
            <li class="content__container__list__item">नमस्ते</li>
            <li class="content__container__list__item">こにちは</li>
          </ul>
        </div>
      </div>
      <div class="border-r-2 border-green-400 nk-bg-main">
        <h2 class="heading heading--sub mb-4 text-2xl">
          Front-end Web Developer
        </h2>
        <g-image src="~/assets/coding.svg" width="250" class="mb-2" />
      </div>
    </div>

    <section class="mb-10">
      <div class="flex items-center flex-row-reverse justify-end">
         <g-image src="~/assets/doodle-28.png" width="60" class="mb-2 ml-1" />
        <h3 class="heading heading--mod font-medium text-lg mb-4">A bit about <g-link class="underline" to="/about/">me</g-link></h3>
      </div>
      
      <p class="font-normal text-gray-700 text-base">I build fast, responsive and user-friendly websites using the latest technologies. I create user interfaces with Wordpress, WHMCS, Vue and ssg's such as Vuepress and Gridsome sprinkle that with CSS libs Vuepress/tailwindcss.
      </p>
    </section>

    <section class="p-2 bg-purple-200 text-center mb-10 text-gray-600 font-medium nk-sticky-hire">
      I am available for <a class="underline text-blue-500" href="mailto:nekowebsol@gmail.com">work/hire</a>
    </section>
    <!-- Landing section end -->

    <!-- Skills section start -->
    <section>
      <h5 class="heading heading--mod
      text-lg font-medium mb-5">Recent posts</h5>
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
/* .nk-bg-main{
  background: #e8e8e8;
} */

.nk-sticky-hire{
}

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

.heading--mod{
  color: #521262;
}

.heading--mod::after {
  content: "";
  display: block;
  width: 20px;
  height: 1px;
  background: #fe9801;
}

.heading--sub{
  font-family: "Arapey";
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
