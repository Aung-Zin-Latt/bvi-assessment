<template>
    <div class="min-h-screen flex flex-col bg-[#0E0E2C] text-white px-6 py-12">
        <div class="flex-1 max-w-4xl w-full mx-3 min-w-[300px] sm:min-w-[600px] md:min-w-[900px] mx-auto">
            <!-- Top Header -->
            <div class="text-center mb-10">
                <h1 class="text-3xl font-bold">Time to start your BVI company!</h1>
                <p class="text-sm mt-2 text-gray-300 max-w-2xl mx-auto">
                    All questions below must be answered. Take your time, and if you need to take a break, the form will
                    save automatically and you can continue later. Good luck!
                </p>
            </div>

            <!-- Progress Stepper -->
            <FormProgress :step="currentStep" />

            <!-- Step Body -->
            <div class="mt-8 space-y-6">
                <StepCompanyDetails v-if="currentStep === 1" />
                <StepShareholders v-if="currentStep === 2" />
                <StepBeneficialOwner v-if="currentStep === 3" />
                <StepDirector v-if="currentStep === 4" />
            </div>
        </div>

        <!-- Sticky Footer Buttons -->
        <div
            class="mt-10 border-t border-gray-700 pt-6 max-w-4xl w-full mx-auto min-w-[300px] sm:min-w-[600px] md:min-w-[900px] flex flex-row items-center justify-between gap-2">
            <!-- Back Button -->
            <button @click="goBack"
                class="w-1/4 sm:w-40 px-2 py-2 bg-gray-800 border border-gray-600 text-white flex justify-center items-center cursor-pointer"
                :disabled="currentStep === 1">
                <span class="hidden sm:inline">← BACK</span>
                <span class="inline sm:hidden text-xs">←</span>
            </button>

            <!-- Save & Exit -->
            <button @click="saveAndExit"
                class="w-1/3 sm:w-48 px-4 py-2 border bg-gray-800 border-gray-600 text-white text-center cursor-pointer text-xs sm:text-base">
                SAVE & EXIT
            </button>

            <!-- Next Button -->
            <button @click="goNext"
                class="w-1/4 sm:w-40 px-2 py-2 bg-blue-600 hover:bg-blue-500 text-white flex justify-center items-center cursor-pointer">
                <span class="hidden sm:inline">{{ currentStep === 4 ? 'SUBMIT' : 'NEXT →' }}</span>
                <span class="inline sm:hidden text-xs">→</span>
            </button>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'

// Step Components
import StepCompanyDetails from '@/components/StepCompanyDetails.vue'
import StepShareholders from '@/components/StepShareholders.vue'
import StepBeneficialOwner from '@/components/StepBeneficialOwner.vue'
import StepDirector from '@/components/StepDirector.vue'
import FormProgress from '@/components/FormProgress.vue'

// Track step
const currentStep = ref(1)

function goNext() {
    if (currentStep.value < 4) {
        currentStep.value++
    } else {
        alert('🎉 Form submitted successfully!')
    }
}

function goBack() {
    if (currentStep.value > 1) {
        currentStep.value--
    }
}

function saveAndExit() {
    alert('Your progress has been saved. You can continue later.')
}
</script>