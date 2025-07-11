<template>
  <div class="max-w-4xl w-full mx-auto space-y-10 text-white">
        <!-- Step Header -->
        <div class="text-center">
            <h1 class="text-3xl font-bold">Beneficial Owner</h1>
            <p class="text-sm mt-2 text-gray-300">
                Enter the details of the ultimate beneficial owner of the company.
            </p>
        </div>

        <div class="border border-gray-700 p-6 rounded-lg space-y-4 bg-gray-900">
            <input v-model="form.fullName" class="w-full p-2 rounded bg-gray-800 border border-gray-600" placeholder="Full name" />

            <input v-model="form.dob" class="w-full p-2 rounded bg-gray-800 border border-gray-600" placeholder="Date of Birth" type="date" />

            <input v-model="form.nationality" class="w-full p-2 rounded bg-gray-800 border border-gray-600" placeholder="Nationality" />

            <input v-model="form.countryOfResidence" class="w-full p-2 rounded bg-gray-800 border border-gray-600" placeholder="Country of Residence" />

            <textarea v-model="form.address" class="w-full p-2 rounded bg-gray-800 border border-gray-600" placeholder="Residential address" rows="3"></textarea>

            <div>
                <label class="block mb-2 text-sm font-medium">Ownership Type</label>
                <div class="flex space-x-6">
                    <label class="flex items-center space-x-2">
                        <input type="radio" value="Direct" v-model="form.ownershipType" />
                        <span>Direct</span>
                    </label>
                    <label class="flex items-center space-x-2">
                        <input type="radio" value="Indirect" v-model="form.ownershipType" />
                        <span>Indirect</span>
                    </label>
                    <label class="flex items-center space-x-2">
                        <input type="radio" value="Both" v-model="form.ownershipType" />
                        <span>Both</span>
                    </label>
                </div>
            </div>

            <input v-model.number="form.ownershipPercentage" class="w-full p-2 rounded bg-gray-800 border border-gray-600" placeholder="Ownership % (optional)" type="number" min="0" max="100" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
    fullName: '',
    dob: '',
    nationality: '',
    countryOfResidence: '',
    address: '',
    ownershipType: '',
    ownershipPercentage: null as number | null,
})

function validate() {
    const { fullName, dob, nationality, countryOfResidence, address, ownershipType } = form.value

    if (!fullName || !dob || !nationality || !countryOfResidence || !address || !ownershipType) {
        alert('Please fill in all required fields.')
        return
    }

    if (form.value.ownershipPercentage && (form.value.ownershipPercentage < 0 || form.value.ownershipPercentage > 100)) {
        alert('Ownership percentage must be between 0 and 100.')
        return
    }

    console.log('Beneficial owner info:', form.value)
    // Move to next step (emit or route)
}
</script>

<style scoped>
input[type="radio"] {
    accent-color: #8b5cf6;
}
</style>