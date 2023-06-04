<template>
  <v-col cols="12" id="about" class="px-0">
    <div class="about-container">
      <v-row>
        <v-col cols="12" sm="4">
          <v-card class="mx-auto" max-width="344">
            <v-img src="images/dining-room.jpg" height="200px" cover></v-img>
            <v-card-title>Modern</v-card-title>
            <v-card-subtitle class="text-uppercase">
              Decoration
            </v-card-subtitle>
            <v-card-text>
              Compliment your home with our beautiful interior decorations and make it a place you love coming back to every day!
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="4">
          <v-card class="mx-auto" max-width="344">
            <v-img src="images/business-office.jpg" height="200px" cover></v-img>
            <v-card-title>Professional</v-card-title>
            <v-card-subtitle class="text-uppercase">
              Business Spaces
            </v-card-subtitle>
            <v-card-text>
              Update your office space into a functional and inspiring environment fit for professionals with ergonomics in mind.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="4">
          <v-card class="mx-auto" max-width="344">
            <v-img src="images/holiday-decorations.jpg" height="200px" cover></v-img>
            <v-card-title>Traditional</v-card-title>
            <v-card-subtitle class="text-uppercase">
              Design Practice
            </v-card-subtitle>
            <v-card-text>
              Transform your areas or apartment into a festive & cozy retreat with our traditional and holiday decor styles.
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
  text-align: center;
  padding: 50px 200px;
  background-color: #f5f5f5;
}

@media only screen and (max-width: 1376px) {
  .about-container {
    padding: 50px;
  }
}

@media only screen and (max-width: 776px) {
  .about-container {
    padding: 50px 30px;
  }
}

@media only screen and (max-width: 635px) {
  .about-container {
    padding: 50px 25px;
  }
}
</style>