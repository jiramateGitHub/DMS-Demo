<template>
  <div>
    <div class="card card-plain">
      <div class="card-body">
        <h3 class="card-title">พบ 1 ชุดข้อมูลสำหรับ "...."</h3>
        <br />
        <div class="table-responsive">
          <table class="table table-shopping">
            <thead>
              <tr>
                <th>ชื่อชุดข้อมูล</th>
                <th class="th-description">เลขที่เมทาดาตา</th>
                <th class="th-description">กลุ่มข้อมูล</th>
                <th class="th-description">หมวดหมู่ข้อมูล</th>
                <th class="th-description">คําสําคัญ</th>
              </tr>
            </thead>
            <tbody>
              <tr @click="info()">
                <td class="td-name">
                  <a href="#/data_info">ข้อมูลจำนวนนักศึกษากรุงเทพมหานคร</a>
                  <br />
                  <small>ปรับปรุงล่าสุด 30 มกราคม 2563</small>
                </td>
                <td>01-01-01</td>
                <td>สังคมและสวัสดิการ</td>
                <td>สาธารณะ</td>
                <td>
                  <span class="badge badge-pill badge-secondary">นักศึกษา</span>
                </td>
              </tr>
              <tr @click="info()">
                <td class="td-name">
                  <a href="#/data_info">ข้อมูลการเข้าเรียนนักศึกษากรุงเทพมหานคร</a>
                  <br />
                  <small>ปรับปรุงล่าสุด 30 มกราคม 2563</small>
                </td>
                <td>01-01-02</td>
                <td>สถิติทางการ</td>
                <td>สาธารณะ</td>
                <td>
                  <span class="badge badge-pill badge-secondary">นักศึกษา</span>
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
export default {
  name: "DataList",
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
