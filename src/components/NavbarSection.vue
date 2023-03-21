<template>
  <v-app-bar app color="black" dark flat class="px-12">
    <v-btn  @click="reloadPage" class="text-none">
      <v-icon color="#8d6e63" left class="mb-1">fas fa-lightbulb</v-icon>
      <span class="main-logo-text">in<strong>Designs</strong><span class="copyright-sign">&copy;</span></span>
    </v-btn>
    <v-spacer></v-spacer>
    
    <v-btn v-for="item in items" v-bind:key=item text @click="scroll(item)" class="d-sm-block d-none">{{ item }}</v-btn>

    <v-app-bar-nav-icon @click="drawer = !drawer" class="d-flex d-sm-none"></v-app-bar-nav-icon>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary>
    <v-list nav dense>
      <v-list-item-group>
        <v-list-item v-for="item in items" v-bind:key=item>
          <v-list-item-title text @click="drawer = !drawer; scroll(item)" class="text-uppercase">{{ item }}</v-list-item-title>
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
          'services', 'portfolio', 'contact', 'about',
        ],
      }
    },
    methods: {
      scroll(refName) {
        const element = document.getElementById(refName);
        element.scrollIntoView({ behavior: "smooth" })
      },
      reloadPage() {
        window.location.reload();
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