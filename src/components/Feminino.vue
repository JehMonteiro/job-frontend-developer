<template>
  <section id="container">
    <h1>FEMININO</h1>
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
  name: "Feminino",
  data() {
    return {
      array_products: [],
    };
  },
  methods: {
    async loadProducts() {
      axios
        .get("https://fakestoreapi.com/products/category/womensclothing")
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
  border: 2px solid rgba(128, 128, 128, 0.349);
  width: 300px;
  height: 400px;
  display: block;
  gap: 1rem;
  border-radius: 20px;
  cursor: pointer;
}
#container ul {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}
#container li{
  padding: 10px;
  box-shadow: 2px 2px rgba(128, 128, 128, 0.363);
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

</style>