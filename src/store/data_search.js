import mixinHttpRequest from '../utils/http_request.js'

const state = {
    data_name_current: "",
    data_list: [],
    data_current: {},
    data_business: {},
    data_technical: {},
    data_filter: [],
    data_filter_temp: [],
    filter_group: {
        dms_base_categories: [],
        dms_base_datagroups: [],
        dms_base_formats: []
    },
}

const getters = {
    getDataList: (state) => {
        return state.data_list
    },
    getDataCurrent: (state) => {
        return state.data_current
    },
    getDataNameCurrent: (state) => {
        return state.data_name_current
    },
    getDataBusiness: (state) => {
        return state.data_business
    },
    getDataTechnical: (state) => {
        return state.data_technical[0]
    },
    getFilterGroup: (state) => {
        return state.filter_group
    },
    getDataFilter: (state) => {
        return state.data_filter
    },
    getDataFilterTemp: (state) => {
        return state.data_filter_temp
    }
}

const actions = {
    // Function : findData
    // Detail   : ใช้สำหรับค้นหาชุดข้อมูลจาก API
    async findData({ commit }, payload) {
        // payload_text is json request body
        // payload is keyword for search dataset
        let payload_text = {
            text: payload
        }
        commit("setDataNameCurrent", payload) // set keyword current that search now
        await mixinHttpRequest.methods.post("/dms_business_metadata/findList", payload_text).then(async(res) => {
            commit("setDataList", { res })
        });
    },
    // Function : getFilterGroup
    // Detail   : ใช้สำหรับดึงค่าของ dms_base_categories, dms_base_datagroups และ dms_base_formats สำหรับฟิลเตอร์ชุดข้อมูลมาแสดง
    async getFilterGroup({ commit }) {
        // index is use for set value in filter_group array on commit setFilterGroup
        let index = 1
        await mixinHttpRequest.methods.get("/dms_base_categories").then(res => { commit("setFilterGroup", { res, index }) })
        index = 2
        await mixinHttpRequest.methods.get("/dms_base_datagroups").then(res => { commit("setFilterGroup", { res, index }) })
        index = 3
        await mixinHttpRequest.methods.get("/dms_base_formats").then(res => { commit("setFilterGroup", { res, index }) })
    },
    async changeDataPagination({ commit }, pageNum) {
        commit("changeDataPagination", pageNum)
    },
    async fetchDataFilter({ commit }, payload) {
        commit("setDataFilter", payload)
    },
    async fetchDataList({ commit }) {
        commit("createDataList", )
    },
    async setDataCurrent({ commit }, payload) {
        commit("setDataCurrent", payload)
    },
    async fetchBusinessData({ commit }, payload) {
        let meta_id = payload
        await mixinHttpRequest.methods.get("/dms_metadata/join/" + meta_id).then(async(res) => {
            commit("setBusinessData", { res })
        });
    },
    async fetchTechnicalData({ commit }, payload) {
        let meta_id = payload
        await mixinHttpRequest.methods.get("/dms_technical_metadata/join/" + meta_id).then(async(res) => {
            commit("setTechnicalData", { res })
        });
    },
}

const mutations = {
    createDataList(state) {
        state.data_filter = []
        for (const index in state.data_list) {
            if (index == 10) {
                break;
            }
            state.data_filter.push(state.data_list[index]);
        }
        state.data_filter_temp = state.data_list
    },
    setDataFilter(state, payload) {
        let temp = []
        let checkPush = false
        let temp_data_list = state.data_list
        temp_data_list.filter(item => {
            checkPush = false
            for (let index = 0; index < payload.id_bc.length; index++) {
                if (item.dms_metadatum.meta_bc_id == payload.id_bc[index]) {
                    temp.push(item)
                    checkPush = true;
                    break;
                }
            }

            if (checkPush == false) {
                for (let index = 0; index < payload.id_grp.length; index++) {
                    if (item.dms_metadatum.meta_grp_id == payload.id_grp[index]) {
                        temp.push(item)
                        checkPush = true;
                        break;
                    }
                }

                if (checkPush == false) {
                    for (let i = 0; i < payload.id_ft.length; i++) {
                        for (let j = 0; j < item.dms_base_formats.length; j++) {
                            if (item.dms_base_formats[j].ft_id == payload.id_ft[i]) {
                                temp.push(item)
                                checkPush = true;
                                break;
                            }
                        }
                        if (checkPush == true) {
                            break
                        }
                    }
                }
            }

        });

        state.data_filter_temp = temp
        state.data_filter = []
        for (let i = 0; i < temp.length; i++) {
            if (i == 10) {
                break;
            }
            state.data_filter.push(temp[i]);
        }

    },
    changeDataPagination(state, pageNum) {
        state.data_filter = [];
        let count;
        if (pageNum == 1) {
            count = 0;
        } else {
            count = pageNum * 10 - 10;
        }
        let countIndex = 0;
        for (var index = count; index < state.data_filter_temp.length; index++) {
            countIndex++;
            if (countIndex == 11) {
                break;
            }
            state.data_filter.push(state.data_filter_temp[index]);
        }
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