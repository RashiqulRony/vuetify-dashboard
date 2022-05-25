import { createApp }        from 'vue'
import axios                from 'axios';
import App                  from './App.vue'
import vuetify              from './plugins/vuetify'
import { loadFonts }        from './plugins/webfontloader'
import router               from './route/index';
import mainSCSS             from './styles/main.scss';

loadFonts()


const app = createApp(App).use(vuetify).use(router).use(mainSCSS)
app.config.globalProperties.axios = axios
app.mount('#app')
