<template>
  <div>
    <div class="row margin-list">
      <div class="col-md-3">
        <div class="card card-refine card-plain card-rose">
          <div class="card-body">
            <h3 class="card-title">
              ปรับแต่ง
              <button
                class="btn btn-default btn-fab btn-fab-mini btn-link pull-right"
                rel="tooltip"
                title=""
                data-original-title="Reset Filter"
              >
                <i class="material-icons">cached</i>
              </button>
            </h3>
            <div id="accordion" role="tablist">
              <div class="card card-collapse">
                <div class="card-header" role="tab" id="heading1">
                  <h5 class="mb-0">
                    <a
                      class="collapsed"
                      data-toggle="collapse"
                      href="#collapse1"
                      aria-expanded="false"
                      aria-controls="collapse1"
                    >
                      หมวดหมู่ข้อมูล
                      <i class="material-icons">keyboard_arrow_down</i>
                    </a>
                  </h5>
                </div>
                <div
                  id="collapse1"
                  class="collapse show"
                  role="tabpanel"
                  aria-labelledby="heading1"
                >
                  <div class="card-body">
                    <div
                      v-for="(value,
                      index) in getFilterGroup.dms_base_categories"
                      :key="index"
                      class="form-check"
                    >
                      <div v-if="value.count != 0">
                        <label class="form-check-label">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="selectedBc"
                            :value="value.bc_id"
                            checked
                            @change="reloadFilter()"
                          />
                          {{ value.bc_name }} ({{ value.count }})
                          <span class="form-check-sign">
                            <span class="check"></span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card card-collapse">
                <div class="card-header" role="tab" id="heading2">
                  <h5 class="mb-0">
                    <a
                      class="collapsed"
                      data-toggle="collapse"
                      href="#collapse2"
                      aria-expanded="false"
                      aria-controls="collapse2"
                    >
                      กลุ่มข้อมูล
                      <i class="material-icons">keyboard_arrow_down</i>
                    </a>
                  </h5>
                </div>
                <div
                  id="collapse2"
                  class="collapse show"
                  role="tabpanel"
                  aria-labelledby="heading2"
                >
                  <div class="card-body">
                    <div
                      v-for="(value,
                      index) in getFilterGroup.dms_base_datagroups"
                      :key="index"
                      class="form-check"
                    >
                      <div v-if="value.count != 0">
                        <label class="form-check-label">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="selectedGrp"
                            :value="value.grp_id"
                            checked
                            @change="reloadFilter()"
                          />
                          {{ value.grp_name }} ({{ value.count }})
                          <span class="form-check-sign">
                            <span class="check"></span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card card-collapse">
                <div class="card-header" role="tab" id="heading3">
                  <h5 class="mb-0">
                    <a
                      class="collapsed"
                      data-toggle="collapse"
                      href="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                      รูปแบบ
                      <i class="material-icons">keyboard_arrow_down</i>
                    </a>
                  </h5>
                </div>
                <div
                  id="collapse3"
                  class="collapse show"
                  role="tabpanel"
                  aria-labelledby="heading3"
                >
                  <div class="card-body">
                    <div
                      v-for="(value, index) in getFilterGroup.dms_base_formats"
                      :key="index"
                      class="form-check"
                    >
                      <div v-if="value.count != 0">
                        <label class="form-check-label">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="selectedFt"
                            :value="value.ft_id"
                            checked
                            @change="reloadFilter()"
                          />
                          {{ value.ft_text }} ({{ value.count }})
                          <span class="form-check-sign">
                            <span class="check"></span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="card card-plain">
          <div class="card-body">
            <h3 class="card-title">
              พบ {{ getDataList.length }} ชุดข้อมูลสำหรับ “{{
                getDataNameCurrent
              }}”
            </h3>
            <br />
            <div class="table-responsive">
              <table class="table table-shopping">
                <thead>
                  <tr>
                    <th width="35%">ชื่อชุดข้อมูล</th>
                    <th class="th-description" width="25%">เจ้าของข้อมูล</th>
                    <th class="th-description" width="15%">รูปแบบข้อมูล</th>
                    <th class="th-description" width="25%">คําสําคัญ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="getDataFilter.length == 0" >
                    <td colspan="4" class="text-center">ไม่พบรายการ</td>
                  </tr>
                  <tr
                    v-for="(value, index) in getDataFilter"
                    :key="index"
                    @click="info(value)"
                  >
                    <td class="td-name">
                      <a>{{ value.dms_metadatum.meta_name }}</a>
                      <br />
                      <small
                        >ปรับปรุงล่าสุด
                        {{
                          value.dms_metadatum.meta_update_time.substring(0, 10)
                        }}</small
                      >
                    </td>
                    <td>{{ value.dms_business_descriptions[0].bsds_owner }}</td>
                    <td>
                      <span
                        v-for="(value2, index2) in value.dms_base_formats"
                        :key="index2"
                        class="badge badge-pill badge-info"
                        style="margin-right : 3px"
                        >{{ value2.ft_text }}</span
                      >
                    </td>
                    <td>
                      <span
                        v-for="(value3, index3) in value.dms_business_keywords"
                        :key="index3"
                        class="badge badge-pill badge-secondary"
                        style="margin-right : 3px"
                        >{{ value3.bsk_text }}</span
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row" v-if="getDataFilter.length != 0">
              <div class="offset-md-4 col-md-4 col-md-4">
                <paginate
                  v-model="page"
                  :page-count="countPage"
                  :page-range="3"
                  :margin-pages="2"
                  :click-handler="reloadList"
                  :prev-text="'Prev'"
                  :next-text="'Next'"
                  :container-class="'pagination pagination-primary'"
                  :page-class="'page-item'"
                  :page-link-class="'page-link'"
                  :prev-link-class="'page-link'"
                  :next-link-class="'page-link'"
                >
                </paginate>
              </div>
            </div>
            <!-- <div class="row">
          <pre>{{getDataList}}</pre>
        </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "DataList",
  props: {
    msg: String,
  },
  data() {
    return {
      page: 1,
      countPage: 0,
      selectedBc: [],
      selectedGrp: [],
      selectedFt: [],
    };
  },
  async created() {
    await this.fetchDataList();
    this.countPage = this.getDataList.length / 10;
    await this.selectCheck();
  },
  mounted() {},
  computed: {
    ...mapGetters({
      getDataList: "data_search/getDataList",
      getDataNameCurrent: "data_search/getDataNameCurrent",
      getDataFilter: "data_search/getDataFilter",
      getFilterGroup: "data_search/getFilterGroup",
    }),
  },
  methods: {
    ...mapActions({
      findData: "data_search/findData",
      setDataCurrent: "data_search/setDataCurrent",
      fetchBusinessData: "data_search/fetchBusinessData",
      fetchTechnicalData: "data_search/fetchTechnicalData",
      fetchDataList: "data_search/fetchDataList",
      fetchDataPagination: "data_search/fetchDataPagination",
      fetchDataFilter: "data_search/fetchDataFilter",
    }),
    async info(value) {
      await this.setDataCurrent(value);
      await this.fetchBusinessData(value.bsm_meta_id);
      await this.fetchTechnicalData(value.bsm_meta_id);
      this.$router.push({ path: "/data_info" });
    },
    async reloadList(pageNum) {
      await this.fetchDataPagination(pageNum);
      window.scrollTo(0, 0);
    },
    async reloadFilter() {
      let temp = {
        id_bc: this.selectedBc,
        id_grp: this.selectedGrp,
        id_ft: this.selectedFt,
      };
      await this.fetchDataFilter(temp);
      console.log(this.getDataFilter);
      this.countPage = this.getDataFilter.length / 10;
    },
    selectCheck() {
      for (let index in this.getFilterGroup.dms_base_categories) {
        if (this.getFilterGroup.dms_base_categories[index].count != 0) {
          this.selectedBc.push(
            this.getFilterGroup.dms_base_categories[index].bc_id
          );
        }
      }
      for (let index in this.getFilterGroup.dms_base_datagroups) {
        if (this.getFilterGroup.dms_base_datagroups[index].count != 0) {
          this.selectedGrp.push(
            this.getFilterGroup.dms_base_datagroups[index].grp_id
          );
        }
      }
      for (let index in this.getFilterGroup.dms_base_formats) {
        if (this.getFilterGroup.dms_base_formats[index].count != 0) {
          this.selectedFt.push(
            this.getFilterGroup.dms_base_formats[index].ft_id
          );
        }
      }
      console.log(this.selectedBc);
    },
  },
};
</script>

<style>
.margin-list {
  margin-left: 5%;
  margin-right: 5%;
}
</style>
