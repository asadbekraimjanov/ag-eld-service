<template>
    <section class="mx-auto">
        <header class="mb-12 flex flex-col gap-4 border-l-4 border-[#CFA01A] pl-6">
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-[#CFA01A]">{{ $t('ourServices') }}</p>
            <el-divider class="!m-0" />
            <h2 class="max-w-[80%] text-4xl font-semibold leading-14 text-[#00345b]">
                {{ $t('servicesMain') }}
            </h2>
        </header>

        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <article v-for="(service, index) in services" :key="service.title"
                class="group overflow-hidden rounded border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div class="relative  overflow-hidden">
                    <img :src="service.image" :alt="service.title" class="h-[40vh] xl:h-[30vh] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div class="absolute inset-0 bg-gradient-to-t from-[#00345b]/90 via-[#00345b]/10 to-transparent"></div>
                    <span class="absolute bottom-5 left-6 text-sm font-semibold tracking-[0.18em] text-white/85">0{{ index + 1 }}</span>
                </div>

                <div class="p-7">
                    <div class="mb-5 h-1 w-10 bg-[#CFA01A] transition-all duration-300 group-hover:w-16"></div>
                    <h3 class="text-2xl font-semibold text-[#00345b]">{{ service.title }}</h3>
                    <p class="mt-3 leading-7 text-slate-600">{{ service.description }}</p>
                </div>
            </article>
        </div>

        <article class="mt-6 grid overflow-hidden rounded-lg bg-[#00345b] shadow-xl lg:grid-cols-2">
            <div class="order-2 p-9 sm:p-12 lg:order-1">
                <div class="h-1 w-12 bg-[#CFA01A]"></div>
                <p class="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#e8bf4d]">07 · {{ $t('serviceSevenHeader') }}</p>
                <h3 class="mt-4 text-4xl font-semibold text-white">{{ $t('serviceSevenTitle') }}</h3>
                <p class="mt-5 max-w-xl leading-7 text-slate-200">{{ $t('serviceSevenDescription') }}</p>
            </div>
            <div class="relative order-1 min-h-[280px] overflow-hidden lg:order-2">
                <img :src="iftaImage" alt="IFTA reporting" class="absolute inset-0 h-full w-full object-cover" />
                <div class="absolute inset-0 bg-[#00345b]/25"></div>
            </div>
        </article>
    </section>
</template>

<script setup>
import safetyAuditImage from '@/assets/images/safety audit.jpg'
import monitoringImage from '@/assets/images/monitoring.png'
import supportImage from '@/assets/images/only support.jpg'
import consultingImage from '@/assets/images/consulting.jpg'
import profilesImage from '@/assets/images/fixing.jpg'
import educationImage from '@/assets/images/driver education.jpg'
import iftaImage from '@/assets/images/IFTA Reporting.jpg'
import {useI18n} from "vue-i18n";
import {computed} from "vue";

const { t } = useI18n()

const services = computed(() => [
    {
        title: t('serviceOneTitle'),
        description: t('serviceOneDescription'),
        image: safetyAuditImage,
    },
    {
        title: t('serviceTwoTitle'),
        description: t('serviceTwoDescription'),
        image: monitoringImage,
    },
    {
        title: t('serviceThreeTitle'),
        description: t('serviceThreeDescription'),
        image: supportImage,
    },
    {
        title: t('serviceFourTitle'),
        description: t('serviceFourDescription'),
        image: consultingImage,
    },
    {
        title: t('serviceFiveTitle'),
        description: t('serviceFiveDescription'),
        image: profilesImage,
    },
    {
        title: t('serviceSixTitle'),
        description: t('serviceSixDescription'),
        image: educationImage,
    },
])
</script>
