<template>
  <div class="erro">
    <h1>Página não encontrada</h1>
    <img src="img/error.gif" />
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.erro {
  height: 100%;
  width: 100%;
}
h1 {
  text-align: center;
  font-size: 35px;
  font-weight: 700;
  margin-top: 60px;
  color: var(--color-secondary);
}
img {
  margin-left: 36%;
}
</style>