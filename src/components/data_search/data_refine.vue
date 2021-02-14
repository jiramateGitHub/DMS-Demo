<template>
  <div>
    <div class="card card-refine card-plain card-rose">
      <div class="card-body">
        <h3 class="card-title">
          ปรับแต่ง
          <button
            class="btn btn-default btn-fab btn-fab-mini btn-link pull-right"
            rel="tooltip"
            title=""
            data-original-title="Reset Filter"
          >
            <i class="material-icons">cached</i>
          </button>
        </h3>
        <div id="accordion" role="tablist">
          <div class="card card-collapse">
            <div class="card-header" role="tab" id="heading1">
              <h5 class="mb-0">
                <a
                  class="collapsed"
                  data-toggle="collapse"
                  href="#collapse1"
                  aria-expanded="false"
                  aria-controls="collapse1"
                >
                  หมวดหมู่ข้อมูล
                  <i class="material-icons">keyboard_arrow_down</i>
                </a>
              </h5>
            </div>
            <div
              id="collapse1"
              class="collapse show"
              role="tabpanel"
              aria-labelledby="heading1"
            >
              <div class="card-body">
                <div
                  v-for="(value, index) in getFilterGroup.dms_base_categories"
                  :key="index"
                  class="form-check"
                >
                  <label class="form-check-label">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      checked
                    />
                    {{ value.bc_name }} ({{value.count}})
                    <span class="form-check-sign">
                      <span class="check"></span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="card card-collapse">
            <div class="card-header" role="tab" id="heading2">
              <h5 class="mb-0">
                <a
                  class="collapsed"
                  data-toggle="collapse"
                  href="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapse2"
                >
                  กลุ่มข้อมูล
                  <i class="material-icons">keyboard_arrow_down</i>
                </a>
              </h5>
            </div>
            <div
              id="collapse2"
              class="collapse show"
              role="tabpanel"
              aria-labelledby="heading2"
            >
              <div class="card-body">
                <div
                  v-for="(value, index) in getFilterGroup.dms_base_datagroups"
                  :key="index"
                  class="form-check"
                >
                  <label class="form-check-label">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      checked
                    />
                    {{ value.grp_name }} ({{value.count}})
                    <span class="form-check-sign">
                      <span class="check"></span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="card card-collapse">
            <div class="card-header" role="tab" id="heading3">
              <h5 class="mb-0">
                <a
                  class="collapsed"
                  data-toggle="collapse"
                  href="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapse3"
                >
                  รูปแบบ
                  <i class="material-icons">keyboard_arrow_down</i>
                </a>
              </h5>
            </div>
            <div
              id="collapse3"
              class="collapse show"
              role="tabpanel"
              aria-labelledby="heading3"
            >
              <div class="card-body">
                <div
                  v-for="(value, index) in getFilterGroup.dms_base_formats"
                  :key="index"
                  class="form-check"
                >
                  <label class="form-check-label">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      checked
                    />
                    {{ value.ft_text }} ({{value.count}})
                    <span class="form-check-sign">
                      <span class="check"></span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "DataRefine",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  created() {
    this.fetchFilterGroupAction();
  },
  computed: {
    ...mapGetters({
      getFilterGroup: "data_search/getFilterGroup",
    }),
  },
  methods: {
    ...mapActions({
      fetchFilterGroupAction: "data_search/fetchFilterGroup",
    }),
  },
};
</script>
<style></style>
