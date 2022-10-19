<script setup lang="ts">


import AudioCard from "../../components/AudioCard.vue";
//@ts-ignore
import * as Amplitude from 'amplitudejs'


let showLoader = ref(true)


const route = useRoute('/quran-audio-app/readers/[id]')
const quranData: any = inject('quranData')
onUnmounted(() => {
  Amplitude.stop()
})
const formContainer = ref<any>(null);

onMounted(() => {
  let audios = quranData[parseInt(route.params.id) - 1].audios
  let songs = audios.map((e: any) => {
    return {
      "url": e.urls[0],
      "name": String(e.id).padStart(3, '0')
    }
  })
  //@ts-ignore
  Amplitude.init({
    "bindings": {
      37: 'prev',
      39: 'next',
      32: 'play_pause'
    },
    "callbacks": {
      initialized: function () {
        const element = "player-index-0"
        let elementById = document.getElementById(element);
        elementById?.classList.add('ring-1');
        elementById?.classList.add('ring-blue-300');
        setTimeout(function () {
          showLoader.value = false;
        }, 1000)
      },
      timeupdate: function () {
        //@ts-ignore
        let percentage = Amplitude.getSongPlayedPercentage();

        if (isNaN(percentage)) {
          percentage = 0;
        }

        /**
         * Massive Help from: https://nikitahl.com/style-range-input-css
         */
        let slider: HTMLElement | null = document
            .querySelector('.amplitude-song-slider[data-amplitude-song-index="' + Amplitude.getActiveIndex() + '"]');
        if (slider !== null) {
          slider.style.backgroundSize = percentage + '% 100%';
        }
      },
      song_change: function () {
        document
            .querySelectorAll('[id^=\'player-index-\']')
            .forEach(p => p.classList.remove('ring-1'));
        const index = Amplitude.getActiveIndex();
        //  ring-1 ring-blue-300
        const element = "player-index-" + index
        let elementById = document.getElementById(element);
        console.log(elementById)
        elementById?.classList.add('ring-1');
        elementById?.classList.add('ring-blue-300');
        elementById?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      },
    },
    "songs": songs
  });
})

</script>

<template>
  <!--  <div class="grid grid-cols-3 place-items-end"> class="overflow-auto"-->
  <div ref="formContainer" class="grid grid-cols-3 gap-y-4 pt-2 pl-2 mb-3">
    <AudioCard v-for="p in quranData[parseInt(route.params.id) - 1].audios" :audio="p"/>
    <!--    <AudioCard :audio="quranData[parseInt(route.params.id) - 1].audios[0]"/>-->
  </div>
  <div v-if="showLoader"
       class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
    <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
  </div>

</template>

<style scoped>
.loader {
  border-top-color: #3498db;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>