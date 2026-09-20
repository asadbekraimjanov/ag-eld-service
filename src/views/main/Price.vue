<template>
    <p class="text-center font-bold text-4xl text-gray-700">Our Price Lists</p>
    <p class="text-center mt-6 text-gray-500">Simple, transparent pricing for reliable ELD services</p>
    <div class="flex justify-center mt-4">
        <el-switch v-model="togglePeriodMonthly" inactive-text="YEARLY" active-text="MONTHLY" style="--el-switch-on-color: #02A76F" />
    </div>
    <div class="flex justify-center flex-wrap gap-8 pt-14">
        <el-card class="w-80 hover:-translate-y-4">
            <div class="relative w-40 h-20">
                <!-- 3-chi -->
                <div class="absolute top-0 rounded-[2px] left-4 w-10 h-10 bg-[linear-gradient(to_top_right,#BDC6CF,#D3D7DC)]"></div>

                <!-- 2-chi -->
                <div class="absolute top-2 rounded-[2px] left-2 w-10 h-10 bg-[linear-gradient(to_top_right,#4E80CA,#86ACD3)]"></div>

                <!-- 1-chi -->
                <div class="absolute top-4 rounded-[2px] left-0 w-10 h-10 bg-[linear-gradient(to_top_right,#1355C3,#4E80CA)]"></div>
            </div>

            <p class="text-xl font-bold text-gray-800 mb-4">For 1-5 trucks</p>
            <p v-if="togglePeriodMonthly" class="text-5xl font-bold mb-3"><sup class="text-3xl font-normal">$</sup>120<sup class="text-gray-500 text-base font-normal"> / truck / month</sup></p>
            <p v-else class="text-5xl font-bold mb-3"><sup class="text-3xl font-normal">$</sup>1 440<sup class="text-gray-500 text-base font-normal"> / truck / year</sup></p>
            <el-divider />
            <ul class="text-sm">
                <li class="mb-1"><el-icon :size="20" class="translate-y-1 !text-blue-500"><Check /></el-icon> Complete fleet service</li>
                <li class="mb-1"><el-icon :size="20" class="translate-y-1 !text-blue-500"><Check /></el-icon> Truck maintenance support</li>
                <li class="mb-1"><el-icon :size="20" class="translate-y-1 !text-blue-500"><Check /></el-icon> Service scheduling & coordination</li>
                <li class="mb-1"><el-icon :size="20" class="translate-y-1 !text-blue-500"><Check /></el-icon> Dedicated customer support</li>
                <li class="mb-1"><el-icon :size="20" class="translate-y-1 !text-blue-500"><Check /></el-icon> Flexible fleet management</li>
            </ul>
            <el-button type="info" class="w-full !border-none mt-4 !p-5">Calculate</el-button>
        </el-card>
        <el-card class="w-80 hover:-translate-y-4">
            <div class="relative w-40 h-20">
                <!-- 3-chi -->
                <div class="absolute top-0 rounded-[2px] left-4 w-10 h-10 bg-[linear-gradient(to_top_right,#BDC6CF,#D3D7DC)]"></div>

                <!-- 2-chi -->
                <div class="absolute top-2 rounded-[2px] left-2 w-10 h-10 bg-[linear-gradient(to_top_right,#4E80CA,#86ACD3)]"></div>

                <!-- 1-chi -->
                <div class="absolute top-4 rounded-[2px] left-0 w-10 h-10 bg-[linear-gradient(to_top_right,#1355C3,#4E80CA)]"></div>
            </div>

            <p class="text-xl font-bold text-gray-800 mb-4">For 6-10 trucks</p>
            <p v-if="togglePeriodMonthly" class="text-5xl font-bold mb-3"><sup class="text-3xl font-normal">$</sup>110<sup class="text-gray-500 text-base font-normal"> / truck / month</sup></p>
            <p v-else class="text-5xl font-bold mb-3"><sup class="text-3xl font-normal">$</sup>1 320<sup class="text-gray-500 text-base font-normal"> / truck / year</sup></p>
            <el-divider />
            <ul class="text-sm">
                <li class="mb-1"><el-icon :size="20" class="translate-y-1 !text-blue-500"><Check /></el-icon> Complete fleet service</li>
                <li class="mb-1"><el-icon :size="20" class="translate-y-1 !text-blue-500"><Check /></el-icon> Truck maintenance support</li>
                <li class="mb-1"><el-icon :size="20" class="translate-y-1 !text-blue-500"><Check /></el-icon> Service scheduling & coordination</li>
                <li class="mb-1"><el-icon :size="20" class="translate-y-1 !text-blue-500"><Check /></el-icon> Dedicated customer support</li>
                <li class="mb-1"><el-icon :size="20" class="translate-y-1 !text-blue-500"><Check /></el-icon> Lower rate for growing fleets</li>
            </ul>
            <el-button type="primary" class="w-full !bg-[#1355C3] hover:!bg-[#1355C3]/70 active:!bg-[#1355C3]/90 !border-none mt-4 !p-5">Calculate</el-button>
        </el-card>
        <el-card class="w-80 hover:-translate-y-4">
            <div class="relative w-40 h-20">
                <!-- 3-chi -->
                <div class="absolute top-0 rounded-[2px] left-4 w-10 h-10 bg-[linear-gradient(to_top_right,#BDC6CF,#D3D7DC)]"></div>

                <!-- 2-chi -->
                <div class="absolute top-2 rounded-[2px] left-2 w-10 h-10 bg-[linear-gradient(to_top_right,#4E80CA,#86ACD3)]"></div>

                <!-- 1-chi -->
                <div class="absolute top-4 rounded-[2px] left-0 w-10 h-10 bg-[linear-gradient(to_top_right,#1355C3,#4E80CA)]"></div>
            </div>

            <p class="text-xl font-bold text-gray-800 mb-4">For 11+ trucks</p>
            <p v-if="togglePeriodMonthly" class="text-5xl font-bold mb-3"><sup class="text-3xl font-normal">$</sup>100<sup class="text-gray-500 text-base font-normal"> / truck / month</sup></p>
            <p v-else class="text-5xl font-bold mb-3"><sup class="text-3xl font-normal">$</sup>1 200<sup class="text-gray-500 text-base font-normal"> / truck / year</sup></p>
            <el-divider />
            <ul class="text-sm">
                <li class="mb-1"><el-icon :size="20" class="translate-y-1 !text-blue-500"><Check /></el-icon> Complete fleet service</li>
                <li class="mb-1"><el-icon :size="20" class="translate-y-1 !text-blue-500"><Check /></el-icon> Truck maintenance support</li>
                <li class="mb-1"><el-icon :size="20" class="translate-y-1 !text-blue-500"><Check /></el-icon> Service scheduling & coordination</li>
                <li class="mb-1"><el-icon :size="20" class="translate-y-1 !text-blue-500"><Check /></el-icon> Dedicated customer support</li>
                <li class="mb-1"><el-icon :size="20" class="translate-y-1 !text-blue-500"><Check /></el-icon> Best rate for larger fleets</li>
            </ul>
            <el-button type="primary" class="w-full !bg-[#212A35] hover:!bg-[#212A35]/70 active:!bg-[#212A35]/90 !border-none mt-4 !p-5">Calculate</el-button>
        </el-card>
    </div>
</template>

<script setup>
import {ref} from "vue";
import {Check} from "@element-plus/icons-vue";

const togglePeriodMonthly = ref(true)
</script>

<style scoped>
:deep(.el-switch__label, .el-switch__label.is-active) {
    color: #364153;
    font-weight: bold;
}
</style>

