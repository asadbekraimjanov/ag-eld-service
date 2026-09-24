<template>
    <section>
        <!-- Title -->
        <h2 class="text-4xl text-gray-800 text-center font-semibold">
            What
            <span class="text-[#CFA01A]">Our Clients</span>
            Say
        </h2>

        <!-- Carousel -->
        <div class="relative w-full mx-auto mt-16">

            <!-- Viewport -->
            <div
                ref="carouselRef"
                class="overflow-hidden"
            >
                <!-- Track -->
                <div
                    class="flex gap-6"
                    :class="{
                        'transition-transform duration-500 ease-in-out':
                            isTransitioning
                    }"
                    :style="{
                        transform: `translateX(-${translateX}px)`
                    }"
                    @transitionend="handleTransitionEnd"
                >
                    <article
                        v-for="testimonial in carouselTestimonials"
                        :key="testimonial.key"
                        class="shrink-0 w-[30rem]
                               bg-[#E9ECEF] rounded-lg p-7
                               flex flex-col
                               shadow-sm hover:shadow-lg
                               transition-all duration-300"
                    >
                        <!-- User -->
                        <div class="flex items-center gap-4">
                            <img
                                :src="testimonial.image"
                                :alt="testimonial.name"
                                class="w-14 h-14 rounded-full object-cover"
                            />

                            <div>
                                <h3 class="text-lg font-semibold text-gray-800">
                                    {{ testimonial.name }}
                                </h3>

                                <p
                                    class="text-[#2B69ED] font-medium text-xs tracking-wide"
                                >
                                    {{ testimonial.position }}
                                </p>
                            </div>
                        </div>

                        <!-- Comment -->
                        <p
                            class="mt-7 text-gray-500 text-xl leading-9 flex-1"
                        >
                            {{ testimonial.text }}
                        </p>

                        <!-- Rating -->
                        <div class="flex gap-1.5 mt-6">
                            <StarRate
                                v-for="star in testimonial.rating"
                                :key="star"
                            />
                        </div>
                    </article>
                </div>
            </div>

            <!-- Pagination -->
            <div class="flex items-center justify-center gap-6 mt-10">

                <!-- Previous -->
                <button
                    @click="prev"
                    class="w-10 h-10 flex items-center justify-center
                           rounded-full border border-gray-300
                           text-gray-600
                           hover:bg-[#CFA01A]
                           hover:border-[#CFA01A]
                           hover:text-white
                           active:scale-95
                           transition-all duration-300"
                    aria-label="Previous testimonial"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="w-4 h-4"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                    </svg>
                </button>

                <!-- Page -->
                <div class="flex items-center gap-2">
                    <span class="font-medium text-lg text-gray-800">
                        {{ currentPage }}
                    </span>

                    <span class="font-medium text-lg text-gray-400">
                        /
                    </span>

                    <span class="font-medium text-lg text-gray-500">
                        {{ testimonials.length }}
                    </span>
                </div>

                <!-- Next -->
                <button
                    @click="next"
                    class="w-10 h-10 flex items-center justify-center
                           rounded-full border border-gray-300
                           text-gray-600
                           hover:bg-[#CFA01A]
                           hover:border-[#CFA01A]
                           hover:text-white
                           active:scale-95
                           transition-all duration-300"
                    aria-label="Next testimonial"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="w-4 h-4"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>

            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref } from "vue";
import StarRate from "@/assets/custom-icons/StarRate.vue";

const testimonials = [
    {
        id: 1,
        name: "Michael Sandhagen",
        position: "LOGISTICS",
        image: new URL("@/assets/images/usa.png", import.meta.url).href,
        rating: 5,
        text: "Been working with AG ELD and the support has been great. Always quick to respond when we need help.",
    },
    {
        id: 2,
        name: "Carlos Ramirez",
        position: "LOGISTICS",
        image: new URL("@/assets/images/mx.png", import.meta.url).href,
        rating: 5,
        text: "Great service and very helpful team. They always respond quickly when we need assistance.",
    },
    {
        id: 3,
        name: "Mohammed Ali",
        position: "LOGISTICS",
        image: new URL("@/assets/images/sa.png", import.meta.url).href,
        rating: 5,
        text: "Very good service. Professional team and always ready to help.",
    },
    {
        id: 5,
        name: "Andrew Petrov",
        position: "LOGISTICS",
        image: new URL("@/assets/images/ru.png", import.meta.url).href,
        rating: 5,
        text: "Good service and easy communication. The support team is always helpful.",
    },
    {
        id: 6,
        name: "Ahmed Hassan",
        position: "LOGISTICS",
        image: new URL("@/assets/images/eg.png", import.meta.url).href,
        rating: 5,
        text: "Very happy with the service. Quick response and professional support.",
    },
    {
        id: 7,
        name: "Javier Garcia",
        position: "LOGISTICS",
        image: new URL("@/assets/images/sp.png", import.meta.url).href,
        rating: 5,
        text: "Really good experience with AG ELD. The team is responsive and helpful.",
    },
    {
        id: 8,
        name: "Daniel Kim",
        position: "LOGISTICS",
        image: new URL("@/assets/images/kr.png", import.meta.url).href,
        rating: 5,
        text: "Good ELD service and great customer support. Appreciate the quick response.",
    },
    {
        id: 9,
        name: "Raj Patel",
        position: "LOGISTICS",
        image: new URL("@/assets/images/usa.png", import.meta.url).href,
        rating: 5,
        text: "Very reliable service. AG ELD team is always available when we need help.",
    },
    {
        id: 10,
        name: "Miguel Santos",
        position: "LOGISTICS",
        image: new URL("@/assets/images/usa.png", import.meta.url).href,
        rating: 5,
        text: "Good people to work with. They always help us when something comes up.",
    },
    {
        id: 11,
        name: "Dimitri Ivanov",
        position: "LOGISTICS",
        image: new URL("@/assets/images/usa.png", import.meta.url).href,
        rating: 5,
        text: "Good service and professional support. Everything has been smooth so far.",
    },
    {
        id: 12,
        name: "Ali Reza",
        position: "LOGISTICS",
        image: new URL("@/assets/images/usa.png", import.meta.url).href,
        rating: 5,
        text: "AG ELD has been very helpful. Good communication and quick support.",
    },
    {
        id: 13,
        name: "Omar Abdullah",
        position: "LOGISTICS",
        image: new URL("@/assets/images/usa.png", import.meta.url).href,
        rating: 5,
        text: "Great customer service. They take care of our questions quickly.",
    },
    {
        id: 14,
        name: "Vladimir Nikolaev",
        position: "LOGISTICS",
        image: new URL("@/assets/images/usa.png", import.meta.url).href,
        rating: 5,
        text: "Solid service and very responsive team. Happy with the support.",
    },
    {
        id: 15,
        name: "Marcus Johnson",
        position: "LOGISTICS",
        image: new URL("@/assets/images/usa.png", import.meta.url).href,
        rating: 5,
        text: "Good service, fair price, and quick support. Appreciate these guys.",
    },
    {
        id: 16,
        name: "Andrew Williams",
        position: "LOGISTICS",
        image: new URL("@/assets/images/usa.png", import.meta.url).href,
        rating: 5,
        text: "Been using AG ELD for a while. Everything has been going well.",
    },
    {
        id: 17,
        name: "Azizbek Karimov",
        position: "LOGISTICS",
        image: new URL("@/assets/images/usa.png", import.meta.url).href,
        rating: 5,
        text: "AG ELD bilan ishlash juda qulay. Support jamoasi tez javob beradi va doim yordam berishga harakat qiladi.",
    },
    {
        id: 18,
        name: "Jamshid Rahmonov",
        position: "LOGISTICS",
        image: new URL("@/assets/images/usa.png", import.meta.url).href,
        rating: 5,
        text: "Xizmatdan mamnunman. Muammo bo‘lsa, tezda yordam berishadi. Professional jamoa.",
    },
    {
        id: 19,
        name: "Bekzod Abdullayev",
        position: "LOGISTICS",
        image: new URL("@/assets/images/usa.png", import.meta.url).href,
        rating: 5,
        text: "AG ELD yaxshi service beradi. Driverlar bilan bog‘liq masalalarda ham tez yordam berishadi.",
    },
    {
        id: 20,
        name: "Sherzod Ismoilov",
        position: "LOGISTICS",
        image: new URL("@/assets/images/usa.png", import.meta.url).href,
        rating: 5,
        text: "Good service and good communication. AG ELD team is always ready to help.",
    },
    {
        id: 21,
        name: "Farruh Aliyev",
        position: "LOGISTICS",
        image: new URL("@/assets/images/usa.png", import.meta.url).href,
        rating: 5,
        text: "Jamoa juda responsive. ELD bo‘yicha savol bo‘lsa, tezda javob olish mumkin.",
    },
    {
        id: 22,
        name: "Rustam Yusupov",
        position: "LOGISTICS",
        image: new URL("@/assets/images/usa.png", import.meta.url).href,
        rating: 5,
        text: "AG ELD bilan ishlash yaxshi tajriba bo‘ldi. Supportlari menga yoqadi.",
    },
    {
        id: 23,
        name: "Nodir Kholmatov",
        position: "LOGISTICS",
        image: new URL("@/assets/images/usa.png", import.meta.url).href,
        rating: 5,
        text: "Reliable service and quick support. Definitely appreciate the AG ELD team.",
    },
    {
        id: 24,
        name: "Timur Sattorov",
        position: "LOGISTICS",
        image: new URL("@/assets/images/usa.png", import.meta.url).href,
        rating: 5,
        text: "Good ELD service. Everything is explained clearly and support is always available.",
    },
    {
        id: 25,
        name: "Mike Thompson",
        position: "LOGISTICS",
        image: new URL("@/assets/images/usa.png", import.meta.url).href,
        rating: 5,
        text: "AG ELD has been reliable for us. Good communication and no unnecessary headaches.",
    },
    {
        id: 26,
        name: "Robert Martinez",
        position: "LOGISTICS",
        image: new URL("@/assets/images/usa.png", import.meta.url).href,
        rating: 5,
        text: "Really appreciate the support. They always get back to us quickly.",
    },
    {
        id: 27,
        name: "David Chen",
        position: "LOGISTICS",
        image: new URL("@/assets/images/usa.png", import.meta.url).href,
        rating: 5,
        text: "Professional team and good customer service. Very responsive.",
    },
    {
        id: 28,
        name: "Samuel Williams",
        position: "LOGISTICS",
        image: new URL("@/assets/images/usa.png", import.meta.url).href,
        rating: 5,
        text: "Great support from AG ELD. They actually answer when you need them.",
    },
    {
        id: 29,
        name: "Mohammad Khan",
        position: "LOGISTICS",
        image: new URL("@/assets/images/usa.png", import.meta.url).href,
        rating: 5,
        text: "Very helpful team. Good service and quick response every time.",
    },
    {
        id: 30,
        name: "Alexander Petrov",
        position: "LOGISTICS",
        image: new URL("@/assets/images/usa.png", import.meta.url).href,
        rating: 5,
        text: "Good ELD company to work with. Professional and responsive support.",
    },
]


const carouselRef = ref(null);

const currentIndex = ref(0);
const containerWidth = ref(0);
const isTransitioning = ref(true);

const CARD_WIDTH = 480;
const GAP = 24;
const stepWidth = CARD_WIDTH + GAP;

/*
 * Oxiriga kelganda boshidagi cardlar davom etishi uchun
 * testimonialsni clone qilamiz.
 */
const cloneCount = computed(() => {
    if (!containerWidth.value) {
        return 3;
    }

    return Math.ceil(
        containerWidth.value / stepWidth
    ) + 1;
});

const carouselTestimonials = computed(() => {
    const count = cloneCount.value;

    const before = testimonials.slice(-count);
    const after = testimonials.slice(0, count);

    return [
        ...before.map((item, index) => ({
            ...item,
            key: `before-${item.id}-${index}`,
        })),

        ...testimonials.map((item) => ({
            ...item,
            key: `original-${item.id}`,
        })),

        ...after.map((item, index) => ({
            ...item,
            key: `after-${item.id}-${index}`,
        })),
    ];
});

/*
 * Original testimonialsning boshlanish joyi.
 */
const startIndex = computed(() => {
    return cloneCount.value;
});

/*
 * Real index.
 */
const realIndex = computed(() => {
    return (
        (currentIndex.value - startIndex.value + testimonials.length) %
        testimonials.length
    );
});

const currentPage = computed(() => {
    return realIndex.value + 1;
});

const translateX = computed(() => {
    return currentIndex.value * stepWidth;
});

const next = () => {
    if (!isTransitioning.value) {
        return;
    }

    currentIndex.value++;
};

const prev = () => {
    if (!isTransitioning.value) {
        return;
    }

    currentIndex.value--;
};

const handleTransitionEnd = () => {
    const start = startIndex.value;
    const end = start + testimonials.length;

    /*
     * Oxirgi clone'ga o'tgan bo'lsak,
     * original cardlarga seamless qaytamiz.
     */
    if (currentIndex.value >= end) {
        isTransitioning.value = false;

        currentIndex.value = start;

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                isTransitioning.value = true;
            });
        });
    }

    /*
     * Boshidagi clone'ga o'tgan bo'lsak,
     * original oxirgi cardlarga o'tamiz.
     */
    if (currentIndex.value < start) {
        isTransitioning.value = false;

        currentIndex.value = end - 1;

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                isTransitioning.value = true;
            });
        });
    }
};

const updateContainerWidth = async () => {
    await nextTick();

    if (carouselRef.value) {
        containerWidth.value = carouselRef.value.offsetWidth;
    }
};

onMounted(() => {
    updateContainerWidth();

    window.addEventListener(
        "resize",
        updateContainerWidth
    );
});

onUnmounted(() => {
    window.removeEventListener(
        "resize",
        updateContainerWidth
    );
});
</script>
