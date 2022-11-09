<template>
  <div class="about">
    <h1  class="text-center">update</h1>
    <post-form :post="post" :submitForm="submitForm"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostForm from "../components/PostForm.vue"

import axios, {AxiosResponse} from "axios"

//models
import CrudModels from "../models/CrudModels"

export default defineComponent({
  name: 'UpdateView',
components:{PostForm},
data(){
  return {
    post:{
      title: "",
      content: "",
      creator: "",
      _id: ""  as string | null
    },
    API_URL: "http://localhost:5000/posts"
  }
},

methods:{
  submitForm(){
   axios.put(`${this.API_URL}/${this.$route.params.id}`, this.post);
  this.$router.push({name: "homeView"});
 },
  getPosts() {
      axios(`${this.API_URL}/${this.$route.params.id}`).then(
        (result: AxiosResponse<CrudModels>) => {
          console.log("res",result.data);
          
          this.post = result.data
        }
      );
},
},
mounted(){
  this.getPosts();
},

})
</script>
