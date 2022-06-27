<template>
  <router-view />
  <Header :logo="logo_src" :alt="app_name" />
  <Hero />
  <Produtos />
  <Banner />
  <FormasPagamento />
  <Footer :logo="logo_src" :alt="app_name" />
  <LGPD />
</template>

<script>
import Header from "./components/Header";
import Hero from "./components/Hero";
import Produtos from "./components/Produtos";
import Banner from "./components/Banner";
import FormasPagamento from "./components/FormasPagamento";
import Footer from "./components/Footer";
import LGPD from "./components/LGPD";

export default {
  name: "App",

  components: {
    Header,
    Hero,
    Produtos,
    Banner,
    FormasPagamento,
    Footer,
    LGPD
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');
  :root {
      --color-primary: #773CBC;
      --color-secondary:#ff1a73;
      --color-background: #FFF;
      --color-background-nav: #F3F4F6;
      --color-background-home: #FFF;
      --color-gray: #4b4848;
      --color-black: #000;
  }
  
  *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
  }
  
  html,
  body{
      background-color: var(--color-background);
  }
  
  a{
      text-decoration: none;
      transition: 0.2 opacity;
  
  }
  
  a:hover{
      opacity: 0.8;
  }
</style>