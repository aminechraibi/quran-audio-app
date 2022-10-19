import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import {VueRouterAutoImports} from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import {HeadlessUiResolver} from 'unplugin-vue-components/resolvers'

// if you want to deploy your app on platforms such as github pages
// const baseUrl = 'quran-audio-app/'

// empty string for /
const baseUrl = ''

export default defineConfig({
    base: '/' + baseUrl,
    plugins: [
        VueRouter({
            importMode: 'sync',
            routesFolder: [{src: 'src/pages', path: baseUrl,}]
        }),
        vue(),
        Components({resolvers: [HeadlessUiResolver()]}),
        AutoImport({
            imports: ['vue', '@vueuse/head', VueRouterAutoImports],
        }),
    ],
    server: {
        open: true,
    },
})
