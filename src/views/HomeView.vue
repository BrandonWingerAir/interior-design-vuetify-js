<template>
  <v-app id="home">
    <NavbarSection/>
    <v-container fluid>
      <div class="head">
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

      <v-col cols="12" class="mt-16" id="about">
        <div>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="egg">
                <v-img src="plant.png" max-height="400" class="about-img"></v-img>
              </div>
            </v-col>

            <v-col cols="12" sm="6">
              <h5 class="class">About Us</h5>

              <div style="width: 120px; margin-left: -8px;">
                <v-slider v-model="slider2" color="#d7ccc8"></v-slider>
              </div>

              <h4 class="mt-n4">INDOOR</h4>
              <h4>OUTDOOR</h4>

              <p class="text-grey">
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

      <div class="text-center mt-4">
        <h2>What We Do</h2>

        <div style="width: 120px; margin: 0 auto;">
          <v-slider v-model="slider2" color="#d7ccc8"></v-slider>
        </div>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavbarSection from '../components/NavbarSection.vue';

export default defineComponent({
  name: 'HomeView',
  setup() {
    return {
      slider2: 50
    }
  },

  components: {
    NavbarSection,
  }
});
</script>

<style scoped>
.v-container {
  padding: 16px 0;
}

.head {
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
  color: white;
}

.head:before {
  content: "";
  position: absolute;
  top: -1%;
  left: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, 6deg);
}

.head:after {
  content: "";
  position: absolute;
  top: -1%;
  right: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, -6deg);
}

.egg {
  display: block;
  margin-left: 100px;
  margin: 50px auto;
  width: 356px;
  height: 300px;
  background-color: #efebe9;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}

.about-img {
  bottom: 100px;
  left: 10px;
}
</style>