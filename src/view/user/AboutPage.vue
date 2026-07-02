<template>
    <Navbar />
    <div class="p-8">
        <div class="text-left wrap p-8 bg-gray-200 text-black mb-2">
            <span class="font-bold">About WAO Tea Coffee</span>
            <p>ra đời năm 2017 với khát khao đưa trà Việt chất lượng cao đến với cộng đồng. Xưởng trà WAO hiện cung cấp các sản phẩm trà nguyên lá hàng đầu thị trường Việt Nam: Trà Đen Nguyên Lá WAO, Trà Xanh Lài (Nhài) WAO, và Trà Oolong Đặc Biệt WAO. WAO phân phối đến hơn 2.000 khách hàng lớn nhỏ toàn quốc và nước ngoài. WAO cung cấp giải pháp toàn diện cho khách hàng ngành F&B: dịch vụ tư vấn vận hành và setup quán, đào tạo nhân viên, và cung cấp công thức và nguyên vật liệu.</p>
        </div>
        <div class="grid grid-cols-8 gap-2 bg-gray-200 text-black">
            <div class="col-span-4 p-2 flex justify-center">
                <!-- <div class="absolute wrap bg-black/70 z-10 p-4
                text-white
                rounded-lg bottom-2">
                    <p>Address: 24 Vo thi sau street, Can Tho city.</p>
                </div> -->
                <img src="../../assets/shop.jpg" class="relative z-0 rounded-lg h-full 
                w-full object-cover object-center">
            </div>
            <div class="col-span-4 p-4">
                <div class="text-left wrap p-8 bg-gray-200 text-black mb-2">
                <span class="font-bold">
                    About WAO Tea Coffee</span>
                    <p>được thành lập vào năm 2017 bởi các chuyên gia pha chế giàu thành tích vô địch các giải đấu Barista chuyên nghiệp và nhiều năm kinh nghiệm trong ngành F&B. Trung tâm có các khóa học từ cơ bản đến nâng cao. Trực tiếp đứng lớp là đội ngũ giảng viên được đào tạo bởi Hiệp Hội Cà Phê Thế Giới SCA, có nhiều thành tích từ các giải đấu chuyên nghiệp, và nhiều kinh nghiệm làm việc và kinh doanh trong ngành F&B.</p>
                </div>
            </div>
        </div>

    </div>
    <Footer/>
</template>
<script setup>
import Navbar from '../../components/Navbar.vue'    
import Footer from '../../components/Footer.vue';
</script>

<style>
</style> 