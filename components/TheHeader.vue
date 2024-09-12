<script lang="ts" setup>
const colorMode = useColorMode()
</script>
<template>
    <header class="bg-white rounded-lg shadow m-4 dark:bg-gray-800 z-10">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">The Maze</span>
    </a>
  <div>
    <p class="p-4 pb-2">
      <select
        v-model="colorMode.preference"
        class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </p>
        </div>
        </div>
    </header>
</template>
