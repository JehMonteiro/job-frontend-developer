<template>
<div id="main-container">
        <img src="img/banner-principal.png" alt="alt" id="banner">
    </div>
  <div class="heroBlock">
      <v-carousel>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
  </div>
</template>

<script>
export default {
    name: 'Hero',

    data () {
      return {
        items: [
          {
            src: require("../assets/banner-principal.png"),
          },
          {
            src: require("../assets/banner-secundario.png"),
          },
          {
            src: require("../assets/banner-principal.png"),
          },
          {
            src: require("../assets/banner-secundario.png"),
          },
        ],
      }
    },
}
</script>

<style>
    #main-container img{
        width: 100%;
        height: 65vh;
    }
    .heroBlock {
        position: relative;
    }
    
    @media only screen and (max-width: 599px){
        .v-window{
        height: 220px !important;
        }
    }

    .v-image__image .v-image__image::before{
       content: '';
       background: rgba(0, 0, 0, 0.3);
       position: absolute;
       top: 0;
       bottom: 0;
       left: 0;
       right: 0;
       z-index: 1;
    }
    
    .tittle {
        color: white;
        position: relative;
        z-index: 2;
    }

    
</style>