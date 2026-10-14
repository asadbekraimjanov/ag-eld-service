<template>
    <div class="relative isolate min-h-screen w-full bg-[#22354E] px-4 py-5 text-[#f3f1ea] sm:px-8 sm:py-10">
        <img src="@/assets/images/Dark_corporate_tech_background_2K_20261012111959.jpg" class="absolute inset-0 -z-10 h-full w-full object-cover" alt="">
<!--        <div class="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,17,31,.68)_0%,rgba(8,17,31,.58)_55%,rgba(8,13,22,.82)_100%)]"></div>-->

        <div class="w-full flex justify-between h-12 mb-10 lg:px-32 xl:px-54 border-b border-gray-600">
            <div class="flex justify-between items-start gap-20">
                <img src="/logo.png" class="w-20 h-20 opacity-85 -translate-y-5" alt="">
                <div class="flex justify-between items-center gap-6">
                    <p @click="router.push({name: 'Home'})" class="cursor-pointer -mt-1 hover:text-gray-400 transition-colors">Main</p>
                    <p class="flex gap-1 items-center cursor-pointer border-b border-[#dba53f] pb-1 text-white">
                        <span>Audit</span>
                        <el-icon class="!p-0"><TopRight /></el-icon>
                    </p>
                </div>
            </div>

            <div class="flex justify-between gap-16">
                <div class="-translate-y-2 text-white flex items-center gap-2 cursor-pointer hover:text-[#83ddeb] transition-colors">
                    <el-icon><PhoneFilled /></el-icon>
                    <span>(77) 966 98 12</span>
                </div>

                <span class="mb-[18px] inline-flex items-center gap-2 rounded-full border border-[#dba53f]/35 bg-[#dba53f]/10
                        px-3 py-1.5 text-xs uppercase tracking-[.16em] text-[#dba53f]">
                    <span class="h-1.5 w-1.5 rounded-full bg-[#dba53f] shadow-[0_0_0_3px_rgba(219,165,63,.18)]"/>
                    Free Tool
                </span>
            </div>
        </div>

        <div class="mx-auto max-w-[1040px]">
            <h1 class="mb-3 max-w-3xl text-3xl font-semibold leading-[1.08] sm:text-[42px] text-white">
                How audit-ready is
                <span class="text-[#dba53f]">your fleet</span>,
                right now?
            </h1>

            <p class="mb-9 max-w-[600px] text-base leading-[1.6] text-[#aab6c8]">
                Answer four questions about your operation. We'll estimate your compliance risk the same way our
                Safety Audit team does on day one — before you spend a dollar on a full review.
            </p>

            <div class="grid gap-5 md:grid-cols-[1.05fr_.95fr]">
                <!-- FORM -->
                <div class="audit-panel rounded-[14px] border p-5 sm:p-8">
                    <!-- Fleet size -->
                    <div class="mb-[22px]">
                        <div class="mb-2.5 flex items-baseline justify-between">
                            <label for="fleetSize" class="text-[13.5px] font-semibold text-white">Fleet size</label>

                            <span class="text-[15px] font-medium text-[#e7b94f]">
                                {{ fleetSize }} {{ fleetSize === 1 ? 'truck' : 'trucks' }}
                            </span>
                        </div>

                        <input id="fleetSize" v-model.number="fleetSize" type="range" min="1" max="150" step="1" class="range-input" />

                        <p class="mt-1.5 text-xs text-[#91a0b5]">Number of trucks currently active on your DOT number</p>
                    </div>

                    <!-- Violations -->
                    <div class="mb-[22px]">
                        <div class="mb-2.5 flex items-baseline justify-between">
                            <label for="violations" class="text-[13.5px] font-semibold text-white">
                                HOS / ELD violations, last 12 months
                            </label>

                            <span class="text-[15px] font-medium text-[#e7b94f]">{{ violations }}</span>
                        </div>

                        <input id="violations" v-model.number="violations" type="range" min="0" max="20" step="1" class="range-input" />
                        <p class="mt-1.5 text-xs text-[#91a0b5]">Include logbook edits flagged in roadside inspections</p>
                    </div>

                    <!-- Audit -->
                    <div class="mb-[22px]">
                        <div class="mb-2.5 flex items-baseline justify-between">
                            <label for="audit" class="text-[13.5px] font-semibold text-white">
                                Months since last safety audit
                            </label>

                            <span class="text-[15px] font-medium text-[#e7b94f]">{{ audit }} mo</span>
                        </div>

                        <input id="audit" v-model.number="audit" type="range" min="0" max="36" step="1" class="range-input" />
                        <p class="mt-1.5 text-xs text-[#91a0b5]">Internal review or FMCSA compliance review — whichever was last</p>
                    </div>

                    <!-- ELD -->
                    <div>
                        <div class="mb-2.5">
                            <label class="text-[13.5px] font-semibold text-white">
                                ELD setup
                            </label>
                        </div>

                        <div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
                            <button v-for="option in eldOptions" :key="option.value" type="button" @click="eldVal = option.value"
                                class="eld-option rounded-[9px] border px-1.5 py-2.5 text-center text-xs font-semibold leading-[1.3] transition duration-200"
                                :class="eldVal === option.value ? 'eld-option-active' : ''" :aria-pressed="eldVal === option.value">
                                <span v-html="option.label"/>
                            </button>
                        </div>

                        <p class="mt-1.5 text-xs text-[#91a0b5]">
                            Age and type of your current ELD / logging setup
                        </p>
                    </div>
                </div>

                <!-- RESULT -->
                <div class="audit-panel flex flex-col items-center overflow-hidden rounded-[14px] border p-5 text-center sm:p-8">
                    <span class="mb-1.5 text-xs uppercase tracking-[.14em] text-[#aab8ca]">
                        Compliance Risk Score
                    </span>

                    <!-- Gauge -->
                    <svg class="gauge" viewBox="0 0 280 160" role="img" :aria-label="`Compliance risk score ${score} out of 100`">
                        <defs>
                            <linearGradient id="auditGaugeTrack" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stop-color="#203b55"/>
                                <stop offset="100%" stop-color="#294966"/>
                            </linearGradient>

                            <linearGradient id="auditGaugeProgress" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" :stop-color="riskColor"/>
                                <stop offset="100%" stop-color="#f4d078"/>
                            </linearGradient>
                        </defs>

                        <path class="gauge-track" d="M 20 140 A 120 120 0 0 1 260 140"/>

                        <path class="gauge-fill" d="M 20 140 A 120 120 0 0 1 260 140" :stroke="riskColor"
                                :stroke-dasharray="ARC_LEN" :stroke-dashoffset="gaugeOffset" />

                        <g class="needle" :style="{ transform: `rotate(${needleAngle}deg)` }">
                            <line x1="140" y1="140" x2="140" y2="42" stroke="#eaf7ff" stroke-width="4" stroke-linecap="round" />
                            <circle cx="140" cy="140" r="9" fill="#eaf7ff"/>
                            <circle cx="140" cy="140" r="4" fill="#64cde8"/>
                        </g>
                    </svg>

                    <!-- Score -->
                    <div class="-mt-16 text-[44px] font-bold tracking-[.01em] text-white">
                        {{ score }}
                        <span class="text-lg font-medium text-[#aab8ca]"> /100</span>
                    </div>

                    <!-- Risk -->
                    <div class="risk-tag my-2.5 rounded-full px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[.1em]" :style="riskTagStyle">
                        {{ riskTag }}
                    </div>

                    <!-- Recommendation -->
                    <div class="mt-1 w-full border-t border-white/10 pt-[18px] text-left">
                        <p class="mb-3.5 text-[13.5px] leading-[1.55] text-[#b0bdce]">{{ recommendation }}</p>

                        <div class="mb-5 flex flex-wrap gap-2">
                            <span v-for="chip in currentBand.chips" :key="chip"
                                class="service-chip rounded-[7px] border px-[11px] py-1.5 text-xs font-semibold text-[#e8eff8]">
                                {{ chip }}
                            </span>
                        </div>

                        <button @click="handleCta" type="button" class="cta-button flex w-full items-center justify-between
                                gap-3 rounded-[9px] px-[18px] py-3.5 text-[13px] font-bold uppercase tracking-[.03em]
                                text-[#211805] transition duration-200 hover:-translate-y-0.5 active:translate-y-px">
                            <span>{{ ctaText }}</span>
                            <svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="m9 5 7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <p class="mt-3.5 text-[11px] leading-[1.5] text-[#91a0b5]">
                            Estimate only, based on the details above — not an official FMCSA rating. A full Safety Audit gives you the exact picture.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <SafetyAuditDialog ref="dialog" />
    </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import {PhoneFilled, TopRight} from "@element-plus/icons-vue";
import router from "@/router/index.js";
import SafetyAuditDialog from "@/components/dialogs/SafetyAuditDialog.vue";

const dialog = ref(false)
const fleetSize = ref(12)
const violations = ref(2)
const audit = ref(8)
const eldVal = ref(8)

const ARC_LEN = 377

const eldOptions = [
    {
        value: 0,
        label: 'New<br>&lt; 1 yr'
    },
    {
        value: 8,
        label: '1–3 yrs'
    },
    {
        value: 20,
        label: '3+ yrs'
    },
    {
        value: 38,
        label: 'Paper logs'
    }
]

const BAND_COPY = {
    low: {
        tag: 'Low Risk',
        color: '#4fb37e',
        text:
            'Your fleet looks in solid shape. Keep the routine steady — a light Monitoring check-in will catch anything small before it grows.',
        chips: ['Monitoring']
    },

    medium: {
        tag: 'Medium Risk',
        color: '#e0a83e',
        text:
            "Your logbook history looks reasonable, but it's been a while since your last review — small issues may be building up unnoticed.",
        chips: ['Safety Audit', 'Monitoring']
    },

    high: {
        tag: 'High Risk',
        color: '#e0594a',
        text:
            'This combination of violations, review gap, and ELD setup is the profile we see right before a costly roadside or FMCSA finding. Worth a look this week.',
        chips: [
            'Safety Audit',
            '24/7 ELD Support',
            'Consulting Service'
        ]
    }
}

const score = computed(() => {
    let result = 0

    result += Math.min(violations.value * 7, 42)

    if (audit.value >= 12) {
        result += 22
    } else if (audit.value >= 6) {
        result += 12
    } else if (audit.value >= 3) {
        result += 5
    }

    result += eldVal.value

    return Math.max(
        2,
        Math.min(100, Math.round(result))
    )
})

const band = computed(() => {
    if (score.value <= 30) {
        return 'low'
    }

    if (score.value <= 62) {
        return 'medium'
    }

    return 'high'
})

const currentBand = computed(() => {
    return BAND_COPY[band.value]
})

const riskTag = computed(() => {
    return currentBand.value.tag
})

const riskColor = computed(() => {
    return currentBand.value.color
})

const recommendation = computed(() => {
    return currentBand.value.text
})

const needleAngle = computed(() => {
    return -90 + (score.value / 100) * 180
})

const gaugeOffset = computed(() => {
    return ARC_LEN - (ARC_LEN * score.value) / 100
})

const riskTagStyle = computed(() => {
    const color = riskColor.value

    return {
        color,
        backgroundColor: `${color}18`,
        border: `1px solid ${color}65`,
        boxShadow: `0 0 10px ${color}12`
    }
})

const ctaText = computed(() => {
    return band.value === 'high'
        ? 'Get My Free Safety Snapshot — Priority'
        : 'Get My Free Safety Snapshot'
})

function handleCta() {
    console.log('fleetSize', fleetSize.value)
    console.log('violations', violations.value)
    console.log('audit', audit.value)
    console.log('eldVal', eldVal.value)
    console.log('score', score.value)
    dialog.value.open(fleetSize.value, violations.value, audit.value, eldVal.value, score.value)
}
</script>

<style scoped>
/* Main panels */
.audit-panel {
    border-color: rgba(115, 159, 197, .28);
    background:
        radial-gradient(
            ellipse at 12% 0%,
            rgba(30, 94, 143, .2) 0%,
            transparent 48%
        ),
        linear-gradient(
            135deg,
            rgba(25, 43, 63, .94) 0%,
            rgba(18, 29, 44, .96) 55%,
            rgba(22, 30, 43, .95) 100%
        );
    box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, .035),
        0 12px 35px rgba(0, 0, 0, .2);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transition:
        border-color .25s ease,
        box-shadow .25s ease;
}

.audit-panel:hover {
    border-color: rgba(115, 180, 220, .38);
    box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, .045),
        0 14px 38px rgba(0, 0, 0, .24);
}

/* Range input */
.range-input {
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    height: 6px;
    border: 1px solid rgba(95, 151, 192, .3);
    border-radius: 999px;
    outline: none;
    background: linear-gradient(
        90deg,
        #142b42 0%,
        #1b3a55 50%,
        #172a40 100%
    );
    box-shadow: inset 0 0 4px rgba(0, 0, 0, .4);
    cursor: pointer;
    transition:
        border-color .25s ease,
        box-shadow .25s ease;
}

.range-input:hover {
    border-color: rgba(91, 191, 222, .55);
    box-shadow: 0 0 5px rgba(60, 175, 220, .1);
}

.range-input:focus-visible {
    box-shadow: 0 0 0 2px rgba(60, 175, 220, .13);
}

/* Chrome, Edge, Safari thumb */
.range-input::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    width: 19px;
    height: 19px;
    margin-top: -1px;
    border: 2px solid #d7f5ff;
    border-radius: 50%;
    background: radial-gradient(
        circle at 35% 30%,
        #f4ffff 0%,
        #a6e8f2 32%,
        #55b9d5 75%,
        #3288b2 100%
    );
    box-shadow:
        0 0 0 3px rgba(66, 183, 218, .08),
        0 0 6px rgba(66, 183, 218, .28);
    cursor: grab;
    transition:
        box-shadow .2s ease,
        transform .2s ease;
}

