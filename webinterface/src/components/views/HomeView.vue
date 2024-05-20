<template>
  <div class="container">
      <div v-for="(pic,k) in pics" :key="k">
        <img class="image-width" :src="pic.picture_url" alt="Vite logo" />
      </div>
  </div>
</template>

<script>
export default {
    name: "HomeView",
    data:()=>({
      pictures: null
    }),
    computed:{
      pics(){
        return this.pictures
      }
    },
    created(){
      this.$table("pictures", "*").then(r=>{
        this.pictures = r
      }).catch(e=>console.log(e))
    }
}
</script>
<style>
.container{
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
}
.image-width{
  max-width: 800px;
}
</style>