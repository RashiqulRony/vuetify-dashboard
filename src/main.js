import { createApp }        from 'vue';
import axios                from 'axios';
import App                  from './App.vue';
import vuetify              from './plugins/vuetify';
import { loadFonts }        from './plugins/webfontloader';
import router               from './route/index';
import store                from './store/index';
import Api                  from './route/api';
import mainSCSS             from './styles/main.scss';

loadFonts();


const app = createApp(App).use(vuetify).use(router).use(store).use(mainSCSS);
app.config.globalProperties.axios = axios;
app.config.globalProperties.API = Api;
app.mount('#app');
