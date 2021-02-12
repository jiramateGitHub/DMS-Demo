<template>
  <div>
    <div class="row">
      <h3>ข้อมูลเพิ่มเติม</h3>
      <div class="col-md-12">
        <table class="table">
          <tbody>
            <tr class="row">
              <td class="col-md-3"><b>เลขที่เมทาดาตา</b></td>
              <td class="col-md-9">{{ getDataBusiness.meta_code }}</td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>หน่วยงานภายใน</b></td>
              <td class="col-md-9">
                {{ getDataBusiness.dms_institution.ins_name }}
              </td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>วันที่สร้างชุดข้อมูล</b></td>
              <td class="col-md-9"> {{ getDataBusiness.meta_create_time.substring(0,10) }}</td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>วันที่ปรับปรุงล่าสุด</b></td>
             <td class="col-md-9"> {{ getDataBusiness.meta_update_time.substring(0,10) }}</td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>กลุ่มข้อมูล</b></td>
              <td class="col-md-9">{{ getDataBusiness.dms_base_datagroup.grp_name }}</td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>คําสําคัญ (Keywords)</b></td>
              <td class="col-md-9 ml-auto">
                 <span
                    v-for="(value, index) in getDataCurrent.dms_business_keywords"
                    :key="index"
                    class="badge badge-pill badge-secondary"
                    style="margin-right : 3px"
                    >{{ value.bsk_text }}</span
                  >
              </td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>หมวดหมู่ของข้อมูล</b></td>
              <td class="col-md-9">{{getDataBusiness.dms_base_category.bc_name}}</td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>แหล่งที่มาของคำอธิบาย</b></td>
              <td class="col-md-9">
               {{getDataCurrent.dms_business_descriptions[0].bsds_ref}}
              </td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>ภาษาที่ใช้</b></td>
              <td class="col-md-9 ml-auto">
                <span
                    v-for="(value, index) in getDataCurrent.dms_base_languages"
                    :key="index"
                    class="badge badge-pill badge-secondary"
                    style="margin-right : 3px"
                    >{{ value.lg_text }}</span
                  >
              </td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>เจ้าของข้อมูล</b></td>
              <td class="col-md-9"> {{getDataCurrent.dms_business_descriptions[0].bsds_owner}}</td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>ชื่อ-นามสกุล/หน่วยงาน ผู้ติดต่อ</b></td>
             <td class="col-md-9"> {{getDataBusiness.dms_metadata_contacts[0].metac_name}}</td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>อีเมล์ผู้ติดต่อ</b></td>
            <td class="col-md-9"> {{getDataBusiness.dms_metadata_contacts[0].metac_email}}</td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>เบอร์โทรผู้ติดต่อ</b></td>
              <td class="col-md-9"> {{getDataBusiness.dms_metadata_contacts[0].metac_phone}}</td>
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
  name: "BusinessMetadata",
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
    info() {
      this.$router.push({ path: "/data_info" });
    },
  },
};
</script>
<style scrope>
* {
  margin: 0;
  padding: 0;
}
.inter > h4 {
  float: left;
  padding-right: 0.5em;
}
p {
  margin-bottom: 1em;
}
</style>
