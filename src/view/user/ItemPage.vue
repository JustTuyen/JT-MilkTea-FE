<template>
    <Navbar/>
    <section class="p-8 border-b-2 border-gray-300">
        <div v-if="loading" class="d-flex justify-content-center align-items-center my-3">
            <div class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div v-else-if="!product" class="text-center text-muted my-5">
            Product not found.
        </div>
        <div v-else class="grid grid-cols-8 gap-4">
            <div class="col-span-4 p-4">
                <!-- Hot topics -->
                <div class="absolute 
                flex p-3 z-10">
                    <div v-if="product && product.viewCount > 1"
                    class="text-lg bg-[#D0311E] mr-2 flex items-center shadow-md
                        font-bold text-center rounded-lg p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="14" height="14" fill="white" 
                        class="bi bi-fire mr-1" viewBox="0 0 16 16">
                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
                        </svg>
                        <p class="text-white">Hot</p>
                    </div>
                    <div v-if="product && product.discountId" class="text-lg bg-[#978F66] shadow-md
                        font-bold text-center rounded-lg p-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" 
                        fill="white" class="bi bi-tag-fill mr-1" viewBox="0 0 16 16">
                            <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                        </svg>
                        <p class="text-white">Discount</p>
                    </div>
                </div>
                <!-- images -->
                <div class="relative z-0 mb-2">
                    <img v-if="product.images"
                    :src="product.images.find(img => img.displayOrder=== 0)?.imgURL" 
                    class="rounded-xl w-full h-full shadow-md
                    border-2 border-gray-300
                    object-cover object-center"
                    alt="items Image">
                    <div class="grid grid-cols-3 gap-2 mt-1">
                        <div class="col" v-for="img in [...product.images].sort((a,b) => a.displayOrder - b.displayOrder)"
                            :key="img.imageID">
                            <img :src="img.imgURL"
                            class="rounded-xl w-32 h-30 shadow-md
                            border-2 border-gray-300
                            object-cover object-center">
                        </div>
                    </div>
                </div>

                <!-- like and share -->
                <div class="relative flex justify-center gap-4 cursor-pointer">
                    <div class="flex items-center gap-2">
                        <p class="text-[14px] text-gray-600">Share:</p>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="16" height="16" fill="black" class="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                        fill="black" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="16" height="16" fill="black" 
                        class="bi bi-pinterest" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0"/>
                        </svg>
                    </div>
                    -
                    <div class="flex items-center gap-2 cursor-pointer">
                        <p class="text-[14px] text-gray-600">Like:</p>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="16" height="16" fill="red" 
                        class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
                        </svg>
                        <p class="text-[14px] text-gray-600">({{ product.likeCount }} Liked)</p>
                    </div>
                </div>
            </div>

            <div class="col-span-4 bg-gray-200 p-4 rounded-xl shadow-md">
                <!-- product info -->
                <div class="text-left p-2 mb-2 text-black">
                    <h2>{{ product.name }}</h2>
                    <p class="text-[14px]">{{ product.description }}.</p>
                    <div class="flex items-center py-2 mt-2 gap-y-2 flex-wrap">
                        <label class="font-bold">Tags:</label>
                        <div class="bg-[#978F66] text-black shadow-md font-bold
                        rounded-full px-3 py-1 text-sm ml-2 text-[14px] cursor-pointer" 
                        v-for="tag in product.tags" :key="tag.tagId">
                            #{{tag.name}}
                        </div>
                    </div>
                </div>

                <!-- discount -->
                <div v-if="product && product.discountId"
                class="text-left bg-[#E4D6A9] mb-2 rounded shadow-md">
                    <div class="bg-[#978F66] p-2 items-center
                    rounded justify-between flex ">
                        <h3>Discount Name</h3>
                        <div class="border-2 border-[#FFD400] text-yellow
                        rounded-full items-center p-1 z-1">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            width="20" height="20" fill="currentColor" 
                            class="bi bi-star-fill text-[#FFD400]" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="p-2">
                        <p>Discount description goes here.</p>
                        <span>Discount price</span>
                    </div>
                </div>

                <!-- Variation and amount -->
                <div class="text-left mb-2 pb-2 text-black">
                    <div class="p-2">
                        <label class="font-bold mr-2">Options:</label>
                        <select name="card" id="cars" class="cursor-pointer bg-white p-2 rounded-md  text-[14px]">
                            <option class="text-[14px]" value="volvo">Select Option</option>
                            <option class="text-[14px]"  v-for="variant in product.variants"
                        :key="variant.variantId" :value="variant.variantId">{{ variant.selectOptions }}
                                ||Price: 
                                {{ formatPrice(variant.variantPrice) }}</option>
                        </select>
                    </div>

                    <div class="p-2">
                        <label class="font-bold mb-2">Amount:</label>
                        <div class="relative flex items-center max-w-[9rem] shadow-xs rounded-base">
                            <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" 
                            class="text-body bg-neutral-secondary-medium box-border bg-[#622B14] text-white
                            border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary 
                            font-medium leading-5 rounded-s-base text-sm px-3 focus:outline-none h-10">
                                <svg class="w-3 h-3 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/>
                                </svg>
                            </button>
                            <input type="text" id="quantity-input" 
                            data-input-counter aria-describedby="helper-text-explanation" 
                            class="border-x-0 h-10 placeholder:text-heading text-center w-full
                            bg-neutral-secondary-medium border-default-medium py-2.5
                            placeholder:text-body" placeholder="1" required />
                            <button type="button" id="increment-button" data-input-counter-increment="quantity-input" 
                            class="text-body bg-neutral-secondary-medium box-border border 
                            border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading bg-[#622B14] text-white
                            focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-e-base 
                            text-sm px-3 focus:outline-none h-10">
                                <svg class="w-3 h-3 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- pricing -->
                <div class="text-left text-black flex items-center border-b-2 border-gray-300 py-4 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
                        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                    <label class="ml-2 text-lg font-bold">Total Price: {{formatPrice(product.basePrice)}}</label>
                </div>

                <!-- buttons -->
                <div class="text-left flex items-center py-4 mb-2">
                    <button class="rounded-lg bg-[#995F2F] text-white font-bold shadow-md 
                    px-4 py-2 w-full">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </section>
    
    <section class="p-8 border-b-2 border-gray-300">
        <!-- leaving comment -->
        <div class="bg-gray-200 text-black p-4 rounded-xl mb-4 text-center shadow-md">
            <div class="flex justify-center mb-4 items-center">
                <h3 class="underline font-bold text-lg">Leave your reviews</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                    fill="black" class="bi bi-chat-quote ml-1" viewBox="0 0 16 16">
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
                    <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
                </svg>
            </div>
            <div class="mb-2">
                <label class="text-[14px]">Rating: </label>
                <div class="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#978F66"
                     class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    
                </div>
            </div>

             <div class="mb-2 px-8">
                <label class="text-[14px]">Comment: </label>
                <textarea class="w-full p-2 rounded-lg border-2 border-gray-300" 
                rows="4" placeholder="Write your comment here..."></textarea>
             </div>
            <button class="bg-[#995F2F] text-white font-bold px-4 py-2 mt-2 rounded shadow-md">
                Submit Comment
            </button>
        </div>

        <!-- listing comment -->
        <div class="flex flex-nowrap gap-4 overflow-x-auto pb-4 scrollbar-thin">
            <div class="bg-gray-200 w-72 p-4 rounded-xl shrink-0 shadow-md">
                <div class="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" 
                    fill="black" class="bi bi-person-circle mr-2" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                    </svg>
                    <p class="font-bold text-black text-[18px]">Username</p>
                </div>
                <div class="pb-2 flex items-center text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" 
                    fill="#978F66" class="bi bi-clock" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                    </svg>
                </div>
                <div class="pb-2 flex items-center border-b-2 border-gray-300 text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" 
                    height="18" fill="#978F66" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                </div>
                <div class="pb-2 wrap text-left">
                    <p class="text-black text-[14px]">This is a sample comment.</p>
                </div>
            </div>
             
        </div>
    </section>

    <section class="p-8">
        <div class="header text-left">
            <h2>Products you might like:</h2>
        </div>
    </section>

</template>
<script setup>
import { ref, onMounted, watch } from 'vue';
import Navbar from '../../components/Navbar.vue'
import { formatPrice } from '../../store/Ultimate.ts';
import axios from 'axios';
import { useRoute } from 'vue-router';
const route = useRoute();
const loading = ref(true);
const product = ref(null);

async function getProduct(){
    loading.value = true;
    try{
        const res = await axios.get(`http://localhost:5000/api/ProductModels/product/${route.params.id}`)
        product.value = res.data;
        //console.log("Fetched product:", res.data);
    } catch(err){
        console.error("Error fetching product:", err);
        window.location.replace("https://stackoverflow.com");

    } finally{
        loading.value = false;
    }
}
onMounted(() =>{
    getProduct();
});

watch(() => route.params.id, getProduct);

</script>

<style scoped>
</style>