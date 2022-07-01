<template>
  <div id="main-container">
    <img src="img/banner-oferta.webp" alt="alt" id="banner" />
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style lang="scss" scoped>
#main-container {
  margin: 50px 100px;
  min-height: 250px;
  border: 2px;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  background-size: cover;

  img {
  position: relative;
  height: 65%;
  width: 100%;
  background-size: cover;
}
}

</style>