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
      <DataList :key="index" />
    </div>
  </div>
</template>
<script>
import DataList from "../components/data_search/data_list.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "DataSearch",
  props: {
    msg: String,
  },
  components: {
    DataList,
  },
  data() {
    return {
      search_text: "",
      index: 0,
    };
  },
  async created() {
    await this.getFilterGroupAction();
    this.index++
  },
  mounted() {},
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({
      findDataAction: "data_search/findData",
      getFilterGroupAction: "data_search/getFilterGroup",
    }),
    async search() {
      await this.findDataAction(this.search_text);
      await this.getFilterGroupAction();
      this.index++;
    },
  },
};
</script>
<style>

</style>
