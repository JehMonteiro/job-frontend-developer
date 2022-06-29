<template>
  <router-view />
  <router-link to="/">Home</router-link>
  <router-link to="/">Sobre</router-link>
  <Header :logo="logo_src" :alt="app_name" />
  <Hero />
  <Produtos />
  <Banner />
  <Newsletter />
  <FormasPagamento />
  <Footer :logo="logo_src" :alt="app_name" />
  <LGPD />
</template>

<script>
import Header from "./components/Header";
import Hero from "./components/Hero";
import Produtos from "./components/Produtos";
import Banner from "./components/Banner";
import Newsletter from "./components/Newsletter";
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
    Newsletter,
    FormasPagamento,
    Footer,
    LGPD,
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap");
:root {
  --color-primary: #773cbc;
  --color-secondary: #ff1a73;
  --color-background: #fff;
  --color-background-nav: #f3f4f6;
  --color-background-home: #fff;
  --color-gray: #4b4848;
  --color-black: #000;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

html,
body {
  background-color: var(--color-background);
}

a,
ul,
li {
  text-decoration: none;
  list-style: none;
  transition: 0.2 opacity;
  
}

a:hover {
  opacity: 0.8;
}
</style>