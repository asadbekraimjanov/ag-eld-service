<template>
    <div>
        <div class="relative min-h-screen shadow-lg">
            <div class="absolute inset-0 z-0">
<!--                <img class="absolute w-full h-full object-cover" src="@/assets/images/main2.jpg" alt="">-->
                <video class="absolute w-full h-full object-cover" src="/istockphoto-1443871954-640_adpp_is.mp4" autoplay muted loop></video>
                <div class="absolute inset-0 bg-black/80"></div>
            </div>

            <div class="relative z-20 py-8">
                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-44 px-32">
                        <img src="/logo.png" class="w-20 opacity-85" alt="">
                        <ul class="flex gap-4 text-white pb-3">
                            <li class="hover:text-gray-400 cursor-pointer">Services</li>
                            <li class="hover:text-gray-400 cursor-pointer">About</li>
                            <li class="hover:text-gray-400 cursor-pointer">FAQs</li>
                            <li class="hover:text-gray-400 cursor-pointer">Contact Us</li>
                        </ul>
                    </div>

                    <div class="absolute ml-60 -translate-y-1 right-56 text-white flex items-center gap-2">
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
                            <el-button class="!text-xl !border-none !py-7 !px-5 transition-all !bg-[#CFA01A] !text-white hover:scale-[1.08]">
                                <span>Get Started</span>
                                <el-icon class="mt-1 ml-4 text-lg"><Right /></el-icon>
                            </el-button>
                            <div class="flex items-center gap-2 bg-black font-semibold p-4 rounded">
                                <img src="@/assets/tabler-icons/phone-call.svg" alt="">
                                <span>(94) 077 22 00</span>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
        <div class="via-gray-50 px-32 py-16 border-t-2 border-gray-800">
            <p class="text-[#CFA01A] font-medium text-3xl text-center">What we offer</p>
            <div class="flex justify-center gap-[4%] flex-wrap">
                <div class="flex justify-between items-center w-full mt-14">
                    <div class="w-[43%]">
                        <p class="text-3xl font-bold text-gray-800">Safety Audit</p>
                        <p class="mt-4 text-gray-600">
                            Our Safety Audit service is designed to help trucking companies maintain high standards of safety, compliance, and operational efficiency. We carefully review driver records, ELD logs, vehicle documentation, and other essential safety information to identify potential issues before they become serious violations.
                            <br><br>
                            Our experienced team provides a detailed assessment of your current compliance status and helps you understand areas that may require attention. With proactive monitoring and professional support, we help reduce compliance risks, improve safety performance, and keep your fleet prepared for inspections and audits.
                            <br><br>
                            <span class="text-blue-950 font-medium">Your safety and compliance are our priority.</span>
                        </p>
                    </div>
                    <img src="@/assets/images/safety%20audit.jpg" class="w-[50%] h-80" alt="">
                </div>
                <div class="flex justify-between items-center w-full mt-20">
                    <img src="@/assets/images/monitoring.png" class="w-[50%] h-80" alt="">
                    <div class="w-[43%]">
                        <p class="text-3xl font-bold text-gray-800">Monitoring</p>
                        <p class="mt-4 text-gray-600">
                            Our Monitoring Service is designed to provide trucking companies with continuous oversight of their fleet and driver activities. We monitor ELD data, driver logs, hours-of-service (HOS) information, and other important compliance indicators to help identify potential issues before they become serious violations. ELDs are designed to automatically record key information such as driving time, duty status, vehicle movement, and engine hours.
                            <br><br>
                            Our team reviews available data, identifies irregularities, and provides timely support when attention is required. This proactive approach helps companies maintain accurate records, improve operational efficiency, reduce compliance risks, and stay prepared for inspections and regulatory reviews.
                            <br><br>
                            With reliable monitoring and professional support, you can focus on managing your business while we help keep your fleet organized, compliant, and operating smoothly.
                            <br><br>
                            <span class="text-[#CFA01A] font-medium">Continuous Monitoring. Reliable Support. Better Fleet Management.</span>
                        </p>
                    </div>
                </div>
                <div class="flex justify-between items-center w-full mt-20">
                    <div class="w-[43%]">
                        <p class="text-3xl font-bold text-gray-800">24/7 ELD Support</p>
                        <p class="mt-4 text-gray-600">
                            Our 24/7 ELD Support service provides continuous assistance whenever you need it. Our experienced support team is available around the clock to help with ELD issues, logbook errors, device connectivity, driver questions, and other technical or compliance-related concerns.
                            <br><br>
                            We understand that trucking operations never stop, which is why our team is ready to respond quickly and help minimize downtime. Whether you need assistance with an ELD device, troubleshooting, account settings, or understanding your logs, we are here to provide reliable guidance and practical solutions.
                            <br><br>
                            <span class="text-blue-950 font-medium">24/7 Availability. Fast Assistance. Reliable ELD Support.</span>
                        </p>
                    </div>
                    <img src="@/assets/images/only%20support.jpg" class="w-[50%] h-96" alt="">
                </div>
                <div class="flex justify-between items-center w-full mt-20">
                    <img src="@/assets/images/consulting.jpg" class="w-[50%] h-96" alt="">
                    <div class="w-[43%]">
                        <p class="text-3xl font-bold text-gray-800">Consulting Service</p>
                        <p class="mt-4 text-gray-600">
                            Our Consulting Service provides professional guidance to help trucking companies improve their ELD management, compliance, safety, and overall operational efficiency. We assess your current processes, identify potential risks and areas for improvement, and provide practical recommendations tailored to your business.
                            <br><br>
                            Our team helps you better understand ELD requirements, driver logs, HOS compliance, safety procedures, and other important aspects of fleet management. Whether you are starting a new trucking operation or looking to improve an existing one, we provide clear guidance and ongoing support to help you make informed decisions.
                            <br><br>
                            With the right strategy and professional advice, you can reduce compliance risks, improve fleet performance, and operate your business with greater confidence.
                            <br><br>
                            <span class="text-[#CFA01A] font-medium">Professional Guidance. Smarter Decisions. Better Results.</span>
                        </p>
                    </div>
                </div>
                <div class="flex justify-between items-center w-full mt-20">
                    <div class="w-[43%]">
                        <p class="text-3xl font-bold text-gray-800">Fixing Profile Forms</p>
                        <p class="mt-4 text-gray-600">
                            Our Profile & Form Corrections service helps drivers and trucking companies keep their records accurate and up to date. We review profiles and forms, identify incorrect or missing information, and assist with the necessary corrections.
                            <ul class="text-gray-600 mt-2">
                                <li class="ml-4"><el-icon><CaretRight class="text-blue-900" /></el-icon> Driver profile updates</li>
                                <li class="ml-4"><el-icon><CaretRight class="text-blue-900" /></el-icon> Company information corrections</li>
                                <li class="ml-4"><el-icon><CaretRight class="text-blue-900" /></el-icon> ELD account adjustments</li>
                                <li class="ml-4"><el-icon><CaretRight class="text-blue-900" /></el-icon> Form and document corrections</li>
                                <li class="ml-4"><el-icon><CaretRight class="text-blue-900" /></el-icon> Compliance documentation support</li>
                            </ul>
                            <br>
                            <span class="text-blue-950 font-medium">24/7 Availability. Fast Assistance. Reliable ELD Support.</span>
                        </p>
                    </div>
                    <img src="@/assets/images/fixing.jpg" class="w-[50%] h-96" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {ArrowRight, BottomRight, CaretRight, PhoneFilled, Right, Setting} from "@element-plus/icons-vue";
import {ref} from "vue";

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
