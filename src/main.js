import { createApp } from 'vue';
import 'bootstrap';

import axios from 'axios'
import VueAxios from 'vue-axios'

//week 5套件
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

//week 5套件
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import App from './App.vue'
import router from './router'

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系(換成中文警示紅字)
  validateOnInput: true, // 當輸入任何內容時，立刻進行驗證(此項可不寫)
});
// 設定預設語系
setLocale('zh_TW');

//const app = createApp(App);
//app.use(router); ....
//這邊串在一起
createApp(App)
.use(router)
.use(VueAxios, axios)
.component('Loading', Loading)
.component('Form', Form)
.component('Field', Field)
.component('ErrorMessage', ErrorMessage)
.mount('#app')
