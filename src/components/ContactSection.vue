<template>
  <v-col cols="12" class="px-0">
    <div class="hire-banner">
      <v-row>
        <v-col cols="12" md="8" class="pr-16">
          <h1 class="mt-9">Hire us for your next redesign</h1>
          <p class="text-grey pr-4">
            Experienced interior decor services, for both residential and commercial properties.
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
          <v-btn icon="fas fa-map-marker-alt" class="mt-8 mb-3 map-icon-pad icon-btn-pad" variant="outlined"/>
          <br>
          <span class="text-caption">Ontario, Canada</span>
          <br>
          <v-btn icon="fas fa-phone-alt" class="mt-8 mb-3 pb-1 icon-btn-pad" variant="outlined"/>
          <br>
          <span class="text-caption">
            Available soon
          </span>
          <br>
          <v-btn icon="fas fa-envelope" class="mt-8 mb-3 pb-1" variant="outlined"/>
          <br>
          <span class="text-caption">
            indesigns.decor@gmail.com
          </span>
        </div>
      </v-col>

      <!-- Contact Box -->
      <v-col cols="12" lg="9" class="contact-box">
        <h1 class="mt-8">Send us a message:</h1>
        <divider></divider>
        <span class="text-caption">
          Let us know your requirements & budget
        </span>

        <form @submit.prevent="sendEmail">
          <v-row class="mt-10">
            <v-col cols="12" sm="6">
              <v-text-field 
                label="Your Name" 
                v-model="name"
                name="name"
                persistent-hint 
                variant="outlined"
                required
                class="mb-n6"
              />
            </v-col>
            
            <v-col cols="12" sm="6">
              <v-text-field 
                label="Email Address" 
                v-model="email"
                name="email"
                persistent-hint 
                variant="outlined"
                required
              />
            </v-col>
          </v-row>
  
          <v-textarea 
            label="Message" 
            v-model="message"
            name="message"
            persistant-hint 
            variant="outlined"
            required
          />

          <div class="g-recaptcha" data-sitekey="6Lc3UEMlAAAAAEBZJGycrbC1_SMvDZ80JAcrsHH7"></div>
          <br/>

          <v-btn type="submit" color="#d7ccc8" class="mt-2">Submit</v-btn>
        </form>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start", });
    },
    sendEmail(e) {
      try {
        emailjs.sendForm('service_zpa2qg5', 'template_eg5bpmd', e.target,
        'WTyoY36g3JpgNFP0D', {
          name: this.name,
          email: this.email,
          message: this.message
        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
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

.icon-btn-pad {
  padding-right: 1px;
  padding-bottom: 2px;
}

.map-icon-pad {
  padding-bottom: 3px;
  padding-left: 2px;
}

.contact-box {
  padding-right: 170px;
}

.text-caption {
  font-size: 13px !important;
}

.contact-box .text-caption {
  font-size: 14px !important;
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