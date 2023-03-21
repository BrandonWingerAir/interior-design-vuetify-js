<template>
  <v-app id="home">
    <NavbarSection/>
    <v-container fluid>
      <!-- Hero Section -->
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

      <!-- Intro Section -->
      <v-col cols="12" class="mt-16">
        <div>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="circle-shape">
                <v-img src="plant.png" max-height="400" class="icon-position"></v-img>
              </div>
            </v-col>

            <v-col cols="12" sm="6" class="pr-12">
              <h5 class="mt-16 text-uppercase">Designs</h5>

              <div style="width: 120px; margin-left: -8px;">
                <v-slider v-model="slider2" color="#d7ccc8"></v-slider>
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

      <!-- Services Section -->
      <div class="text-center mt-4">
        <h2>What We Do</h2>
        <div style="width: 120px; margin: 0 auto;">
          <v-slider v-model="slider2" color="#d7ccc8"></v-slider>
        </div>
      </div>

      <v-col cols="12" class="pad" id="services">
        <div class="section-1" id="project">
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

      <!-- Portfolio Section -->
      <v-col cols="12" sm="12" id="portfolio">
        <div class="d-flex justify-center mb-6">
          <v-btn color="#d7ccc8" class="mr-2">Homes</v-btn>
          <v-btn class="mr-2" variant="tonal">Offices</v-btn>
          <v-btn class="mr-2" variant="tonal">Patios</v-btn>
          <v-btn variant="tonal">Landscapes</v-btn>
        </div>
      </v-col>

      <v-col cols="12" class="imgHover">
        <v-row class="fill-height" align="center" justify="center">
          <template v-for="(item, i) in items" :key="i">
            <v-col cols="12" md="4">
              <v-hover v-slot="{isHovering, props}">
                <v-card :elevation="isHovering ? 12: 2" :class="{'on-hover': isHovering}" v-bind="props">
                  <v-img :src="item.img" height="225px" cover></v-img>
                </v-card>
              </v-hover>
            </v-col>
          </template>
        </v-row>
      </v-col>

      <v-col cols="12" sm="12">
        <div class="d-flex justify-center mb-6">
          <v-btn color="#efebe9" class="mt-4">Visual Concepts</v-btn>
        </div>
      </v-col>

      <!-- About Section -->
      <v-col cols="12" id="about" class="px-0">
        <div class="pre">
          <v-row>
            <v-col cols="12" sm="4">
              <v-card class="mx-auto" max-width="344">
                <v-img src="dining-room.jpg" height="200px" cover></v-img>
                <v-card-title>Modern</v-card-title>
                <v-card-subtitle class="text-uppercase">
                  Decoration
                </v-card-subtitle>
                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, aut pariatur? Aliquid omnis harum eius facilis asperiores?
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12" sm="4">
              <v-card class="mx-auto" max-width="344">
                <v-img src="business-office.jpg" height="200px" cover></v-img>
                <v-card-title>Professional</v-card-title>
                <v-card-subtitle class="text-uppercase">
                  Business Spaces
                </v-card-subtitle>
                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, aut pariatur? Aliquid omnis harum eius facilis asperiores?
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12" sm="4">
              <v-card class="mx-auto" max-width="344">
                <v-img src="holiday-decorations.jpg" height="200px" cover></v-img>
                <v-card-title>Traditional</v-card-title>
                <v-card-subtitle class="text-uppercase">
                  DESIGN PRACTICE
                </v-card-subtitle>
                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, aut pariatur? Aliquid omnis harum eius facilis asperiores?
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <!-- Contact Section -->
      <v-col cols="12" id="contact" class="px-0">
        <div class="hire">
          <v-row>
            <v-col cols="12" sm="8">
              <h1 class="mt-9">Hire us for your next redesign</h1>
              <p class="text-grey">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore aliquid laudantium, atque cumque ad sapiente! Asperiores ullam harum eos illo?
              </p>
            </v-col>

            <v-col cols="12" sm="4">
              <v-btn color="#bcaaa4" class="mt-15">
                Get Started
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <v-col cols="12" sm="12" class="px-16">
        <v-row>
          <v-col cols="12" sm="4">
            <div class="block">
              <h1>Based In</h1>
              <v-btn icon="fas fa-map-marker-alt" class="mt-10 icon-btn-position" variant="outlined"/>
              <br>
              <span class="text-caption">Ontario, Canada</span>
              <br>
              <v-btn icon="fas fa-phone-alt" class="mt-10 icon-btn-position" variant="outlined"/>
              <br>
              <span class="text-caption">
                (888) 888-8888
              </span>
              <br>
              <v-btn icon="fas fa-envelope" class="mt-10 icon-btn-position" variant="outlined"/>
              <br>
              <span class="text-caption">
                brandon.air.web@gmail.com
              </span>
            </div>
          </v-col>

          <!-- Contact Box -->
          <v-col cols="12" sm="8">
            <h1 class="mt-8">Send your message</h1>
            <divider></divider>
            <span class="text-caption">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tenetur a laboriosam debitis repudiandae consequatur. Assumenda, molestiae pariatur eos quibusdam beatae, consequatur eius aliquam sequi eveniet natus quaerat accusamus aspernatur.
            </span>

            <v-row class="mt-10">
              <v-col cols="12" sm="6">
                <v-text-field label="Name" persistent-hint variant="outlined"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Phone Number" persistent-hint variant="outlined"></v-text-field>
              </v-col>
            </v-row>

            <v-textarea label="Message" persistant-hint variant="outlined"></v-textarea>
            <v-btn color="#d7ccc8" class="mt-2">Submit</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-container>

    <FooterSection/>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavbarSection from '../components/NavbarSection.vue';
import FooterSection from '../components/FooterSection.vue';

export default defineComponent({
  name: 'HomeView',
  setup() {
    return {
      slider2: 50,

      items: [
        {
          img: "room-1.jpg",
        },
        {
          img: "room-2.jpg",
        },
        {
          img: "room-3.jpg",
        },
        {
          img: "room-4.jpg",
        },
        {
          img: "room-5.jpg",
        },
        {
          img: "room-6.jpg",
        },
      ],
    }
  },

  components: {
    NavbarSection,
    FooterSection,
  }
});
</script>

<style scoped>
.v-container {
  padding: 16px 0;
}

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

.circle-shape {
  display: block;
  margin-left: 100px;
  margin: 50px auto;
  width: 356px;
  height: 300px;
  background-color: #efebe9;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}

.icon-position {
  bottom: 100px;
  left: 10px;
}

.section-1 {
  width: 100%;
  height: 280px;
  text-align: center;
  padding: 2rem 2rem;
}

.block {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: center;
  margin-right: 8px;
}

.icon-ml {
  margin-left: 9px;
}

.icon-pad {
  padding-right: 2px;
}

.imgHover {
  padding: 0 200px;
}

.pre {
  width: 100%;
  height: 465px;
  text-align: center;
  padding: 50px 200px 0;
  background-color: #f5f5f5;
}

.hire {
  width: 100%;
  height: 200px;
  padding: 0 200px;
  background-color: #e9e9e9;
  margin-top: -24px;
}

.icon-btn-position {
  padding-right: 1px;
  padding-bottom: 2px;
}
</style>