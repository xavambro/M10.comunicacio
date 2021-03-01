<template>
    <div class="item-component my-4 mx-auto p-2">
       <h3>{{name}}</h3> 
       <button class="btn btn-success" @click="$emit('plus')">{{contador}}</button>
    </div>
</template>

<script src="../scripts/fill.js">
</script>

<style src="../styles/css/fill.css" scoped>   
</style>