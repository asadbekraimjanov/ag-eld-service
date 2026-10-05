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
                    <div class="flex items-center gap-44 md:px-32">
                        <img src="/logo.png" class="w-20 opacity-85" alt="">
                        <ul class="flex gap-4 text-white pb-3">
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

                    <div class="absolute ml-60 -translate-y-1 right-56 text-white flex items-center gap-2 cursor-pointer">
                        <el-icon><PhoneFilled /></el-icon>
                        <span>(77) 966 98 12</span>
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
                <div class="text-white md:px-32 pt-[15%]">
                    <TransitionGroup name="slide-fade" appear>
                        <p key="1" class="text-6xl font-semibold mb-2">It's our pleasure to serve you</p>
                        <p key="2" class="text-[#CFA01A] text-6xl font-normal mb-6">AG ELD SERVICE</p>
                        <p key="3" class="w-1/2 text-xl mb-8">We are committed to providing reliable and professional ELD solutions
                            tailored to meet the needs of modern trucking businesses</p>
                    </TransitionGroup>
                    <Transition name="slide-btn" appear>
                        <div class="flex gap-10">
                            <a href="https://t.me/ag_eld_service" target="_blank">
                                <el-button class="!text-base !border-none !py-7 !px-5 transition-all !duration-500 !bg-[#CFA01A] !text-white hover:scale-[1.08]">
                                    <span>Contact Us</span>
                                    <el-icon class="mt-1 ml-4 text-lg"><TopRight /></el-icon>
                                </el-button>
                            </a>
                            <a href="tel:+998779669812" class="flex items-center gap-2 text-base bg-black font-medium p-4 rounded cursor-pointer transition-all duration-300 hover:bg-gray-500/50 hover:scale-[1.08]">
                                <img src="@/assets/tabler-icons/phone-call.svg" alt="Phone" />
                                <span>(77) 966 98 12</span>
                            </a>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
        <div id="services" class="via-gray-50 md:px-32 pt-20 py-32 border-t-2 border-gray-800">
            <Services />
        </div>
        <div id="about-us" class="bg-[#E9ECEF] md:px-32 py-20">
            <AboutUs />
        </div>

        <div class="via-gray-50 md:px-32 pt-20 py-32">
            <Comments />
        </div>

        <div class="bg-[#E9ECEF] pt-6 pb-10">
            <EldApps />
        </div>

        <div id="price" class="via-gray-50 md:px-32 pt-16 pb-12">
            <Price />
        </div>

        <div id="contact" class="relative mt-12 scroll-mt-20">
            <Contact />
        </div>


        <div @click.self="toggleChatBot = !toggleChatBot" class="w-14 h-14 shadow-custom shadow-yellow-600 rounded-full bg-[#CFA01A] text-white
                    fixed font-bold flex items-center justify-center right-10 top-[calc(100vh-5rem)] cursor-pointer !z-50">
            <div class="relative">
                <img @click="toggleChatBot = !toggleChatBot" class="scale-120" src="@/assets/tabler-icons/message-dots.svg" alt="">
                <div v-if="toggleChatBot" class="absolute flex flex-col w-[22rem] max-h-[26rem] min-h-60 bottom-14 -right-4 rounded-xl shadow-2xl bg-gray-50 overflow-hidden transition-all duration-700">
                    <div class="flex justify-between items-center text-white text-sm font-semibold p-4 bg-[#CFA01A]">
                        <span>CHAT BOT</span>
                        <el-icon @click="toggleChatBot = false" :size="16"><CloseBold class="hover:text-gray-500" /></el-icon>
                    </div>
                    <div id="chat-area" class="text-black p-4 font-medium text-sm flex-1 overflow-y-auto min-h-0 flex flex-col justify-between gap-4">
                        <p v-for="msg in messageList" :class="msg.type === 'RECEIVED' ? 'mr-6 rounded-br-lg' : msg.type === 'SEND' ? 'ml-6 self-end rounded-bl-lg !bg-gray-400/30' : ''"
                             v-html="msg.description" class="max-w-[80%] p-2 bg-white shadow-sm rounded-tl-lg rounded-tr-lg break-words">
                        </p>
                    </div>
                    <div v-if="clickMessage" class="w-full flex justify-between gap-3 p-4 pt-2">
                        <el-input @keydown.enter="onMessageSended" v-model="inputMessage" placeholder="Write a something.." class="!font-medium !rounded-lg" clearable />
                        <el-button @click="onMessageSended" type="primary" :loading="loadingSendBtn" class="!bg-[#CFA01A] !border-none !rounded-lg">
                            <img v-if="!loadingSendBtn" src="@/assets/tabler-icons/brand-telegram-black.svg" class="" alt="">
                        </el-button>
                    </div>
                    <div v-else class="w-full flex justify-between gap-3 p-4 pt-2">
                        <p @click="onClickTgButton" class="text-[#CFA01A] w-full text whitespace-nowrap text-center text-sm font-medium bg-white
                                border border-[#CFA01A] py-2 hover:bg-[#CFA01A] hover:text-white rounded-2xl">Telegram</p>
                        <p @click="onClickInstButton" class="text-[#CFA01A] w-full text whitespace-nowrap text-center text-sm font-medium bg-white
                                border border-[#CFA01A] py-2 hover:bg-[#CFA01A] hover:text-white rounded-2xl">Instagram</p>
                        <p @click="onClickMsgButton" class="text-[#CFA01A] w-full text whitespace-nowrap text-center text-sm font-medium bg-white
                                border border-[#CFA01A] py-2 hover:bg-[#CFA01A] hover:text-white rounded-2xl">Message</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {CloseBold, Message, PhoneFilled, Setting, TopRight} from "@element-plus/icons-vue";
import {nextTick, ref} from "vue";
import Services from "@/views/main/Services.vue";
import AboutUs from "@/views/main/AboutUs.vue";
import Price from "@/views/main/Price.vue";
import Contact from "@/views/main/Contact.vue";
import EldApps from "@/views/main/EldApps.vue";
import Comments from "@/views/main/Comments.vue";
import router from "@/router/index.js";
import * as emailjs from "@emailjs/browser";

const toggleLang = ref(false);
const toggleChatBot = ref(true)
const clickMessage = ref(false)
const inputMessage = ref(null)
const loadingSendBtn = ref(false)
const messageList = ref([
    {
        description: 'Hey there! 👋 Welcome to ELD Service. Choose an option below or send us a message.',
        type: 'RECEIVED'
    }
])


const onClickTgButton = async () => {
    messageList.value.push(
        {
            description: 'Telegram',
            type: 'SEND'
        },
        {
            description: 'You can reach us on Telegram at <a href="https://t.me/ag_eld_service" target="_blank"' +
                ' class="text-blue-500 hover:underline">@ag_eld_service.</a> We’ll be happy to assist you! 😊',
            type: 'RECEIVED'
        }
    )

    await nextTick()

    const chat = document.getElementById('chat-area')

    chat.scrollTo({
        top: chat.scrollHeight,
        behavior: 'smooth'
    })
}

const onClickInstButton = async () => {
    messageList.value.push(
        {
            description: 'Instagram',
            type: 'SEND'
        },
        {
            description: 'You can also connect with us on Instagram: 👉 <a href="https://www.instagram.com/ag_eld.group?stkn=MTVkbDc1eTg4YmJ1"' +
                ' target="_blank" class="text-blue-500 hover:underline">Visit our Instagram</a> Feel free to reach out — we’re happy to help! 😊',
            type: 'RECEIVED'
        }
    )

    await nextTick()

    const chat = document.getElementById('chat-area')

    chat.scrollTo({
        top: chat.scrollHeight,
        behavior: 'smooth'
    })
}

const onClickMsgButton = async () => {
    clickMessage.value = true
    messageList.value.push(
        {
            description: 'Send message',
            type: 'SEND'
        },
        {
            description: 'Have a <b>quick question?</b> Send us a message.<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"' +
                ' viewBox="0 0 24 24" fill="#00345B" class="icon icon-tabler icons-tabler-filled icon-tabler-message-chatbot inline-block' +
                ' align-middle ml-1"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4' +
                ' 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-2.8' +
                ' 9.286a1 1 0 0 0 -1.414 .014a2.5 2.5 0 0 1 -3.572 0a1 1 0 0 0 -1.428 1.4a4.5 4.5 0 0 0 6.428 0a1 1 0 0 0 -.014 -1.414m-5.69' +
                ' -4.286h-.01a1 1 0 1 0 0 2h.01a1 1 0 0 0 0 -2m5 0h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2" /></svg>',
            type: 'RECEIVED'
        },
        {
            description: 'Please leave your preferred contact details at the end of your message so we can get in touch with you. 😊',
            type: 'RECEIVED'
        }
    )

    await nextTick()

    const chat = document.getElementById('chat-area')

    chat.scrollTo({
        top: chat.scrollHeight,
        behavior: 'smooth'
    })
}

const onMessageSended = async () => {
    if (inputMessage.value) {

        loadingSendBtn.value = true

        try {
            await emailjs.send(
                'service_ohry5di',
                'template_jctdt1b',
                {
                    from_name: 'AG CHAT BOT',
                    from_email: 'ag.eldservice2022@gmail.com',
                    message: inputMessage.value
                },
                {
                    publicKey: 'gX6V9J-uMKcK-PuOH'
                }
            )

            messageList.value.push(
                {
                    description: inputMessage.value,
                    type: 'SEND'
                },
                {
                    description: 'We’ve received your message 💌 We’ll get back to you shortly through the contact details you provided. ✅ Thank you for reaching out! 😊',
                    type: 'RECEIVED'
                }
            )

        } catch (error) {
            console.error(error.message)
            messageList.value.push(
                {
                    description: inputMessage.value,
                    type: 'SEND'
                },
                {
                    description: 'Oops! Something went wrong. Please try again later. ⏱️',
                    type: 'RECEIVED'
                }
            )
        } finally {
            loadingSendBtn.value = false
        }

        inputMessage.value = ''
    }

    await nextTick()

    const chat = document.getElementById('chat-area')

    chat.scrollTo({
        top: chat.scrollHeight,
        behavior: 'smooth'
    })
}

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
💌✅❌
<style scoped>
:deep(.el-input__wrapper) {
    background-color: #f9fafb;
}
:deep(.el-input__wrapper.is-focus) {
    background-color: #f9fafb;
    box-shadow: 0 0 0 1px #9f9f9f inset;
}

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

.shadow-custom {
    --tw-shadow: 0 0 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)
}
</style>
