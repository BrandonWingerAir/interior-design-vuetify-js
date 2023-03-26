<template>
  <v-col cols="12" sm="12" class="px-4 px-sm-3">
    <div class="d-flex justify-center mb-6 overflow-x-auto categories-mobile">
      <v-btn 
        :color="category == 'homes' ? '#d7ccc8' : null" 
        :variant="category == 'homes' ? 'elevated' : 'tonal'"
        class="mr-2" 
        @click="category = 'homes'"
      >
        Homes
      </v-btn>

      <v-btn
        :color="category == 'offices' ? '#d7ccc8' : null" 
        :variant="category == 'offices' ? 'elevated' : 'tonal'"
        class="mr-2" 
        @click="category = 'offices'"
      >
        Offices
      </v-btn>

      <v-btn
        :color="category == 'bedrooms' ? '#d7ccc8' : null" 
        :variant="category == 'bedrooms' ? 'elevated' : 'tonal'"
        class="mr-2" 
        @click="category = 'bedrooms'"
      >
        Bedrooms
      </v-btn>

      <v-btn
        :color="category == 'kitchens' ? '#d7ccc8' : null" 
        :variant="category == 'kitchens' ? 'elevated' : 'tonal'"
        class="mr-2" 
        @click="category = 'kitchens'"
      >
        Kitchens
      </v-btn>
      
      <v-btn
        :color="category == 'patios' ? '#d7ccc8' : null" 
        :variant="category == 'patios' ? 'elevated' : 'tonal'"
        @click="category = 'patios'"
      >
        Patios
      </v-btn>
    </div>
  </v-col>

  <PortfolioGallery v-bind:category="category"/>
</template>

<script>
import PortfolioGallery from '../components/Gallery/PortfolioGallery.vue';

export default {
  components: {
    PortfolioGallery
  },
  data() {
    return {
      category: 'homes'
    }
  }
}
</script>

<style scoped>
.imgHover {
  padding: 0 200px;
}

@media only screen and (max-width: 1149px) {
  .imgHover {
    padding: 0 100px;
  }

  .v-overlay__content .v-img {
    min-width: 700px !important;
    min-height: 700px !important;
    max-height: 700px !important;
  }
}

@media only screen and (max-width: 780px) {
  .v-overlay__content .v-img {
    min-width: 600px !important;
    min-height: 600px !important;
    max-height: 600px !important;
  }
}

@media only screen and (max-width: 680px) {
  .v-overlay__content .v-img {
    min-width: 550px !important;
    min-height: 550px !important;
    max-height: 550px !important;
  }
}

@media only screen and (max-width: 599px) {
  .imgHover {
    padding: 0 75px;
  }

  .v-overlay__content .v-img {
    min-width: 500px !important;
    min-height: 500px !important;
    max-height: 500px !important;
  }
}

@media only screen and (max-width: 563px) {
  .disable-scrollbars::-webkit-scrollbar {
    background: transparent; /* Chrome/Safari/Webkit */
    width: 0px;
  }
  
  .categories-mobile {
    justify-content: left !important;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* IE 10+ */
  }

  .v-overlay__content .v-img {
    min-width: 450px !important;
    min-height: 450px !important;
    max-height: 450px !important;
  }
}

@media only screen and (max-width: 500px) {
  .imgHover {
    padding: 0 65px;
  }

  .v-overlay__content .v-img {
    min-width: 415px !important;
    min-height: 415px !important;
    max-height: 415px !important;
  }
}

@media only screen and (max-width: 448px) {
  .imgHover {
    padding: 0 50px;
  }

  .v-overlay__content .v-img {
    min-width: 350px !important;
    min-height: 350px !important;
    max-height: 350px !important;
  }
}

@media only screen and (max-width: 394px) {
  .v-overlay__content .v-img {
    min-width: 310px !important;
    min-height: 310px !important;
    max-height: 310px !important;
  }
}

@media only screen and (max-width: 353px) {
  .imgHover {
    padding: 0 35px;
  }

  .v-overlay__content .v-img {
    min-width: 295px !important;
    min-height: 295px !important;
    max-height: 295px !important;
  }
}
</style>