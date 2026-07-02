<template>
  <Navbar/>
  <section class="p-8 min-h-screen">
    <div v-if="loading && products.length === 0" class="text-center p-12 text-gray-500 font-bold">
      Loading products...
    </div>

    <div v-else>
      <div v-if="categoryIsEmpty">
        <div class="p-8 border-b-2 border-gray-200">
          <p class="text-black text-center font-semibold mb-4">No products found in this category.</p>
          <div class="flex justify-between p-2">
            <router-link to="/menu">
              <div class="bg-[#995F2F] text-black p-2 rounded-lg shadow-md cursor-pointer flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                  <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
                <span>To menu</span>
              </div>
            </router-link>
            <router-link to="/">
              <div class="bg-[#978F66] shadow-md text-black p-2 rounded-lg flex items-center gap-2 cursor-pointer">
                <span>To Home</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
                  <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
              </div>
            </router-link>
          </div>
        </div>

        <div class="p-8">
          <div class="p-2 flex items-center gap-2 justify-center">
            <h3 class="text-lg text-black font-bold">Products you might like</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
              <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            </svg>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div v-for="product in products" :key="product.productId" class="p-2 rounded-lg hover:shadow-lg transition-shadow">
              <router-link :to="{ name: 'itemPage', params: { id: product.productId, slug: slugify(product.name) } }">
                    <!-- NOTIFY -->
                    <div class="absolute
                    flex p-1 z-10">
                        <div class="text-lg bg-[#D0311E] mr-2 flex items-center shadow-md
                        font-bold text-center rounded-lg p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            width="14" height="14" fill="white" 
                            class="bi bi-fire mr-1" viewBox="0 0 16 16">
                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
                            </svg>
                            <p class="text-white">Hot</p>
                        </div>
                    </div>
            
                    <img :src="getMainImage(product)" alt="Product image" class="rounded h-64 w-full object-cover shadow-md object-center"/>
                    <article class="p-2 text-black">
                        <h3 class="text-lg font-bold text-pretty">{{ product.name }}</h3>
                        <p class="text-[14px] text-gray-600 line-clamp-2">{{ product.description }}</p>
                        <p class="text-[14px] font-bold mt-1">{{ formatPrice(product.basePrice) }}</p>
                    </article>
                </router-link>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="!categoryIsEmpty && products.length > 0">
        <div class="border-b-2 pb-4 border-gray-200">
          <div class="p-4 flex justify-center">
            <p class="text-black font-bold text-[24px] italic">{{ products[0].categoryName }}</p>
          </div>
          <div class="bg-gray-200 rounded-md shadow-md p-3 text-left">
            <p class="text-[14px] text-black text-wrap">
              <span class="font-bold">Description:</span> {{ products[0].categoryDescription }}
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div v-for="product in products" :key="product.productId" class="p-2 rounded-lg hover:shadow-lg transition-shadow">
            <router-link :to="{ name: 'itemPage', params: { id: product.productId, slug: slugify(product.name) } }">
              <img :src="getMainImage(product)" alt="Product image" class="rounded h-64 w-full object-cover shadow-md object-center"/>
              <article class="p-2 text-black">
                <h3 class="text-lg font-bold text-pretty">{{ product.name }}</h3>
                <p class="text-[14px] text-gray-600 line-clamp-2">{{ product.description }}</p>
                <p class="text-[14px] font-bold mt-1">{{ formatPrice(product.basePrice) }}</p>
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
import Navbar from '../../components/Navbar.vue';
import Footer from '../../components/Footer.vue';
import axios from 'axios';
import { formatPrice } from '../../store/Ultimate.ts';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const loading = ref(false); 
const products = ref([]); 
const categoryIsEmpty = ref(false);
const slugify = (text) =>{
  if (!text) return 'all';
    return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

const getMainImage = (product) => {
    const main = product.images?.find(img => img.displayOrder === 0);
    return main ? main.imgURL : '';
};

async function getProductByCategory() {
    loading.value = true;
    categoryIsEmpty.value = false;
    try {
        const res = await axios.get(`http://localhost:5000/api/ProductModels/product/categories/${route.params.id}`);
        if (!res.data || res.data.length === 0) {
            categoryIsEmpty.value = true;
            console.warn("No products found for this category. Fetching top products instead.");
            await fetchTopProducts();
        } else {
            products.value = res.data;
            console.log("Fetched product:", res.data);
        }
    } catch (err) {
        console.error("Error fetching product:", err);
        categoryIsEmpty.value = true;
        await fetchTopProducts();
    } finally {
        loading.value = false;
    }
}

async function fetchTopProducts() {
    loading.value = true;
    // FIXED: Removed the categoryIsEmpty.value = false reset line from here
    try {
        const res = await axios.get(`http://localhost:5000/api/ProductModels/product/Top`);
        products.value = res.data;
        console.log("Fetched top products:", res.data);
    } catch (err) {
        console.error("Error fetching top products:", err);
    } finally {
        loading.value = false;
    }
}

onMounted(() => {
    getProductByCategory();
}); 
</script>