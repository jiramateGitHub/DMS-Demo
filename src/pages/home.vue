<template>
  <div class="main">
    <div class="cd-section" id="features" style="padding-top:30px">
      <div class="container">
        <!--     *********     FEATURES 1      *********      -->
        <div class="features-1">
          <div class="row">
            <div class="col-md-12 ml-auto mr-auto">
              <h2 class="title">Open Government Data of Thailand</h2>
              <h5 class="description">
                ศูนย์กลางข้อมูลเปิดภาครัฐ (Open Government Data) ภายใต้ชื่อ
                “data.go.th” ที่สำนักงานพัฒนารัฐบาลดิจิทัล (องค์การมหาชน) หรือ
                สพร.
                พัฒนาขึ้นภายใต้แนวคิดการเป็นศูนย์กลางในการเข้าถึงข้อมูลเปิดภาครัฐของประเทศที่ให้ประชาชนสามารถเข้าถึงข้อมูลภาครัฐได้สะดวก
                รวดเร็ว ตลอดเวลา
                โดยข้อมูลที่เผยแพร่อยู่ในรูปแบบไฟล์ที่สามารถแสดงตัวอย่างข้อมูล
                (Preview) การแสดงข้อมูลด้วยภาพ (Visualization) และเอพีไอ (API)
                แบบอัตโนมัติให้กับชุดข้อมูลที่เผยแพร่ได้
                รวมทั้งยังสามารถจัดการชุดข้อมูลและเมทาดาตาของข้อมูลได้อีกด้วย
              </h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 ml-auto mr-auto">
              <div class="card card-raised card-form-horizontal">
                <div class="card-body">
                  <form method="" action="">
                    <div class="row">
                      <div class="col-md-9">
                        <div class="form-group">
                          <input
                            type="text"
                            value=""
                            placeholder="ค้นหาชุดข้อมูล"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-md-3">
                        <button type="button" class="btn btn-primary btn-block" @click="search()">
                          ค้นหา
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="info">
                <div class="icon icon-info">
                  <i class="material-icons">chat</i>
                </div>
                <h4 class="info-title">Free Chat</h4>
                <p>
                  Divide details about your product or agency work into parts.
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="info">
                <div class="icon icon-success">
                  <i class="material-icons">verified_user</i>
                </div>
                <h4 class="info-title">Verified Users</h4>
                <p>
                  Divide details about your product or agency work into parts.
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="info">
                <div class="icon icon-danger">
                  <i class="material-icons">fingerprint</i>
                </div>
                <h4 class="info-title">Fingerprint</h4>
                <p>
                  Divide details about your product or agency work into parts.
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!--     *********    END FEATURES 1      *********      -->
        <!--     *********     FEATURES 2      *********      -->
        <div class="features-2">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
              <h2 class="title">Why our product is the best</h2>
              <h5 class="description">
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information.
              </h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="info info-horizontal">
                <div class="icon icon-info">
                  <i class="material-icons">group_work</i>
                </div>
                <div class="description">
                  <h4 class="info-title">Collaborate</h4>
                  <p>
                    The moment you use Material Kit, you know you&#x2019;ve
                    never felt anything like it. With a single use, this
                    powerfull UI Kit lets you do more than ever before.
                  </p>
                  <a href="#pablo">Find more...</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="info info-horizontal">
                <div class="icon icon-danger">
                  <i class="material-icons">airplay</i>
                </div>
                <div class="description">
                  <h4 class="info-title">Airplay</h4>
                  <p>
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough.
                  </p>
                  <a href="#pablo">Find more...</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="info info-horizontal">
                <div class="icon icon-success">
                  <i class="material-icons">location_on</i>
                </div>
                <div class="description">
                  <h4 class="info-title">Location Integrated</h4>
                  <p>
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough.
                  </p>
                  <a href="#pablo">Find more...</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--     *********    END FEATURES 2      *********      -->
        <!--     *********     FEATURES 3      *********      -->
        <div class="features-3">
          <div class="row">
            <div class="col-md-6">
              <div class="phone-container">
                <img src="/assets/img/sections/iphone.png" />
              </div>
            </div>
            <div class="col-md-6">
              <!-- Some <br /> tags to push the text to align with the image, you can remove it if you have more text on the right side :-) -->
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
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough.
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
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--     *********    END FEATURES 3      *********      -->
        <!--     *********     FEATURES 4      *********      -->
        <div class="features-4">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
              <h2 class="title">Your life will be much easier</h2>
              <h5 class="description">
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information.
              </h5>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-12 ml-auto">
              <div class="info info-horizontal">
                <div class="icon icon-info">
                  <i class="material-icons">code</i>
                </div>
                <div class="description">
                  <h4 class="info-title">For Developers</h4>
                  <p>
                    The moment you use Material Kit, you know you&#x2019;ve
                    never felt anything like it. With a single use, this
                    powerfull UI Kit lets you do more than ever before.
                  </p>
                </div>
              </div>
              <div class="info info-horizontal">
                <div class="icon icon-danger">
                  <i class="material-icons">format_paint</i>
                </div>
                <div class="description">
                  <h4 class="info-title">For Designers</h4>
                  <p>
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <div class="phone-container">
                <img src="/assets/img/sections/iphone2.png" />
              </div>
            </div>
            <div class="col-lg-3 col-md-12 mr-auto">
              <div class="info info-horizontal">
                <div class="icon icon-primary">
                  <i class="material-icons">dashboard</i>
                </div>
                <div class="description">
                  <h4 class="info-title">Bootstrap Grid</h4>
                  <p>
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough.
                  </p>
                </div>
              </div>
              <div class="info info-horizontal">
                <div class="icon icon-success">
                  <i class="material-icons">view_carousel</i>
                </div>
                <div class="description">
                  <h4 class="info-title">Example Pages Included</h4>
                  <p>
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--     *********    END FEATURES 4      *********      -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  props: {
    msg: String,
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