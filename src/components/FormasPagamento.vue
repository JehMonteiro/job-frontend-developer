<template>
  <div class="pagamento">
    <div>
      <h5>Cartão de crédito em até 12x</h5>
      <img src="img/pagamento.png" alt="Payment-card" />
    </div>
    <div>
      <h5>PIX e transferência bancária</h5>
      <img src="img/pagamento-a-vista.png" alt="Caminhão de entrega" />
    </div>
    <div>
      <h5>Entrega em todo o Brasil</h5>
      <img src="img/entrega.png" alt="Caminhão de entrega" />
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.pagamento {
  display: flex;
  justify-content: space-around;
  background-color: var(--color-dark-purple);
  height: 30vh;
  color: var(--color-font-text);
  font-size: 2.5vh;
  text-align: center;
  align-items: center;
  line-height: 70px;
  text-shadow: 2px 3px rgba(0, 0, 0, 0.507);
}

@media screen and (max-width: 700px) {
.pagamento {
display: block;
height: 450px;
padding-top: 20px;
}
}
@media screen and (max-width: 800px) {
.pagamento {
display: block;
height: 450px;
padding-top: 20px;
}
}
</style>