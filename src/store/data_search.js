import mixinHttpRequest from '../utils/http_request.js'

const state = {
    jwtToken: "",
    data_name_current: "",
    data_list: [],
    data_current: {},
    data_business: {},
    data_technical: {}
}

const getters = {
    getToken: (state) => {
        console.log("getToken " + state.jwtToken)
        if (state.jwtToken == "" || state.jwtToken == null) {
            return null
        } else {
            return state.jwtToken
        }
    },
    getDataList: (state) => {
        console.log(state.data_list)
        return state.data_list
    },
    getDataCurrent: (state) => {
        console.log(state.data_list_current)
        return state.data_current
    },
    getDataNameCurrent: (state) => {
        return state.data_name_current
    },
    getDataBusiness: (state) => {
        console.log(state.data_business)
        return state.data_business
    },
    getDataTechnical: (state) => {
        console.log(state.data_technical)
        return state.data_technical
    },
}

const actions = {
    async findData({ commit }, payload) {
        let payload_text = {
            text: payload
        }
        commit("setDataNameCurrent", payload)

        await mixinHttpRequest.methods.post("/dms_business_metadata/findList", payload_text).then(async(res) => {
            commit("setDataList", { res })
        });
    },
    async fetchBusinessData({ commit }, playload) {
        let id = playload
        await mixinHttpRequest.methods.get("/dms_metadata/join/" + id).then(async(res) => {
            commit("setBusinessData", { res })
        });
    },
    async fetchTechnicalData({ commit }, playload) {
        let id = playload
        await mixinHttpRequest.methods.get("/dms_technical_metadata/join/" + id).then(async(res) => {
            commit("setTechnicalData", { res })
        });
    },
    async setDataCurrent({ commit }, payload) {
        commit("setDataCurrent", payload)
    },
}

const mutations = {
    setToken(state, { res }) {
        state.jwtToken = res.data.token;
        console.log(state.jwtToken)
    },
    setDataList(state, { res }) {
        state.data_list = res.data
    },
    setDataCurrent(state, payload) {
        state.data_current = payload
    },
    setDataNameCurrent(state, payload) {
        state.data_name_current = payload
    },
    setBusinessData(state, { res }) {
        state.data_business = res.data
    },
    setTechnicalData(state, { res }) {
        state.data_technical = res.data
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}