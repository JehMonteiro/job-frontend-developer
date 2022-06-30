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
    <router-link to="/eletronicos"><li>Eletrônicos</li></router-link>
    <router-link to="/acessorios"><li>Acessórios</li></router-link>
    <router-link to="/masculino"><li>Masculino</li></router-link>
    <router-link to="/feminino"><li>Feminino</li></router-link>
  </nav>
</template>



<script>
export default {
  name: "Header",
  props: ["logo", "alt"],
};
</script>

<style lang="scss" scoped>
/* Header */
#nav {
  background-color: var(--color-background-nav);
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 170px;
  width: 100%;

  img {
    margin-left: 100px;
    height: 130px;
    width: 200px;
  }
  input {
    padding: 10px 200px;
    margin: 10px 150px;
    border-radius: 20px;
    border: 2px solid var(--color-secondary);
    text-align: left;
  }
  input:hover {
    border: 2px solid var(--color-primary);
  }
  .input-pesquisa img {
    width: 60px;
    height: 70px;
    margin-left: -140px;
  }
}

/* Links de navegação */
.link {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: var(--color-secondary);
  border-bottom: 1px solid #783cbc3b;
  padding: 10px 10px;

  li {
    list-style: none;
    font-size: 18px;
    color: var( --color-font-text);
    font-weight: 700;
  }
  li:hover {
    transition-duration: 0.3s;
    transform: scale(1.1);
    background-position: -100px;
  }
  li:active {
    transform: scale(1);
    background-position: 800px;
  }
}

/* Carrinho de compra */
.carrinho {
  display: block;
  align-items: center;
  padding: 20px 40px;
  margin-right: 100px;
  background: var( --color-background-nav);
  box-shadow: 0 8px 32px 0 rgba(100, 33, 163, 0.281);
  border-radius: 10px;

  img {
    height: 40px !important;
    width: 50px !important;
    display: flex !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  p {
    text-align: center;
    color: var(--color-gray);
    padding-top: 10px;
  }
  &:hover {
    transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55),
      background-position 800ms cubic-bezier(0.68, -0.55, 0.265, 1.55),
      box-shadow 500ms linear;
    transform: scale(1.1);
    background-position: -100px;
  }
  &:active {
    transform: scale(1);
    background-position: 800px;
  }
}
</style>



