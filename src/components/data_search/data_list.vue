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
                <th>Product</th>
                <th class="th-description">Color</th>
                <th class="th-description">Size</th>
                <th class="text-right">Price</th>
                <th class="text-right">Qty</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr @click="info()">
                <td class="td-name">
                  <a href="#/data_info">Spring Jacket</a>
                  <br />
                  <small>by Dolce&Gabbana</small>
                </td>
                <td>Red</td>
                <td>M</td>
                <td class="td-number text-right"><small>&euro;</small>549</td>
                <td class="td-number">1</td>
              </tr>
               <tr @click="info()">
                <td class="td-name">
                  <a href="#/data_info">Spring Jacket</a>
                  <br />
                  <small>by Dolce&Gabbana</small>
                </td>
                <td>Red</td>
                <td>M</td>
                <td class="td-number text-right"><small>&euro;</small>549</td>
                <td class="td-number">1</td>
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