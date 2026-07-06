<template>
    <Navbar/>
    <div class="h-screen root p-8">
        <h1>Popup</h1>
        <button class="" @click="isOpen=true">OPen</button>
        <Teleport to="body">
            <div class="modal" v-if="isOpen">
                <PopUpContent 
                    title="what up?"
                    msg="look yu"
                    @close = "isOpen = false"
                />
            </div>
        </Teleport>
    </div>
    <Footer/>
</template>
<script setup>
import Navbar from '../../components/Navbar.vue';
import Footer from '../../components/Footer.vue';
import { ref } from 'vue';
import PopUpContent from '../../components/PopUpContent.vue';
const isOpen = ref(false);

</script>
<style scoped>
.root{
    position: relative;
}
.modal{
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: white;
    width: 50%;
    height: 10%;
    display: flex;
    
    justify-content: center;
    align-items: center;
}

.model > div{
    background-color: black;
    padding: 50px;
    border-radius: 24px;
}
</style>