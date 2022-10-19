<script setup lang="ts">
import {ref} from "vue"


const props = defineProps({to: {default: "/"}, "message": {}})
const to = ref(props.to)
const message = ref(props.message)

</script>

<template>
  <li>
    <router-link
        :to="to"
        class="flex p-2 text-base font-normal text-gray-900 text-right justify-end
        rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700 h-10">
      <span class="">{{ message }}</span>
    </router-link>
  </li>
</template>