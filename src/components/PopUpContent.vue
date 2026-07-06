<template>
    <div class="">
        <h3>{{ title }}</h3>
        <p>{{ msg }}</p>
        <button @click="isOpen =$emit('close')">Close</button>
        
    </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
defineProps({
    title: String,
    msg: String
})

defineEmits("close")
</script>
<style scoped>
</style>