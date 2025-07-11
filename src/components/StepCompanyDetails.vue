<template>
    <div class="space-y-10 text-white">
        <!-- Point of Contact -->
        <div>
            <h2 class="text-lg font-semibold">Point of contact</h2>
            <p class="text-sm text-gray-400 mb-4">
                This is the individual that we will communicate with. Communications related to this form but also to
                the company once incorporated will be sent to the same email address.
            </p>
            <div class="space-y-4">
                <div>
                    <label class="block mb-1">Full name</label>
                    <input v-model="form.fullName" class="w-full p-2 rounded bg-gray-800 border border-gray-600" type="text" placeholder="Full name" />
                </div>

                <div>
                    <label class="block mb-1">Email</label>
                    <input
                        v-model="form.email"
                        class="w-full p-2 rounded bg-gray-800 border"
                        :class="emailValid === false ? 'border-red-500' : emailValid ? 'border-green-500' : 'border-gray-600'"
                        type="email" placeholder="Email address" @blur="validateEmail"
                    />
                    <p v-if="emailValid === false" class="text-red-400 text-sm mt-1">The email suggested is not valid. Please provide another one.</p>
                </div>
            </div>
        </div>

        <!-- Company Information -->
        <div>
            <h2 class="text-lg font-semibold">Company information</h2>
            <div class="space-y-4">
                <input v-model="form.companyName" class="w-full p-2 rounded bg-gray-800 border border-gray-600" placeholder="Company name" />
                <input v-model="form.alternativeName" class="w-full p-2 rounded bg-gray-800 border border-gray-600" placeholder="Alternative company name" />
                <select v-model="form.designation" class="w-full p-2 rounded bg-gray-800 border border-gray-600">
                    <option value="" disabled>Select the option that you prefer</option>
                    <option value="LTD">LTD</option>
                    <option value="LLC">LLC</option>
                </select>
            </div>
        </div>

        <!-- Countries of Interest -->
        <div>
            <h2 class="text-lg font-semibold">Countries of interest</h2>
            <div class="space-y-4">
                <select v-model="form.jurisdiction" class="w-full p-2 rounded bg-gray-800 border border-gray-600">
                    <option value="" disabled>Select the country where you are located</option>
                    <option value="SG">Singapore</option>
                    <option value="US">United States</option>
                </select>
                <select v-model="form.targetJurisdictions" multiple class="w-full p-2 rounded bg-gray-800 border border-gray-600">
                    <option value="SG">Singapore</option>
                    <option value="UK">United Kingdom</option>
                </select>
            </div>
        </div>

        <!-- Shares Structure -->
        <div>
            <h2 class="text-lg font-semibold">Shares structure</h2>
            <div class="space-y-4">
                <select v-model="form.numberOfShares" class="w-full p-2 rounded bg-gray-800 border border-gray-600">
                    <option value="" disabled>Select how many shares you wish to have</option>
                    <option value="1">1</option>
                    <option value="10">10</option>
                    <option value="100">100</option>
                </select>

                <div class="flex items-center space-x-4">
                    <label class="flex items-center space-x-2">
                        <input type="radio" value="yes" v-model="form.allSharesIssued" />
                        <span>Yes</span>
                    </label>
                    <label class="flex items-center space-x-2">
                        <input type="radio" value="no" v-model="form.allSharesIssued" />
                        <span>No</span>
                    </label>
                </div>

                <input v-model="form.issuedShares" class="w-full p-2 rounded bg-gray-800 border border-gray-600" type="number" placeholder="Write how many shares you wish to issue on day 1" />

                <select v-model="form.valuePerShare" class="w-full p-2 rounded bg-gray-800 border border-gray-600">
                    <option value="" disabled>Select how much each share is worth</option>
                    <option value="1">1 USD</option>
                    <option value="10">10 USD</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
    fullName: '',
    email: '',
    companyName: '',
    alternativeName: '',
    designation: '',
    jurisdiction: '',
    targetJurisdictions: [] as string[],
    numberOfShares: '',
    allSharesIssued: '',
    issuedShares: '',
    valuePerShare: ''
})

const emailValid = ref<boolean | null>(null)

function validateEmail() {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    emailValid.value = pattern.test(form.value.email)
}
</script>

<style scoped>
input[type="radio"] {
    accent-color: #8b5cf6;
}
</style>