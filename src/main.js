import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

import VueRouter from "vue-router";
Vue.use(VueRouter);

// router setup
import routes from "./routes/routes";
const router = new VueRouter({
    routes, // short for routes: routes
    linkExactActiveClass: "nav-item active",
    // eslint-disable-next-line no-unused-vars
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});

import vSelect from 'vue-select'
import "vue-select/dist/vue-select.css";
Vue.component('v-select', vSelect)

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);

/* eslint-disable no-new */
new Vue({
    el: "#app",
    render: h => h(App),
    router,
    store
})