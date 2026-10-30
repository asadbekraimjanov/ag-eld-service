<template>
    <p class="text-gray-800">{{ $t('aboutUs') }}</p>
    <div class="relative h-px w-full">
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-[#CFA01A] to-transparent blur-[2px] opacity-70"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-[#CFA01A] to-transparent"></div>
    </div>

    <div class="flex items-center gap-20">
        <p class="w-1/2 text-[#00345b] font-semibold text-4xl leading-14">{{ $t('learnMoreAbout') }}</p>
        <p class="w-1/2">{{ $t('fromEld') }}</p>
    </div>
    <div class="w-full flex justify-between items-center pt-10">
        <div class="w-[48%] bg-white rounded overflow-hidden shadow">
            <div class="relative overflow-hidden group">
                <img src="@/assets/images/safety.jpg" class="w-full h-[45vh] lg:h-[40vh] object-cover transition-transform duration-500 group-hover:scale-105" alt="">

                <div class="absolute inset-0 bg-gradient-to-t from-[#00345b]/90 via-[#00345b]/20 to-transparent"></div>
            </div>
            <div class="min-h-[12rem] flex items-start gap-6 p-8">
                <img src="@/assets/tabler-icons/truck-delivery.svg" class="w-24" alt="">
                <div>
                    <p class="text-2xl font-medium text-blue-950">{{ $t('safety') }} <span class="font-serif">⚙</span></p>
                    <p class="text-gray-800 mt-4">{{ $t('safetyInfo') }}</p>
                </div>
            </div>
        </div>

        <div class="w-[48%] bg-white rounded overflow-hidden shadow">
            <div class="relative overflow-hidden group">
                <img src="@/assets/images/monitoringgg.jpg" class="w-full h-[45vh] lg:h-[40vh] object-cover transition-transform duration-500 group-hover:scale-105" alt="">
                <div class="absolute inset-0 bg-gradient-to-t from-[#00345b]/90 via-[#00345b]/20 to-transparent"></div>
            </div>
            <div class="min-h-[12rem] flex items-start gap-6 p-8">
                <img src="@/assets/tabler-icons/device-desktop-search.svg" class="w-24" alt="">
                <div>
                    <p class="text-2xl font-medium text-blue-950">{{ $t('monitoring') }}📈</p>
                    <p class="text-gray-800 mt-4">{{ $t('monitoringInfo') }}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="flex items-center p-6 mt-10">
        <div class="w-1/4 text-center px-10">
            <p class="text-5xl font-semibold text-yellow-600">300+</p>
            <hr class="border-gray-300 my-4">
            <p class="text-gray-800">{{ $t('customersNum') }}</p>
        </div>
        <div class="w-1/4 text-center px-10">
            <p class="text-5xl font-semibold text-yellow-600">500+</p>
            <hr class="border-gray-300 my-4">
            <p class="text-gray-800">{{ $t('companiesNum') }}</p>
        </div>
        <div class="w-1/4 text-center px-10">
            <p class="text-5xl font-semibold text-yellow-600">1500+</p>
            <hr class="border-gray-300 my-4">
            <p class="text-gray-800">{{ $t('activeTrucks') }}</p>
        </div>
        <div class="w-1/4 text-center px-10">
            <p class="text-5xl font-semibold text-yellow-600">5+</p>
            <hr class="border-gray-300 my-4">
            <p class="text-gray-800">{{ $t('experienceYear') }}</p>
        </div>
    </div>

</template>

<script setup>

</script>

<style scoped>

</style>
