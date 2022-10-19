<script setup lang="ts">
</script>
<template>
  <main class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
    <div class="main-content flex flex-col flex-grow p-4 pt-0">
      <div class="flex flex-col flex-grow border-2 border-gray-200  bg-white rounded mt-4">
        <router-view :key="$route.path"></router-view>
      </div>
    </div>
  </main>
</template>