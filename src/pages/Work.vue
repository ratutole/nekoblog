<template>
  <Layout style="background: #faf7e6">
    <section>
      <div class="mt-16">
        <h1 class="mb-6 heading heading--sub font-normal text-xl">
          <Webpage /> Sites
        </h1>
        <g-link to="/">
          <div class="shadow-sm rounded-lg bg-neko p-8 mb-6">
            <div>
              <h4
                class="heading heading-mini font-bold text-lg mb-2 flex justify-between items-center"
              >
                Parth's Blog
                <span class="px-1 bg-green-400 text-white text-xs rounded-sm"
                  >WIP</span
                >
              </h4>
              <div class="nk-cust-gray text-sm mb-4 font-medium">
                Built with the help of Gridsome, Vue and Tailwindcss.
              </div>
              <g-image
                width="120"
                src="~/assets/doodle-28.png"
                class="m-auto my-12"
              />
            </div>
          </div>
        </g-link>
        <g-link to="https://ecoabode.com.au/">
          <div class="shadow-sm rounded-lg bg-eco p-8 mb-6">
            <div>
              <h4
                class="heading heading-mini font-bold text-lg mb-2 flex justify-between items-center"
              >
                Ecoabode
                <span class="px-1 bg-indigo-400 text-white text-xs rounded-sm"
                  >Complete</span
                >
              </h4>
              <div class="nk-cust-gray text-sm mb-4 font-medium">
                Built with the help of Wordpress and Divi
              </div>
              <g-image src="~/assets/images/ecoabode.png" />
            </div>
          </div>
        </g-link>
        <g-link to="https://omconstruction.netlify.app/">
          <div class="shadow-sm rounded-lg bg-om p-8">
            <div>
              <h4
                class="heading heading-mini font-bold text-lg mb-2 flex justify-between items-center"
              >
                Om Construction
                <span class="px-1 bg-red-400 text-white text-xs rounded-sm"
                  >Abandoned</span
                >
              </h4>
              <div class="nk-cust-gray text-sm mb-4 font-medium">
                Built with the vanilla toolkit - HTML, CSS, JS
              </div>
              <g-image src="~/assets/images/omconstruction.jpg" />
            </div>
          </div>
        </g-link>
      </div>
      <div class="mt-16">
        <h1 class="mb-6 heading heading--sub font-normal text-xl">
          <Webpage /> Apps
        </h1>
        <g-link to="https://learnjapp.netlify.app/">
          <div class="shadow-sm rounded-lg bg-japp p-8 mb-6">
            <div>
              <h4
                class="heading heading-mini font-bold text-lg mb-2 flex justify-between items-center"
              >
                Learn Japanese
                <span class="px-1 bg-orange-500 text-white text-xs rounded-sm"
                  >in limbo</span
                >
              </h4>
              <div class="nk-cust-gray text-sm mb-4 font-medium">
                Built with the help of Gridsome, Vue and Tailwindcss.
              </div>
              <div class="text-6xl text-center my-12">猫</div>
            </div>
          </div>
        </g-link>
      </div>
    </section>
  </Layout>
</template>

<script>
import Webpage from "~/assets/icons/layout.svg";
import Package from "~/assets/icons/package.svg";
export default {
  metaInfo: {
    title: "My Work",
  },
  components: {
    Webpage,
    Package,
  },
};
</script>

<style scoped>
.bg-eco {
  background: #f6eec9;
}
.bg-om {
  background: #d9ecf2;
}
.bg-neko {
  background: #ffe3d8;
}
.bg-japp {
  background: #ffe0ac;
}
</style>
