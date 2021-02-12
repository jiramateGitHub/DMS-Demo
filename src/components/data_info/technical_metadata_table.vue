<template>
  <div>
    <div class="row">
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th class="text-center">#</th>
              <th class="text-center">ฟิลด์ข้อมูลในตารางข้อมูล</th>
              <th class="text-center">ประเภทข้อมูล</th>
              <th class="text-center">ความกว้างของฟิลด์ข้อมูล</th>
              <th class="text-center">คีย์ข้อมูล</th>
              <th class="text-center">ตัวอย่างข้อมูล</th>
              <th class="text-center">หมายเหตุ</th>
              <th class="text-center">ข้อมูลนิรนาม</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(value, index) in getDataTechnical.dms_technical_details"
              :key="index"
            >
              <td class="text-center">{{index+1}}</td>
              <td class="text-left">{{value.tcd_attribute}}</td>
              <td class="text-center">{{value.tcd_type}}</td>
              <td class="text-center">{{value.tcd_length}}</td>
              <td class="text-center">{{value.tcd_key}}</td>
              <td class="text-left">{{value.tcd_sample}}</td>
              <td class="text-left">{{value.tcd_comment}}</td>
              <td class="text-center">
                <div class="form-check">
                  <label class="form-check-label">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      disabled
                      v-if="value.tcd_anonymous == 0"
                    />
                    <input
                      class="form-check-input"
                      type="checkbox"
                      disabled
                      checked=""
                      v-if="value.tcd_anonymous == 1"
                    />
                    <span class="form-check-sign">
                      <span class="check"></span>
                    </span>
                  </label>
                </div>
              </td>
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
      getDataTechnical: "data_search/getDataTechnical",
    }),
  },
  methods: {
    info() {
      this.$router.push({ path: "/data_info" });
    },
  },
};
</script>
<style></style>
