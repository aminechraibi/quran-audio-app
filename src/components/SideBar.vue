<script setup lang="ts">
import SideLink from "./SideLink.vue";

const quranData: any = inject('quranData')
const baseUrl = import.meta.env.BASE_URL
</script>

<template>
  <aside
      class="h-screen sticky top-0 right-0 sidebar md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-gray-50"
      aria-label="Sidebar">
    <div
        class="flex items-center justify-end
                ml-2 !pt-3 !pb-3 w-[250px] mr-3
                p-2 font-normal text-gray-900">
      <h2 class="text-xl mt-0 pl-2">القرآن الكريم</h2>
    </div>
    <hr>
    <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
      <ul class="space-y-2">
        <SideLink :key="data.id" :to="baseUrl + 'readers/' + data.id" v-for="data in quranData"
                  :message="data.reader"></SideLink>
      </ul>
    </div>
  </aside>
</template>