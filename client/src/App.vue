<template>
<div>
  <v-toolbar
  color="yellow"
  elevation="5"
>
<div class="navLink">
  <nav >
    <router-link class="link " to="/">Home</router-link> 
    <router-link  class="link" to="/create">Create</router-link>
  </nav>
</div>
  
</v-toolbar>

 <router-view/>
</div>
</template>

<style scoped>
.link{
  text-decoration: none;
  font-size: 25px;
  padding-right: 20px;
  padding-left: 5px;
  text-decoration-color:black;
}

</style>


