import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import * as bootstrap from 'bootstrap';
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTw from '@vee-validate/i18n/dist/locale/zh_TW.json';

//表單規則
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({
    zh_TW: zhTw
  }),
  validateOnInput: true
});
setLocale('zh_TW');

const app = createApp(App);

app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);

app.mount('#app');
