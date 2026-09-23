<template>
    <section class="mx-auto">
        <header class="mb-12 flex flex-col gap-4 border-l-4 border-[#CFA01A] pl-6">
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-[#CFA01A]">Our services</p>
            <el-divider class="!m-0" />
            <h2 class="max-w-2xl text-4xl font-semibold leading-14 text-[#00345b]">
                Trucking support that keeps every mile in control.
            </h2>
        </header>

        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <article
                v-for="(service, index) in services"
                :key="service.title"
                class="group overflow-hidden rounded border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
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
                <p class="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#e8bf4d]">07 · Compliance Reporting</p>
                <h3 class="mt-4 text-4xl font-semibold text-white">IFTA Reporting</h3>
                <p class="mt-5 max-w-xl leading-7 text-slate-200">
                    Clear fuel and mileage reporting support that helps your operation stay accurate, organized, and ready for every quarter.
                </p>
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

const services = [
    {
        title: 'Safety Audit',
        description: 'Professional review of records, ELD logs, and documents to keep your fleet ready for inspection.',
        image: safetyAuditImage,
    },
    {
        title: 'Monitoring',
        description: 'Continuous oversight of driver logs and compliance indicators before small issues become violations.',
        image: monitoringImage,
    },
    {
        title: '24/7 ELD Support',
        description: 'Fast, practical support for logbook errors, device connectivity, and everyday ELD questions.',
        image: supportImage,
    },
    {
        title: 'Consulting Service',
        description: 'Clear guidance for stronger ELD management, safety processes, and operational decisions.',
        image: consultingImage,
    },
    {
        title: 'Profile & Form Corrections',
        description: 'Accurate company, driver, ELD account, and compliance documentation updates when they matter.',
        image: profilesImage,
    },
    {
        title: 'Driver Education',
        description: 'Practical driver guidance on ELD use, HOS compliance, safety procedures, and common violations.',
        image: educationImage,
    },
]
</script>
