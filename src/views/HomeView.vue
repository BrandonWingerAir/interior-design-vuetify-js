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
  name: 'HomeView',
  components: {
    NavbarSection,
    HeroSection,
    IntroSection,
    ServiceSection,
    PortfolioSection,
    AboutSection,
    ContactSection,
    FooterSection,
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
</style>