<template>
  <v-app-bar app color="black" dark flat class="px-12">
    <v-btn class="text-none">
      <v-icon color="#8d6e63" left class="mb-1">fas fa-lightbulb</v-icon>
      <span class="main-logo-text">in<strong>Designs</strong><span class="copyright-sign">&copy;</span></span>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn text @click="scroll('home')" color="#a1887f">Home</v-btn>
    <v-btn text @click="scroll('portfolio')">Portfolio</v-btn>
    <v-btn text @click="scroll('services')">Services</v-btn>
    <v-btn text @click="scroll('about')">About</v-btn>
    <v-btn text @click="scroll('contact')">Contact</v-btn>
  </v-app-bar>
</template>

<script>
  export default {
    methods: {
      scroll(refName) {
        const element = document.getElementById(refName);
        element.scrollIntoView({ behavior: "smooth" })
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