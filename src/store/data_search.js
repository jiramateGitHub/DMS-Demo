import mixinHttpRequest from '../utils/http_request.js'

const state = {
    data_name_current: "",
    data_list: [],
    data_current: {},
    data_business: {},
    data_technical: {},
    data_filter: [],
    filter_group: {
        dms_base_categories: [],
        dms_base_datagroups: [],
        dms_base_formats: []
    },

}

const getters = {
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
    getFilterGroup: (state) => {
        console.log(state.filter_group)
        return state.filter_group
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
    async getFilterGroup({ commit }) {
        let index = 1
        await mixinHttpRequest.methods.get("/dms_base_categories").then(res => { commit("setFilterGroup", { res, index }) })
        index = 2
        await mixinHttpRequest.methods.get("/dms_base_datagroups").then(res => { commit("setFilterGroup", { res, index }) })
        index = 3
        await mixinHttpRequest.methods.get("/dms_base_formats").then(res => { commit("setFilterGroup", { res, index }) })
    },
    async fetchFilterGroup({ state }) {
        // let filter_group = {
        //     dms_base_categories: [],
        //     dms_base_datagroups: [],
        //     dms_base_formats: []
        // };
        // [0].dms_metadatum.meta_bc_id
        for (const [key, value] of Object.entries(state.data_list)) {
            console.log(`${key}: ${value.dms_metadatum.meta_bc_id}`);
        }

        // let temp = state.filter_group;

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
    setFilterGroup(state, { res, index }) {
        var temp = 0;
        var i = 0;
        var j = 0;
        var k = 0;
        if (index == 1) {
            state.filter_group.dms_base_categories = res.data
            for (i = 0; i < state.filter_group.dms_base_categories.length; i++) {
                temp = 0;
                for (j = 0; j < state.data_list.length; j++) {
                    if (state.filter_group.dms_base_categories[i].bc_id == state.data_list[j].dms_metadatum.meta_bc_id) {
                        temp++;
                    }
                }
                state.filter_group.dms_base_categories[i].count = temp;
            }
        }
        if (index == 2) {
            state.filter_group.dms_base_datagroups = res.data
            for (i = 0; i < state.filter_group.dms_base_datagroups.length; i++) {
                temp = 0;
                for (j = 0; j < state.data_list.length; j++) {
                    if (state.filter_group.dms_base_datagroups[i].grp_id == state.data_list[j].dms_metadatum.meta_grp_id) {
                        temp++;
                    }
                }
                state.filter_group.dms_base_datagroups[i].count = temp;
            }
        }
        if (index == 3) {
            state.filter_group.dms_base_formats = res.data
            for (i = 0; i < state.filter_group.dms_base_formats.length; i++) {
                temp = 0;
                for (j = 0; j < state.data_list.length; j++) {
                    for (k = 0; k < state.data_list[j].dms_base_formats.length; k++) {
                        if (state.filter_group.dms_base_formats[i].ft_id == state.data_list[j].dms_base_formats[k].ft_id) {
                            temp++;
                        }
                    }
                }
                state.filter_group.dms_base_formats[i].count = temp;
            }
        }
    },
    clearFilterGroup(state) {
        state.filter_group = []
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}