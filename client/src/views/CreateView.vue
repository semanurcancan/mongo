<template>
  <div class="about">
    <h1 class="text-center">create</h1>
    <post-form
      :post="post"
      :submitForm="submitForm"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import axios, { AxiosResponse } from "axios";
import PostForm from "../components/PostForm.vue";

export default defineComponent({
  components: { PostForm },
  data() {
    return {
      post: {
        title: "",
        content: "",
        creator: "",
        _id: null,
      },
      API_URL: "http://localhost:5000/posts",
    };
  },
  methods: {
    ccc(x: any) {
      console.log(x);
    },
    async submitForm() {
      await axios.post(this.API_URL, this.post);
      this.$router.push({ name: "homeView" });
    },
  },
});
</script>
