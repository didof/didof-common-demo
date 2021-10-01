import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import DidofCommon from 'didof-common'

const app = createApp(App)

app.use(DidofCommon.components)
app.use(DidofCommon.directives)

app.use(router)

app.mount('#app')
