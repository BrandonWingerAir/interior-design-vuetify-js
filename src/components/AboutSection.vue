<template>
  <v-col cols="12" id="about" class="px-0">
    <div class="about-container">
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
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.about-container {
  width: 100%;
  height: 465px;
  text-align: center;
  padding: 50px 200px 0;
  background-color: #f5f5f5;
}
</style>