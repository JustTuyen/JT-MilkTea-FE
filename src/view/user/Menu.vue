<template>
    <navbar></navbar>
    <section class="p-2">
        <div class="grid grid-cols-4 gap-4 p-2">
            <div class="col-span-1 bg-[#978F66] p-4 min-h-screen
            rounded-lg text-black">
                <p class="font-bold text-[18px]">Categories:</p>
                <ul class="text-left border-b-1 py-2 border-black">
                    <li class="flex items-center cursor-pointer text-[16px]
                    font-bold mb-2 gap-2" @click="selectCategory(category.categoryId)" 
                    :class="{
                    'text-[#622B14] text-[18px] border-b-2': activeCategoryId === category.categoryId,
                    'text-black hover:text-gray-600': activeCategoryId !== category.categoryId 
                    }"
                    v-for="category in categories" :key="category.categoryId"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M.11 3.187A.5.5 0 0 1 .5 3h13a.5.5 0 0 1 .488.608l-.22.991a3.001 3.001 0 0 1-1.3 5.854l-.132.59A2.5 2.5 0 0 1 9.896 13H4.104a2.5 2.5 0 0 1-2.44-1.958L.012 3.608a.5.5 0 0 1 .098-.42Zm12.574 6.288a2 2 0 0 0 .866-3.899zM1.124 4l1.516 6.825A1.5 1.5 0 0 0 4.104 12h5.792a1.5 1.5 0 0 0 1.464-1.175L12.877 4H1.123Z"/>
                        </svg>
                        <span class="" @click="SearchProductByCategoryId(category.categoryId)">
                            {{ category.name }}</span>
                    </li>
                </ul>

                <p class="font-bold text-[18px]">Tags:</p>
                <form action="" class="border-b-1 border-black pb-2">
                    <ul class="text-left py-2">
                        <li v-for="tag in tags" :key="tag.tagId" class="flex items-center cursor-pointer text-[16px]
                        font-bold mb-2 gap-2">
                        <input type="checkbox" :value="tag.tagId"> {{ tag.name }}
                        </li>
                    </ul>
                    <button class="bg-[#622B14] px-4 w-full text-white rounded-lg cursor-pointer
                    text-[14px] border-2 border-[#622B14]">
                        filter
                    </button>
                </form>
            </div>
            <div class="col-span-3 p-4 min-h-screen">
                <div class="flex justify-between items-center border-b-2 border-gray-300 pb-2">
                    <h2>MENU</h2>
                    <div class="flex">
                       <form action="" class="items-center flex" @submit.prevent="SearchProductByKeyword">
                            <input type="text" role="search" placeholder="Search products" v-model="keyword"
                            class="p-2 rounded-l-xl border-l-gray-300 cursor-pointer
                            border-y-gray-300 border-2 bg-white w-55 text-[14px]">
                            <button class="bg-[#622B14] p-3 text-white rounded-r-xl cursor-pointer
                            font-bold border-2 border-[#622B14]" 
                            type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16">
                                    <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
                                    <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"/>
                                </svg>
                            </button>
                       </form>
                    </div>
                </div>
                <div class="grid grid-cols-4 gap-4 mt-4" >
                    <!-- <div v-if="loading" class="flex justify-center items-center my-3">
                        <div class="spinner-border text-warning" role="status">
                            <span class="visually-hidden"></span>
                        </div>
                    </div>
                    <div v-else-if="products.length === 0" class="text-center">
                        <p style="font-size: 20px; color: #FA812F; font-weight: bold;">No products found in this category.</p>
                    </div> -->
                    <!-- card -->
                    <div class="p-2 shadow-md rounded-lg" v-for="product in products" 
                    :key="product.productId">
                        <router-link :to="{ name: 'itemPage', params: { id: product.productId, slug: slugify(product.name)   } }">
                            <img :src="getMainImage(product)" alt="Product image"
                            class="rounded h-40 w-35 object-cover object-center"/>
                            <article class="p-2">
                                <p class="text-[16px] font-bold text-black">
                                    {{  product.name }}
                                </p>
                                <p class="text-[14px] text-black">
                                    {{ product.description }}
                                </p>
                                <p class="text-[14px] text-black">
                                    {{ formatPrice(product.basePrice) }}
                                </p>
                            </article>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>  
    <Footer/>
</template>

<script setup>
import Navbar from '../../components/Navbar.vue'    
import axios from 'axios';
import Footer from '../../components/Footer.vue';
import { ref, onMounted, } from 'vue';
import { formatPrice } from '../../store/Ultimate.ts';
//PRODUCTS  
const loading = ref(false);  
const products = ref([]);
//CATEGORIES    
const loadingCategories = ref(false);
const categories = ref([]);
const slugify = (text) =>{
    return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

async function fetchCategory(){
    loadingCategories.value = true;
    try {
        const response = await axios.get('http://localhost:5000/api/CategoryModels');
        categories.value = response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        //window.location.replace('http://sidanmor.com');
    } finally {
        loadingCategories.value = false;
    }
}

const getMainImage = (product) =>{
    const main = product.images?.find(img => img.displayOrder == 0);
    return main ? main.imgURL : '';
}
async function fetchProducts(){
    loading.value = true;
    try {
        const response = await axios.get('http://localhost:5000/api/ProductModels/user');
        products.value = response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        //window.location.replace("/error");

    } finally {
        loading.value = false;
    }
}

//search by categoryId
const activeCategoryId = ref(null);
function selectCategory(id){
    activeCategoryId.value = id;
}
async function SearchProductByCategoryId(categoryId) {
    loading.value = true;
    try{
        const res = await axios.get(`http://localhost:5000/api/ProductModels/Product/categories/${categoryId}`)
        products.value = res.data;
    } catch(error){
        console.error('Error fetching products:', error);
        //window.location.replace("/error");

    } finally{
        loading.value = false;
    }
}

//searchBykeyword
const keyword = ref('');
async function SearchProductByKeyword() {
    if (!keyword.value.trim()) return;
    loading.value = true;
    try{
        const searchString = encodeURIComponent(keyword.value.trim());
        const res = await axios.get(`http://localhost:5000/api/ProductModels/product/search/${searchString}`);        products.value = res.data;
    } catch(error){
        console.error('Error fetching products:', error);
        //window.location.replace("/error");
    } finally{
        loading.value = false;
    }
}

//Get all tag
const tags = ref([]);
async function fetchTags(){
    loading.value = true;
    try {
        const response = await axios.get('http://localhost:5000/api/TagModels');
        tags.value = response.data;
    } catch (error) {
        console.error('Error fetching tag:', error);
        //window.location.replace("/error");

    } finally {
        loading.value = false;
    }
}

//filter through tags
// @param {Array<Number} TagIdsArray 
// async function SearchProductThroughTags(TagIdsArray) {
//         if(!TagIdsArray == null || TagIdsArray.length === 0){
//             products.value = [];
//             return
//         }

//         loading.value = true;
//         try{
//             const res = await axios.get('http://localhost:5000/api/ProductModels/product/SearchByTag',{
//                 params:{
//                     ids = TagIdsArray
//                 },
//                 paramsSerializer:{
//                     indexes: null
//                 }
//             });

//             products.value = res.data;

//         } catch(error){
//             console.error('Error filtering products by tags:', error);
//         } finally{
//             loading.value = false;
//         }
// }

onMounted(() => {
    fetchProducts();
    fetchCategory();
    fetchTags();   
}); 
</script>

<style scoped>
</style>