<template>
  <div class="lgpd-consent-popup">
    <p>
      Coletamos dados estatísticos de visitas para melhorar sua experiência de
      navegação e personalizar conteúdo e anúncios. Ao continuar navegando você
      concorda com a nossa
      <a href="public/politica.pdf" target="_blank">política de privacidade</a>.
    </p>

    <button class="lgpd-consent-popup-button" onclick="handleclickconsent">
      CONCORDAR E FECHAR
    </button>
  </div>
</template>


<script>
// Função para aceitar as políticas de LGPD
function handleclickconsent() {
  console.log("chegou");
  let consent_lgpd = document.querySelector(".lgpd-consent-popup");
  localStorage.setItem("lgpd-consent", new Date());
  console.log(consent_lgpd);
  consent_lgpd.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function (e) {
  // Definindo variáveis
  // O componente em HTML
  let consent_lgpd = document.querySelector(".lgpd-consent-popup");
  // O consente no local storage
  let consent = localStorage.getItem("lgpd-consent");

  // Verificando situação do consente
  if (consent) consent_lgpd.style.display = "none";
});
</script>


<style lang="scss" scoped>
.lgpd-consent-popup {
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 99;
  background-color: var(--color-background-nav);
  width: 100%;
  height: 90px;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
  padding-left: 367px;
  padding-right: 367px;
  left: 0;
  bottom: 0;
  font-family: sans-serif;
  color: var(--secondary-color);
  font-size: 16px;
  animation: 1.8s ease lgpd-consent-popup-animation;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  justify-content: space-between;

  a {
    color: var(--color-secondary);
    text-decoration: none;
    font-weight: bold;
  }
  p {
    width: 65%;
    font-weight: 400;
    z-index: 100;
    font-family: sans-serif !important;
    font-size: 16px;
    text-align: left;
  }
}

.lgpd-consent-popup-button {
  margin-left: 5px;
  color: var(--color-font-text);
  background-color: var(--color-secondary);
  cursor: pointer;
  border: none;
  border-radius: 50px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.1em;
  padding: 14px 0 14px 0;
  width: 100%;
  max-width: 300px;
  text-transform: uppercase;
  font-family: sans-serif !important;

  &:hover {
    background: var(--color-background-nav);
    border: 2px solid var(--color-secondary);
    color: var(--color-secondary);
    font-weight: bold !important;
    transition: 0.4s;
  }
}

/*Celular*/
@media (max-width: 767px) {
  .lgpd-consent-popup {
    display: block;
    width: 100%;
    height: 180px;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 12px;
    flex-wrap: wrap;

    p {
      width: 90%;
      font-weight: 400;
      line-height: 1.5;
      padding: 16px 0 11px 0;
      font-size: 12px;
    }
  }

  .lgpd-consent-popup-button {
    font-size: 10px;
    width: 55% !important;
    margin-left: 22%;
    margin-top: 15px;
  }
}

/*Tablet*/
@media (min-width: 768px) and (max-width: 1199px) {
  .lgpd-consent-popup {
    width: 100%;
    height: 200px;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 15px;
    flex-wrap: wrap;

    p {
      width: 100%;
      font-weight: 400;
      padding-left: 5px;
      margin-top: 30px;
    }
  }

  .lgpd-consent-popup-button {
    font-size: 14px;
    padding: 14px 0 14px 0;
    margin: -20px auto 10px auto;
  }
}

/*Notebook*/
@media (min-width: 1200px) and (max-width: 1700px) {
  .lgpd-consent-popup {
    padding-left: 173px;
    padding-right: 173px;
  }
}

@keyframes lgpd-consent-popup-animation {
  from {
    bottom: -100%;
  }

  to {
    bottom: 0;
  }
}
</style>