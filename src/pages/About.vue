<template>
  <Layout class="bg-pink-" style="background: #f5f5f5">
    <!-- About Section start-->
    <section class="about neko-scroller mt-16" id="about">
      <div class="u-inner-container skills--mod about-flex u-center mt-16">
        <div class="mb-10">
          <div class="nk-image-container--about">
            <g-image src="~/assets/piranha.png" width="42" class="mb-0" />
          </div>
          <h3
            class="heading heading--sub text-xl font-normal mb-2"
            id="certification"
          >
            About Me
          </h3>
          <div class="certificate">
            <p
              class="projects-item__text font-medium text-gray-600 text-sm nk-cust-gray"
            >
              Hello, I am Parth. I am a front-end developer specialising in
              building websites and web applications. I have been in this line
              of work for 2 years, I have worked on many exciting projects,
              various web technologies both as a freelancer and employee.
            </p>
          </div>
        </div>
        <div class="mb-4">
          <div class="nk-image-container--about">
            <!-- <g-image src="~/assets/piranha.png" width="42" class="mb-0" /> -->
            <Tool />
          </div>
          <h3
            class="heading heading--sub text-xl font-normal mb-2"
            id="certification"
          >
            Technologies I have been working with
          </h3>
          <div class="certificate">
            <p
              class="projects-item__text font-medium text-gray-600 text-sm nk-cust-gray"
            >
              These are the technologies I have been working with and some more
              including Bulma, Divi, Tailwindcss, Vuepress ...
            </p>
          </div>
        </div>
        <div
          class="tech-card-container grid grid-cols-2 gap-4 text-xs uppercase font-bold text-gray-700 sm:grid-cols-6 sm:gap-12 pb-10 mb-10 border-b border-indigo-200"
        >
          <!-- <div class="tech-card-content p-2">

            Adobe XD
            </div> -->
          <div>
            <div class="tech-card-content">
              <div class="text-4xl">
                <font-awesome :icon="['fab', 'wordpress-simple']" />
              </div>
              <div>WordPress</div>
            </div>
          </div>
          <div class="tech-card-content">
            <div class="text-4xl">
              <font-awesome :icon="['fab', 'css3']" />
            </div>
            CSS
          </div>
          <div class="tech-card-content">
            <div class="text-4xl">
              <font-awesome :icon="['fab', 'js']" />
            </div>
            JavaScript
          </div>
          <div class="tech-card-content">
            <div class="text-4xl">
              <font-awesome :icon="['fab', 'html5']" />
            </div>
            HTML
          </div>
          <div class="tech-card-content">
            <div class="text-4xl">
              <font-awesome :icon="['fab', 'php']" />
            </div>
            PHP
          </div>
          <div class="tech-card-content">
            <div class="text-4xl">
              <font-awesome :icon="['fab', 'vuejs']" />
            </div>
            Vue
          </div>
          <div class="tech-card-content">
            <div class="text-4xl">
              <font-awesome :icon="['fab', 'react']" />
            </div>
            React
          </div>
          <div class="tech-card-content">
            <div class="text-4xl">
              <font-awesome :icon="['fab', 'bootstrap']" />
            </div>
            Bootstrap
          </div>
          <div class="tech-card-content">
            <div class="text-4xl">
              <font-awesome :icon="['fab', 'whmcs']" />
            </div>
            WHMCS
          </div>
        </div>
        <div class="mb-4">
          <div class="nk-image-container--about">
            <Info />
          </div>
          <h3
            class="heading heading--sub text-xl font-normal mb-2"
            id="certification"
          >
            Questions
          </h3>
          <div class="certificate">
            <p
              class="projects-item__text font-medium text-gray-600 text-sm nk-cust-gray mb-4"
            >
              Questions I think you might have.
            </p>
            <div class="mb-4">
              <p class="mb-2 font-medium text-sm">
                Q. Are you available for work?
              </p>
              <p class="text-sm">
                I occasionaly take on freelance opportunities,
                <a
                  class="underline text-indigo-600"
                  href="mailto:nekowebsol@gmail.com"
                  >Email Me</a
                >
                for any work related queries
              </p>
            </div>
            <div class="mb-4">
              <p class="mb-2 font-medium text-sm">
                Q. How much experience do you have?
              </p>
              <p class="text-sm">
                I have been building websites and web applications for 2 years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About section end -->
  </Layout>
</template>

<script>
import Tool from "~/assets/icons/tool.svg";
import Info from "~/assets/icons/info.svg";
export default {
  metaInfo: {
    title: "About us",
  },
  components: {
    Tool,
    Info,
  },
};
</script>

<style scoped>
.tech-card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
