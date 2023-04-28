<template lang="">
  <div>
    <div class="alert bg-light mt-3" role="alert">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
        viewBox="0 0 16 16"
        role="img"
        aria-label="Warning:"
      >
        <path
          d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        />
      </svg>
      <h4 class="alert-heading">Page Not Found !!</h4>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p class="mb-3">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
      <router-link :to="`/posts`" class="btn btn-sm btn-dark"
          >Back to post</router-link
        >
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
