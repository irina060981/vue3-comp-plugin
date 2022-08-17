import { createApp } from 'vue'
import App from './App.vue'
import ViewerPlugin from './ViewerPlugin'

const url = 'https://source.unsplash.com/random'

const app = createApp(App)
app.use(ViewerPlugin, { img: url })
app.mount('#app')
