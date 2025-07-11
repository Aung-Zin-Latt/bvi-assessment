<template>
  <div class="max-w-4xl w-full mx-auto space-y-10 text-white">
        <!-- Step Header -->
        <div class="text-center">
            <h1 class="text-3xl font-bold">Director</h1>
            <p class="text-sm mt-2 text-gray-300">
                Enter the details of the company director(s). At least one is required.
            </p>
        </div>

        <div v-for="(director, index) in directors" :key="index"
            class="border border-gray-700 p-6 rounded-lg space-y-4 bg-gray-900">
            <div class="flex justify-between items-center">
                <h2 class="text-lg font-semibold">Director {{ index + 1 }}</h2>
                <button v-if="directors.length > 1" @click="removeDirector(index)"
                    class="text-red-400 hover:underline text-sm">
                    Remove
                </button>
            </div>

            <input v-model="director.fullName" class="w-full p-2 rounded bg-gray-800 border border-gray-600" placeholder="Full name" />

            <input v-model="director.dob" class="w-full p-2 rounded bg-gray-800 border border-gray-600" type="date" placeholder="Date of Birth" />

            <input v-model="director.nationality" class="w-full p-2 rounded bg-gray-800 border border-gray-600" placeholder="Nationality" />

            <input v-model="director.countryOfResidence" class="w-full p-2 rounded bg-gray-800 border border-gray-600" placeholder="Country of Residence" />

            <textarea v-model="director.address" class="w-full p-2 rounded bg-gray-800 border border-gray-600" placeholder="Residential address" rows="3"></textarea>

            <select v-model="director.role" class="w-full p-2 rounded bg-gray-800 border border-gray-600">
                <option value="" disabled>Select role (optional)</option>
                <option value="Managing Director">Managing Director</option>
                <option value="Director">Director</option>
            </select>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Director {
    fullName: string
    dob: string
    nationality: string
    countryOfResidence: string
    address: string
    role: string
}

const directors = ref<Director[]>([
    {
        fullName: '',
        dob: '',
        nationality: '',
        countryOfResidence: '',
        address: '',
        role: '',
    },
])

function addDirector() {
    directors.value.push({
        fullName: '',
        dob: '',
        nationality: '',
        countryOfResidence: '',
        address: '',
        role: '',
    })
}

function removeDirector(index: number) {
    directors.value.splice(index, 1)
}

function validateDirectors() {
    const allValid = directors.value.every((d) =>
        d.fullName && d.dob && d.nationality && d.countryOfResidence && d.address
    )

    if (!allValid) {
        alert('Please fill in all required fields for each director.')
        return
    }

    // Submit or move to confirmation step
    console.log('Directors:', directors.value)
}
</script>

<style scoped>
input[type="radio"] {
    accent-color: #8b5cf6;
}
</style>