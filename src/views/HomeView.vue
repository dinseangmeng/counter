<script setup>
import store from '../store/index'
import Button from "../components/Button.vue"

const increase=()=>{
  store.commit('increment');
}
const decrease=()=> store.commit("decrement");

</script>

<template>
  <main>
    <section>
      <h1>{{$store.state.count}} </h1>
      <div>
        <Button text="-"   @isClicked="decrease" />
        <Button text="+"  @isClicked="increase"  />
      </div>


      <Button text="Reset" colorBg="red" isFull="true" @isClicked="$store.commit('reset')"/>


      <router-link :to="{name:'about'}">
        <Button  isFull="true" text="About" colorBg="blue" />
      </router-link>
    </section>

<center>

</center>
  </main>
</template>


<style  scoped>
main{
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid;


}
section{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
 }
 h1{
  font-size: 2rem;
  padding: 1rem 7rem;
  border: 2px solid black;
 }
div{
  width: 100%;
  display: flex;
  justify-content: space-between;



}
</style>
