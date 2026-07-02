<template>
<div class="bg-black text-center text-white italic">
    <p class="text-sm">Hotline: 1900 9999 || Email: info@milktea.com</p>
</div>
  <nav class="shadow-md p-4 shadow-md">
    <div class="flex justify-between justify-items-center">
        <h2 class="underline">MILK TEA</h2>
        <div class="flex justify-normal items-center cursor-pointer ">
           <div class="" v-if="authStore.token">
                <p class="text-[14px] text-black">Hi, {{ authStore.user.userName }}!</p>
           </div>
           <div class="" v-else>
            <RouterLink to="/login" class="m-3 text-black text-[14px]">
                <span>Login</span>
            </RouterLink>
           </div>
            <RouterLink to="/profile" class="text-black m-3">
                <svg xmlns="http://www.w3.org/2000/svg"
                width="18" height="18" fill="currentColor" 
                class="bi bi-person-circle" 
                viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
            </RouterLink>
            <Menu as="div" class="relative inline-block text-black m-3">
                <MenuButton>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="18" height="18" 
                    class="bi bi-basket"
                    fill="currentColor" viewBox="0 0 16 16">
                        <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0z"/>
                        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6z"/>
                    </svg>
                </MenuButton>
                <transition enter-active-class="transition ease-out 
                duration-100" enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform scale-100" leave-to-class="transform opacity-0 scale-95">
                    <MenuItems class="absolute right-20 z-10 mt-1 w-55 origin-top-right">
                        <div class="py-1">
                            <MenuItem v-slot="{ active }">
                                <MiniCart/>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </transition>
            </Menu>
        </div>
    </div>
    <div class="flex second-lv justify-around mt-4 text-black items-center">
        <RouterLink class="hover:bg-gray-50 rounded-lg px-2" to="/">Home</RouterLink>
        <RouterLink class="hover:bg-gray-50 rounded-lg px-2" to="/menu">Menu</RouterLink>
        <RouterLink class="hover:bg-gray-50 rounded-lg px-2" to="/about">About</RouterLink>
        <RouterLink class="hover:bg-gray-50 rounded-lg px-2" to="/contact">Contact</RouterLink> 
    </div>
  </nav>
</template>
<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import MiniCart from './MiniCart.vue';
import { useAuthStore } from '../store/Auth.ts';
const authStore = useAuthStore();
const logout = async () => {
  if (window.confirm("Bạn có chắc muốn đăng xuất không?")) {
    authStore.logout(); 
    window.location.href = "/login";  
  }
};

</script>

<style scoped>
</style>