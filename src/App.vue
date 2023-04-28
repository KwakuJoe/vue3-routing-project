<template>
  <!-- Navbar here -->
    <Navigation></Navigation>
  <!-- Navbar End her -->

  <div class="container">
    <!-- views displays here -->
    <router-view></router-view>
    <!-- end views -->
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>

<style></style>
