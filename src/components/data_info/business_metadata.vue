<template>
  <div>
    <div class="row">
      <h3>ข้อมูลเพิ่มเติม</h3>
      <div class="col-md-12">
        <table class="table">
          <tbody>
            <tr class="row">
              <td class="col-md-3"><b>เลขที่เมทาดาตา</b></td>
              <td class="col-md-9">01-01-01</td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>หน่วยงานภายใน</b></td>
              <td class="col-md-9">สำนักงานอธิการบดี</td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>วันที่สร้างชุดข้อมูล</b></td>
              <td class="col-md-9">5 มกราคม 2563</td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>วันที่ปรับปรุงล่าสุด</b></td>
              <td class="col-md-9">30 มกราคม 2563</td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>กลุ่มข้อมูล</b></td>
              <td class="col-md-9">สังคมและสวัสดิการ</td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>คําสําคัญ (Keywords)</b></td>
              <td class="col-md-9 ml-auto">
                <span class="badge badge-pill badge-secondary">Default</span
                >&nbsp;<span class="badge badge-pill badge-secondary"
                  >Default</span
                >&nbsp;<span class="badge badge-pill badge-secondary"
                  >Default</span
                >
              </td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>หมวดหมู่ของข้อมูล</b></td>
              <td class="col-md-9">สาธารณะ</td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>แหล่งที่มาของคำอธิบาย</b></td>
              <td class="col-md-9">
                กองสารสนเทศภูมิศาสตร์ สำนักยุทธศาสตร์และประเมินผล
              </td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>ภาษาที่ใช้</b></td>
              <td class="col-md-9 ml-auto">
                <span class="badge badge-pill badge-secondary">ไทย</span
                >&nbsp;<span class="badge badge-pill badge-secondary"
                  >อังกฤษ</span
                >
              </td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>เจ้าของข้อมูล</b></td>
              <td class="col-md-9">สังคมและสวัสดิการ</td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>ชื่อ-นามสกุล ผู้ติดต่อ</b></td>
              <td class="col-md-9">นายจิรนพ มานะ</td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>อีเมล์ผู้ติดต่อ</b></td>
              <td class="col-md-9">datagov@iserl.com</td>
            </tr>
            <tr class="row">
              <td class="col-md-3"><b>เบอร์โทรผู้ติดต่อ</b></td>
              <td class="col-md-9">081-123-1234</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BusinessMetadata",
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