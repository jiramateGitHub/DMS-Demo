import Vue from 'vue'
import Vuex from 'vuex'

import data_search from './data_search'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        data_search,
    },
    strict: debug
})