<template>
  <v-col cols="12" class="px-0">
    <div class="hire-banner" max-height="fit-content">
      <v-row>
        <v-col cols="12" md="8" class="pr-16">
          <h1 class="mt-1 mt-lg-9">Hire us for your next redesign</h1>
          <p class="text-grey pr-4">
            Interior decor services in both residential and commercial properties.
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

  <v-col cols="12" id="contact" class="px-10 px-sm-16">
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
            Available soon.
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

        <form ref="form" @submit.prevent="sendEmail">
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
                type="email"
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

          <v-alert
            v-if="formSuccess"
            color="success"
            icon="$success"
            text="Success: Message sent!"
            class="mt-5"
            width="max-content"
          />

          <v-alert
            v-if="formError"
            color="error"
            icon="$error"
            text="Error: Sorry, please try again."
            class="mt-5"
            width="max-content"
          />

          <v-btn type="submit" color="#d7ccc8" class="mt-5 mb-1">Submit</v-btn>
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
      message: '',
      formSuccess: false,
      formError: false,
      errorText: ''
    }
  },
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start", });
    },
    sendEmail() {
      emailjs.sendForm('service_zpa2qg5', 'template_eg5bpmd', this.$refs.form, 'WTyoY36g3JpgNFP0D')
        .then(() => {
          this.formError = false;
          this.formSuccess = true;
          
          this.name = ''
          this.email = ''
          this.message = ''
        }, (error) => {
          this.formSuccess = false;

          if (error.text.indexOf("reCAPTCHA") >= 0) {
            this.errorText = 'Error: Please verify reCAPTCHA'
          } else {
            this.errorText = 'Error: Message not sent, please try again.'
          }
          
          this.formError = true
        });
    }
  }
}
</script>

<style scoped>
.hire-banner {
  width: 100%;
  height: fit-content;
  padding: 0 14% 65px;
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

@media only screen and (max-width: 959px) {
  .hire-btn {
    left: 10px;
    margin-top: 0 !important;
  }
}
</style>