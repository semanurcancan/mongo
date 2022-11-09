<template>
<div>
<h1 class="text-center">Home</h1>
<PostList/>

</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostList from "../components/PostList.vue"

// Components

export default defineComponent({
  name: 'homeView',
  components: {
    PostList,
  }

});
</script>
