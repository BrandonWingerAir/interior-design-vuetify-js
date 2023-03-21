<template>
  <v-app-bar app color="black" dark flat class="px-12">
    <!-- Main Logo -->
    <v-btn  @click="reloadPage" class="text-none">
      <v-icon color="#8d6e63" left class="mb-1">fas fa-lightbulb</v-icon>
      <span class="main-logo-text">in<strong>Designs</strong><span class="copyright-sign">&copy;</span></span>
    </v-btn>

    <v-spacer></v-spacer>
    
    <!-- Menu Items -->
    <v-btn v-for="item in items" v-bind:key=item text @click="scroll(item)" class="d-sm-block d-none">
      {{ item }}
    </v-btn>

    <!-- Mobile Menu -->
    <v-app-bar-nav-icon @click="mobileMenu()" class="d-flex d-sm-none"/>
  </v-app-bar>

  <!-- Mobile Nav -->
  <v-navigation-drawer v-model="drawer" v-on:update:modelValue="mobileMenu()" temporary>
    <v-list nav dense>
      <v-list-item-group>
        <v-list-item v-for="item in items" v-bind:key=item>
          <v-list-item-title text @click="mobileMenu(); scroll(item)" class="text-uppercase">
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
        items: [
          'services', 'portfolio', 'about', 'contact',
        ],
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
      mobileMenu() {
        this.drawer = !this.drawer;

        if (this.drawer) {
          document.body.classList.remove("reset-scroll");
          document.body.classList.add("prevent-scroll");
        } else {
          document.body.classList.remove("prevent-scroll");
          document.body.classList.add("reset-scroll");
        }
      }
    }
  }
</script>

<style scoped>
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
</style>