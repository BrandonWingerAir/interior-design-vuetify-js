<template>
  <div class="hero">
    <v-row>
      <v-col sm="5" cols="12" class="hero-text">
        <div style="position: relative" class="mt-7 pt-0 mt-sm-16 pt-sm-4">
          <h1 class="text-grey">Interior</h1>
          <h1 class="text-white mt-n2 mb-sm-1">Decoration</h1>
          <span class="text-grey text-uppercase hero-desc">Room Design</span>
          <br>
          <v-btn tile dark color="#8d6e63" class="mt-sm-8 hero-btn" variant="outlined" @click="scroll('contact')">Get A Quote</v-btn>
        </div>
      </v-col>
      <v-col sm="2" cols="12">
        <div class="mb-4 d-none d-sm-block" style="position: absolute; z-index: 9999; bottom: 0; margin-left: auto; margin-right: auto; left: 0; right: 0; text-align: center;">
          <v-icon @click="scroll('services')">fas fa-angle-double-down</v-icon>
        </div>
      </v-col>
      <v-col sm="5" cols="12">
        <div style="position: relative; z-index: 9999;" class="mt-12 hero-img">
          <v-img src="images/chair.png" contain max-height="285"></v-img>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    methods: {
      scroll(refName) {
        const element = document.getElementById(refName);
        element.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start", });
      }
    }
  }
</script>

<style scoped>
.hero {
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  padding-bottom: 55px;
  width: 100%;
  color: white;
}

.hero:before {
  content: "";
  position: absolute;
  top: -1%;
  left: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, 6deg);
}

.hero:after {
  content: "";
  position: absolute;
  top: -1%;
  right: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, -6deg);
}

@media only screen and (max-width: 599px) {
  .hero {
    height: 400px;
  }

  .hero-text {
    text-align: left;
    padding-left: 27px;
  }

  h1 {
    font-size: 24px;
  }

  .hero-desc {
    font-size: 14px;
  }

  .hero-btn {
    margin-top: 10px;
    position: absolute;
  }

  .v-btn--size-default {
    font-size: 12px;
  }

  .hero-img {
    top: -125px;
    right: -100px;
  }
}
</style>