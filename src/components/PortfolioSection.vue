<template>
  <v-col cols="12" sm="12" class="px-4 px-sm-3">
    <div class="d-flex justify-center mb-6 overflow-x-auto mobile-justify">
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

  <v-col cols="12" class="imgHover" id="portfolio">
    <v-row v-if="category == 'homes'" class="fill-height" align="center" justify="center">
      <template v-for="project in projects.homes" :key="project.img">
        <v-col cols="12" md="4">
          <v-hover v-slot="{isHovering, props}">
            <v-card :elevation="isHovering ? 12: 2" :class="{'on-hover': isHovering}" v-bind="props">
              <v-img :src="project.img" height="225px" cover></v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>

    <v-row v-if="category == 'offices'" class="fill-height" align="center" justify="center">
      <template v-for="project in projects.offices" :key="project.img">
        <v-col cols="12" md="4">
          <v-hover v-slot="{isHovering, props}">
            <v-card :elevation="isHovering ? 12: 2" :class="{'on-hover': isHovering}" v-bind="props">
              <v-img :src="project.img" height="225px" cover></v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>

    <v-row v-if="category == 'bedrooms'" class="fill-height" align="center" justify="center">
      <template v-for="project in projects.bedrooms" :key="project.img">
        <v-col cols="12" md="4">
          <v-hover v-slot="{isHovering, props}">
            <v-card :elevation="isHovering ? 12: 2" :class="{'on-hover': isHovering}" v-bind="props">
              <v-img :src="project.img" height="225px" cover></v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>

    <v-row v-if="category == 'kitchens'" class="fill-height" align="center" justify="center">
      <template v-for="project in projects.kitchens" :key="project.img">
        <v-col cols="12" md="4">
          <v-hover v-slot="{isHovering, props}">
            <v-card :elevation="isHovering ? 12: 2" :class="{'on-hover': isHovering}" v-bind="props">
              <v-img :src="project.img" height="225px" cover></v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>

    <v-row v-if="category == 'patios'" class="fill-height" align="center" justify="center">
      <template v-for="project in projects.patios" :key="project.img">
        <v-col cols="12" md="4">
          <v-hover v-slot="{isHovering, props}">
            <v-card :elevation="isHovering ? 12: 2" :class="{'on-hover': isHovering}" v-bind="props">
              <v-img :src="project.img" height="225px" cover></v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-col>

  <v-col cols="12" sm="12">
    <div class="d-flex justify-center mb-6">
      <v-btn color="#efebe9" class="mt-4">More Coming Soon</v-btn>
    </div>
  </v-col>
</template>

<script>
  export default {
    data() {
      return {
        category: "homes"
      }
    },
    setup() {
      return {
        projects: {
          homes: [
            {
              img: "room-1.jpg"
            },
            {
              img: "room-2.jpg"
            },
            {
              img: "room-3.jpg"
            },
            {
              img: "room-4.jpg"
            },
            {
              img: "room-5.jpg"
            },
            {
              img: "room-6.jpg"
            }
          ],
          offices: [
            {
              img: "office-1.jpg"
            },
            {
              img: "office-2.jpg"
            },
            {
              img: "office-3.jpg"
            },
            {
              img: "office-4.jpg"
            },
            {
              img: "office-5.jpg"
            },
            {
              img: "office-6.jpg"
            }
          ],
          bedrooms: [
            {
              img: "bedroom-1.jpg"
            },
            {
              img: "bedroom-2.jpg"
            },
            {
              img: "bedroom-3.jpg"
            },
            {
              img: "bedroom-4.jpg"
            },
            {
              img: "bedroom-5.jpg"
            },
            {
              img: "bedroom-6.jpg"
            }
          ],
          kitchens: [
            {
              img: "kitchen-1.jpg"
            },
            {
              img: "kitchen-2.jpg"
            },
            {
              img: "kitchen-3.jpg"
            },
            {
              img: "kitchen-4.jpg"
            },
            {
              img: "kitchen-5.jpg"
            },
            {
              img: "kitchen-6.jpg"
            }
          ],
          patios: [
            {
              img: "patio-1.jpg"
            },
            {
              img: "patio-2.jpg"
            },
            {
              img: "patio-3.jpg"
            },
            {
              img: "patio-4.jpg"
            },
            {
              img: "patio-5.jpg"
            },
            {
              img: "patio-6.jpg"
            }
          ]
        }
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
}

@media only screen and (max-width: 599px) {
  .imgHover {
    padding: 0 75px;
  }
}

@media only screen and (max-width: 563px) {
  .mobile-justify {
    justify-content: left !important;
  }
}

@media only screen and (max-width: 500px) {
  .imgHover {
    padding: 0 65px;
  }
}

@media only screen and (max-width: 448px) {
  .imgHover {
    padding: 0 50px;
  }
}

@media only screen and (max-width: 353px) {
  .imgHover {
    padding: 0 35px;
  }
}
</style>