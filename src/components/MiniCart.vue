<template>
    <div class="w-80 bg-white p-2 text-black border-[#995F2F] border-1 rounded-lg shadow-lg">
        <div class="p-2 border-b-2 border-gray-200
        flex justify-center mx-3">
            <svg xmlns="http://www.w3.org/2000/svg" 
            width="24" height="24" fill="black" class="bi bi-basket2" viewBox="0 0 16 16">
                <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0z"/>
                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6z"/>
            </svg>
        </div>
        <div class="p-2 text-[12px]">
            <p class="text-right text-shadow-md font-bold text-[#D0311E]" @click="CleanAll">
                Clear cart?
            </p>
            <div class="grid grid-flow-col row-span-4 gap-1 items-center mb-2 shadow-md" 
            v-for="item in cartStore.cartItems"
            :key="item.variantId"
            >
                <div class="col">
                    <img src="../assets/tea.jpg" 
                    class="w-18 h-18 object-center object-cover rounded-lg"
                    alt="">
                </div>
                <div class="col-span-3 text-left align-center">
                    <p class="text-wrap text-[12px]">{{ item.name }}</p>
                    <p class="text-wrap text-[12px]">{{ item.optionContext }}</p>
                    <p class="text-wrap text-[12px] font-bold">{{ formatPrice(item.price) }}</p>
                </div>
                <div class="col-span-2 text-center">
                    <p>{{ item.quantity }}</p>
                </div>
                <div class="col-span-1 justify-center align-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#995F2F" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="p-2 text-[14px] 
        text-white font-bold flex justify-between">
            <router-link>
                <div class="bg-[#995F2F] 
                px-4 rounded-lg shadow-md">
                    <span>To Checkout</span>
                </div>
            </router-link>
            <router-link>
                <div class="bg-[#978F66] 
                px-4 rounded-lg shadow-md">
                    <span>To Menu</span>
                </div>
            </router-link>
            
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useCartStore } from '../store/Store';
import { formatPrice } from '../store/Ultimate';
const cartStore = useCartStore();


function CleanAll() {
  if (confirm(`Bạn có chắc bạn muốn xóa sản phẩm này khỏi giỏ?`)) {
    cartStore.clearCart();
  }
}

onMounted(() =>{
    cartStore.loadUserCart();
})
</script>

<style scoped>
</style>