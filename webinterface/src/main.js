import { createApp } from 'vue'
import App from './App.vue'
import MainMixin from './mixins/MainMixin.js'
const app = createApp(App)

app.mixin(MainMixin)
app.mount('#app')
