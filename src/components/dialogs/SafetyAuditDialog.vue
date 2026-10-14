<template>
    <el-dialog v-model="visible" class="price-dialog !w-1/2 sm:w-full " @close="close" close-on-click-modal>
        <template #title>
            <p class="font-medium text-4xl text-gray-800">Get In Touch <span class="text-[#00345b]">with Us</span></p>
        </template>
        <div>
            <p class="mt-2 mb-10">Submit your information for our audit service, and our team will contact you shortly to discuss your needs and next steps.</p>
            <el-form :model="form" :rules="formRules" label-position="top" ref="formRef">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item prop="fullName" label="Full Name">
                            <el-input v-model="form.fullName" placeholder="Full Name" clearable />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item prop="email" label="Your email">
                            <el-input v-model="form.email" type="email" placeholder="example@gmail.com" clearable />
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item prop="phoneNumber" label="Phone number">
                            <el-input v-model="form.phoneNumber" placeholder="+1 000 000 0000" clearable />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item prop="eldVal" label="ELD setup">
                            <el-select @change="onScoreChanged" v-model="form.eldVal" placeholder="Select">
                                <el-option label="New < 1 year" :value="0" />
                                <el-option label="1–3 years" :value="8" />
                                <el-option label="3+ years" :value="20" />
                                <el-option label="Paper logs" :value="38" />
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item prop="fleetSize" label="Fleet Size (trucks)">
                            <el-slider @change="onScoreChanged" v-model="form.fleetSize" :min="1" :max="150" show-input />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item prop="violations" label="HOS / ELD violations, last 12 months">
                            <el-slider @change="onScoreChanged" v-model="form.violations" :min="0" :max="20" show-input />
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item prop="audit" label="Months since last safety audit (mo)">
                            <el-slider @change="onScoreChanged" v-model="form.audit" :min="0" :max="36" show-input />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item prop="score" :label="`Compliance Risk Score (${form.score}/100)`">
                            <el-slider v-model="form.score" :min="0" :max="100" class="slider-score" :style="{ '--el-slider-main-bg-color': sliderColor }" disabled />
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <el-form-item prop="description">
                            <el-input v-model="form.description" type="textarea" placeholder="Anything else you'd like us to know..." :rows="3" clearable />
                        </el-form-item>
                    </el-col>
                </el-row>

                <div class="w-full flex justify-end py-2">
                    <el-button @click="submit" :loading="loadingSendBtn" :icon="Message" class="!bg-[#00345b] active:!bg-[#00345b] active:!text-white
                        hover:!text-[#00345b] hover:!bg-white !py-6 !px-6 !border-[#00345b]" type="warning">Send Message</el-button>
                </div>
            </el-form>
        </div>
    </el-dialog>
</template>

<script setup>
import {computed, ref} from "vue";
import {Message} from "@element-plus/icons-vue";
import * as emailjs from "@emailjs/browser";
import {ElMessage} from "element-plus";


const visible = ref(false);
const loadingSendBtn = ref(false);
const defaultForm = () => ({
    fullName: null,
    email: null,
    phoneNumber: null,
    fleetSize: 1,
    violations: 0,
    audit: 0,
    eldVal: null,
    score: 0,
    description: null,
})
const formRef = ref(null)
const form = ref(defaultForm())
const formRules = ref({
    fullName: [{required: true, message: 'This field is required', trigger: 'change'}],
    email: [{required: true, message: 'This field is required', trigger: 'change'}],
    phoneNumber: [{required: true, message: 'This field is required', trigger: 'change'}],
    fleetSize: [{required: true, message: 'This field is required', trigger: 'change'}],
    violations: [{required: true, message: 'This field is required', trigger: 'change'}],
    audit: [{required: true, message: 'This field is required', trigger: 'change'}],
    eldVal: [{required: true, message: 'This field is required', trigger: 'change'}],
    score: [{required: true, message: 'This field is required', trigger: 'change'}],
    description: [{required: false, message: 'This field is not required', trigger: 'change'}],
})

const setupOptions = ref({
    0: 'New < 1 year',
    8: '1–3 years',
    20: '3+ years',
    38: 'Paper logs'
})

const sliderColor = computed(() => {
    const score = form.value.score

    if (score < 31) return '#02A76F'
    if (score < 61) return '#CFA01A'
    return '#F56C6C'
})

const onScoreChanged = () => {
    form.value.score = calculatedScore
}

const calculatedScore = computed(() => {
    let result = 0

    result += Math.min(form.value.violations * 7, 42)

    if (form.value.audit >= 12) {
        result += 22
    } else if (form.value.audit >= 6) {
        result += 12
    } else if (form.value.audit >= 3) {
        result += 5
    }

    result += form.value.eldVal ?? 0

    return Math.max(2, Math.min(100, Math.round(result)))
})

const submit = async () => {
    formRef.value.validate(async (valid) => {
        if (valid) {
            loadingSendBtn.value = true
            try {
                await emailjs.send(
                    'service_9mj1u77',
                    'template_cjk851g',
                    {
                        full_name: form.value.fullName,
                        from_email: form.value.email,
                        phone_number: form.value.phoneNumber,
                        fleetSize: form.value.fleetSize,
                        violations: form.value.violations,
                        audit: form.value.audit,
                        eldVal: setupOptions.value[form.value.eldVal],
                        score: form.value.score,
                        description: form.value.description,
                    },
                    {
                        publicKey: 'N_uUfIZPg9Wv6CeUB'
                    }
                )
            } catch (error) {
                console.log(error.message)
                ElMessage.error('Something went wrong. Please try again later..')
            } finally {
                close()
                loadingSendBtn.value = false
            }
        } else {

        }
    })
}


const open = (fleetSize, violations, audit, eldVal, score) => {
    visible.value = true;
    form.value.fleetSize = fleetSize
    form.value.violations = violations
    form.value.audit = audit
    form.value.eldVal = eldVal
    form.value.score = score
}
const close = () => {
    formRef.value?.resetFields()
    form.value = defaultForm()
    visible.value = false;
}


defineExpose({
    open,
    close
})
</script>

<style scoped>
:deep(.el-slider__button) {
    border-color: #CFA01A;
}
:deep(.slider-score .el-slider__button) {
    border-color: var(--el-slider-main-bg-color) !important;
}
:deep(.el-slider__bar) {
    background-color: #CFA01A;
}
:deep(.slider-score .el-slider__bar) {
    background-color: var(--el-slider-main-bg-color) !important;
}

:deep(.el-slider__runway) {
    background-color: white;
}

:global(.price-dialog) {
    border-radius: 14px;
    padding: 2rem;
    background: #e5e7eb;
}

:global(.price-dialog .el-dialog__headerbtn) {
    top: 1.4rem;
    right: 24px;
}
:global(.price-dialog .el-dialog__headerbtn) {
    top: 1.4rem;
    right: 24px;
}
:global(.price-dialog .el-dialog__headerbtn svg) {
    scale: 2;
    color: #00345b;
    font-weight: 800;
}

::v-deep(.price-dialog .el-dialog__headerbtn .el-dialog__close) {
    font-size: 20px;
    color: #6b7280;
}

::v-deep(.price-dialog .el-dialog__headerbtn:hover .el-dialog__close) {
    color: #111827;
}

</style>