<template>
  <v-app id="home">
    <NavbarSection/>
    
    <v-container fluid>
      <HeroSection/>
      <IntroSection/>
      <ServiceSection/>
      <PortfolioSection/>
      <AboutSection/>
      <ContactSection/>      
    </v-container>

    <FooterSection/>

    <v-btn id="top-btn" class="rounded-0 rounded-ts rounded-bs px-4" color="black" @click="scroll('home-nav')">
      <v-icon left class="mb-1">fa-solid fa-angle-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';

// Layout Components
import NavbarSection from '../components/Layout/NavbarSection.vue';
import FooterSection from '../components/Layout/FooterSection.vue';

// Page Components
import HeroSection from '../components/HeroSection.vue';
import IntroSection from '../components/IntroSection.vue';
import ServiceSection from '../components/ServiceSection.vue';
import PortfolioSection from '../components/PortfolioSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ContactSection from '../components/ContactSection.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    NavbarSection,
    HeroSection,
    IntroSection,
    ServiceSection,
    PortfolioSection,
    AboutSection,
    ContactSection,
    FooterSection,
  },
  methods: {
    handleScroll() {
      const topBtn = document.getElementById('top-btn');

      if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        topBtn.style.opacity = "100%";
        topBtn.style.cursor = "pointer";
      } else {
        topBtn.style.opacity = "0";
        topBtn.style.cursor = "initial";
      }
    },
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start", });
    },
  },
  mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },

    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
});
</script>

<style>
.v-container {
  padding: 16px 0;
}

.block {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: center;
  margin-right: 8px;
}

#top-btn {
  cursor: initial;
  opacity: 0;
  position: fixed;
  bottom: 50px;
  right: 0;
  z-index: 99;
  height: 36px;
  transition: 0.75s all ease-in-out;
	-moz-transition: 0.75s all ease-in-out;
	-webkit-transition: 0.75s all ease-in-out;
}
</style>