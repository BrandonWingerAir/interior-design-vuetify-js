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

  <v-col cols="12" class="imgHover" id="portfolio">
    <v-row v-if="category == 'homes'" class="fill-height" align="center" justify="center">
      <template v-for="project in projects.homes" :key="project.img">
        <v-col cols="12" md="4">
          <v-hover v-slot="{isHovering, props}">
            <v-card :elevation="isHovering ? 12: 2" :class="{'on-hover': isHovering}" v-bind="props">
              <v-img :src="project.img" height="225px" cover @click="selectedImg = project.img"></v-img>
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
              <v-img :src="project.img" height="225px" cover @click="selectedImg = project.img"></v-img>
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
              <v-img :src="project.img" height="225px" cover @click="selectedImg = project.img"></v-img>
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
              <v-img :src="project.img" height="225px" cover @click="selectedImg = project.img"></v-img>
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
              <v-img :src="project.img" height="225px" cover @click="selectedImg = project.img"></v-img>
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

  <v-overlay v-model="selectedImg" attach="#portfolio" class="d-flex justify-center align-center">
    <v-img :src="selectedImg ? selectedImg : ''" min-width="750px" min-height="750px" max-height="750px" @click="selectedImg = null"></v-img>
  </v-overlay>
</template>

<script>
  export default {
    data() {
      return {
        category: "homes",
        selectedImg: null
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