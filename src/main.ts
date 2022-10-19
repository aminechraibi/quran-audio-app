import {createApp} from 'vue'
import './tailwind.css'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router/auto'
import {createHead} from '@vueuse/head'
import quranData from './assets/data.json'
import 'flowbite';
import VueGtag from "vue-gtag-next";
import { trackRouter } from "vue-gtag-next";

const app = createApp(App)
const head = createHead()

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'bg-blue-100',

})
app.provide("quranData", quranData)
app.use(router)
app.use(head)
app.use(VueGtag, {
    property: {
        id: "G-39M6J72NC7"
    }
});
app.mount(document.body)

trackRouter(router)
