<template>
    <Navbar/>
    <div class="h-screen p-8">
        <div class="grid grid-cols-4 gap-4 text-black
        p-2">
            <div class="col-span-1">
                <div class="p-2 flex text-[14px] bg-[#995F2F] rounded-t-lg
                font-bold justify-center
                items-center gap-1">
                   <span>Your profile navigation</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
                    </svg>
                </div>
                <div class="p-2 text-[14px] 
                bg-[#E4D6A9] text-left
                gap-1">
                    <p class="cursor-pointer">Your profile</p>
                    <p class="cursor-pointer">Your favorites</p>
                    <p class="cursor-pointer">Your orders</p>
                </div>
                <div class="p-2 text-[14px] 
                bg-[#E4D6A9] text-left
                gap-1 border-t-2 border-[#995F2F]">
                    <p class="cursor-pointer">Update profile</p>
                    <p class="cursor-pointer">Update Password</p>
                </div>
                <div class="p-2 text-[14px] rounded-b-lg
                bg-[#E4D6A9] text-left font-bold
                gap-1 border-t-2 border-[#995F2F]">
                    <p class="cursor-pointer" @click="logout">Logout</p>
                </div>
            </div>
            <div class="col-span-3 bg-[#E4D6A9] rounded-lg shadow-md">
                <div class="p-4 border-b-2 mx-10 ">
                    <!-- <span class="font-bold"
                    >Your Profile</span> -->
                    <div class="flex justify-center pb-2">
                         <svg xmlns="http://www.w3.org/2000/svg" 
                        width="35" height="35" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                    </div>
                    <p class="text-[14px]">Create: 
                        {{ authStore.user?.createdAt ? new Date(authStore.user.createdAt).toLocaleDateString() : '' }}
                        - Last Updated: 
                        {{ authStore.user?.lastUpdatedAt ? new Date(authStore.user.lastUpdatedAt).toLocaleDateString() : '' }}</p>
                </div>
                <div class="p-2" v-if="authStore.user">
                    <form action="" class="text-[14px]">
                       <div class="grid grid-cols-4 my-2
                        gap-2 text-right items-center
                        ">
                            <div class="col-span-1">
                                <label for="" 
                                class="font-bold"
                                >Username:</label>
                            </div>
                            <div class="col-span-2">
                                <input type="text" placeholder="Username"
                                name="" id="" disabled
                                class="bg-white shadow-md 
                                w-full rounded-lg p-2" v-model="authStore.user.userName">
                            </div>
                       </div>
                       <div class="grid grid-cols-4 my-2
                        gap-2 text-right items-center
                        ">
                            <div class="col-span-1">
                                <label for="" 
                                class="font-bold"
                                >Email:</label>
                            </div>
                            <div class="col-span-2">
                                <input type="text" placeholder="Email"
                                name="" id="" disabled
                                class="bg-white shadow-md 
                                w-full rounded-lg p-2" v-model="authStore.user.email">
                            </div>
                       </div>
                       <!-- <div class="grid grid-cols-4
                        gap-2 text-right items-center
                        my-2">
                            <div class="col-span-1">
                                <label for="" 
                                class="font-bold"
                                >Password:</label>
                            </div>
                            <div class="col-span-2">
                                <input type="text" placeholder="Password"
                                name="" id="" disabled
                                class="bg-white shadow-md 
                                w-full rounded-lg p-2">
                            </div>
                       </div> -->
                       <div class="grid grid-cols-4 my-2
                        gap-2 text-right items-center
                        ">
                            <div class="col-span-1">
                                <label for="" 
                                class="font-bold"
                                >Phone number:</label>
                            </div>
                            <div class="col-span-2">
                                <input type="text" placeholder="PhoneNumber"
                                name="" id="" disabled
                                class="bg-white shadow-md 
                                w-full rounded-lg p-2" v-model="authStore.user.phoneNumber">
                            </div>
                       </div>
                       <div class="grid grid-cols-4 my-2
                        gap-2 text-right items-center
                        ">
                            <div class="col-span-1">
                                <label for="" 
                                class="font-bold"
                                >Birthday:</label>
                            </div>
                            <div class="col-span-2">
                                <input type="Date"
                                name="" id="" disabled
                                class="bg-white shadow-md 
                                w-full rounded-lg p-2" v-model="authStore.user.birthday">
                            </div>
                       </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</template>
<script setup>
import Navbar from '../../components/Navbar.vue';
import Footer from '../../components/Footer.vue';
import { useAuthStore } from '../../store/Auth.ts';
import { onMounted } from 'vue';
const authStore = useAuthStore();
const logout = async () => {
  if (window.confirm("Bạn có chắc muốn đăng xuất không?")) {
    authStore.logout(); 
    window.location.href = "/login";  
  }
};

onMounted(() => {
  const success = authStore.getUserProfile();
  //loading.value = true;
  if(!success){
    window.location.href = "/login";  
  }
});

</script>
<style scoped>
</style>