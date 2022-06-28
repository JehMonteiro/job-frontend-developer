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

<style>
.pagamento {
  display: flex;
  justify-content: space-around;
  background-color: var(--color-primary);
  height: 20vh;
  color: #fff;
  font-size: 2.5vh;
  text-align: center;
  line-height: 70px;
  text-shadow: 2px 3px rgba(0, 0, 0, 0.507);
}
</style>