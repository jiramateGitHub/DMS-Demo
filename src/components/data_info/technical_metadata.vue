<template>
  <div>
    <div class="row">
      <h3>ข้อมูลเชิงเทคนิค</h3>
      <div class="col-md-12">
        <table class="table">
          <tbody>
            <tr class="row">
              <td class="col-md-3"><b>ความถี่ในการเผยแพร่ข้อมูล</b></td>
              <td class="col-md-3">ตลอดเวลา</td>
              <td class="col-md-3"><b>ระดับชั้นความลับ</b></td>
              <td class="col-md-3">ไม่เป็นความลับ</td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>สิทธิในการใช้ข้อมูล</b></td>
              <td class="col-md-3">ใช้โดยอิสระ</td>
              <td class="col-md-3"><b>ขอบเขตที่เผยแพร่ข้อมูล</b></td>
              <td class="col-md-3">ไม่จํากัดขอบเขต</td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>รูปแบบข้อมูล</b></td>
              <td class="col-md-3">
                <span class="badge badge-pill badge-secondary">XML</span
                >&nbsp;<span class="badge badge-pill badge-secondary"
                  >JSON</span
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