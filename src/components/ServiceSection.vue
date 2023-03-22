<template>
  <div class="text-center mt-4">
    <h2>What We Do</h2>
    <div style="width: 120px; margin: 0 auto;">
      <v-slider v-model="sliderIcon" color="#d7ccc8"></v-slider>
    </div>
  </div>

  <v-col cols="12" id="services">
    <div id="project">
      <v-row>
        <v-col cols="12">
          <div class="block">
            <v-btn icon="fa-solid fa-chair" color="#d7ccc8" class="text-white pb-1 icon-ml"></v-btn>
            <h3 class="ml-3 mt-4">Office Space</h3>
            <p class="text-grey ml-3 mt-4 text-caption">
              Lorem ipsum dolor sit amet 
              <br>
              consectetur, adipisicing 
              <br>
              elit. Modi.
            </p>
          </div>
          
          <div class="block">
            <v-btn icon="fas fa-house" color="#d7ccc8" class="text-white pb-1 pr-1 icon-ml"></v-btn>
            <h3 class="ml-3 mt-4">Home Space</h3>      
            <p class="text-grey ml-3 mt-4 text-caption">
              Lorem ipsum dolor sit amet 
              <br>
              consectetur, adipisicing 
              <br>
              elit. Modi.
            </p>
          </div>

          <div class="block">
            <v-btn icon="fa-solid fa-spa" color="#d7ccc8" class="text-white icon-ml icon-pad"></v-btn>
            <h3 class="ml-3 mt-4">Outdoor Space</h3>
            <p class="text-grey ml-3 mt-4 text-caption">
              Lorem ipsum dolor sit amet 
              <br>
              consectetur, adipisicing 
              <br>
              elit. Modi.
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

.icon-ml {
  margin-left: 9px;
}

.icon-pad {
  padding-right: 2px;
}
</style>