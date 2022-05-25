import { createApp }        from 'vue'
import App                  from './App.vue'
import vuetify              from './plugins/vuetify'
import { loadFonts }        from './plugins/webfontloader'
import router               from './route/index';
import mainSCSS             from './styles/main.scss';


loadFonts()


createApp(App)
  .use(vuetify)
  .use(router)
  .use(mainSCSS)
  .mount('#app')
