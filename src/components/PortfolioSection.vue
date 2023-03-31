<template>
  <v-col cols="12" sm="12" class="px-4 px-sm-3">
    <div class="d-flex justify-center my-6 overflow-x-auto categories-mobile">
      <v-btn 
        v-for="categoryName in categories" :key="categoryName"
        :color="category == categoryName ? '#d7ccc8' : null" 
        :variant="category == categoryName ? 'elevated' : 'tonal'"
        class="mr-2" 
        @click="category = categoryName"
      >
        {{categoryName}}
      </v-btn>
    </div>
  </v-col>

  <PortfolioGallery v-bind:category="category"/>
</template>

<script>
import PortfolioGallery from './Portfolio/PortfolioGallery.vue';

export default {
  components: {
    PortfolioGallery
  },
  data() {
    return {
      category: 'homes'
    }
  },
  setup() {
    return {
      categories: ['homes', 'offices', 'bedrooms', 'kitchens', 'patios']
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 563px) {  
  .categories-mobile {
    justify-content: left !important;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* IE 10+ */
  }
}
</style>