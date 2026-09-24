<template>
    <p class="text-center mt-10 text-2xl font-bold text-gray-800">
        Works with these
        <span class="text-[#2B69ED]">ELD platforms</span>
        and supports the platform of your choice
    </p>

    <div class="slider-wrapper mt-10">
        <div class="slider-track">

            <div class="slider-group">
                <a v-for="(app, index) in apps" :key="`first-${index}`" :href="app.link" target="_blank" class="app-card">
                    <img :src="app.image" class="w-12 rounded-lg" alt=""
                            :class="{ 'border border-gray-200': ['Quantum Logbook', 'Hunter ELD', 'Route ELD', 'OZTP ELD'].includes(app.name) }" />
                    <p class="text-center font-medium text-sm text-gray-800 max-w-20">
                        {{ app.name }}
                    </p>
                </a>
            </div>

            <div class="slider-group">
                <a v-for="(app, index) in apps" :key="`second-${index}`" :href="app.link" target="_blank" class="app-card">
                    <img :src="app.image" class="w-12 rounded-lg" alt=""
                            :class="{ 'border border-gray-200': ['Quantum Logbook', 'Hunter ELD', 'Route ELD', 'OZTP ELD'].includes(app.name) }" />
                    <p class="text-center font-medium text-sm text-gray-800 max-w-20">
                        {{ app.name }}
                    </p>
                </a>
            </div>

        </div>
    </div>
</template>

<script setup>
const apps = [
    {
        name: 'Sun ELD',
        image: new URL('../../assets/images/sun eld.png', import.meta.url).href,
        link: 'https://play.google.com/store/apps/details?id=uz.udevs.eld_driver_mobile&hl=ru'
    },
    {
        name: 'Quantum Logbook',
        image: new URL('../../assets/images/quantum logbook.png', import.meta.url).href,
        link: 'https://play.google.com/store/apps/details?id=uz.udt.greenlight.eld.android'
    },
    {
        name: 'Five ELD Driver',
        image: new URL('../../assets/images/five eld.png', import.meta.url).href,
        link: 'https://play.google.com/store/apps/details?id=com.tteld.app'
    },
    {
        name: 'Hunter ELD',
        image: new URL('../../assets/images/hunter eld.png', import.meta.url).href,
        link: 'https://play.google.com/store/apps/details?id=com.hunter.driver'
    },
    {
        name: 'Level ELD',
        image: new URL('../../assets/images/level eld.png', import.meta.url).href,
        link: 'https://play.google.com/store/apps/details?id=uz.udt.american.eld.android'
    },
    {
        name: 'OZTP ELD',
        image: new URL('../../assets/images/oztp eld.png', import.meta.url).href,
        link: 'https://play.google.com/store/apps/details?id=com.ozodexpresseld.android.mobile'
    },
    {
        name: 'Safe Lane ELD',
        image: new URL('../../assets/images/safe lane.png', import.meta.url).href,
        link: 'https://play.google.com/store/apps/details?id=com.safelane.eld'
    },
    {
        name: 'Route ELD',
        image: new URL('../../assets/images/route eld.png', import.meta.url).href,
        link: 'https://play.google.com/store/apps/details?id=com.routeeld.mobile'
    },
    {
        name: 'Lucid ELD',
        image: new URL('../../assets/images/lucid eld.png', import.meta.url).href,
        link: 'https://play.google.com/store/apps/details?id=com.lucid.eld'
    },
]
</script>

<style scoped>
.slider-wrapper {
    width: 100%;
    overflow: hidden;
}

.slider-track {
    display: flex;
    width: max-content;
    animation: slide-right 25s linear infinite;
}

.slider-group {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
    padding-right: 16px;
}

.app-card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    background: white;
    padding: 16px 32px;
    border-radius: 8px;

    cursor: pointer;
    flex-shrink: 0;

    transition: transform 0.7s ease,
    box-shadow 0.7s ease,
    background 0.7s ease;
}



@keyframes slide-right {
    from {
        transform: translateX(-50%);
    }

    to {
        transform: translateX(0);
    }
}
</style>
