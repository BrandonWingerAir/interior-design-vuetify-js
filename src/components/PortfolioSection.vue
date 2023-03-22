<template>
  <v-col cols="12" sm="12">
    <div class="d-flex justify-center mb-6">
      <v-btn color="#d7ccc8" class="mr-2">Homes</v-btn>
      <v-btn class="mr-2" variant="tonal">Offices</v-btn>
      <v-btn class="mr-2" variant="tonal">Patios</v-btn>
      <v-btn variant="tonal">Landscapes</v-btn>
    </div>
  </v-col>

  <v-col cols="12" class="imgHover" id="portfolio">
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
</template>

<script>
  export default {
    setup() {
      return {
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
  }
</script>

<style scoped>
.imgHover {
  padding: 0 200px;
}
</style>