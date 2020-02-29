<template>
  <Layout>
    <!-- Landing Section start -->

    <div class="landing__content mb-16 text-xl ">
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
          <g-image src="~/assets/freelancing.png" width="120" class="mb-2" />
          Web Developer
        </h2>
      </div>
    </div>

    <!-- Landing section end -->

    <!-- Skills section start -->
    <section class="skills neko-scroller" id="skills">
      <div class="u-inner-container nk-skills-container grid grid-cols-2 gap-8">
        <!-- <div class="nk-line"></div> -->
        <div class="mb-6">
          <h4 class="heading mb-2 font-normal text-lg">
            Designer
          </h4>
          <p class="projects-item__text u-center">
            I will deliver minimal, clean designs which focus on delivering
            relevant content without distracting your viewers.
          </p>
        </div>
        <g-image src="~/assets/piranha.png" width="120" class="m-auto" />
        <g-image src="~/assets/doodle-28.png" width="120" class="m-auto" />
        <div>
          <h4 class="heading mb-2 text-lg font-normal">
            Developer
          </h4>
          <p class="projects-item__text u-center">
            As a developer, I will make use of all the latest technologies to
            build you a site which will work across all devices
          </p>
        </div>
      </div>
    </section>
    <!-- Skills section end -->
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style scoped>
.nk-bg-main {
  background: linear-gradient(to right, ghostwhite, white);
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
  font-size: 12px;
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
