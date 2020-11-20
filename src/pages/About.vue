<template>
  <Layout>
    <!-- About Section start-->
    <section class="about neko-scroller mt-16" id="about">
      <div class="u-inner-container skills--mod about-flex u-center mt-16">
        <div class="mb-10">
          <div class="nk-image-container--about">
            <!-- <img
              src="./dist/images/profilepic.png"
              alt="Illustrated profile face male"
            /> -->
          </div>

          <h3 class="heading text-lg font-normal mb-4" id="certification">
            Technologies I work with
          </h3>
          <div class="certificate ">
            <p class="projects-item__text font-medium text-gray-700">
              Hello I am Parth. I work in building minimalistic, fast, responsive
              and beautiful websites. I will use the latest
              technologies to ensure your site works best on all devices:
            </p>
          </div>
        </div>

        <div
          class="tech-card-container grid grid-cols-4 gap-8 text-xs uppercase font-bold text-gray-600"
        >
          <!-- <div class="tech-card-content p-2">

            Adobe XD
            </div> -->
          <div class="tech-card-content p-2">
             <div class="text-4xl ">
              <font-awesome :icon="['fab', 'wordpress-simple']"/>
            </div>
            WordPress
            </div>
          <div class="tech-card-content p-2">
            <div class="text-4xl">
              <font-awesome :icon="['fab', 'css3']"/>
            </div>
            CSS
          </div>
          <div class="tech-card-content p-2">
            <div class="text-4xl">
              <font-awesome :icon="['fab', 'js']"/>
            </div>
            JavaScript</div>
          <div class="tech-card-content p-2">
            <div class="text-4xl">
              <font-awesome :icon="['fab', 'html5']"/>
            </div>
            HTML</div>
          <div class="tech-card-content p-2">
            <div class="text-4xl">
              <font-awesome :icon="['fab', 'vuejs']"/>
            </div>
            Vue</div>
          <div class="tech-card-content p-2">
            <div class="text-4xl">
              <font-awesome :icon="['fab', 'whmcs']"/>
            </div>
            WHMCS</div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
