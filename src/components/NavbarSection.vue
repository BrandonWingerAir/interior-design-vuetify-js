<template>
  <v-app-bar app color="black" dark flat class="px-12">
    <v-btn class="text-none">
      <v-icon color="#8d6e63" left class="mr-4 mb-1">fas fa-couch</v-icon>
      inDesigns
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