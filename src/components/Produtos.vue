<template>
  <section id="container">
    <h1>PRODUTOS EM DESTAQUE</h1>
    <div class="shopping">
      <ul>
        <li v-for="product in array_products" :key="product.id">
          <img :src="product.image" alt="" />
          {{ product.title }} <br>
          {{ product.price }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Produtos",
  data() {
    return {
      array_products: [],
    };
  },
  methods: {
    async loadProducts() {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          this.array_products = response.data;
          console.log(this.array_products);
        })

        .catch((erro) => {
          console.log(erro);
        });
    },
  },
  created() {
    this.loadProducts();
  },
};
</script>


<style scoped>

#container {
  text-align: center;
  justify-content: center;
  align-items: center; 
  width: 80%;
  margin-left: 10%;
}
#container h1 {
  color: #4b4848;
  text-align: center;
  padding: 30px;
  font-size: 30px;
}
#container ul li {
  box-shadow: 3px 3px rgba(128, 128, 128, 0.096);
  width: 300px;
  height: 400px;
  display: block;
  border-radius: 20px;
  cursor: pointer;
}
#container ul {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}
#container li{
  padding: 10px;
  
}
#container li img {
  width: 110px;
  padding-top: 20px;
  display: block;
 
}
#container img {
  margin: auto;
  padding-bottom: 20px;
}
.shopping li:hover{
  transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55),
    background-position 800ms cubic-bezier(0.68, -0.55, 0.265, 1.55),
    box-shadow 500ms linear;
    
}
.shopping li:hover {
  transform: scale(1.1);
  background-position: -100px;
}
.shopping li:active {
  transform: scale(1);
  background-position: 800px;
}

</style>
