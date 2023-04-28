<template>
  <div class="row justify-content-center">
    <div class="col-lg-4 mt-4">
        <p class="display-5">Create Post Page</p>
         <!-- Alert  -->
      <div
        v-if="showSuccessAlert"
        class="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        <strong>Post Created Successfully</strong> New post added to feed !
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <!-- forms -->
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Title</label>
          <input
            type="text"
            v-model="title"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            {{ title }}
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Description</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            v-model="body"
            rows="3"
          ></textarea>
        </div>
        <p v-show="loading">Loading....</p>
        <button
          type="submit"
          @click.prevent="onCreatePost"
          class="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";


export default {

    data() {
    return {
      title: "",
      body: "",
      loading: false,
      showSuccessAlert:false
    };
  },

    methods: {
    onCreatePost() {
      this.loading = true;
      axios.post("/posts", {
          title: this.title,
          body: this.body,
          userId: 1,
        })
        .then((response) => {
          console.log(response);
          this.loading = false;
          this.showSuccessAlert = true;
          this.$router.push('/posts');

          // throw an emit function to update the post list in the PostListComponent.
          this.$emit('postCreated');
        });

      //    this.loading = false;
    },
  },
};
</script>
<style></style>
