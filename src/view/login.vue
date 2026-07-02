<template>
    <navbar></navbar>
    <section class="flex items-center justify-center min-h-screen shadow-md
    bg-[url('@/assets/shop.jpg')] bg-cover bg-center w-full p-8">
        <div class="bg-white p-8 rounded">
            <div class="flex flex-col items-center justify-center 
            border-b-2 
            border-gray-300 pb-4">
                <h2>Login</h2>
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="16" height="16" fill="currentColor" 
                class="bi bi-cup-hot-fill text-black" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5"/>
                    <path d="m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8"/>
                </svg>
            </div>
            <form class="flex flex-col items-center justify-center mt-4" @submit.prevent="handleLogin">
                <p v-if="errorMessage" class="font-bold text-[14px] text-[#D0311E]">{{ errorMessage }}</p>
                <div class="w-80">
                    <input type="text" placeholder="Email" v-model="data.email"
                    class="w-full p-2 rounded-full border-2 border-gray-300 mb-4"/>
                </div>
                <div class="w-80">
                    <input type="password" placeholder="Password" v-model="data.password"
                    class="w-full p-2 rounded-full border-2 border-gray-300 mb-4"/>
                </div>
                 <div class="w-80">
                    <button class="w-full bg-[#622B14] p-2 shadow-md
                    text-white font-bold rounded-full" type="submit">
                        Login
                    </button>
                </div>
            </form>
            <span class="text-[14px] text-black font-bold">Don't have an account? <router-link to="/register" class="text-blue-500">Register here!</router-link></span>
        </div>
    </section>
    <Footer/>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import { useRouter } from 'vue-router';
import {useAuthStore} from '../store/Auth.ts'
import {ref} from 'vue';    
const router = useRouter();
const authStore = useAuthStore();
const errorMessage = ref("");
const data = {
    email: '',
    password: ''
}

if(authStore.isAuthenticated){
    router.push('/')
}

const handleLogin = async() =>{
    const success = await authStore.login(data);
    if(success){
        //await authStore.getUserProfile();
        router.push('/');
    }else{
        errorMessage.value = "Mật khẩu hoặc Email sai! Vui Lòng nhập lại!";
    }
}
</script>

<style scoped>
</style>