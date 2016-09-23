import 'purecss/build/pure.css';
import 'prismjs/themes/prism.css';
import 'prismjs/plugins/show-language/prism-show-language.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import Vue from 'vue';
import moment from 'moment';
import VueRouter from 'vue-router';
import VeeValidate, { Validator } from './vee-validate';
import CodeExample from './components/CodeExample.vue';
import CodeBlock from './components/CodeBlock.vue';
import App from './App.vue';
import routerConfig from './routerConfig';
import './sass/main.scss';

Validator.installDateTimeValidators(moment);
Vue.use(VeeValidate);
Vue.use(VueRouter);
Vue.component('code-example', CodeExample);
Vue.component('code-block', CodeBlock);

const router = new VueRouter(routerConfig);

Validator.extend('verify_coupon', {
    getMessage: (field) => `The ${field} is not a valid coupon.`,
    validate: (value) => new Promise(resolve => {
        const validCoupons = ['SUMMER2016', 'WINTER2016', 'FALL2016'];

        setTimeout(() => {
            resolve({
                valid: value && !! ~validCoupons.indexOf(value.toUpperCase())
            });
        }, 500);
    })
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
