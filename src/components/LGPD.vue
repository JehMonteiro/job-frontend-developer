<template>
  <div class="lgpd-consent-popup" v-show="!consented">
    <div class="lgpd-consent-popup-body container">
      <p>
        Coletamos dados estatísticos de visitas para melhorar sua experiência de
        navegação e personalizar conteúdo e anúncios. Ao continuar navegando
        você concorda com a nossa
        <a :href="href" target="_blank">política de privacidade</a>.
      </p>

      <button class="lgpd-consent-popup-button" @click="consent">
        CONCORDAR E FECHAR
      </button>
    </div>
  </div>
</template>


<script>
export default {
  name: "LGPD",
  data: function () {
    return {
      consented: false,
    };
  },

  props: ["href"],

  methods: {
    consent: function () {
      localStorage.setItem("lgpd-consent", new Date());
      this.consented = true;
    },
  },

  mounted: function () {
    let consent = localStorage.getItem("lgpd-consent");
    this.consented = consent ? true : false;
  },
};
</script>


<style lang="scss" scoped>
.lgpd-consent-popup-body {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
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
    line-height: 1.5;
    margin: auto;
    color: #333;
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
    padding-left: 15px;
    padding-right: 15px;
    height: 170px;
    padding-right: 30px;
    max-width: 100%;
    font-size: 12px;
    flex-wrap: wrap;

    p {
      width: 100%;
      font-weight: 400;
      line-height: 1.5;
      padding: 20px 0;
      font-size: 12px;
    }
  }

  .lgpd-consent-popup-button {
    font-size: 10px;
    max-width: 65% !important;
    height: 100%;
    align-content: center;
    align-items: center;
    font-size: 11px !important;
    margin-left: 20% !important;
  }

  .lgpd-consent-popup-body {
    display: block;
  }
}

/*Tablet*/
@media (min-width: 770px) and (max-width: 1199px) {
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
      margin: 20px 15px;
      padding: 5px;
    }
  }
  .lgpd-consent-popup-body {
    display: block;
  }
}
.lgpd-consent-popup-button {
  font-size: 14px;
  padding: 14px 0 14px 0;
  max-width: 300px;
}

/*Notebook*/
@media (min-width: 1200px) and (max-width: 1700px) {
  .lgpd-consent-popup {
    padding-left: 160px;
    padding-right: 160px;
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