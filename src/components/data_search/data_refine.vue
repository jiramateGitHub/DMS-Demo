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
            <div class="card-header" role="tab" id="headingThree">
              <h5 class="mb-0">
                <a
                  class="collapsed"
                  data-toggle="collapse"
                  href="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  กลุ่มชุดข้อมูล
                  <i class="material-icons">keyboard_arrow_down</i>
                </a>
              </h5>
            </div>
            <div
              id="collapseThree"
              class="collapse show"
              role="tabpanel"
              aria-labelledby="headingThree"
            >
              <div class="card-body">
                <div class="form-check">
                  <label class="form-check-label">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      checked
                    />
                    All
                    <span class="form-check-sign">
                      <span class="check"></span>
                    </span>
                  </label>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" value="" />
                    Polo Ralph Lauren
                    <span class="form-check-sign">
                      <span class="check"></span>
                    </span>
                  </label>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" value="" />
                    Wooyoungmi
                    <span class="form-check-sign">
                      <span class="check"></span>
                    </span>
                  </label>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" value="" />
                    Alexander McQueen
                    <span class="form-check-sign">
                      <span class="check"></span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="card card-collapse">
            <div class="card-header" role="tab" id="headingThree">
              <h5 class="mb-0">
                <a
                  class="collapsed"
                  data-toggle="collapse"
                  href="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  รูปแบบ
                  <i class="material-icons">keyboard_arrow_down</i>
                </a>
              </h5>
            </div>
            <div
              id="collapseTwo"
              class="collapse show"
              role="tabpanel"
              aria-labelledby="headingThree"
            >
              <div class="card-body">
                <div class="form-check">
                  <label class="form-check-label">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      checked
                    />
                    Json
                    <span class="form-check-sign">
                      <span class="check"></span>
                    </span>
                  </label>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" value="" />
                    XLSX
                    <span class="form-check-sign">
                      <span class="check"></span>
                    </span>
                  </label>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" value="" />
                    CSV
                    <span class="form-check-sign">
                      <span class="check"></span>
                    </span>
                  </label>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" value="" />
                    XML
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
export default {
  name: "DataRefine",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style></style>