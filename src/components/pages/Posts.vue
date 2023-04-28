<template>
  <div>
    <p class="display-5">Post Page</p>
    <hr />
    <!-- loading spinner -->
    <div v-if="isLoading" class=" mt-5 row loader-spinner justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <!-- list of post herer-->
    <div v-if="!isLoading" class="row">
      <div
        v-for="post in posts"
        :key="post.id"
        class="col-lg-3 col-md-4 col-sm-12"
      >
        <!-- card here -->
        <div class="card border-dark mb-3">
          <div class="card-header">{{ post.userId }}</div>
          <div class="card-body text-dark">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">
              {{ post.body }}
            </p>
            <!-- <router-link :to="`/post/${post.id}`" class="btn btn-sm btn-dark">View</router-link> -->
            <router-link :to="{name:'post', params:{id:post.id}}" class="btn btn-sm btn-dark">View</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "PostList",

  mounted() {
    this.getPost();
  },

  methods: {
    getPost() {
    this.isLoading = true;
      axios.get("/posts")
      .then((response) => {
        this.posts = response.data;
        console.log(response.data);
        this.isLoading = false;
        // this.postList = response.data;
      });
    },
  },

  data() {
    return {
      posts: [],
      isLoading:false
    };
  },
};
</script>

<style scoped>
</style>
