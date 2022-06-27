import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

    runtimeConfig: {
        apiSecret: '',
        public: {
            apiBase: 'https://testspace.cdn.newt.so/v1/',
        }
    },

    typescript: {
    shim: false,
    strict: true
    },

    css: [
        'vuetify/styles'
    ],

    build: {
        transpile: ['vuetify']
    },

    vite: {
        define: {
            'process.env.DEBUG': false
        },
        server: {
            watch: {
                usePolling: true
            }
        }
    },

    target: 'static',

})
