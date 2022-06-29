import { defineNuxtPlugin } from '#app'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,

    theme: {
      defaultTheme: 'dark'
    }
  })

  nuxtApp.vueApp.use(vuetify)
})