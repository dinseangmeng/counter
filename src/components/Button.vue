<script setup>
    const prob=defineProps({
        text:{
            type:String,
            default:"Button"
        },
        colorBg:{
            type:String,
            default:"black"
        },
        isFull:{
            type:Boolean,
            default:false
        }
    })
    const emit=defineEmits([
        "isClicked",
    ])
    const isClicked=()=>{
        emit("isClicked")
    }
</script>
<template>
    <button :class=" isFull? 'full': ''" 
    :style="{'background-color':colorBg}" 
    @click="isClicked()" 
    @keypress.prevent
    >{{text}}</button>
</template>

<style lang="scss" scoped>
    button{
        padding: 1rem;
        border: none;
        outline: none;
        background-color: black;
        color: white;
        border-radius: 3px;
        font-size: 1.5rem;
    }
    .full{
        width: 100%;
    }

</style>