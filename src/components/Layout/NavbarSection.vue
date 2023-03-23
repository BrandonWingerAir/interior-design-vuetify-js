<template>
  <v-app-bar app color="black" dark flat class="px-0 px-sm-4 px-lg-12">
    <v-btn @click="reloadPage" class="text-none">
      <v-icon color="#8d6e63" left class="mb-1">fas fa-lightbulb</v-icon>
      <span class="main-logo-text">in<strong>Designs</strong><span class="copyright-sign">&copy;</span></span>
    </v-btn>
    <v-spacer></v-spacer>
    
    <!-- Main Navbar -->
    <v-btn v-for="item in items" v-bind:key=item text @click="scroll(item)" class="mx-sm-n1 d-sm-block d-none">
      {{ item }}
    </v-btn>

    <!-- Mobile Menu Icons -->
    <v-app-bar-nav-icon v-if="!drawer" @click="menuToggle()" class="d-flex d-sm-none mr-5"/>
    <v-btn v-else icon="fas fa-close" @click="menuToggle()" class="d-flex d-sm-none mr-5"/>
  </v-app-bar>

  <!-- Mobile Navbar -->
  <v-navigation-drawer v-model="drawer" temporary :width="drawerWidth">
    <v-list nav dense>
      <v-list-item-group>
        <v-list-item v-for="item in items" v-bind:key=item>
          <v-list-item-title text @click="menuToggle(); scroll(item)" class="text-uppercase">
            {{ item }}
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data() {
      return {
        drawer: null,
        drawerWidth: 0,
        items: [
          'services', 'portfolio', 'about', 'contact',
        ],
      }
    },
    watch: {
      drawer: function () {
        if (this.drawer) {
          document.body.style.height = "100vh";
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.height = "initial";
          document.body.style.overflow = "scroll";
        }
      }
    },
    methods: {
      scroll(refName) {
        const element = document.getElementById(refName);
        element.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start", });
      },
      reloadPage() {
        window.location.reload();
      },
      menuToggle() {
        this.drawer = !this.drawer;
        this.drawerWidth = screen.width * 0.6;

        if (this.drawer) {
          document.body.style.height = "100vh";
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.height = "initial";
          document.body.style.overflow = "scroll";
        }
      }
    }
  }
</script>

<style>
.main-logo-text {
  margin-left: 2px;
  font-size: 17px;
  font-weight: 300;
}

.copyright-sign {
  position: relative;
  font-size: 10px;
  top: -7px;
  left: 1px;
}

.v-list-item-title {
  font-size: 14px !important;
}
</style>