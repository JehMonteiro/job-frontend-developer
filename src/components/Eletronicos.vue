<template>
  <div id="container">
    <h1>PRODUTOS EM DESTAQUE</h1>

    <ul>
      <li v-for="product in array_products" :key="product.id">
        <img :src="product.image" alt="">
        {{ product.title }}
        {{ product.price }}
        
      </li>
    </ul>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "Produtos",
  data() {
    return {
      array_products: []
    }
  },
  methods: {
    async loadProducts() {

      axios.get('https://fakestoreapi.com/products/category/eletronics')
      .then( (response) => {
        this.array_products = response.data
        console.log(this.array_products)
      })

      .catch( (erro) => {
        console.log(erro)
      })
    }
  },
  created() {
    this.loadProducts()
  }
}
</script>


<style scoped>
#container {
  height: 150vh;
  width: 80vw;
  border: 2px solid black;
  margin: 20px auto;
  
}
#container h1 {
  color: #4b4848;
  text-align: center;
  padding-top: 15px;
}
#container li{
  text-decoration: none;
}
#container li img{
  width: 150px;
  
}
</style>
