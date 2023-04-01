<template>
  <div class="text-center mt-5">
    <h2>What We Do</h2>
    <div style="width: 120px; margin: 0 auto;">
      <v-slider v-model="sliderIcon" color="#d7ccc8"></v-slider>
    </div>
  </div>

  <v-col cols="12" id="services" class="px-0 pt-2">
    <div>
      <v-row>
        <v-col cols="12" class="pb-12">
          <div class="block mx-auto">
            <v-btn icon="fa-solid fa-chair" color="#d7ccc8" class="text-white pb-1 icon-ml"></v-btn>
            <h3 class="mt-4">Office Space</h3>
            <p class="text-grey mt-4 text-caption">
              Revamp your office into an inspiring and productive environment.
            </p>
          </div>
          
          <div class="block mx-auto">
            <v-btn icon="fas fa-house" color="#d7ccc8" class="text-white pb-1 pr-1 icon-ml"></v-btn>
            <h3 class="mt-4">Home Space</h3>      
            <p class="text-grey mt-4 text-caption">
              Uplift your living area into a stunning and comfortable home.
            </p>
          </div>

          <div class="block mx-auto">
            <v-btn icon="fa-solid fa-spa" color="#d7ccc8" class="text-white icon-ml icon-pad"></v-btn>
            <h3 class="mt-4">Outdoor Space</h3>
            <p class="text-grey mt-4 text-caption">
              Grow your patio & yard into a stylish and inviting garden oasis.
            </p>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </div>
  </v-col>
</template>

<script>
  export default {
    setup() {
      return {
        sliderIcon: 50,
      }
    }
  }
</script>

<style scoped>
#services {
  width: 100%;
  height: 280px;
  text-align: center;
  padding: 2rem 2rem;
}

.block {
  width: 285px;
}

p {
  font-size: 14px !important;
  line-height: 27px !important;
}

.icon-ml {
  margin-left: 9px;
}

.icon-pad {
  padding-right: 2px;
}

@media only screen and (max-width: 691px) {
  .block {
    padding-left: 0;
    padding-right: 0;
  }

  h3 {
    font-size: 17px;
  }
}

@media only screen and (max-width: 531px) {
  #services {
    height: 835px;
  }

  .block {
    display: block;
    margin-bottom: 20px;
  }
}
</style>