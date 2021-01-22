import Header from "@/components/layouts/Header.vue";

import Home from "@/pages/home.vue";
import DataSearch from "@/pages/data_search.vue";
import DataInfo from "@/pages/data_info.vue";

const routes = [{
    path: "/",
    component: Header,
    redirect: "/home",
    children: [{
            path: "home",
            name: "Home",
            component: Home
        },
        {
            path: "data_search",
            name: "DataSearch",
            component: DataSearch
        },
        {
            path: "data_info",
            name: "DataInfo",
            component: DataInfo
        }
    ]
}];

export default routes;