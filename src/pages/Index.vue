<template>
  <Layout>
    <!-- Landing Section start -->

    <div class="landing__content mb-10 mt-10 text-xl">
      <div class="border-r-2 border-green-400 nk-bg-main">
        <h2 class="heading heading--sub mb-4 text-2xl">Web Developer</h2>
        <g-image src="~/assets/coding.svg" width="250" class="mb-2" />
      </div>
    </div>

    <section class="mb-10">
      <div class="flex items-center flex-row-reverse justify-end">
        <div>
          <h3 class="heading heading--mod font-medium text-lg mb-1">
            Technology and Services
          </h3>
          <h5 class="heading text-xs text-gray-500 mb-4">
            Fast, responsive and user-friendly websites using the latest
            technologies
          </h5>
        </div>
      </div>

       <ul class="text-sm text-gray-600">
          <li>WHMCS</li>
          <li>Wordpress</li>
          <li>Blogs</li>
          <li>Static Sites</li>
          <li>SEO</li>
          <li>Digital Marketing</li>
         </ul>
    </section>

    <section
      class="
        p-2
        bg-green-100
        mb-10
        text-yellow-700
        font-medium
        nk-sticky-hire
        text-sm
        flex
        justify-between
        items-center
      "
    >
      Email us to get in touch<a
        class="
          underline
          bg-green-500
          px-2
          p-1
          text-white
          rounded-sm
          ml-2
          text-xs
          font-bold
        "
        href="mailto:nekowebsol@gmail.com"
        >Email Us</a
      >
    </section>
    <!-- Landing section end -->

    <!-- Skills section start -->
    <section>
      <h5 class="heading heading--mod text-lg font-medium mb-5">
        Recent Works
      </h5>
      <div class="grid grid-cols-2 gap-4">
        <div v-for="edge in $page.posts.edges" :key="edge.node.id">
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
import PostTeaser from "../components/PostTeaser";
import axios from "axios";

export default {
  data() {
    return {
      quotes: null,
    };
  },

  metaInfo: {
    title: "Welcome to my blog",
  },
  components: {
    PostTeaser,
  },
  async mounted() {
    console.log("hello");
    try {
      const results = await axios.get("https://type.fit/api/quotes");

      this.quotes = results.data;
      console.log(results);
    } catch (error) {
      console.log(error);
    }
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

.heading--mod {
  color: #521262;
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
</style>
