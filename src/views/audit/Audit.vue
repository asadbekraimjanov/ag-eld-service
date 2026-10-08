<template>
    <div class="min-h-[100vh] w-full bg-gray-300 px-4 py-5 text-[#f3f1ea] sm:px-8 sm:py-10">
        <div class="mx-auto max-w-[1040px]">
            <span
                class="mb-[18px] inline-flex items-center gap-2 rounded-full border border-[#dba53f]/35 bg-[#dba53f]/10 px-3 py-1.5 text-xs uppercase tracking-[.16em] text-[#dba53f]">
            <span class="h-1.5 w-1.5 rounded-full bg-[#dba53f] shadow-[0_0_0_3px_rgba(219,165,63,.25)]"/>
                Free Tool
            </span>
            <h1 class="mb-3 max-w-3xl text-3xl font-semibold leading-[1.08] sm:text-[42px] text-gray-800">
                How audit-ready is
                <span class="text-[#dba53f]">your fleet</span>,
                right now?
            </h1>
            <p class="mb-9 max-w-[600px] text-base leading-[1.6] text-[#8b93a3]">
                Answer four questions about your operation. We'll estimate your
                compliance risk the same way our Safety Audit team does on day one —
                before you spend a dollar on a full review.
            </p>

            <div class="grid gap-5 md:grid-cols-[1.05fr_.95fr]">
                <!-- FORM -->
                <div class="rounded-[14px] border border-[#2a3242] bg-[#161c26] p-5 sm:p-8">
                    <!-- Fleet size -->
                    <div class="mb-[22px]">
                        <div class="mb-2.5 flex items-baseline justify-between">
                            <label for="fleetSize" class="text-[13.5px] font-semibold">Fleet size</label>
                            <span class="text-[15px] text-[#dba53f]">
                                {{ fleetSize }}
                                {{ fleetSize === 1 ? 'truck' : 'trucks' }}
                            </span>
                        </div>

                        <input id="fleetSize" v-model.number="fleetSize" type="range" min="1" max="150" step="1" class="range-input" />
                        <p class="mt-1.5 text-xs text-[#5b6474]">Number of trucks currently active on your DOT number</p>
                    </div>

                    <!-- Violations -->
                    <div class="mb-[22px]">
                        <div class="mb-2.5 flex items-baseline justify-between">
                            <label for="violations" class="text-[13.5px] font-semibold">
                                HOS / ELD violations, last 12 months
                            </label>
                            <span class="text-[15px] text-[#dba53f]">{{ violations }}</span>
                        </div>
                        <input id="violations" v-model.number="violations" type="range" min="0" max="20" step="1" class="range-input"/>
                        <p class="mt-1.5 text-xs text-[#5b6474]">Include logbook edits flagged in roadside inspections</p>
                    </div>

                    <!-- Audit -->
                    <div class="mb-[22px]">
                        <div class="mb-2.5 flex items-baseline justify-between">
                            <label for="audit" class="text-[13.5px] font-semibold">Months since last safety audit</label>
                            <span class="text-[15px] text-[#dba53f]">{{ audit }} mo</span>
                        </div>
                        <input id="audit" v-model.number="audit" type="range" min="0" max="36" step="1" class="range-input"/>

                        <p class="mt-1.5 text-xs text-[#5b6474]">Internal review or FMCSA compliance review — whichever was last</p>
                    </div>

                    <!-- ELD -->
                    <div>
                        <div class="mb-2.5">
                            <label class="text-[13.5px] font-semibold">
                                ELD setup
                            </label>
                        </div>

                        <div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
                            <button
                                v-for="option in eldOptions"
                                :key="option.value"
                                type="button"
                                class="rounded-[9px] border border-[#2a3242] bg-[#1e2532] px-1.5 py-2.5 text-center text-xs font-semibold leading-[1.3] text-[#8b93a3] transition hover:border-[#8a6b2c] hover:text-[#f3f1ea]"
                                :class="
                  eldVal === option.value
                    ? 'border-[#dba53f]! bg-[#dba53f]/10! text-[#dba53f]!'
                    : ''
                "
                                @click="eldVal = option.value"
                            >
                                <span v-html="option.label"/>
                            </button>
                        </div>

                        <p class="mt-1.5 text-xs text-[#5b6474]">
                            Age and type of your current ELD / logging setup
                        </p>
                    </div>
                </div>

                <!-- RESULT -->
                <div class="flex flex-col items-center overflow-hidden rounded-[14px] border border-[#2a3242] bg-[#161c26] p-5 text-center sm:p-8">
                    <span class="mb-1.5 text-xs uppercase tracking-[.14em] text-[#5b6474]">Compliance Risk Score</span>
                    <!-- Gauge -->
                    <svg class="gauge" viewBox="0 0 280 160">
                        <path class="fill-none stroke-[#1e2532] stroke-[14]" d="M 20 140 A 120 120 0 0 1 260 140"/>
                        <path class="gauge-fill" d="M 20 140 A 120 120 0 0 1 260 140" :stroke="riskColor" :stroke-dasharray="ARC_LEN" :stroke-dashoffset="gaugeOffset"/>
                        <g class="needle" :style="{ transform: `rotate(${needleAngle}deg)` }">
                            <line x1="140" y1="140" x2="140" y2="42" stroke="#f3f1ea" stroke-width="4" stroke-linecap="round"/>
                            <circle cx="140" cy="140" r="9" fill="#f3f1ea"/>
                        </g>
                    </svg>
                    <!-- Score -->
                    <div class="-mt-16 text-[44px] font-bold tracking-[.01em]">
                        {{ score }}
                        <span class="text-lg font-medium text-[#8b93a3]"> /100</span>
                    </div>
                    <!-- Risk -->
                    <div class="my-2.5 rounded-full px-4 py-1.5 text-[13px] uppercase tracking-[.1em]" :style="riskTagStyle">
                        {{ riskTag }}
                    </div>
                    <!-- Recommendation -->
                    <div class="mt-1 w-full border-t border-[#2a3242] pt-[18px] text-left">
                        <p class="mb-3.5 text-[13.5px] leading-[1.55] text-[#8b93a3]">{{ recommendation }}</p>
                        <div class="mb-5 flex flex-wrap gap-2">
                            <span v-for="chip in currentBand.chips" :key="chip" class="rounded-[7px] border border-[#2a3242]
                                    bg-[#1e2532] px-[11px] py-1.5 text-xs font-semibold text-[#f3f1ea]">{{ chip }}</span>
                        </div>

                        <button @click="handleCta" type="button" class="w-full rounded-[9px] bg-[#dba53f] px-[18px] py-3.5
                                text-[14.5px] font-semibold uppercase tracking-[.03em] text-[#14100a] transition hover:brightness-110 active:translate-y-px">
                            {{ ctaText }}
                        </button>
                        <p class="mt-3.5 text-[11px] leading-[1.5] text-[#5b6474]">
                            Estimate only, based on the details above — not an official FMCSA
                            rating. A full Safety Audit gives you the exact picture.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed, ref} from 'vue'

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
        backgroundColor: `${color}29`,
        border: `1px solid ${color}73`
    }
})

