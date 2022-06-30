<template>
  <Hero />
  <Produtos />
  <Banner />
  <Newsletter />
  <FormasPagamento />
  <LGPD href="../assets/politica.pdf"/>
</template>

<script>
import Hero from "../components/Hero.vue";
import Produtos from "../components/Produtos.vue";
import Banner from "../components/Banner.vue";
import Newsletter from "../components/Newsletter.vue";
import FormasPagamento from "../components/FormasPagamento.vue";
import LGPD from "../components/LGPD";

export default {
  name: "App",

  components: {
    Hero,
    Produtos,
    Banner,
    Newsletter,
    FormasPagamento,
    LGPD,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap");
:root {
  --color-primary: #773cbc;
  --color-secondary: #ff1a73;
  --color-dark-purple:#352B73;
  --color-background: #fff;
  --color-font-text: #fff;
  --color-background-nav: #f3f4f6;
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