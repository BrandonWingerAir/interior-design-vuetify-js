<template>
  <v-app id="home">
    <NavbarSection/>
    <v-container fluid>
      
    </v-container>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavbarSection from '../components/NavbarSection.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    NavbarSection,
  },
});
</script>