const ctaText = computed(() => {
    return band.value === 'high'
        ? 'Get My Free Safety Snapshot — Priority'
        : 'Get My Free Safety Snapshot'
})

function handleCta() {
    alert('This would open your Get Started / contact form.')
}
</script>

<style scoped>
.gauge {
    width: 100%;
    max-width: 280px;
    height: auto;
}

.gauge-fill {
    fill: none;
    stroke-width: 14;
    stroke-linecap: round;
    transition: stroke 0.3s ease,
    stroke-dashoffset 0.3s ease;
}

.needle {
    transform-origin: 140px 140px;
    transition: transform 0.7s cubic-bezier(.34, 1.56, .64, 1);
}

.range-input {
    appearance: none;
    width: 100%;
    height: 6px;
    border: 1px solid #2a3242;
    border-radius: 999px;
    outline: none;
    background: #1e2532;
}

.range-input::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    margin-top: -1px;
    border: 3px solid #0d1117;
    border-radius: 50%;
    background: #dba53f;
    box-shadow: 0 0 0 1px #dba53f;
    cursor: pointer;
}

.range-input::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border: 3px solid #0d1117;
    border-radius: 50%;
    background: #dba53f;
    box-shadow: 0 0 0 1px #dba53f;
    cursor: pointer;
}

@media (prefers-reduced-motion: reduce) {
    .needle,
    .gauge-fill {
        transition: none;
    }
}
</style>
