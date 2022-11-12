<script setup>
import Button from "../components/Button.vue";
</script>
<template>
  <div class="about">
    <h1>Your number is {{$store.state.count}}</h1>
    <h1>This is an about page</h1>
  </div>
  <router-link  :to="{name:'home'}"><Button text="Home" /></router-link>
</template>

<style>
</style>
