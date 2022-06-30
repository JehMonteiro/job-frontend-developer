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
  <buttom
    ><a id="link-topo" href="#"><img src="img/arrow.png" /></a
  ></buttom>
  <buttom class="btn-whatsapp">
    <a href="https://web.whatsapp.com/send?phone=55119999999" target="_black"
      ><img src="img/whatsapp.png" />
    </a>
  </buttom>
</template>

<script>
export default {
  name: "Footer",
  props: ["logo", "alt"],
};
</script>


<style lang="scss" scoped>
#footer {
  display: flex;
  background-color: var(--color-background-nav);
  justify-content: space-around;
  padding: 0 12vw;
  height: 200px;
  width: 100%;

  img {
    width: 220px;
    margin-top: 20px;
  }
}

.menu {
  color: var(--color-secondary);
  align-content: center;
  margin-left: auto;

  li {
    list-style: none;
    font-size: 15px;
  }
  li:hover {
    color: var(--color-secondary);
    transition-duration: 0.3s;
  }
  p {
    margin: 12px 0px;
    font-size: 18px;
    font-weight: 700;
  }
}

/* Logos redes sociais  */
.redes-sociais {
  margin: auto;

  p {
    color: var(--color-secondary);
    padding-bottom: 8px;
  }
  a img {
    width: 170px;
    margin: 5px 20px !important;
  }
}

.sci {
  bottom: 40px;
  right: 100px;
  display: flex;
  justify-content: space-around;

  li {
    list-style: none;
  }
  li a {
    display: inline-block;
    background: var(--color-primary);
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: 0.02s ease-in-out;
  }
  li a:hover {
    background: var(--color-secondary);
    transform: translateY(-10px);
    transition: 0.8s;
  }
  li a img {
    filter: invert(1);
    transform: scale(0.5);
  }
}

/* Botão voltar ao topo */
#link-topo img {
  padding: 15px;
  right: 15px;
  bottom: 20px;
  position: fixed;
  z-index: 99999;
}

/* Botão whatsapp */
.btn-whatsapp a {
  padding: 15px;
  left: 15px;
  bottom: 12px;
  position: fixed;
  z-index: 99999;
}
</style>