import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Chartist from "chartist";
import vSelect from 'vue-select'
Vue.config.productionTip = false

// router setup
import routes from "./routes/routes";

const router = new VueRouter({
    routes, // short for routes: routes
    linkExactActiveClass: "nav-item active"
});

Vue.component('v-select', vSelect)

Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
    el: "#app",
    render: h => h(App),
    router,
    data: {
        Chartist: Chartist
    }
})