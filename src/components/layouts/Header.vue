<template>
  <div>
    <nav
      class="navbar fixed-top navbar-expand-lg navbar-color-on-scroll "
      color-on-scroll="100"
      id="sectionsNav"
    >
      <div class="container">
        <div class="navbar-translate">
          <a class="navbar-brand" href="#" @click="home()">
            Data Menagement
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="dropdown nav-item">
              <a
                href="#"
                class="dropdown-toggle nav-link"
                data-toggle="dropdown"
              >
                <i class="material-icons">apps</i> สำหรับเจ้าหน้าที่
              </a>
              <div class="dropdown-menu dropdown-with-icons">
                <a href="" class="dropdown-item">
                  <i class="material-icons">layers</i> Admin
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <dashboard-content> </dashboard-content>
    <content-footer></content-footer>
  </div>
</template>

<script>
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";

export default {
  components: {
    DashboardContent,
    ContentFooter,
  },
  data() {
    return {};
  },
  methods: {
    home() {
      this.$router.push({ path: "/home" });
    },
  },
};
</script>
<style></style>