<template>
  <div class="container">
    <v-row>
      <v-col v-for="post in posts" :key="post._id">
        <v-card class="card">
          <h4 class="text-center">PostList</h4>
          <p>{{ post.title }}</p>
          <p>{{ post.content }}</p>
          <p>{{ post.creator }}</p>

          <!-- <div class="inputGroup">
            <input type="text" placeholder="title" class="inputClass" />
            <input type="text" placeholder="title" class="inputClass" />
            <input type="text" placeholder="title" class="inputClass" />
          </div> -->

          <div class="btnGroup">
            <v-btn class="btn" @click.prevent="editRoute(post._id)">edit</v-btn>
            <v-btn class="btn" @click.prevent="deletePost(post._id)">dlt</v-btn>
            <v-btn class="btn" @click.prevent="goCreate(post._id)">new</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CrudModels from "../models/CrudModels";
import axios, { AxiosResponse } from "axios";

export default defineComponent({
  data() {
    return {
      posts: new Array<CrudModels>(),
      API_URL: "http://localhost:5000/posts",
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      await axios(this.API_URL).then(
        (result: AxiosResponse<Array<CrudModels>>) => {
          this.posts = result.data;
        }
      );
    },
    goCreate(id:string | null) {
this.$router.push({
  name:"Create"
})
    },
    editRoute(id: string | null) {
      this.$router.push({
        name: "update",
        params: {
          id: id,
        },
      });
    },
    async deletePost(id: string | null) {
      await axios.delete(`${this.API_URL}/${id}`);
      //silindikten sonra son hallini görebilmek için this.getPosts yaparak sayfanın tekrardan render olup get postsun son halını goruyoruz.!!
      this.getPosts();
    },
  },
});
</script>

<style scoped>
.container {
  margin-left: 15px;
}
.card {
  background-color: rgba(245, 215, 49, 0.849);
  height: 250px;
  width: 250px;
  border: 2px solid yellow;
  border-radius: 8px;
}
.inputClass {
  margin-left: 8px;
  margin-bottom: 6px;
  border: 2px solid yellow;
  border-radius: 8px;
}
.inputGroup {
}
.btn {
  margin-right: 2px;
  background-color: rgba(245, 245, 228, 0.842);
  height: 25px;
  width: 20px;
}
.btnGroup {
  display: flex;
  justify-content: space-around;
  margin-right: 3px;
  margin-right: 3px;
  margin-top: 10px;
}
</style>
