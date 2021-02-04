import mixinHttpRequest from '../utils/http_request.js'

const state = {
    jwtToken: "",
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
}

const actions = {
    async auth({ commit }, payload) {
        let paylaod = {
            "username": payload.username,
            "password": payload.password
        };
        await mixinHttpRequest.methods.post("/ums_user/login", paylaod).then(async(res) => {
            if (res.data.success) {
                commit("setToken", { res })
            }
        });
    },
}

const mutations = {
    setToken(state, { res }) {
        state.jwtToken = res.data.token;
        console.log(state.jwtToken)
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}