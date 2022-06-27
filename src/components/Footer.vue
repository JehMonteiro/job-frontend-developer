<template>
  <footer id="footer">
    <router-link to="/">
      <img :src="logo" :alt="alt" id="logo" />
    </router-link>

    <div class="menu">
      <p>Institucional</p>
      <router-link to="/"><li>Quem somos</li></router-link>
      <router-link to="/"><li>Política de privacidade</li></router-link>
      <router-link to="/"><li>Política de compra</li></router-link>
      <router-link to="/"><li>Política de troca e devolução</li></router-link>
      <router-link to="/"><li>Nossas lojas</li></router-link>
    </div>

    <div class="menu">
      <p>Ajuda</p>
      <router-link to="/"><li>Fale conosco</li></router-link>
      <router-link to="/"><li>Perguntas frequentes</li></router-link>
      <router-link to="/"><li>Trabalhe Conosco</li></router-link>
      <router-link to="/"><li>Nossos parceiros</li></router-link>
      <router-link to="/"><li>Ouvidoria</li></router-link>
    </div>

    <div class="redes-sociais">
      <p>Siga nossas redes sociais</p>
      <ul class="sci">
        <li>
          <a href="#"><img src="img/facebook.png" /></a>
        </li>
        <li>
          <a href="#"><img src="img/twitter.png" /></a>
        </li>
        <li>
          <a href="#"><img src="img/instagram.png" /></a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: ["logo", "alt"],
};
</script>

<style scoped>

#footer {
  display: flex;
  background-color: #f3f4f6;
  justify-content: space-around;
  padding: 0 12vw;
  height: 200px;
  width: 100%;
}
#footer img {
  width: 220px;
  margin-top: 20px;
}
#footer .menu {
  color: #ff1a73;
  align-content: center;
  margin-left: auto;
}
#footer .menu li {
  list-style: none;
  font-size: 15px;
}
#footer .menu li:hover {
  color: #ff1a73;
  transition-duration: 0.3s;
}
#footer p {
  margin: 12px 0px;
  font-size: 18px;
  font-weight: 700;
}

/* Logos redes sociais  */
#footer .redes-sociais {
  margin: auto;
}
#footer .redes-sociais p {
  color: #ff1a73;
  padding-bottom: 8px;
}
#footer .redes-sociais a img {
  width: 170px;
  margin: 5px 20px;
}
.redes-sociais .sci {
  bottom: 40px;
  right: 100px;
  display: flex;
  justify-content: space-around;
}
.sci li {
  list-style: none;
}
.redes-sociais .sci li a {
  display: inline-block;
  background: #773cbc;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: 0.02s ease-in-out;
}
.redes-sociais .sci li a:hover {
  background: #ff1a73;
  transform: translateY(-10px);
  transition: 0.8s;
}
.redes-sociais .sci li a img {
  filter: invert(1);
  transform: scale(0.5);
}
</style>
