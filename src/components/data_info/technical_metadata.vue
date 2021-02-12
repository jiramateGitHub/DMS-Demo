<template>
  <div>
    <div class="row">
      <h3>ข้อมูลเชิงเทคนิค</h3>
      <div class="col-md-12">
        <table class="table">
          <tbody>
            <tr class="row">
              <td class="col-md-3"><b>ความถี่ในการเผยแพร่ข้อมูล</b></td>
              <td class="col-md-3">{{getDataCurrent.dms_base_durations[0].dt_text}}</td>
              <td class="col-md-3"><b>ระดับชั้นความลับ</b></td>
              <td class="col-md-3">{{getDataCurrent.dms_base_classifieds[0].cf_text}}</td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>สิทธิในการใช้ข้อมูล</b></td>
              <td class="col-md-3">{{getDataCurrent.dms_base_permissions[0].pers_text}}</td>
              <td class="col-md-3"><b>ขอบเขตที่เผยแพร่ข้อมูล</b></td>
              <td class="col-md-3">{{getDataCurrent.dms_base_scopes[0].sc_text}}</td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>รูปแบบข้อมูล</b></td>
              <td class="col-md-3">
                <span
                    v-for="(value, index) in getDataCurrent.dms_base_formats"
                    :key="index"
                    class="badge badge-pill badge-secondary"
                    style="margin-right : 3px"
                    >{{ value.ft_text }}</span
                  >
              </td>
              <td class="col-md-3"></td>
              <td class="col-md-3"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "TechnicalMetadata",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      getDataBusiness: "data_search/getDataBusiness",
      getDataCurrent: "data_search/getDataCurrent",
    }),
  },
  methods: {

  },
};
</script>
<style></style>
