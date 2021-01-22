<template>
  <div>
    <div class="main main-raised " style="padding-top: 130px">
      <div class="container">
        <div class="row">
          <div class="card bg-info">
            <div class="card-body">
              <h3 class="card-title">
                <a href="#">"ข้อมูลจำนวนนักศึกษากรุงเทพมหานคร"</a>
              </h3>
              <p class="card-description">
                จำนวนนักเรียนและจำนวนห้องเรียน ของ โรงเรียนสังกัดภายใต้ สพฐ
                ในพื้นที่เขตกรุงเทพมหานคร
              </p>
            </div>
          </div>
          <div class="col-md-12">
            <BusinessMetadata />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <TechnicalMetadata />
            <TechnicalMetadataTable />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BusinessMetadata from "../components/data_info/business_metadata.vue";
import TechnicalMetadata from "../components/data_info/technical_metadata.vue";
import TechnicalMetadataTable from "../components/data_info/technical_metadata_table.vue";

export default {
  name: "DataSearch",
  props: {
    msg: String,
  },
  components: {
    BusinessMetadata,
    TechnicalMetadata,
    TechnicalMetadataTable,
  },
  data() {
    return {};
  },
  methods: {
    search() {
      this.$router.push({ path: "/data_search" });
    },
  },
};
</script>
<style></style>