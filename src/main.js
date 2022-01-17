import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import '@/assets/style.css';
import { appAxios } from '@/utils/appAxios';

import appHeader from "@/components/Main/appHeader";
import appBookmarkList from "@/components/Main/appBookmarkList";

const app = createApp(App);
app.component("AppHeader", appHeader);
app.component("appBookmarkList", appBookmarkList);
app.use(router);
app.use(store);
app.config.globalProperties.$appAxios = appAxios;
app.mount('#app')
