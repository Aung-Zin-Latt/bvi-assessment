<template>
    <div class="max-w-4xl w-full mx-auto space-y-10 text-white">
        <!-- Point of Contact -->
        <section>
            <!-- Header with blue line -->
            <div class="mb-6">
                <h2 class="text-lg font-semibold text-left">Point of contact</h2>
                <hr class="mt-2 border-t-2 border-blue-500 w-full" />
            </div>

            <!-- Two-column layout -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <p class="text-sm text-gray-400 text-left">
                        This is the individual that we will communicate with. Communications related to this form but
                        also to
                        the company once incorporated will be sent to the same email address.
                    </p>
                </div>
                <div class="space-y-4">
                    <div>
                        <label class="block mb-1 text-left">Full name</label>
                        <FormInput v-model="form.fullName" type="text" placeholder="Full name" />
                    </div>
                    <div>
                        <label class="block mb-1 text-left">Email</label>
                        <FormInput v-model="form.email" type="email" placeholder="Email address" @blur="validateEmail"
                            :class="emailValid === false ? 'border-red-500' : emailValid ? 'border-green-500' : 'border-gray-600'" />
                        <p v-if="emailValid === false" class="text-red-400 text-sm mt-1">
                            The email suggested is not valid. Please provide another one.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Company Information -->
        <section>
            <div class="mb-6">
                <h2 class="text-lg font-semibold text-left">Company information</h2>
                <hr class="mt-2 border-t-2 border-blue-500 w-full" />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div></div>
                <div class="space-y-4">
                    <FormInput v-model="form.companyName" placeholder="Company name" />
                    <FormInput v-model="form.alternativeName" placeholder="Alternative company name" />
                    <select v-model="form.designation" class="w-full p-2 rounded bg-gray-800 border border-gray-600">
                        <option value="" disabled>Select the option that you prefer</option>
                        <option value="LTD">LTD</option>
                        <option value="LLC">LLC</option>
                    </select>
                </div>
            </div>
        </section>

        <!-- Countries of Interest -->
        <section>
            <div class="mb-6">
                <h2 class="text-lg font-semibold text-left">Countries of interest</h2>
                <hr class="mt-2 border-t-2 border-blue-500 w-full" />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div></div>
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
        </section>

        <!-- Shares Structure -->
        <section>
            <div class="mb-6">
                <h2 class="text-lg font-semibold text-left">Shares structure</h2>
                <hr class="mt-2 border-t-2 border-blue-500 w-full" />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div></div>
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

                    <FormInput v-model="form.issuedShares" type="number" placeholder="Write how many shares you wish to issue on day 1" />

                    <select v-model="form.valuePerShare" class="w-full p-2 rounded bg-gray-800 border border-gray-600">
                        <option value="" disabled>Select how much each share is worth</option>
                        <option value="1">1 USD</option>
                        <option value="10">10 USD</option>
                    </select>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FormInput from '@/components/FormInput.vue'

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