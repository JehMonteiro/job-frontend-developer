<template>
  <Header :logo="logo_src" :alt="app_name" />
  <Eletronicos />
  <Footer :logo="logo_src" :alt="app_name" />
</template>

<script>
import Header from "./components/Header";
import Eletronicos from "./components/Eletronicos";
import Footer from "./components/Footer";


export default {
  name: "App",

  components: {
    Header,
    Eletronicos,
    Footer
    
  },
  data() {
    return {
      logo_src: "/img/logo.png",
      app_name: "Logo empresa",
    };
  },
};
</script>

<style>
</style>