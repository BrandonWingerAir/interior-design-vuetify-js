<template>
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
import gallery from "./gallery.json";

export default {
  data() {
    return {
      selectedImg: null
    }
  },
  props: {
    category: String
  },
  setup() {
    return {
      projects: gallery
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