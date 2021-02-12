<template>
  <div>
    <div
      class="page-header header-filter "
      data-parallax="true"
      style="background-image: url('/assets/img/examples/office2.jpg'); height: 20vh;"
    ></div>
    <div class="main main-raised " style="padding-top: 20px">
      <div class="container">
        <div class="row">
          <div class="card bg-info">
            <div class="card-body">
              <h3 class="card-title">
                <a href="#">"{{getDataBusiness.meta_name}}"</a>
              </h3>
              <p class="card-description">
                {{getDataCurrent.dms_business_descriptions[0].bsds_text}}
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
        <!-- <div class="row">
          <div class="col-md-6">
            <pre>{{ getDataBusiness }}</pre>
            <pre>{{ getDataCurrent }}</pre>
          </div>
          <div class="col-md-6">
            <pre>{{ getDataTechnical }}</pre>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import BusinessMetadata from "../components/data_info/business_metadata.vue";
import TechnicalMetadata from "../components/data_info/technical_metadata.vue";
import TechnicalMetadataTable from "../components/data_info/technical_metadata_table.vue";
import { mapActions, mapGetters } from "vuex";
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
  computed: {
    ...mapGetters({
      getDataBusiness: "data_search/getDataBusiness",
      getDataTechnical: "data_search/getDataTechnical",
      getDataCurrent: "data_search/getDataCurrent",
    }),
  },
  methods: {
    ...mapActions({}),
  },
};
</script>
<style></style>
