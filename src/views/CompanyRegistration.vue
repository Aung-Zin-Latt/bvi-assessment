<template>
    <div class="min-h-screen bg-[#0E0E2C] text-white px-6 py-12 md:px-20">
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

        <!-- Footer Buttons -->
        <div class="flex mt-10 space-x-4 items-center">
            <button @click="goBack" class="px-4 w-40 bg-gray-800 border border-gray-600 text-gray-800" :disabled="currentStep === 1">← BACK</button>
            <button @click="saveAndExit" class="flex-1 text-sm text-gray-400 text-center">SAVE & EXIT</button>
            <button @click="goNext" class="px-6 w-40 bg-purple-600 hover:bg-purple-500 text-gray-800">{{ currentStep === 4 ? 'SUBMIT' : 'NEXT →' }}</button>
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
        // Submit logic
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