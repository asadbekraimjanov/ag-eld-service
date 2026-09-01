<template>
    <p class="text-gray-800">About Us</p>
    <div class="relative h-px w-full">
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-[#CFA01A] to-transparent blur-[2px] opacity-70"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-[#CFA01A] to-transparent"></div>
    </div>

    <div class="flex items-center gap-20">
        <p class="w-1/2 text-[#00345b] font-semibold text-4xl leading-14">Learn More About Our Company and Trucking Support Services</p>
        <p class="w-1/2">From ELD management and driver education to IFTA reporting, profile corrections, and compliance support, we provide practical solutions tailored to the needs of drivers, owner-operators, and trucking companies.</p>
    </div>
    <div class="w-full flex justify-between items-center pt-10">
        <div class="w-[48%] bg-white rounded overflow-hidden shadow">
            <img src="@/assets/images/safety.jpg" class="w-full h-80 hover:scale-105 transition-all duration-500" alt="">
            <div class="min-h-[12rem] flex items-start gap-6 p-8">
                <img src="@/assets/tabler-icons/truck-delivery.svg" class="w-24" alt="">
                <div>
                    <p class="text-2xl font-medium text-blue-950">SAFETY <span class="font-serif">⚙</span></p>
                    <p class="text-gray-800 mt-4">Safety Audit is prepared with special experienced guys and until now all of our customers passed Safety Audits successfully.</p>
                </div>
            </div>
        </div>
        <div class="w-[48%] bg-white rounded overflow-hidden shadow">
            <img src="@/assets/images/monitoringgg.jpg" class="w-full h-80 hover:scale-105 transition-all duration-500" alt="">
            <div class="min-h-[12rem] flex items-start gap-6 p-8">
                <img src="@/assets/tabler-icons/device-desktop-search.svg" class="w-24" alt="">
                <div>
                    <p class="text-2xl font-medium text-blue-950">MONITORING📈</p>
                    <p class="text-gray-800 mt-4">We will give you the Monitoring account of your company and you can watch everything there and you can rate our Service Quality.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="flex items-center p-6 mt-10">
        <div class="w-1/4 text-center px-10">
            <p class="text-5xl font-semibold text-yellow-800">300+</p>
            <hr class="border-gray-300 my-4">
            <p class="text-gray-800">MC Customers</p>
        </div>
        <div class="w-1/4 text-center px-10">
            <p class="text-5xl font-semibold text-yellow-800">500+</p>
            <hr class="border-gray-300 my-4">
            <p class="text-gray-800">Number of Companies</p>
        </div>
        <div class="w-1/4 text-center px-10">
            <p class="text-5xl font-semibold text-yellow-800">1500+</p>
            <hr class="border-gray-300 my-4">
            <p class="text-gray-800">Active Trucks</p>
        </div>
        <div class="w-1/4 text-center px-10">
            <p class="text-5xl font-semibold text-yellow-800">5+</p>
            <hr class="border-gray-300 my-4">
            <p class="text-gray-800">Years of Experience</p>
        </div>
    </div>
    <p class="text-center mt-10 text-2xl font-bold text-gray-800">The ELD apps recommended by <span class="text-[#2B69ED]">AG ELD SERVICE</span> are</p>
    <div class="flex justify-center items-center gap-4 pt-10">
        <a href="https://play.google.com/store/apps/details?id=uz.udevs.eld_driver_mobile&hl=ru" target="_blank"
                class="flex items-center gap-4 bg-white py-4 px-8 rounded-lg cursor-pointer transition-all hover:scale-[1.03]
                hover:-translate-y-2 hover:hover:bg-[linear-gradient(135deg,#ffffff_0%,#DBEAFE_35%,#DBEAFE_65%,#ffffff_100%)]
                ease-out duration-700 hover:shadow-lg">
            <img src="../../assets/images/sun%20eld.png" class="w-12 rounded-lg" alt="">
            <p class="text-center font-medium text-sm text-gray-800">Sun ELD</p>
        </a>
        <a href="https://play.google.com/store/apps/details?id=uz.udt.greenlight.eld.android" target="_blank"
                class="flex items-center gap-4 bg-white py-4 px-8 rounded-lg cursor-pointer transition-all hover:scale-[1.03]
                hover:-translate-y-2 hover:hover:bg-[linear-gradient(135deg,#ffffff_0%,#DBEAFE_35%,#DBEAFE_65%,#ffffff_100%)]
                ease-out duration-700 hover:shadow-lg">
            <img src="../../assets/images/quantum%20logbook.png" class="w-12 rounded-lg border border-gray-200" alt="">
            <p class="text-center font-medium text-sm text-gray-800">Quantum <br> Logbook</p>
        </a>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>
