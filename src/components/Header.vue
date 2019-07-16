<template>
  <base-card dark>
    <v-img
      class="grey lighten-2"
      height="700"
      width="100%"
      src="src/assets/hero.jpeg"
    >
    <v-layout
        fill-height
        align-center
        pa-3
      >
        <v-flex
          xs12
          md7
          offset-md5
        >
          <h1 class="display-3 font-weight-light">
            Family Life Bible Church
          </h1>
          <div class="subheading text-uppercase pl-2 mb-4">
            Finding Beauty, One flight at a time
          </div>
          <v-btn
            color="success"
            round
            dark
          >
            Subscribe
          </v-btn>
        </v-flex>
      </v-layout>

    </v-img>
  </base-card>
</template>


<script>

export default {
    
}
</script>

<style scoped>
        
</style>
