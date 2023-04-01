<template>
  <v-col cols="12" class="mt-16">
    <div>
      <v-row>
        <v-col cols="12" md="6" order="2" order-md="1" class="mt-8 mt-md-0">
          <div class="circle-shape">
            <v-img src="images/plant.png" max-height="400" class="intro-img-position"></v-img>
          </div>
        </v-col>

        <v-col cols="12" md="6" order="1" order-md="2" class="pr-12 pl-12 pl-md-0 mb-16 mb-md-0">
          <h5 class="mt-md-16 text-uppercase">Interior Decor</h5>

          <div style="width: 120px; margin-left: -8px;">
            <v-slider v-model="sliderIcon" color="#d7ccc8"></v-slider>
          </div>

          <h4 class="mt-n4">INDOOR</h4>
          <h4>OUTDOOR</h4>

          <p class="text-grey mt-2">
            Welcome to in<strong>Designs</strong><span class="copyright-sign">&copy;</span>, your ultimate destination for all your interior decor needs!
          </p>

          <br>

          <p class="text-grey">
            Whether you're looking to refresh a single room or revamp your entire home or office space, our team of designers will work hand-in-hand with you to bring your vision to life. With a keen eye for detail and a commitment to quality, we are here to turn your dreams into reality.
          </p>

          <v-btn tile dark color="#d7ccc8" class="mt-4" @click="scroll('portfolio')">
            View Projects
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
    },
    methods: {
      scroll(refName) {
        const element = document.getElementById(refName);
        element.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start", });
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

.intro-img-position {
  bottom: 100px;
  left: 10px;
}

@media only screen and (max-width: 376px) {
  .circle-shape {
    width: 295px;
  }

  .intro-img-position {
  bottom: 102px;
  left: 5px;
}
}
</style>