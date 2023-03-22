<template>
  <v-col cols="12" class="mt-16">
    <div>
      <v-row>
        <v-col cols="12" sm="6">
          <div class="circle-shape">
            <v-img src="plant.png" max-height="400" class="intro-icon-position"></v-img>
          </div>
        </v-col>

        <v-col cols="12" sm="6" class="pr-12">
          <h5 class="mt-16 text-uppercase">Designs</h5>

          <div style="width: 120px; margin-left: -8px;">
            <v-slider v-model="sliderIcon" color="#d7ccc8"></v-slider>
          </div>

          <h4 class="mt-n4">INDOOR</h4>
          <h4>OUTDOOR</h4>

          <p class="text-grey mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe vitae esse nostrum impedit necessitatibus dolore, magnam ipsam id eos possimus ex nisi. Distinctio ipsam deserunt quas tempore, repudiandae aliquid corrupti.
          </p>

          <br>

          <p class="text-grey">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo dignissimos possimus voluptates, beatae nobis blanditiis repellendus numquam, eum perferendis aliquid dolorum sint voluptatum doloremque fuga, voluptatem fugiat illum tenetur aut.
          </p>

          <v-btn tile dark color="#d7ccc8" class="mt-4">
            Download Brochure
          </v-btn>
        </v-col>
      </v-row>
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
.circle-shape {
  display: block;
  margin-left: 100px;
  margin: 50px auto;
  width: 356px;
  height: 300px;
  background-color: #efebe9;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}

.intro-icon-position {
  bottom: 100px;
  left: 10px;
}
</style>