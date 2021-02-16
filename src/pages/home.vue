<template>
  <div class="">
    <div
      class="page-header header-filter header-small"
      data-parallax="true"
      style="background-image: url('/assets/img/examples/office2.jpg');"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h1 class="title">Open Government Data</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto">
            <div class="card card-raised card-form-horizontal">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-9">
                    <div class="form-group">
                      <input
                        type="text"
                        value=""
                        placeholder="ค้นหาชุดข้อมูล"
                        class="form-control"
                        v-model="search_text"
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <button
                      type="button"
                      class="btn btn-primary btn-block"
                      @click="search()"
                    >
                      ค้นหา
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main main-raised">
      <div class="cd-section" id="features" style="padding-top:30px">
        <div class="container">
          <!--     *********     FEATURES 1      *********      -->
          <div class="features-1">
            <div class="row">
              <div class="col-md-12 ml-auto mr-auto">
                <h2 class="title">Open Government Data</h2>
                <h5 class="description">
                  ศูนย์กลางข้อมูลเปิดนี้รวบรวมชุดข้อมูลหลัก (Master Data Set)
                  โดยการจําแนกหมวดหมู้ข้อมูล และคําอธิบาย
                  ข้อมูลที่ใช้ในการบริหารจัดการ และการบริการต่าง ๆ
                </h5>
                <h5 class="description">
                  ตามพันธกิจหลักของ .... ทั้งนี้โดยดําเนินการตาม กฎหมายมาตรา 8
                  แห่งพระราชบัญญัติการบริหารงานและการใหบริการภาครัฐผ่านระบบดิจิทัล
                  พ.ศ. 2562
                </h5>
                <h5 class="description">
                  และกรอบการกํากับดูแลข้อมูล หรือที่เรียกว่า
                  กรอบธรรมาภิบาลข้อมูล (Data Governance Framework) ตาม
                  ประกาศระเบียบภายใต้พระราชบัญญัติฉบับนี้
                </h5>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="info">
                  <div class="icon icon-info">
                    <i class="material-icons">chat</i>
                  </div>
                  <h4 class="info-title">หมวดหมู่ข้อมูล</h4>
                  <p>
                    การนิยามข้อมูลต้องมีความถูกต้องและชัดเจน<br>
                    เพื่อสร้างความเข้าใจที่ตรงกันระหว่างผู้ที่เกี่ยวข้อง<br>
                    ทั้งนี้การจัดหมวดหมู่ของข้อมูลทำให้มองเห็นถึงภาพรวมของข้อมูล
                    ขณะที่การทำเมทาดาตาเพื่อสร้างความ เข้าใจต่อข้อมูลมากยิ่งขึ้น
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info">
                  <div class="icon icon-success">
                    <i class="material-icons">verified_user</i>
                  </div>
                  <h4 class="info-title">กลุ่มข้อมูล</h4>
                  <p>
                    ทั้งนี้ .... ได้จําแนกชุดข้อมูลหลักออกมาเป็น 8 กลุ่มข้อมูล
                    โดยความสอดคล้องกับสถาปัตยกรรมข้อมูล ของ .... (Enterprise
                    Data Architecture)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!--     *********    END FEATURES 1      *********      -->
          <!--     *********     FEATURES 3      *********      -->
          <!-- <div class="features-3">
            <div class="row">
              <div class="col-md-6">
                <div class="phone-container">
                  <img src="/assets/img/sections/iphone.png" />
                </div>
              </div>
              <div class="col-md-6">
                <h2 class="title">Your life will be much easier</h2>
                <div class="info info-horizontal">
                  <div class="icon icon-primary">
                    <i class="material-icons">extension</i>
                  </div>
                  <div class="description">
                    <h4 class="info-title">Hundreds of Components</h4>
                    <p>
                      The moment you use Material Kit, you know you&#x2019;ve
                      never felt anything like it. With a single use, this
                      powerfull UI Kit lets you do more than ever before.
                    </p>
                  </div>
                </div>
                <div class="info info-horizontal">
                  <div class="icon icon-primary">
                    <i class="material-icons">child_friendly</i>
                  </div>
                  <div class="description">
                    <h4 class="info-title">Easy to Use</h4>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  </div>
                </div>
                <div class="info info-horizontal">
                  <div class="icon icon-primary">
                    <i class="material-icons">watch_later</i>
                  </div>
                  <div class="description">
                    <h4 class="info-title">Fast Prototyping</h4>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
          <!--     *********    END FEATURES 3      *********      -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  props: {
    msg: String,
  },
  data() {
    return {
      search_text: "",
    };
  },
  created() {
    console.log("Welcome");
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({
      findData: "data_search/findData",
    }),
    async search() {
      await this.findData(this.search_text);
      await this.$router.push({ path: "/data_search" });
    },
  },
};
</script>
<style></style>
