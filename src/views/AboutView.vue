<script setup>
import Button from "../components/Button.vue";

const open=()=>{
  window.open('http://www.dinseangmeng.xyz')
}
</script>
<template>
  <div id="container">
   <main>
    <center>
      <h1>Your number is {{$store.state.count}}</h1>
    </center>

    <center>
      <router-link  :to="{name:'home'}">
        <Button text="Home" isFull="true" color-bg="blue"/>
      </router-link>
      <br>
      <br>
      <Button text="Developer" @isClicked="open" isFull="true" color-bg="black"/>
    </center>
   </main>
  </div>
</template>

<style lang="scss" scoped>
#container{
  // width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

}
</style>
