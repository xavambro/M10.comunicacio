<template>
    <div class="container">
        <h3 class="mt-3">Component Pare</h3>
        <Fill v-for="item in items" v-bind:key="item.id" :name="item"></Fill>
    </div>
</template>

<script>
import Fill from './Fill'

export default {
  name: 'Pare',
  components:{
      Fill
  },
  data(){
     return{
         items: ["item 1","item 2","item 3"]
     } 
  }
}
</script>

<style scoped>
    .container{
        background-color:rgb(175, 170, 170);
        border:solid green 3px;
        border-radius:2rem;
    }
</style>