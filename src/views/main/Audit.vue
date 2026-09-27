<template>
    <el-divider />
    <div class="pt-10">
        <p class="text-center mb-2 text font-semibold text-[#343A40]">Audit service</p>
        <p class="text-4xl font-semibold text-gray-800 text-center mb-10">How audit-ready is <span class="text-[#CFA01A]">your fleet</span>, right now?</p>
        <el-divider />

        <div class="flex justify-between gap-10 items-center py-6">
            <el-card class="w-full py-2 !shadow-sm !text-white !rounded-lg !bg-gray-600">
                <div class="flex justify-between font-semibold">
                    <p>Fleet size</p>
                    <p class="text-yellow-500">52 trucks</p>
                </div>
                <el-slider v-model="progress" :max="100" />
            </el-card>
            <el-card class="w-full py-2 !shadow-sm !text-white !rounded-lg !bg-gray-600">
                AAA
            </el-card>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>
