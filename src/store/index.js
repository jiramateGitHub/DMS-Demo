import Vue from 'vue'
import Vuex from 'vuex'

import data_search from './data_search'
import data_info from './data_info'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        data_search,
        data_info,
    },
    strict: debug
})