.range-input::-webkit-slider-thumb:hover {
    box-shadow:
        0 0 0 3px rgba(66, 183, 218, .12),
        0 0 9px rgba(66, 183, 218, .4);
}

.range-input::-webkit-slider-thumb:active {
    cursor: grabbing;
    transform: scale(1.08);
}

/* Firefox thumb */
.range-input::-moz-range-thumb {
    width: 15px;
    height: 15px;
    border: 2px solid #d7f5ff;
    border-radius: 50%;
    background: radial-gradient(
        circle at 35% 30%,
        #f4ffff 0%,
        #a6e8f2 32%,
        #55b9d5 75%,
        #3288b2 100%
    );
    box-shadow: 0 0 6px rgba(66, 183, 218, .28);
    cursor: grab;
}

.range-input::-moz-range-thumb:active {
    cursor: grabbing;
}

/* ELD options */
.eld-option {
    min-height: 44px;
    border-color: rgba(111, 147, 180, .23);
    background: linear-gradient(
        145deg,
        rgba(29, 48, 68, .92),
        rgba(23, 36, 53, .96)
    );
    color: #aab8ca;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .025);
}

.eld-option:hover {
    border-color: rgba(219, 165, 63, .55);
    background: linear-gradient(
        145deg,
        rgba(46, 55, 65, .96),
        rgba(30, 39, 51, .98)
    );
    color: #f3f1ea;
}

