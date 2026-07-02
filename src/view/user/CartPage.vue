<template>
    <Navbar/>
    <div class="h-screen p-8">
        <div class="grid grid-cols-3 gap-4 text-black
        p-2">
            <div class="col-span-2 bg-gray-300">
                <div class="header text-left flex gap-2 items-center p-2">
                    <span class="text-[18px]
                    font-bold">Your Cart</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18"
                     height="18" fill="black" class="bi bi-cart-fill" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>
                </div>
                <div class="p-2">
                    <div class="border items-center grid 
                    grid-cols-6 gap-1 text-[14px]">
                        <img src="../../assets/logo.png" 
                        class="h-25 w-25 object-cover 
                        object-center rounded-lg">
                        <div class="p-2">
                            <p>Item name</p>
                        </div>
                         <div class="p-2">
                            <p>Item option</p>
                        </div>
                         <div class="p-2">
                            <p>Item amount</p>
                        </div>
                         <div class="p-2">
                            <p>Item price</p>
                        </div>
                        <div class="p-2 text-center">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- buttons -->
                <div class="p-2 flex justify-left text-[14px]">
                    <router-link to="/menu">
                        <div class="bg-[#E4D6A9]
                            text-black p-2 rounded-lg shadow-md cursor-pointer flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                                <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                            </svg>
                            <span>To menu</span>
                        </div>
                    </router-link>
                </div>
            </div>

            <!-- information -->
            <div class="col-span-1 bg-gray-300">
                <div class="gap-2 p-2 border-b-2 mx-4">
                    <P class="text-[18px] font-bold">
                        General information
                    </p>
                </div>
                <div class="p-2 pb-15">
                    <div class="flex gap-4
                    text-[18px]">
                        <span>Total:</span>
                        <p>0.000000$</p>
                    </div>
                    <div class="flex gap-4 font-bold
                    text-[20px]">
                        <span>Bill:</span>
                        <p>0.000000$</p>
                    </div>
                </div>
                <div class="p-2">
                    <router-link to="/order">
                    <button class="bg-[#622B14] p-2 gap-2 cursor-pointer
                    rounded-lg w-full
                    text-white font-bold text-[18px]"
                    type="button">
                        TO CHECKOUT
                    </button>
                    </router-link>
                </div>
            </div>
        </div>
        
    </div>
    <Footer/>
</template>
<script setup>
import Navbar from '../../components/Navbar.vue';
import Footer from '../../components/Footer.vue';
</script>
<style scoped>
</style>