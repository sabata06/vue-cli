import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/style.css";
import appHeader from "./components/Shared/appHeader.vue";
import appBookmarkList from '@/components/Shared/appBookmarkList/index.vue';
import { appAxios } from './utils/appAxios';


const app = createApp(App);
app.component("AppHeader", appHeader);
app.component("appBookmarkList", appBookmarkList);
app.use(router);
app.config.globalProperties.$appAxios = appAxios 
app.mount("#app");