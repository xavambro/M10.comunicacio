<template>
    <div class="container">
        <h3 class="mt-3">Component Pare</h3>
        <Fill v-for="item in items" v-bind:key="item.id" :name="item"></Fill>
    </div>
</template>

<script src="../scripts/pare.js">
</script>

<style src="../styles/css/pare.css" scoped>   
</style>