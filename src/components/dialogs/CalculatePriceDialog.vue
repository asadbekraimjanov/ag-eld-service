<template>
    <el-dialog v-model="visible" class="price-dialog" width="50%" @close="close" close-on-click-modal>
        <template #title>
            <p class="font-medium text-4xl text-gray-800">{{ $t('priceDialogHeader1') }} <span class="text-[#CFA01A]">{{ $t('priceDialogHeader2') }}</span></p>
        </template>
        <div>
            <p class="mt-2 mb-10">{{ $t('priceDialogInfo') }}</p>
            <el-form :model="form" :rules="formRules" label-position="top" ref="formRef">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item prop="fullName" :label="$t('fullName')">
                            <el-input v-model="form.fullName" :placeholder="$t('fullName')" clearable />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item prop="email" :label="$t('yourEmail')">
                            <el-input v-model="form.email" type="email" placeholder="example@gmail.com" clearable />
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item prop="phoneNumber" :label="$t('pnumber')">
                            <el-input v-model="form.phoneNumber" placeholder="+1 000 000 0000" clearable />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item prop="billingPeriod" :label="$t('billingPeriod')">
                            <el-select v-model="form.billingPeriod" placeholder="Select..">
                                <el-option :label="$t('monthly')" value="MONTHLY" />
                                <el-option :label="$t('yearly')" value="YEARLY" />
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item prop="truckNumber" :label="$t('numberTrucks')">
                            <el-slider v-model="form.truckNumber" :min="1" :max="300" show-input />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item prop="eldName" :label="$t('serviceName')">
                            <el-input v-model="form.eldName" :placeholder="$t('yourServiceName')" clearable />
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <el-form-item prop="description">
                            <el-input v-model="form.description" type="textarea" :placeholder="$t('description')" :rows="3" clearable />
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="py-2 flex gap-4">
                    <p class="text-xl">{{ $t('overall') }}: <span class="text-gray-800 font-semibold">{{ new Intl.NumberFormat().format(calculateTotalPrice()) }}$</span></p>
                    <p class="text-[#02A76F] font-medium">{{ form.truckNumber > 5 && form.truckNumber < 10 ? '-8,3%' : form.truckNumber >= 10 ? '-16,7%' : '' }}</p>
                </div>
                <div class="w-full flex justify-end py-2">
                    <el-button @click="submit" :loading="loadingSendBtn" :icon="Message" class="!bg-[#CFA01A] active:!bg-[#CFA01A] active:!text-white
                        hover:!text-[#CFA01A] hover:!bg-white !py-6 !px-6" type="warning">{{ $t('sendMessage') }}</el-button>
                </div>
            </el-form>
        </div>
    </el-dialog>
</template>

<script setup>
import {ref, watch} from "vue";
import {Message} from "@element-plus/icons-vue";
import * as emailjs from "@emailjs/browser";
import {ElMessage} from "element-plus";
import {useI18n} from "vue-i18n";


const props = defineProps({
    period: {
        type: Boolean,
        required: true,
    }
})

const { t } = useI18n()
const visible = ref(false);
const loadingSendBtn = ref(false);
const defaultForm = () => ({
    fullName: null,
    email: null,
    phoneNumber: null,
    billingPeriod: props.period ? 'MONTHLY' : 'YEARLY',
    truckNumber: 1,
    eldName: null,
    description: null,
})
const formRef = ref(null)
const form = ref(defaultForm())
const formRules = ref({
    fullName: [{required: true, message: t('requiredMessage'), trigger: 'change'}],
    email: [{required: true, message: t('requiredMessage'), trigger: 'change'}],
    phoneNumber: [{required: true, message: t('requiredMessage'), trigger: 'change'}],
    billingPeriod: [{required: true, message: t('requiredMessage'), trigger: 'change'}],
    truckNumber: [{required: true, message: t('requiredMessage'), trigger: 'change'}],
    eldName: [{required: true, message: t('requiredMessage'), trigger: 'change'}],
    description: [{required: false, message: t('notRequiredMessage'), trigger: 'change'}],
})

const submit = async () => {
    formRef.value.validate(async (valid) => {
        if (valid) {
            loadingSendBtn.value = true
            try {
                await emailjs.send(
                    'service_ohry5di',
                    'template_p9pjdpe',
                    {
                        full_name: form.value.fullName,
                        from_email: form.value.email,
                        phone_number: form.value.phoneNumber,
                        eld_name: form.value.eldName,
                        description: form.value.description,
                        billing_period: form.value.billingPeriod,
                        truck_number: form.value.truckNumber,
                        overall: calculateTotalPrice()
                    },
                    {
                        publicKey: 'gX6V9J-uMKcK-PuOH'
                    }
                )
            } catch (error) {
                console.error(error.message)
                ElMessage.error('Something went wrong. Please try again later..')
            } finally {
                close()
                loadingSendBtn.value = false
            }
        } else {

        }
    })
}

const calculateTotalPrice = () => {
    if (form.value.truckNumber <= 5 && form.value.truckNumber > 0) {
        const total = form.value.truckNumber*120
        if (form.value.billingPeriod === 'MONTHLY') return total
        else if (form.value.billingPeriod === 'YEARLY') return total * 12
    }
    if (form.value.truckNumber > 5 && form.value.truckNumber < 10) {
        const total = form.value.truckNumber*110
        if (form.value.billingPeriod === 'MONTHLY') return total
        else if (form.value.billingPeriod === 'YEARLY') return total * 12
    }
    if (form.value.truckNumber >= 10) {
        const total = form.value.truckNumber*100
        if (form.value.billingPeriod === 'MONTHLY') return total
        else if (form.value.billingPeriod === 'YEARLY') return total * 12
    }
    else return 0
}

const openPriceDialog = (num) => {
    form.value.truckNumber = num
    visible.value = true;
}
const close = () => {
    formRef.value?.resetFields()
    form.value = defaultForm()
    visible.value = false;
}

watch(
    () => props.period,
    (value) => {
        form.value.billingPeriod = value ? 'MONTHLY' : 'YEARLY'
    },
    { immediate: true }
)

defineExpose({
    openPriceDialog,
    close
})
</script>

<style scoped>
:deep(.el-slider__button) {
    border-color: #CFA01A;
}
:deep(.el-slider__bar) {
    background-color: #CFA01A;
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
    color: #CFA01A;
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