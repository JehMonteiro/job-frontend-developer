<template>
  <header id="nav">
    <router-link to="/">
      <img :src="logo" :alt="alt" id="logo" />
    </router-link>

    <div class="input-pesquisa">
      <input type="text" placeholder="O que está procurando?" />
      <img src="img/lupa.png" alt="Lupa de pesquisa" />
    </div>

    <div class="carrinho">
      <a href="/Carrinho">
        <img src="img/carrinho-compras.png" alt="Carrinho de compras" />
        <p>
          3 itens<br />
          R$1.000,00
        </p>
      </a>
    </div>
  </header>

  <nav class="link">
    <router-link to="/Eletronicos"><li>Eletrônicos</li></router-link>
    <router-link to="/Acessorios"><li>Acessórios</li></router-link>
    <router-link to="/Masculino"><li>Masculino</li></router-link>
    <router-link to="/Feminino"><li>Feminino</li></router-link>
  </nav>
</template>



<script>
export default {
  name: "Header",
  props: ["logo", "alt"],
};
</script>

<style scoped>

/* Header */
#nav {
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 170px;
  width: 100%;
}

#nav img {
  margin-left: 100px;
  height: 130px;
  width: 200px;
}

/* Input pesquisa */
#nav input {
  padding: 10px 200px;
  margin: 10px 150px;
  border-radius: 20px;
  border: 2px solid #ff1a73;
  text-align: left;
}
#nav input:hover {
  border: 2px solid #773cbc;
}

#nav .input-pesquisa img{
  width: 60px;
  height: 70px;
  margin-left: -140px;
 
}

/* Links de navegação */
.link {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #ff1a73;
  border-bottom: 1px solid #783cbc3b;
  padding: 10px 10px;
}

.link li {
  list-style: none;
  font-size: 18px;
  color: #fff;
  font-weight: 700;
}

.link li:hover {
  transition-duration: 0.3s;
  transform: scale(1.1);
  background-position: -100px;
}

.link li:active {
    transform: scale(1);
    background-position: 800px;
}

/* Carrinho de compra */
#nav .carrinho {
  display: block;
  align-items: center;
  padding: 20px 40px;
  margin-right: 100px;
  background: #eff0f2;
  box-shadow: 0 8px 32px 0 rgba(100, 33, 163, 0.281);
  border-radius: 10px;
}
#nav .carrinho img {
  height: 40px;
  width: 50px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
#nav .carrinho p {
  text-align: center;
  color: #4b4848;
  padding-top: 10px;
}


</style>



