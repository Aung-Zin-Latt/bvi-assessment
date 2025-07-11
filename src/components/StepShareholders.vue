<template>
    <!-- Fix width container to match parent layout -->
    <div class="max-w-4xl w-full mx-auto space-y-10 text-white">
        <!-- Step Header -->
        <div class="text-center">
            <h1 class="text-3xl font-bold">Shareholders</h1>
            <p class="text-sm mt-2 text-gray-300">
                Please provide details of all shareholders. You can add more than one if necessary.
            </p>
        </div>

        <!-- Shareholder Cards -->
        <div class="space-y-6">
            <div v-for="(shareholder, index) in shareholders" :key="index"
                class="border border-gray-700 p-6 rounded-lg space-y-4 bg-gray-900">
                <div class="flex justify-between items-center">
                    <h2 class="text-lg font-semibold">Shareholder {{ index + 1 }}</h2>
                    <button v-if="shareholders.length > 1" @click="removeShareholder(index)" class="text-red-400 hover:underline text-sm">Remove</button>
                </div>

                <div class="space-y-4">
                    <input v-model="shareholder.fullName" class="w-full p-2 rounded bg-gray-800 border border-gray-600" placeholder="Full name" />
                    <input v-model="shareholder.nationality" class="w-full p-2 rounded bg-gray-800 border border-gray-600" placeholder="Nationality" />
                    <input v-model="shareholder.address" class="w-full p-2 rounded bg-gray-800 border border-gray-600" placeholder="Residential address" />
                    <input v-model.number="shareholder.percentage" type="number" min="0" max="100" class="w-full p-2 rounded bg-gray-800 border border-gray-600" placeholder="Shareholding %" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Shareholder {
    fullName: string
    nationality: string
    address: string
    percentage: number | null
}

const shareholders = ref<Shareholder[]>([
    {
        fullName: '',
        nationality: '',
        address: '',
        percentage: null,
    },
])

function addShareholder() {
    shareholders.value.push({
        fullName: '',
        nationality: '',
        address: '',
        percentage: null,
    })
}

function removeShareholder(index: number) {
    shareholders.value.splice(index, 1)
}

function validateShareholders() {
    const allValid = shareholders.value.every(
        (s) => s.fullName && s.nationality && s.address && s.percentage !== null
    )

    const totalPercentage = shareholders.value.reduce(
        (sum, s) => sum + (s.percentage || 0),
        0
    )

    if (!allValid) {
        alert('Please complete all fields for each shareholder.')
        return
    }

    if (totalPercentage !== 100) {
        alert('Total shareholding percentage must equal 100%.')
        return
    }

    console.log('Valid shareholders:', shareholders.value)
}
</script>

<style scoped>
input[type='radio'] {
    accent-color: #8b5cf6;
}
</style>
