<template>
  <div>
    <p class="display-1">Home Page</p>
    <button
      type="button"
      @click.prevent="onRouter()"
      class="btn btn-outline-primary btn-sm"
    >
      Small button
    </button>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  methods: {
    onRouter() {
      this.$router.replace({path:'/posts'});
    },
  },
};
</script>
<style></style>
