<template>
  <div>
    <div class="layout">
      <Header />
      <transition name="fade" appear>
        <main>
          <!-- a wrapper for slot is needed -->
          <slot />
          <!-- the content -->
        </main>
      </transition>
    </div>
      <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  components: {
    Header,
    Footer,
  }
};
</script>

<style>
body {
  font-family: "Open Sans", sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-weight: 300;
  background: #fdfdfd;
  color: #373331;
  
}

h1 {
  font-weight: 600;
}

h2 {
  font-weight: normal;
}

.nk-cust-gray{
  color: #555555;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  min-height: calc(100vh - 78px);
}

.heading--sub{
  font-family: "Arapey";
  color: #111827;
}

.fade-enter-active {
  transition: opacity 0.55s;
}

.fade-enter {
  opacity: 0;
}
</style>
