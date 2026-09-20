<template>
    <div class="absolute inset-0 z-0">
        <img class="absolute inset-0 h-full w-full object-cover" src="@/assets/images/truck_footer.png" alt="">
        <div class="absolute inset-0 bg-black/70"></div>

        <div class="relative z-10 text-white px-32 py-16 flex items-center">
            <MapAmerica class="w-[60%]" />
            <div class="w-[40%] pl-14">
                <p class="text-center text-4xl font-semibold">Empowering over 500+ trucking companies to enhance operational efficiency</p>
            </div>
        </div>
    </div>
</template>

<script setup>

import MapAmerica from "@/components/MapAmerica.vue";
</script>

<style scoped>

</style>
