<template>
  <v-col cols="12" class="px-0">
    <div class="hire-banner">
      <v-row>
        <v-col cols="12" md="8" class="pr-16">
          <h1 class="mt-9">Hire us for your next redesign</h1>
          <p class="text-grey pr-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore aliquid laudantium, atque cumque ad sapiente! Asperiores ullam harum eos illo?
          </p>
        </v-col>

        <v-col cols="12" md="4" class="position-relative">
          <v-btn color="#bcaaa4" class="mt-12 hire-btn" @click="scroll('footer-bottom')">
            Get Started
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-col>

  <v-col cols="12" id="contact" class="px-16">
    <v-row class="pl-lg-16">
      <v-col cols="12" lg="3" class="pl-lg-16 text-center">
        <div class="block">
          <h1>Based In</h1>
          <hr>
          <v-btn icon="fas fa-map-marker-alt" class="mt-8 mb-3 icon-btn-position" variant="outlined"/>
          <br>
          <span class="text-caption">Ontario, Canada</span>
          <br>
          <v-btn icon="fas fa-phone-alt" class="mt-8 mb-3 icon-btn-position" variant="outlined"/>
          <br>
          <span class="text-caption">
            (888) 888-8888
          </span>
          <br>
          <v-btn icon="fas fa-envelope" class="mt-8 mb-3 icon-btn-position" variant="outlined"/>
          <br>
          <span class="text-caption">
            brandon.air.web@gmail.com
          </span>
        </div>
      </v-col>

      <!-- Contact Box -->
      <v-col cols="12" lg="9" class="contact-box">
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
</template>

<script>
  export default {
    methods: {
      scroll(refName) {
        const element = document.getElementById(refName);
        element.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start", });
      }
    }
  }
</script>

<style scoped>
.hire-banner {
  width: 100%;
  height: 200px;
  padding: 0 14%;
  background-color: #e9e9e9;
  margin-top: -24px;
}

.hire-btn {
  position: absolute;
  right: 16px;
}

.icon-btn-position {
  padding-right: 1px;
  padding-bottom: 2px;
}

.contact-box {
  padding-right: 170px;
}

@media only screen and (max-width: 1279px) {
  .contact-box {
    padding-right: 0;
  }
}

@media only screen and (max-width: 1186px) {
  .hire-banner {
    height: 225px;
  }
}

@media only screen and (max-width: 1051px) {
  .hire-banner {
    height: 270px;
  }
}

@media only screen and (max-width: 964px) {
  .hire-banner {
    height: 290px;
  }
}

@media only screen and (max-width: 959px) {
  .hire-banner {
    height: 265px;
  }

  .hire-btn {
    left: 10px;
    margin-top: 0 !important;
  }
}

@media only screen and (max-width: 811px) {
  .hire-banner {
    height: 290px;
  }
}

@media only screen and (max-width: 665px) {
  .hire-banner {
    padding: 0 9%;
  }
}

@media only screen and (max-width: 583px) {
  .hire-banner {
    height: 335px;
  }
}

@media only screen and (max-width: 531px) {
  .hire-banner {
    height: 360px;
  }
}

@media only screen and (max-width: 433px) {
  .hire-banner {
    height: 380px;
  }
}

@media only screen and (max-width: 365px) {
  .hire-banner {
    padding: 0 7%;
  }
}

@media only screen and (max-width: 348px) {
  .hire-banner {
    height: 405px;
  }
}
</style>