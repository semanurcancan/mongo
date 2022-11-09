<template>
  <v-card>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      @submit.prevent="submitForm"
    >
      <v-text-field
        v-model="postForm.title"
        label="Title"
        required
      ></v-text-field>

      <v-text-field v-model="postForm.content" label="Content"></v-text-field>
      <v-select
        v-model="postForm.creator"
        :items="items"
        :rules="[(v) => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>
      <v-btn color="warning" class="mr-4" type="submit"> submit </v-btn>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import CrudModels from "../models/CrudModels";

export default defineComponent({
  props: {
    submitForm: {},
    post: {
      type: Object as PropType<CrudModels>,
      required: true,
    },
  },
  data: () => ({
    valid: true,
    creator: null,
    items: ["semanur", "engin", "gülşah", "mehmet"],
  }),
  
  computed: {
    postForm() {
        return this.post;
    },
  },
});
</script>
