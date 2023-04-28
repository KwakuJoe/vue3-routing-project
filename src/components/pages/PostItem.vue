<template lang="">
  <div>
    <div class="card mt-4">
      <div class="card-header">Arabic quotes</div>
      <div class="card-body">
        <h5 class="card-title">{{ data.title }}</h5>
        <p class="card-text">
          {{ data.body }}
        </p>
        <!-- <router-link to="/post/1" class="btn btn-sm btn-dark mx-4"
          >Got to post with ID 1</router-link
        > -->
        <router-link :to="{name:'posts'}" class="btn btn-sm btn-dark"
          >Back to post</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  // 3rd Approach
  props: ["id"],
  data() {
    return {
      data: ""
    };
  },

  watch:{
    id(){
        console.log('props id changes ...')
        this.getPostDetails();
    }
  },
  //   2nd Approach
  //   watch: {
  //     $route() {
  //       this.getPostDetails();
  //       console.log("watch params");
  //     },
  //   },

  created() {
    //1st approach
    // this.$watch(
    //     ()=> this.$route.params,
    //     ()=>{this.getPostDetails()}
    // );
    this.getPostDetails();
  },

  methods: {
    getPostDetails() {
    //   this.id = this.$route.params.id;
      // use the id to get the particular post
      axios.get(`/posts/${this.id}`).then((response) => {
        console.log(response.data);
        this.data = response.data;
      });
    },
  },
};
</script>
<style lang=""></style>
