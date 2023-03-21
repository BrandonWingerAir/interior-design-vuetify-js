<template>
  <v-footer class="pa-0">
    <v-card elevation="0" rounded="0" width="100%" class="bg-grey text-center">
      <v-card-text>
        <v-btn class="mx-4 icon-bot-pad" icon="fa-brands fa-pinterest" variant="plain" color="white"/>
        <v-btn class="mx-4 icon-bot-pad" icon="fas fa-message" variant="plain" color="white"/>
        <v-btn class="mx-4 icon-bot-pad" icon="fab fa-facebook" variant="plain" color="white"/>
        <v-btn class="mx-4 icon-bot-pad" icon="fa-brands fa-instagram" variant="plain" color="white"/>
      </v-card-text>
      <v-card-text class="text-white">
        <span class="logo-line">
          in<strong>Designs</strong><span class="copyright-sign">&copy;</span>
          - {{ new Date().getFullYear() }}
        </span>
        <hr width="150px" class="mx-auto my-2" color="#e0e0e0">
        <strong>Website by Brandon Winger-Air | All Rights Reserved</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.icon-bot-pad {
  padding-bottom: 2px;
}

.logo-line {
  font-size: 16px;
}

.copyright-sign {
  position: relative;
  font-size: 11px;
  top: -5px;
}

hr {
  border-bottom: 0;
}
</style>