<script setup lang="ts">
import SideBar from "./components/SideBar.vue";
import Main from "./components/Main.vue";</script>

<template>
  <div id="app" class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
    <Main/>
    <SideBar/>
  </div>
</template>
