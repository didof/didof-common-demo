import { createApp } from 'vue'
import App from './App.vue'

import DidofCommon from 'didof-common'

const app = createApp(App)

console.log(DidofCommon.components)

app.use(DidofCommon.components)
app.use(DidofCommon.directives)

app.mount('#app')
