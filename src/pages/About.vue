<template>
  <Layout>
    <!-- About Section start-->
    <section class="about neko-scroller mt-16" id="about">
      <div class="u-inner-container skills--mod about-flex u-center mt-16">
        <div class="mb-6">
          <div class="nk-image-container--about">
            <!-- <img
              src="./dist/images/profilepic.png"
              alt="Illustrated profile face male"
            /> -->
          </div>

          <h3 class="heading text-lg font-normal mb-2" id="certification">
            About Me
          </h3>
          <div class="certificate ">
            <p class="projects-item__text">
              Hi, I am Parth. I work in making minimalistic, fast, responsive
              and beautiful websites. I am very passionate about making websites
              and working with new technologies. I will use the latest
              technologies to ensure your site works best on all devices:
            </p>
          </div>
        </div>

        <div
          class="tech-card-container grid grid-cols-2 gap-8 text-xs uppercase font-bold text-gray-600"
        >
          <div class="tech-card-content p-2">Adobe XD</div>
          <div class="tech-card-content p-2">WordPress</div>
          <div class="tech-card-content p-2">CSS</div>
          <div class="tech-card-content p-2">JavaScript</div>
          <div class="tech-card-content p-2">HTML</div>
          <div class="tech-card-content p-2">Vue</div>
          <div class="tech-card-content p-2">WHMCS</div>
        </div>
      </div>
    </section>

    <!-- About section end -->
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About us"
  }
};
</script>

<style scoped>
.tech-card-content {
  background: linear-gradient(to left, white, ghostwhite);
}
</style>
