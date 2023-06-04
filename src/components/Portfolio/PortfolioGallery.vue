<template>
  <v-col cols="12" class="imgHover" id="portfolio">
    <v-row v-for="categoryImages in renderCategory()" :key="categoryImages"  class="fill-height" align="center" justify="center">
      <template v-for="galleryImg in categoryImages" :key="galleryImg">
        <v-col cols="12" md="4">
          <v-hover v-slot="{isHovering, props}">
            <v-card :key="galleryImg" :elevation="isHovering ? 12 : 2" :class="{'on-hover': isHovering}" v-bind="props">
              <v-img :src="galleryImg.img" height="225px" cover @click="selectedImg = galleryImg.img"></v-img>
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
  },
  methods: {
    renderCategory() {
      return Object.assign({}, { [this.category] : this.projects[this.category]});
    }
  }
}
</script>

<style scoped>
:root {
  --img_size_1: 700px !important;
  --img_size_2: 600px !important;
  --img_size_3: 550px !important;
  --img_size_4: 500px !important;
  --img_size_5: 450px !important;
  --img_size_6: 415px !important;
  --img_size_7: 350px !important;
  --img_size_8: 310px !important;
  --img_size_9: 295px !important;
}

.imgHover {
  padding: 0 200px;
}

@media only screen and (max-width: 1149px) {
  .imgHover {
    padding: 0 100px;
  }

  .v-overlay__content .v-img {
    min-width: var(--img_size_1);
    min-height: var(--img_size_1);
    max-height: var(--img_size_1);
  }
}

@media only screen and (max-width: 780px) {
  .v-overlay__content .v-img {
    min-width: var(--img_size_2);
    min-height: var(--img_size_2);
    max-height: var(--img_size_2);
  }
}

@media only screen and (max-width: 680px) {
  .v-overlay__content .v-img {
    min-width: var(--img_size_3);
    min-height: var(--img_size_3);
    max-height: var(--img_size_3);
  }
}

@media only screen and (max-width: 599px) {
  .imgHover {
    padding: 0 75px;
  }

  .v-overlay__content .v-img {
    min-width: var(--img_size_4);
    min-height: var(--img_size_4);
    max-height: var(--img_size_4);
  }
}

@media only screen and (max-width: 563px) {
  .disable-scrollbars::-webkit-scrollbar {
    background: transparent; /* Chrome/Safari/Webkit */
    width: 0px;
  }

  .v-overlay__content .v-img {
    min-width: var(--img_size_5);
    min-height: var(--img_size_5);
    max-height: var(--img_size_5);
  }
}

@media only screen and (max-width: 500px) {
  .imgHover {
    padding: 0 65px;
  }

  .v-overlay__content .v-img {
    min-width: var(--img_size_6);
    min-height: var(--img_size_6);
    max-height: var(--img_size_6);
  }
}

@media only screen and (max-width: 448px) {
  .imgHover {
    padding: 0 50px;
  }

  .v-overlay__content .v-img {
    min-width: var(--img_size_7);
    min-height: var(--img_size_7);
    max-height: var(--img_size_7);
  }
}

@media only screen and (max-width: 394px) {
  .v-overlay__content .v-img {
    min-width: var(--img_size_8);
    min-height: var(--img_size_8);
    max-height: var(--img_size_8);
  }
}

@media only screen and (max-width: 353px) {
  .imgHover {
    padding: 0 35px;
  }

  .v-overlay__content .v-img {
    min-width: var(--img_size_9);
    min-height: var(--img_size_9);
    max-height: var(--img_size_9);
  }
}
</style>