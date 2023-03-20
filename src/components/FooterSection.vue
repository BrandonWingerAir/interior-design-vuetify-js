<template>
  <v-footer class="py-2 px-0">
    <v-card elevation="0" rounded="0" width="100%" class="bg-grey text-center">
      <v-card-text>
        <v-btn class="mx-4 icon-bot-pad" icon="fa-brands fa-pinterest" variant="plain" color="white"/>
        <v-btn class="mx-4 icon-bot-pad" icon="fas fa-message" variant="plain" color="white"/>
        <v-btn class="mx-4 icon-bot-pad" icon="fab fa-facebook" variant="plain" color="white"/>
        <v-btn class="mx-4 icon-bot-pad" icon="fa-brands fa-instagram" variant="plain" color="white"/>
      </v-card-text>
      <v-card-text class="text-white">
        {{ new Date().getFullYear() }}
        - <strong>Website by Brandon Winger-Air | All Rights Reserved</strong>
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
</style>