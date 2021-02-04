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
                <form method="" action="">
                  <div class="row">
                    <div class="col-md-9">
                      <div class="form-group">
                        <input
                          type="text"
                          value=""
                          placeholder="ค้นหาชุดข้อมูล"
                          class="form-control"
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main main-raised" >
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <DataRefine />
          </div>
          <div class="col-md-9">
            <DataList />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DataRefine from "../components/data_search/data_refine.vue";
import DataList from "../components/data_search/data_list.vue";

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
    return {};
  },
  methods: {
    search() {
      this.$router.push({ path: "/data_search" });
    },
  },
};
</script>
<style>

</style>