<template>
<router-view/>
  <Header :logo="logo_src" :alt="app_name"/>
  <Hero />
  <Produtos />
  <Banner />
  <Footer :logo="logo_src" :alt="app_name"/>
</template>

<script>
  import Header from './components/Header';
  import Hero from './components/Hero';
  import Produtos from './components/Produtos';
  import Banner from './components/Banner';
  import Footer from './components/Footer';
  
  export default {
    name: 'App',
    
    components: {
      Header,
      Hero,
      Produtos,
      Banner,
      Footer
      
    },
    data() {
      return{
        logo_src:"/img/logo.png",
        app_name:"Logo empresa"
      }
    }
  }

</script>

<style>
  :root {
      --color-background: #FFF;
      --color-background-nav: #F3F4F6;
      --color-background-home: #FFF;
      --color-text-light: gray;
      --color-text-title: #773CBC;
      --color-text-dark: #000;
  }
  
  *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: sans-serif;
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