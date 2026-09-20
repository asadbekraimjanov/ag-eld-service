<template>
    <div class="relative">
        <div class="relative min-h-screen shadow-lg">
            <div class="absolute inset-0 z-0">
<!--                <img class="absolute w-full h-full object-cover" src="@/assets/images/main2.jpg" alt="">-->
                <video class="absolute w-full h-full object-cover" src="/new2.mp4" autoplay muted loop></video>
                <div class="absolute inset-0 bg-black/70"></div>
            </div>

            <div class="relative z-20 py-8">
                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-44 px-32">
                        <img src="/logo.png" class="w-20 opacity-85" alt="">
                        <ul class="flex gap-4 text-white pb-3">
                            <li class="hover:text-gray-400 cursor-pointer">Services</li>
                            <li class="hover:text-gray-400 cursor-pointer">About</li>
                            <li class="hover:text-gray-400 cursor-pointer">Price</li>
                            <li class="hover:text-gray-400 cursor-pointer">Contact Us</li>
                        </ul>
                    </div>

                    <div class="absolute ml-60 -translate-y-1 right-56 text-white flex items-center gap-2 cursor-pointer">
                        <el-icon><PhoneFilled /></el-icon>
                        <span>(94) 077 22 00</span>
                    </div>

                    <div @click="toggleLang = !toggleLang"
                         class="flex items-center justify-center bg-yellow-500 p-3 rounded-bl-xl rounded-tl-xl">
                        <el-icon :size="22" class="transition-transform duration-500 cursor-pointer"
                                 :class="toggleLang ? '-rotate-180' : 'rotate-0'">
                            <Setting />
                        </el-icon>

                        <div v-if="toggleLang" class="transition-all px-2 flex gap-2 items-center">
                            <span class="cursor-pointer">Uz</span>
                            <span class="cursor-pointer">En</span>
                        </div>
                    </div>
                </div>
                <div class="text-white px-32 pt-60">
                    <TransitionGroup name="slide-fade" appear>
                        <p key="1" class="text-6xl font-semibold mb-2">It's our pleasure to serve you</p>
                        <p key="2" class="text-[#CFA01A] text-6xl font-normal mb-6">AG ELD SERVICE</p>
                        <p key="3" class="w-1/2 text-xl mb-8">We are committed to providing reliable and professional ELD solutions
                            tailored to meet the needs of modern trucking businesses</p>
                    </TransitionGroup>
                    <Transition name="slide-btn" appear>
                        <div class="flex gap-10">
                            <el-button class="!text-xl !border-none !py-7 !px-5 transition-all !duration-500 !bg-[#CFA01A] !text-white hover:scale-[1.08]">
                                <span>Get Started</span>
                                <el-icon class="mt-1 ml-4 text-lg"><Right /></el-icon>
                            </el-button>
                            <a href="tel:+998940772200" class="flex items-center gap-2 bg-black font-semibold p-4 rounded cursor-pointer transition-all duration-300 hover:bg-gray-500/50 hover:scale-[1.08]">
                                <img src="@/assets/tabler-icons/phone-call.svg" alt="Phone" />
                                <span>(94) 077 22 00</span>
                            </a>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
        <div class="via-gray-50 px-32 pt-20 py-32 border-t-2 border-gray-800">
            <Services />
        </div>
        <div class="bg-[#E9ECEF] px-32 py-20">
            <AboutUs />
        </div>
        <div class="via-gray-50 px-32 py-16">
            <Price />
        </div>
        <div class="relative min-h-[680px] mt-12">
            <Contact />
        </div>

        <div class="w-14 h-14 rounded-full bg-[#CFA01A] text-white fixed font-bold flex items-center justify-center right-10 top-[calc(100vh-5rem)]">
            <img class="scale-120" src="@/assets/tabler-icons/message-dots.svg" alt="">
        </div>
    </div>
</template>
<script setup>
import {PhoneFilled, Right, Setting} from "@element-plus/icons-vue";
import {ref} from "vue";
import Services from "@/views/main/Services.vue";
import AboutUs from "@/views/main/AboutUs.vue";
import Price from "@/views/main/Price.vue";
import Contact from "@/views/main/Contact.vue";

const toggleLang = ref(false);
</script>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.9s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(40px);
    opacity: 0;
}

.slide-btn-enter-active {
    transition: all 1.2s ease-out;
}

.slide-btn-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-btn-enter-from,
.slide-btn-leave-to {
    transform: translateY(100px);
    opacity: 0;
}
</style>
