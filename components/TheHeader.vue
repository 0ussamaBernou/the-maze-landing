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
      <div class="flex items-center gap-4 justify-center">
        <a href="https://github.com/0ussamaBernou/the-maze" target="_blank">
<Icon name="uil:github" style="color: black" size="30"/>
        </a>
          <select v-model="colorMode.preference"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
      </div>
    </div>
  </header>
</template>
