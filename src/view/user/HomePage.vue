<template>
  <navbar></navbar>
  <section class="p-8">
    <div class="header">
      <p class="italic font-light text-2xl text-black underline">Categories</p>
    </div>
    <div class="flex p-2 justify-center items-center">
        <div class="flex p-2 justify-items-center">
          <div class="w-70 h-110 rounded-xl  shadow-md p-4 border-2 justify-items-center">
            <img src="../../assets/tea.jpg" alt="shop" 
            class="rounded-full w-60 h-80"/>
            <article>
              <div class="flex justify-center p-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"/>
                </svg>
                <h3 class="text-lg font-bold text-pretty">Tea Class</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"/>
                </svg>
              </div>
              <p class="text-[14px]">Check out all our courses about tea and more!</p>
            </article>
          </div>
        </div>
        <div class="flex p-2 justify-items-center">
          <div class="w-70 h-130 rounded-xl  shadow-md p-4 border-2 justify-items-center">
            <img src="../../assets/shop.jpg" alt="shop" 
            class="rounded-full w-60 h-100 object-cover object-right"/>
            <article>
              <div class="flex justify-center items-center p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"/>
                </svg>
                <h3 class="text-lg font-bold text-pretty">Shop</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"/>
                </svg>
              </div>
              <p class="text-[14px]">Visit our shop and explore our products!</p>
            </article>
          </div>
        </div>
        <div class="flex p-2 justify-items-center">
          <div class="w-70 h-110 rounded-xl  shadow-md p-4 border-2 justify-items-center">
            <img src="../../assets/worker.jpg" alt="shop" 
            class="rounded-full w-60 h-80 object-cover object-right"/>
            <article>
              <div class="flex justify-center items-center p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"/>
                </svg>
                <h3 class="text-lg font-bold text-pretty">Workers</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"/>
                </svg>
              </div>
              <p class="text-[14px]">Meet our friendly and knowledgeable staff!</p>
            </article>
          </div>
        </div>
    </div>

    <div class="flex justify-center">
      <div class="border-b-2 border-gray-300 p-2 w-120"></div>
    </div>
  </section>


  <!-- CATEGORIES SECTIOn -->
  <section class="product p-4">
    <div class=""> 
      <p class="italic font-light text-2xl text-black underline">Categories</p>
    </div>
    <div class="p-2">
      <div class="flex items-center justify-center gap-2"> 
        <div 
          v-for="(category, index) in categories" 
          :key="category.categoryId">
          <router-link :to="{ name: 'categories', params: { id: category.categoryId, slug: slugify(category.name || 'category') } }">
            <div 
              :class="[
                'p-2 text-center rounded-xl shadow-md transition-all w-30 font-bold text-[14px] duration-300', 
                getTailwindBgClass(index)
              ]">
              <p>{{ category.name }}</p>
            </div>    
          </router-link>    
        </div>
      </div>
    </div>
  </section>

  <div class="flex justify-center">
    <div class="border-b-2 border-gray-300 p-2 w-120"></div>
  </div>

  <!-- PRODUCT SECTIOn -->
  <section class="product p-8">
    <div class="header">
      <p class="italic font-light text-2xl text-black underline">Products</p>
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
    <div class="flex items-center justify-center mt-2">
      <router-link to="/menu">
          <button class="rounded bg-[#622B14] shadow-md text-white pt-2 pb-2 px-10 flex items-center">
            See More
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
          </button>
      </router-link>  
    </div>
  </section>

  <section class="contact bg-[#978F66] py-20 p-8">
    <div class="title m-5">
        <h2 class="text-black font-bold">Freshly Brewed Tea Straight to Your Inbox</h2>
        <p class="text-black text-[14px]">Sign up to learn more about our program Brewing Confidence</p>
        <div class="w-full flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" 
              width="24" height="24" fill="black" 
              class="bi bi-cup-hot-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5"/>
            <path d="m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8"/>
        </svg>
        </div>
    </div>
    <div class="flex justify-center">
        <div class="border-b-2 border-gray-300 w-50"></div>
    </div>
        <div class="box m-5">
        <input type="email" placeholder="Enter your email"
        class="bg-white p-3 w-125 rounded-full shadow-md">
        <button  class="bg-[#622B14] p-2 w-30 text-white font-bold -ml-32
        rounded-full">Subscribe</button>
    </div>
  </section>
<Footer/>
</template>

<script setup>
import Footer from '../../components/Footer.vue';
import Navbar from '../../components/Navbar.vue'
import { formatPrice } from '../../store/Ultimate.ts';
import axios from 'axios';
import { ref, onMounted } from 'vue';
const loading = ref(false);
const products = ref();

const getMainImage = (product) =>{
    const main = product.images?.find(img => img.displayOrder == 0);
    return main ? main.imgURL : '';
}

async function fetchProducts(){
    loading.value = true;
    try {
        const response = await axios.get('http://localhost:5000/api/ProductModels/product/Top');
        products.value = response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        //window.location.replace("/error");

    } finally {
        loading.value = false;
    }
}

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

const loadingCategories = ref(false);
const categories = ref([]);
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

const cards = ref([
  { id: 'bnd_01', title: 'Existing Card A' },
  { id: 'bnd_02', title: 'Existing Card B' },
]);

// A diverse list of Tailwind background classes
const tailwindPalette = [
  'bg-red-100', 'bg-orange-100', 'bg-amber-100', 'bg-yellow-100',
  'bg-lime-100', 'bg-green-100', 'bg-emerald-100', 'bg-teal-100',
  'bg-cyan-100', 'bg-sky-100', 'bg-blue-100', 'bg-indigo-100',
  'bg-violet-100', 'bg-purple-100', 'bg-fuchsia-100', 'bg-pink-100'
];

// Cycles through the array based on the index
const getTailwindBgClass = (index) => {
  return tailwindPalette[index % tailwindPalette.length];
};

onMounted(() =>{
  fetchProducts();
  fetchCategory();
});

</script>

<style scoped>
.dynamic-card {
  /* Fallback color if the variable fails */
  background-color: #eee; 
  
  /* Binds directly to the --card-bg variable sent by Vue */
  background-color: var(--card-bg); 
  
  padding: 20px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}
</style>