<template>
    <section class="relative isolate">
        <img src="@/assets/images/truck_footer.png" alt="" class="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div class="absolute inset-0 -z-10 bg-black/70"></div>
        <div class="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-10 px-5 py-16 text-white sm:px-8 sm:py-20 lg:flex-row lg:gap-12 lg:px-12 xl:px-16">
            <div class="flex w-full justify-center lg:w-[58%]">
                <MapAmerica class="h-auto w-full max-w-[650px]" />
            </div>
            <div class="w-full max-w-[600px] text-center lg:w-[42%] lg:max-w-none lg:pl-6 lg:text-left">
                <p class="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl xl:text-[42px]">
                    Empowering over
                    <span class="text-[#dba53f]">500+</span>
                    trucking companies to enhance operational efficiency
                </p>
            </div>
        </div>
    </section>
    <div class="flex justify-center -translate-y-14 ">
        <div class="w-2/3 bg-[#212529] text-white px-8 py-10 rounded-lg shadow-xl">
            <div class="w-full flex">
                <div class="w-full">
                    <p class="text-2xl mb-6">Services</p>
                    <p v-for="item in services" class="text-sm text-[#adb5bd] mb-3">{{ item }}</p>
                </div>
                <div class="w-full">
                    <p class="text-2xl mb-6">Contact Us</p>
                    <a href="" class="w-max flex items-center gap-2 text-sm text-[#adb5bd] mb-3 hover:text-white font-medium border-b border-transparent hover:border-white pb-1">
                        <span>Telegram</span>
                    </a>
                    <a href="" class="w-max flex items-center gap-2 text-sm text-[#adb5bd] mb-3 hover:text-white font-medium border-b border-transparent hover:border-white pb-1">
                        <span>Instagram</span>
                    </a>
                    <a href="" class="w-max flex items-center gap-2 text-sm text-[#adb5bd] mb-3 hover:text-white font-medium border-b border-transparent hover:border-white pb-1">
                        <span>Whats App</span>
                    </a>
                    <a href="" class="w-max flex items-center gap-2 text-sm text-[#adb5bd] mb-3 hover:text-white font-medium border-b border-transparent hover:border-white pb-1">
                        <span>Facebook</span>
                    </a>
                </div>
                <div class="w-full">
                    <p class="text-2xl mb-6">Support</p>
                    <a href="tel:+998779669812" class="w-max flex items-center gap-3 support">
                        <p class="w-10 h-10 support-child rounded-full flex justify-center items-end">
                            <PhoneFilled />
                        </p>
                        <p class="text-sm text-[#adb5bd]">(77) 966 98 12</p>
                    </a>
                    <p class="text-2xl my-6">Follow on</p>
                    <div class="w-max flex gap-4">
                        <a href="https://t.me/USA_truckers_eld_service" target="_blank" class="w-max flex items-center gap-3">
                            <p class="w-10 h-10 rounded-full flex justify-center items-center border border-gray-500/30 hover:border-white">
                                <img src="@/assets/tabler-icons/brand-telegram.svg" class="w-[1.2rem]" alt="">
                            </p>
                        </a>
                        <a href="https://t.me/eld_usa_truckers_owner" target="_blank" class="w-max flex items-center gap-3">
                            <p class="w-10 h-10 rounded-full flex justify-center items-center border border-gray-500/30 hover:border-white">
                                <img src="@/assets/tabler-icons/brand-telegram.svg" class="w-[1.2rem]" alt="">
                            </p>
                        </a>
                        <a href="https://www.facebook.com/share/1bQ3N3mMi2/" target="_blank" class="w-max flex items-center gap-3">
                            <p class="w-10 h-10 rounded-full flex justify-center items-center border border-gray-500/30 hover:border-white">
                                <img src="@/assets/tabler-icons/brand-facebook.svg" class="w-[1.2rem]" alt="">
                            </p>
                        </a>
                        <a href="https://www.instagram.com/ag_eld.group?stkn=MTVkbDc1eTg4YmJ1" target="_blank" class="w-max flex items-center gap-3">
                            <p class="w-10 h-10 rounded-full flex justify-center items-center border border-gray-500/30 hover:border-white">
                                <img src="@/assets/tabler-icons/brand-instagram.svg" class="w-[1.5rem]" alt="">
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <el-divider class="!border-[#adb5bd]/20" />
            <div class="flex justify-between items-center">
                <p class="text-sm text-[#adb5bd]">© Copyright 2026 AG ELD Service</p>
                <ul class="flex text-sm gap-4 text-white pb-3">
                    <li @click.prevent="scrollToSection('services')"
                        class="hover:text-gray-400 cursor-pointer">Services</li>
                    <li @click.prevent="scrollToSection('about-us')"
                        class="hover:text-gray-400 cursor-pointer">About</li>
                    <li @click.prevent="scrollToSection('price')"
                        class="hover:text-gray-400 cursor-pointer">Price</li>
                    <li @click.prevent="scrollToSection('contact')"
                        class="hover:text-gray-400 cursor-pointer">Contact Us</li>
                    <li @click="router.push({name: 'AuditService'})"
                        class="hover:text-gray-400 cursor-pointer ml-4">
                        <div class="flex gap-1 items-center">
                            <span>Audit</span>
                            <el-icon class="!p-0"><TopRight /></el-icon>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import MapAmerica from '@/components/MapAmerica.vue'
import {ref} from "vue";
import {TopRight} from "@element-plus/icons-vue";
import PhoneFilled from "@/assets/custom-icons/PhoneFilled.vue";
import router from "@/router/index.js";


const services = ref(['Safety Audit', 'Monitoring', '24/7 ELD Support', 'Consulting Service', 'Profile & Form Corrections', 'Driver Education', 'IFTA Reporting'])

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        })
    }
}
</script>

<style scoped>
.support:hover .support-child {
    border: 1px solid;
}
</style>