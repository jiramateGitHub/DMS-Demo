<template>
  <div>
    <div class="row">
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th class="text-center">#</th>
              <th class="text-center">รหัสนักศึกษา</th>
              <th class="text-center">ชื่อ</th>
              <th class="text-center">นามสกุล</th>
              <th class="text-center">ชั้นปี</th>
              <th class="text-center">คณะ</th>
              <th class="text-center">นิรนามข้อมูล</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">1</td>
              <td class="text-center">60123456</td>
              <td class="text-center">สวัสดี</td>
              <td class="text-center">มากมี</td>
              <td class="text-center">2</td>
              <td class="text-center">วิศวกรรมศาสตร์</td>
              <td class="text-center">
                <div class="form-check">
                  <label class="form-check-label">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      checked=""
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
export default {
  name: "TechnicalMetadata",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  methods: {
    info() {
      this.$router.push({ path: "/data_info" });
    },
  },
};
</script>
<style></style>