.eld-option-active {
    border-color: rgba(219, 165, 63, .9);
    background: linear-gradient(
        135deg,
        rgba(219, 165, 63, .18),
        rgba(219, 165, 63, .07)
    );
    color: #f0c66f;
    box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, .045),
        0 0 0 1px rgba(219, 165, 63, .07);
}

/* Gauge */
.gauge {
    width: 100%;
    max-width: 280px;
    height: auto;
    overflow: visible;
}

.gauge-track {
    fill: none;
    stroke: url(#auditGaugeTrack);
    stroke-width: 14;
    stroke-linecap: round;
}

.gauge-fill {
    fill: none;
    stroke-width: 14;
    stroke-linecap: round;
    filter: drop-shadow(0 0 4px rgba(100, 190, 220, .16));
    transition:
        stroke .3s ease,
        stroke-dashoffset .4s ease;
}

.gauge-fill[stroke="#4fb37e"] {
    filter: drop-shadow(0 0 4px rgba(79, 179, 126, .25));
}

.gauge-fill[stroke="#e0a83e"] {
    filter: drop-shadow(0 0 4px rgba(224, 168, 62, .25));
}

.gauge-fill[stroke="#e0594a"] {
    filter: drop-shadow(0 0 4px rgba(224, 89, 74, .25));
}

.needle {
    transform-origin: 140px 140px;
    filter: drop-shadow(0 0 3px rgba(100, 200, 255, .2));
    transition: transform .7s cubic-bezier(.34, 1.56, .64, 1);
}

/* Recommendation chips */
.service-chip {
    border-color: rgba(112, 147, 179, .24);
    background: linear-gradient(
        135deg,
        rgba(31, 49, 68, .94),
        rgba(24, 37, 54, .96)
    );
}

/* CTA button */
.cta-button {
    border: 1px solid rgba(255, 221, 143, .72);
    background: linear-gradient(
        180deg,
        #f1ca70 0%,
        #e3b14c 52%,
        #d39a32 100%
    );
    box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, .24),
        0 3px 12px rgba(219, 165, 63, .13);
}

.cta-button:hover {
    border-color: rgba(255, 230, 169, .95);
    background: linear-gradient(
        180deg,
        #ffdc85 0%,
        #efbd59 52%,
        #dda33b 100%
    );
    box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, .3),
        0 5px 16px rgba(219, 165, 63, .22);
}

.cta-button:focus-visible {
    outline: 2px solid rgba(255, 218, 130, .8);
    outline-offset: 3px;
}

.cta-button:active {
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, .12);
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
    .needle,
    .gauge-fill,
    .range-input,
    .range-input::-webkit-slider-thumb,
    .audit-panel,
    .eld-option,
    .cta-button {
        transition: none;
    }
}
</style>