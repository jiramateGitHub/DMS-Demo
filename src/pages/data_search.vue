<template>
  <div>
    <div
      class="page-header header-filter "
      data-parallax="true"
      style="background-image: url('/assets/img/examples/office2.jpg'); height: 35vh;"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-10 ml-auto mr-auto">
            <div class="card card-raised card-form-horizontal">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-9">
                    <div class="form-group">
                      <input
                        type="text"
                        value=""
                        placeholder="ค้นหาชุดข้อมูล"
                        class="form-control"
                        v-model="search_text"
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <button
                      type="button"
                      class="btn btn-primary btn-block"
                      @click="search()"
                    >
                      ค้นหา
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main main-raised">
        <div class="row margin-list" >
          <div class="col-md-3">
            <DataRefine />
          </div>
          <div class="col-md-9">
            <DataList />
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import DataRefine from "../components/data_search/data_refine.vue";
import DataList from "../components/data_search/data_list.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "DataSearch",
  props: {
    msg: String,
  },
  components: {
    DataRefine,
    DataList,
  },
  data() {
    return {
      search_text: "",
    };
  },
  computed: {
    ...mapGetters({
      getDataList: "data_search/getDataList",
      getDataNameCurrent: "data_search/getDataNameCurrent",
    }),
  },
  methods: {
    ...mapActions({
      findData: "data_search/findData",
    }),
    async search() {
      await this.findData(this.search_text);
    },
  },
};
</script>
<style>
.margin-list{
  margin-left: 5%;
  margin-right: 5%;
}
</style>
