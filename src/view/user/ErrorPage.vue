<template>
    <Navbar />
    <div class=" pt-10">
       <div class="w-full pb-12 flex justify-center">
            <div class="p-8 w-160 shadow-md 
            border-2 border-[#995F2F] rounded-lg">
                <span class="font-bold text-[64px]
                text-[#D92243] text-shadow-lg">404</span>
                <div class="text-black text-pretty pb-4 border-b-2 border-gray-300">
                    <h3 class="font-bold">There seems to be an error in our server!</h3>
                    <p class="text-[14px]">We're sorry for the inconvenient! please try again our services.</p>
                    <p class="text-[14px]">if possible please <span class="underline  cursor-pointer">report the error to our mod</span>. lol.</p>
                </div>
                <div class="flex justify-between p-2">
                    <router-link to="/menu">
                        <div class="bg-[#995F2F]
                            text-black p-2 rounded-lg shadow-md cursor-pointer 
                            flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                                <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                            </svg>
                            <span>To menu</span>
                        </div>
                    </router-link>
                    <router-link to="/profile">
                        <div class="bg-[#978F66] shadow-md
                        text-black p-2 rounded-lg flex items-center gap-2 cursor-pointer">
                            <span>To profile</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
                                <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>

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
    </div>
    <Footer/>
</template>

<script setup>
import Navbar from '../../components/Navbar.vue';
import Footer from '../../components/Footer.vue';
</script>

<style scoped>
</style>