<template>
  <div class="">
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
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    Header
  }
};
</script>

<style>
body {
  font-family: "Quicksand", sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-weight: 300;
  background: ghostwhite;
}

h1 {
  font-weight: 600;
}

h2 {
  font-weight: normal;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  /* background: antiquewhite; */
}

.fade-enter-active {
  transition: opacity 0.55s;
}

.fade-enter {
  opacity: 0;
}
</style>
