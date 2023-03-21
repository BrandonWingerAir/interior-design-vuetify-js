<template>
  <v-col cols="12" class="px-0">
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

  <v-col cols="12" sm="12" id="contact" class="px-16">
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
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
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