<template>
    <div class="item-component my-4 mx-auto p-2">
       <h3>{{name}}</h3> 
       <button class="btn btn-success" @click="counter++">{{counter}}</button>
    </div>
</template>

<script>

export default {
  name: 'Fill',
  data(){
      return {
          counter : 0
      }
  },
  props:['name']
}
</script>

<style scoped>
    .item-component{
        width:30%;
        background-color:white;
        border:solid green; 

    }
</style>