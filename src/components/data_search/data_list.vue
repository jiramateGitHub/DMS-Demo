<template>
  <div>
    <div class="card card-plain">
      <div class="card-body">
        <h3 class="card-title">
          พบ {{ getDataList.length }} ชุดข้อมูลสำหรับ "{{ getDataNameCurrent }}"
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
        <div class="row">
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
    };
  },
  created() {
    this.countPage = this.getDataList.length / 10;
    this.fetchDataList();
  },
  computed: {
    ...mapGetters({
      getDataList: "data_search/getDataList",
      getDataNameCurrent: "data_search/getDataNameCurrent",
      getDataFilter: "data_search/getDataFilter",
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
    }),
    async info(value) {
      console.log(value);
      await this.setDataCurrent(value);
      await this.fetchBusinessData(value.bsm_meta_id);
      await this.fetchTechnicalData(value.bsm_meta_id);
      this.$router.push({ path: "/data_info" });
    },
    async reloadList(pageNum) {
      await this.fetchDataPagination(pageNum);
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="css"></style>
