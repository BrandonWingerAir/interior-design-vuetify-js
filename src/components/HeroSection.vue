<template>
  <div class="hero">
    <v-row>
      <v-col cols="5">
        <div style="position: relative" class="mt-16 pt-4">
          <h1 class="text-grey">Interior</h1>
          <h1 class="text-white mt-n2 mb-1">Decoration</h1>
          <span class="text-grey text-uppercase">Room Designs</span>
          <br>
          <v-btn tile dark color="#8d6e63" class="mt-8" variant="outlined">Get A Quote</v-btn>
        </div>
      </v-col>
      <v-col cols="2">
        <div style="position: absolute; z-index: 9999; bottom: 0; margin-left: auto; margin-right: auto; left: 0; right: 0; text-align: center;">
          <v-icon>fas fa-angle-double-down</v-icon>
        </div>
      </v-col>
      <v-col cols="5">
        <div style="position: relative; z-index: 9999;" class="mt-16">
          <v-img src="chair.png" contain max-height="300"></v-img>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.hero {
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
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
</style>