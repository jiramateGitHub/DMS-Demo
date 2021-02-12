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
                v-for="(value, index) in getDataList"
                :key="index"
                @click="info(value)"
              >
                <td class="td-name">
                  <a >{{ value.dms_metadatum.meta_name }}</a>
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
    return {};
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
      setDataCurrent: "data_search/setDataCurrent",
      fetchBusinessData: "data_search/fetchBusinessData",
      fetchTechnicalData: "data_search/fetchTechnicalData",
    }),
    async info(value) {
      console.log(value);
      await this.setDataCurrent(value);
      await this.fetchBusinessData(value.bsm_meta_id);
      await this.fetchTechnicalData(value.bsm_meta_id);
      this.$router.push({ path: "/data_info" });
    },
  },
};
</script>
<style></style>
