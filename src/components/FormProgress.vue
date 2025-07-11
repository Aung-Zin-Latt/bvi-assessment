<template>
  <div class="flex justify-center items-center space-x-6 my-6">
    <template v-for="(item, index) in steps" :key="index">
      <div class="flex items-center space-x-2">
        <div
          class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
          :class="step === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'"
        >
          {{ index + 1 }}
        </div>
        <span v-if="step === index + 1" class="text-white text-sm hidden md:inline">{{ item }}</span>
      </div>
      <div v-if="index < steps.length - 1" class="w-6 h-1 bg-gray-500 rounded"></div>
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  step: number
}>()

const steps = ['Company Details', 'Shareholders', 'Beneficial Owner', 'Director']
</script>